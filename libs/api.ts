import extensions from "juejin.extensions.json";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import CategoryType from "types/category";

const extensionDirectory = join(process.cwd(), "extensions");

export const getAllExtensionSlugs = () => {
  const files = fs.readdirSync(extensionDirectory, {
    withFileTypes: true,
  });

  const slugs: string[] = [];
  files.forEach((file) => {
    if (
      file.isDirectory() &&
      fs.existsSync(join(extensionDirectory, file.name, "README.md"))
    ) {
      slugs.push(file.name);
    }
  });

  return slugs;
};

export const getAllCategories = () => {
  const categories: CategoryType[] = [];
  Object.entries(extensions).forEach(([category, property]) => {
    const extension = {
      key: category,
      title: property.title,
      items: property.extensions
        .map((slug) =>
          getExtensionBySlug(slug, [
            "slug",
            "title",
            "rawURL",
            "preview",
            "description",
            "version",
          ])
        )
        .filter(Boolean) as CategoryType["items"],
    };

    if (extension.items.length > 0) {
      categories.push(extension);
    }
  });

  return categories;
};

export const getExtensionBySlug = (slug: string, fields: string[]) => {
  try {
    const filePath = join(extensionDirectory, slug, "README.md");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    type Items = {
      [key: string]: string;
    };

    const items: Items = {};
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = slug;
      }
      if (field === "content") {
        items[field] = content;
      }
      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });

    return items;
  } catch (e) {
    return null;
  }
};

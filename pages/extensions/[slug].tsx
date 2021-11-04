import Button from "components/button";
import Layout from "components/layout";
import { getAllExtensionSlugs, getExtensionBySlug } from "libs/api";
import { markdownToHtml } from "libs/markdown";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import ExtensionType from "types/extension";

const Extension: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  content,
  preview,
  title,
  author,
  slug = "",
  rawURL = "",
  version = "",
}) => {
  return (
    <Layout>
      <div
        className="bg-contain bg-center bg-no-repeat w-full h-[33vh] mb-4"
        style={{
          backgroundImage: `url(${preview})`,
        }}
      ></div>

      <header className="border-b mb-10 py-4 text-center space-y-2">
        <h1 className="font-bold text-4xl">{title}</h1>
        <div className="text-gray-500">{author}</div>
        <div>
          <Button slug={slug} url={rawURL} version={version} />
        </div>
      </header>

      <article
        className="prose prose-sm max-w-full text-inherit"
        dangerouslySetInnerHTML={{ __html: content ?? "" }}
      ></article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  Partial<ExtensionType>,
  {
    slug: string;
  }
> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const extension = getExtensionBySlug(slug, [
    "title",
    "rawURL",
    "description",
    "content",
    "preview",
    "author",
    "repo",
    "version",
  ]);
  if (!extension) {
    return {
      notFound: true,
    };
  }

  const { content, ...otherData } = extension;
  return {
    props: {
      slug,
      ...otherData,
      content: await markdownToHtml(content),
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: getAllExtensionSlugs().map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export default Extension;

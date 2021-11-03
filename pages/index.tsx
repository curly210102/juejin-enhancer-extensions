import { getAllCategories } from "libs/api";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import CategoryType from "types/category";
import Layout from "components/layout";
import Button from "components/button";
import Sidebar from "components/sidebar";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  categories,
}) => {
  return (
    <Layout>
      <div className="flex">
        <Sidebar categories={categories} classNames="w-1/4 pr-10 pt-8" />
        <div className="w-3/4 py-8 space-y-4">
          {categories.map(({ key, title, items }) => {
            return (
              <section key={key}>
                <h4 id={title} className="text-gray-500 font-medium mb-4">
                  {title} ➜
                </h4>
                {items.map(
                  ({
                    slug = "",
                    title,
                    description,
                    preview,
                    rawURL = "",
                    version = "",
                  }) => {
                    return (
                      <div key={slug} className="rounded-md bg-white shadow">
                        <a href={`/extensions/${slug}`} className="flex">
                          <div
                            className="w-2/5 bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${preview})`,
                            }}
                          ></div>
                          <div className="px-6 py-4 space-y-3 w-3/5">
                            <h5 className="font-bold">{title}</h5>
                            <div className="text-xs text-gray-500">
                              {description}
                            </div>
                            <div className="text-right">
                              <Button
                                slug={slug}
                                url={rawURL}
                                version={version}
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  }
                )}
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  categories: CategoryType[];
}> = () => {
  return {
    props: {
      categories: getAllCategories(),
    },
  };
};

export default Home;

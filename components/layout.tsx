import Head from "next/head";
import Header from "./header";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="w-full px-8 pb-10">
      <Head>
        <title>掘金小助手 | 扩展市场</title>
        <meta name="description" content="为掘金社区提供第三方功能辅助" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;

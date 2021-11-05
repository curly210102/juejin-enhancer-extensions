import Head from "next/head";
import Header from "./header";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto w-full px-8 min-h-screen flex flex-col">
      <Head>
        <title>掘金小助手 | 扩展市场</title>
        <meta name="description" content="为掘金社区提供第三方功能辅助" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="w-full flex-grow">{children}</main>
      <footer className="pt-4 pb-6 text-center border-t text-gray-300 text-sm">
        <a href="https://juejin.cn/post/7027032269994852389">关于掘金小助手</a>
      </footer>
    </div>
  );
};

export default Layout;

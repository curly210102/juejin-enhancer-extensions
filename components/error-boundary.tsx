import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error: React.ErrorInfo) {
    console.log(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <h1 className=" text-3xl font-bold leading-loose">
            欢迎来到掘金扩展市场
          </h1>
          <p>
            请先前往{" "}
            <a
              href="https://greasyfork.org/zh-CN/scripts/433212-juejin-activities-enhancer"
              className=" text-blue-600"
            >
              Greasy Fork
            </a>{" "}
            获取油猴脚本
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

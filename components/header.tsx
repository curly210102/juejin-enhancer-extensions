import Link from "next/link";

const Header: React.FunctionComponent = ({ children }) => {
  const addLocaleExtension: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const fileList = e.target.files;
    if (!fileList) {
      return;
    }
    const file = fileList[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      window.onAddLocalJuejinExtension(
        file.name,
        event.target?.result as string
      );
    });
    reader.readAsText(file, "utf-8");
  };

  const removeAllLocalExtensions = () => {
    window.onRemoveLocalJuejinExtension();
  };
  return (
    <header className="max-w-4xl mx-auto py-4 flex items-center">
      <Link href="/" passHref>
        <div className="h-8 flex items-center space-x-2 cursor-pointer">
          <div className="font-medium">掘金小助手</div>
          <div className="text-gray-400 text-xs">扩展市场</div>
        </div>
      </Link>
      <div className="ml-auto space-x-1">
        <input
          type="file"
          className="w-0 h-0"
          id="local-extension"
          onChange={addLocaleExtension}
          accept=".js"
        />
        <label
          className="btn text-xs border cursor-pointer"
          htmlFor="local-extension"
        >
          添加本地扩展
        </label>
        <button
          className="btn text-xs border"
          onClick={removeAllLocalExtensions}
        >
          移除本地扩展
        </button>
      </div>
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";

type Props = {
  slug: string;
  url: string;
  version: string;
};
const Button: React.FunctionComponent<Props> = ({ slug, url, version }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(window.checkJuejinExtensionIsAdded?.(slug));
  }, []);

  const addExtension: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const result = await window.onAddJuejinExtension?.(slug, {
      url,
      version,
    });

    if (result === "success") {
      setIsAdded(true);
    }
  };

  const removeExtension: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const result = await window.onRemoveJuejinExtension?.(slug);
    if (result === "success") {
      setIsAdded(false);
    }
  };

  if (isAdded) {
    return (
      <button className="btn btn-red text-xs" onClick={removeExtension}>
        移除
      </button>
    );
  } else {
    return (
      <button className="btn btn-green text-xs" onClick={addExtension}>
        添加
      </button>
    );
  }
};

export default Button;

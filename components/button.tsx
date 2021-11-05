import { useEffect, useState } from "react";

type Props = {
  slug: string;
  url: string;
  version: string;
};
const Button: React.FunctionComponent<Props> = ({ slug, url, version }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const result = window.checkJuejinExtension?.(slug, version) ?? {};
    const { added, update } = result;
    setIsAdded(added);
    setIsUpdate(update);
  }, [slug, version]);

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
      setIsUpdate(false);
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
      <div className="space-x-2">
        {isUpdate ? (
          <button className="btn btn-green text-xs" onClick={addExtension}>
            更新
          </button>
        ) : null}
        <button className="btn btn-red text-xs" onClick={removeExtension}>
          移除
        </button>
      </div>
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

import CategoryType from "types/category";
import cx from "classnames";

type Props = {
  categories: CategoryType[];
  classNames?: string;
};
const Sidebar: React.FunctionComponent<Props> = ({
  categories,
  classNames,
}) => {
  return (
    <div className={cx("sm:hidden md:block", classNames)}>
      <div className="pb-4">
        <label>
          <input
            type="text"
            className="w-full rounded px-4 py-2 truncate bg-black bg-opacity-5 outline-none"
            placeholder="搜索"
          />
        </label>
      </div>
      <nav>
        <div className="pt-1 pb-2 text-xs text-gray-400">分类</div>
        <ul>
          {categories.map(({ key, title }) => {
            return (
              <li
                key={key}
                className=" text-gray-500 hover:bg-black hover:bg-opacity-5 rounded"
              >
                <a className="block px-4 py-2" href={`#${title}`}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

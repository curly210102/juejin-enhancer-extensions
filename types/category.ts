import ExtensionType from "./extension";

type CategoryType = {
  key: string;
  title: string;
  items: Array<Partial<ExtensionType>>;
};

export default CategoryType;

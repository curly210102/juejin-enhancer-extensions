type ExtensionType = {
  slug: string;
  version?: string;
  preview?: string;
  rawURL: string;
  description: string;
  title: string;
  content?: string;
  [key: string]: string | undefined;
};

export default ExtensionType;

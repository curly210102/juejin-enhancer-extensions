declare function onAddLocalJuejinExtension(
  filePath: string,
  code: string
): string;
declare function onRemoveLocalJuejinExtension(): string;
declare function onAddJuejinExtension(
  slug: string,
  { url: string, version: string }
): Promise<string>;
declare function onRemoveJuejinExtension(slug: string): Promise<string>;
declare function checkJuejinExtension(
  slug: string,
  version: string
): {
  added: boolean;
  update: boolean;
};
declare function cleanExtensionDataCaches(): string;

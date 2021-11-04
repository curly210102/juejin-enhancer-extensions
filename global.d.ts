declare function onAddLocalJuejinExtension(
  filePath: string,
  code: string
): void;
declare function onRemoveLocalJuejinExtension(): void;
declare function onAddJuejinExtension(
  slug: string,
  { url: string, version: string }
): Promise<string>;
declare function onRemoveJuejinExtension(slug: string): Promise<string>;
declare function checkJuejinExtensionIsAdded(slug: string): boolean;

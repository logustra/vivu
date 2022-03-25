type ImportMetaEnv = Record<string, string | boolean | undefined>

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

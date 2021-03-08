declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare interface ImportMetaEnv {
  [key: string]: string | boolean | undefined
}
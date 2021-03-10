declare interface ImportMetaEnv {
  [key: string]: string | boolean | undefined
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

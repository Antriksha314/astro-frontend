/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly BASE_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

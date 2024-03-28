declare module 'is-dark-color' {
  interface isDarkColorOptions {
    override: { [hex: string]: boolean };
  }

  export default function isDarkColor(hexColor: string, options?: isDarkColorOptions): boolean;
}

declare module '*.png';

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

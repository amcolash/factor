declare module 'is-dark-color' {
  interface isDarkColorOptions {
    override: { [hex: string]: boolean };
  }

  export default function isDarkColor(hexColor: string, options?: isDarkColorOptions): boolean;
}

declare module '*.jpg';
declare module '*.png';

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __BUILD_TIME__: string;

declare module 'is-dark-color' {
  interface isDarkColorOptions {
    override: { [hex: string]: boolean };
  }

  export default function isDarkColor(hexColor: string, options?: isDarkColorOptions): boolean;
}

declare const __BUILD_TIME__: string;

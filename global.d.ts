// global.d.ts
export {};

declare global {
  interface Window {
    configs?: {
      apiUrl?: string;
      [key: string]: any; // optional: allow other runtime configs
    };
  }
}

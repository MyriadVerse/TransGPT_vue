/// <reference types="vite/client" />

// Declare that vue is a module
// used to solve vscode errors in index.ts
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
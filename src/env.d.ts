/// <reference types="vite/client" />
import { SlateElement } from '@wangeditor/editor'

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


type ImageElement = SlateElement & {
  src: string
  alt: string
  url: string
  href: string
}

declare module 'particles.vue3'
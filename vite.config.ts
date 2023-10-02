/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
    extensions: ['.js', '.json', '.ts'],
  },
  plugins: [
    // https://github.com/vue-macros/vue-macros
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      routesFolder: 'src/pages',
      extensions: ['.vue'],
      dts: './typed-router.d.ts',
      routeBlockLang: 'json5',
      importMode: 'async',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink']
        }
      ],
      dts: true,
      dirs: [
        './src/components',
        './src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],
  
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})

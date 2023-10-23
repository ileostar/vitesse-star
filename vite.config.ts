/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import type { ConfigEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueMacros from 'unplugin-vue-macros/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import VueDevtools from 'vite-plugin-vue-devtools'
import { OnuResolver } from 'onu-ui'
import depazer from '@depazer/vite'

// https://vitejs.dev/config/
export default defineConfig((_mode: ConfigEnv) => {
  const server = {
    port: 3891,
  }

  return {
    server,
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
      extensions: ['.js', '.json', '.ts'],
    },

    plugins: [
      VueDevtools(),
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

      depazer(),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'pinia',
          'vue-router',
          '@vueuse/core',
          {
            alova: [
              'useRequest',
              'useWatcher',
              'useFetcher',
            ],
          },
        ],
        resolvers: [
          // Auto import UI components
          // 自动导入ElementPlus组件
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver(),

          // Auto import Onu UI components
          // 自动导入Onu UI组件
          OnuResolver(),
        ],
        dts: true,
        dirs: [
          './src/components',
          './src/stores',
          './src/composables',
        ],
        vueTemplate: true,
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },

      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),

          // Auto import Onu UI components
          // 自动导入Onu UI组件
          OnuResolver(),
        ],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unocss
      // see uno.config.ts for config
      UnoCSS(),

      Icons({
        autoInstall: true,
      }),
    ],

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
    },
  }
})

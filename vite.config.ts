/// <reference types="vitest" />

import path from 'node:path'
import fs from 'node:fs'
import { defineConfig } from 'vite'
import type { CommonServerOptions, ConfigEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import PiniaAutoRefs from 'pinia-auto-refs'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueMacros from 'unplugin-vue-macros/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import VueDevtools from 'vite-plugin-vue-devtools'
import { OnuResolver } from 'onu-ui'
import depazer from '@depazer/vite'
import ViteRestart from 'vite-plugin-restart'
import type { DotenvParseOutput } from 'dotenv'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv) => {
  const envFileName: string = '.env'
  const curEnvFileName = `${envFileName}.${mode.mode}`

  let server: CommonServerOptions = {}
  const envDate = fs.readFileSync(curEnvFileName)
  const envMap: DotenvParseOutput = dotenv.parse(envDate)

  server = {
    port: Number(envMap.VITE_PORT) || 3891,
    host: envMap.VITE_HOST || 'localhost',
    proxy: {
      [envMap.VITE_BASE_URI || '/api']: {
        target: envMap.VITE_PROXY_DOMAIN || 'localhost',
      },
    },
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

      ViteRestart({
        restart: [
          'vite.config.[jt]s',
        ],
      }),

      VueDevtools(),

      // https://github.com/depazer/depazer
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
          {
            '@/helper/pinia-auto-refs': ['useStore'],
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
          './src/store',
          './src/composables',
        ],
        vueTemplate: true,
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },

      }),

      // https://github.com/Allen-1998/pinia-auto-refs
      PiniaAutoRefs(),

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
        compiler: 'vue3',
        autoInstall: true,
      }),
    ],
    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
    },
  }
})

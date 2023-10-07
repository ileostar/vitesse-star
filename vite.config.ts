/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import type { ConfigEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueMacros from 'unplugin-vue-macros/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig((_mode: ConfigEnv)=>{

  return {
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
          'pinia',
          '@vueuse/core',
          VueRouterAutoImports,
          {
            'vue-router/auto': ['useLink'],
          },
          {
            alova: [     
              'useRequest',
              'useWatcher',
              'useFetcher',
            ],
          },
        ],
        resolvers: [
          ElementPlusResolver(),
  
          // Auto import icon components
          // 自动导入图标组件
          IconsResolver(),
        ],
        dts: true,
        dirs: [
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

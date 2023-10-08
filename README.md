# Vue3+Vite+Alova+TS

![Alt text](D:\Software\Typora\public\image.png)

## 特性

- 🦄使用 Vite 构建工具快速构建项目
- 🥑使用 ESLint、Stylelint 代码规范保证代码质量
- 📦拆箱即用，结合了 Vue3、Vite、Alova 和 TypeScript
- 🕸自动配置路由，使用 unplugin-vue-router 插件自动生成路由
- 🥝自动引入，使用 unplugin-auto-import 插件实现组件自动引入
- ✨集成 UnoCSS，提供轻量级的样式解决方案
- 🍀集成 Vitest，用于项目的单元测试
- 🧰使用 VueUse 函数库辅助开发
- 🙈使用 Alova 实现网络请求
- 🍍使用 Pinia 进行状态管理
- 📌使用 husky、lint-staged 规范git commit

## 学习

### 架构相关

- [Vue.js - The Progressive JavaScript Framework | Vue.js (vuejs.org)](https://vuejs.org/)
- [Vite | Next Generation Frontend Tooling (vitejs.dev)](https://vitejs.dev/)
- [Pinia | The intuitive store for Vue.js (vuejs.org)](https://pinia.vuejs.org/zh/)
- [UnoCSS 中文文档 (alfred-skyblue.github.io)](https://alfred-skyblue.github.io/)
- [[Alova.JS - 轻量级请求策略库 | Alova.JS](https://alova.js.org/zh-CN/)](https://alova.js.org/zh-CN/)

### 规范相关

- [🐶 husky | 🐶 husky (typicode.github.io)](https://typicode.github.io/husky/)
- [lint-staged: 🚫💩 — Run linters on git staged files (github.com)](https://github.com/okonet/lint-staged)
- [检测并修复 JavaScript 代码中的问题。 - ESLint - 插件化的 JavaScript 代码检查工具](https://zh-hans.eslint.org/)
- [Home | Stylelint中文文档 | Stylelint中文网](https://www.stylelint.com.cn/)
- [[Commitizen by commitizen](http://commitizen.github.io/cz-cli/)](https://github.com/commitizen/cz-cli)
- [cz-emoji git commit emoji Message](https://github.com/ngryman/cz-emoji)

### 插件

- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
- [vite-plugin-pages](https://github.com/posva/vite-plugin-pages)

### 工具函数

- [VueUse中文文档 | VueUse中文文档 (vueusejs.com)](http://www.vueusejs.com/)

## 项目介绍

该项目是一个基于 Vue3、Vite 和 TypeScript 的脚手架模板，集成了 Alova 网络请求库和 Pinia 状态管理库。它旨在提供一个快速搭建 Vue3 项目的起点，同时也使用了一些优秀的第三方插件和库，以提高开发效率和项目质量。

## 快速开始

克隆项目到本地：

``` bash
npx degit ileostar/vue-star 你的项目名称
```

进入项目目录：

``` bash
cd 你的项目名称
```

安装依赖：

``` bash
pnpm install	# If there is no pnpm, npm i-g pnpm first
```

启动开发服务器：

``` bash
pnpm dev
```

打开浏览器，访问 http://localhost:5173 即可查看项目运行效果。

## 目录结构

```text
├── github                // 存放github的workfow
├── .husky                // git hook预处理
├── .vscode               // vscode的配置
│   ├── extensions.json   // 插件设置
│   ├── setting.json      // IDE设置
├── public
│   ├── vite.svg          // 网站logo
├── src
│   ├── api               // 接口目录，使用alova接口函数
│   ├── assets            // 静态资源文件夹，如图片、字体等
│   ├── components        // 组件目录
│   ├── composables       // 存放状态逻辑的函数
│   ├── pages             // 视图目录，存放页面级组件
│   ├── store             // Vuex状态管理文件夹
│   ├── styles            // 样式文件夹，存放全局样式和公共样式
│   ├── App.vue           // 根组件
│   └── main.ts           // 项目入口文件
├── test                  // 单元测试
├── .env                  // 配置环境
├── .env.production       // 配置环境
├── .env.development      // 配置环境
├── index.html            // 项目页面入口
├── .eslintrc.json        // ESLint配置文件
├── package.json          // 项目依赖配置文件
├── README.md             // 项目说明文件
├── tsconfig.ts           // ESLint配置文件
├── uno.config.ts         // ESLint配置文件
└── vite.config.ts        // Vite项目配置文件
```

## 代码规范

该项目使用 ESLint 来保证代码规范一致性。你可以在 .eslintrc.json 文件中查看相关配置。在提交代码时，将会自动进行代码规范检查。

## 配置路由

该项目使用  vite-plugin-pages 插件来自动生成路由配置。详细的使用方法请参考插件文档。

## 自动引入

### 自动引入工具函数

该项目使用 unplugin-auto-import 插件来实现组件的自动引入，你可以在 vite.config.ts 中修改自动引入的规则和配置。

### 自动引入组件

该项目使用 vite-plugin-components 插件来实现组件的自动引入，**即定义组件直接使用即可，无需手动引入**，你可以在 vite.config.ts 中修改自动引入的规则和配置。

## 状态管理

该项目使用 Pinia 进行状态管理。你可以在 src/stores 目录下创建自己的状态模块，并在需要的组件中引入并使用它们。

## 运行测试

该项目集成了 Vitest 单元测试工具。你可以在 test 目录下编写和运行测试用例。详细的使用方法请参考 Vitest 文档。

## 贡献

如果你发现任何问题或有改进建议，请随时提交 Issue 或 Pull Request。我们欢迎并感谢你的贡献！

以上是一个简单的示例，你可以根据实际情况添加或修改内容。希望能对你有所帮助！
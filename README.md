# Vue3+Vite+Alova+TS

![Alt text](./public/image.png)

## 特性

- 🦄使用 Vite 构建工具快速构建项目
- 🥑使用 ESLint 代码规范保证代码质量
- 📦拆箱即用，结合了 Vue3、Vite、Alova 和 TypeScript
- 🕸自动配置路由，使用 unplugin-vue-router 插件自动生成路由
- 🥝自动引入，使用 unplugin-auto-import 插件实现组件自动引入
- 🦢集成 UnoCSS，提供轻量级的样式解决方案]
- 🍀集成 Vitest，用于项目的单元测试
- 🙈使用 Alova 实现网络请求
- 🍍使用 Pinia 进行状态管理

## 学习

- [Vue](https://vuejs.org/)
- [Vite](https://vitejs.dev)
- [Pinia](https://pinia.vuejs.org/zh/)
- [UnoCSS](https://alfred-skyblue.github.io/)
- [Alova](https://alova.js.org/zh-CN/)
- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)

## 项目介绍

该项目是一个基于 Vue3、Vite 和 TypeScript 的脚手架模板，集成了 Alova 网络请求库和 Pinia 状态管理库。它旨在提供一个快速搭建 Vue3 项目的起点，同时也使用了一些优秀的第三方插件和库，以提高开发效率和项目质量。

## 快速开始

克隆项目到本地：

``` bash
git clone https://github.com/ileostar/vue3-vite-ts-alova.git
```

进入项目目录：

``` bash
cd vue3-vite-ts-alova
```

安装依赖：

``` bash
pnpm install
```

启动开发服务器：

``` bash

npm run dev
```

打开浏览器，访问 http://localhost:5173 即可查看项目运行效果。

## 代码规范

该项目使用 ESLint 来保证代码规范一致性。你可以在 .eslintrc.js 文件中查看相关配置。在提交代码时，将会自动进行代码规范检查。

## 配置路由

该项目使用 unplugin-vue-router 插件来自动生成路由配置。你可以在 src/router/index.ts 中添加或修改路由配置。详细的使用方法请参考插件文档。

## 自动引入组件

该项目使用 unplugin-auto-import 插件来实现组件的自动引入。你可以在 src/main.ts 中修改自动引入的规则和配置。

## 状态管理

该项目使用 Pinia 进行状态管理。你可以在 src/store 目录下创建自己的状态模块，并在需要的组件中引入并使用它们。

## 运行测试

该项目集成了 Vitest 单元测试工具。你可以在 tests 目录下编写和运行测试用例。详细的使用方法请参考 Vitest 文档。

## 贡献

如果你发现任何问题或有改进建议，请随时提交 Issue 或 Pull Request。我们欢迎并感谢你的贡献！

以上是一个简单的示例，你可以根据实际情况添加或修改内容。希望能对你有所帮助！

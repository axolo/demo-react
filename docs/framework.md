# 架构

## 搭建

基于`Webpack` 4.x搭建开发环境，并配置相关的插件和模块。

```bash
# Webpack运行环境
yarn add -D webpack webpack-cli webpack-dev-server
# 相关模块和插件
yarn add -D babel-loader html-webpack-plugin
yarn add -D style-loader css-loader less-loader less
```

|       文件        |      说明       |
| ----------------- | --------------- |
| package.json      | NPM配置         |
| webpack.config.js | Webpack默认配置 |
| .babelrc          | Babel配置       |
| .eslintrc         | ESLint配置      |
| .editorconfig     | 编辑器配置      |

> Webpack的babel-loader模块options配置可替代`.babelrc`

## 目录

```
|-- dist                  # 编译目标目录
|   |-- main.js           #   入口默认编译输出
|   `-- index.html        #   => HtmlWebpackPlugin.options.filename
|-- public                # 公用文件目录，一般命名为public
|   `-- index.html        #   => HtmlWebpackPlugin.options.template
|-- src                   # 入口默认目录
|   |-- store             #   Redux Store
|   |-- reducers          #   Redux Reducer
|   `-- index.js          #   入口默认文件
|-- package.json          # NPM配置
|-- webpack.config.js     # Webpack默认配置文件
|-- .babelrc              # Babel配置
|-- .eslintrc             # ESLint配置
`-- .editroconfg          # 编辑器配置
```

## ESLint

使用`alloy`的[typescript-react]

[typescript-react]: https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md#typescript-react

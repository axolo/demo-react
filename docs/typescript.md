# TypeScript

将项目迁移到TypeScript，需进行以下安装和配置。

## 支持

```bash
yarn add -D typescript ts-loader
```

```js
module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
}
```

## 配置

配置文件`tsconfig.json`


```json
{
  "compilerOptions": {
    "outDir": "dist",
    "noImplicitAny": true,
    "target": "es5",
    "jsx": "react",
    "typeRoots":[
      "node_modules/@types",
      "./typings"
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": [ "src/*" ]
    }
  },
  "include": [
    "./src/**/*",
    "./typings/**/*"
  ]
}
```

### typeRoots

声明文件根目录，自定义模块声明：`typings/custom.d.ts`。

### paths

路径别名，需配合webpack配置

```js
module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    }
  }
}
```

## 代码检查

### ESLint

```bash
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add eslint-config-alloy eslint-plugin-react
```

```js
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    semi: 2,
    'default-case-last': 0,
    'comma-dangle': ['error', 'only-multiline'],
  },
};
```

### Prettier

配置文件：`.prettierrc.js`

## 样式

### sass

使用`typings-for-css-modules-loader`代替`css-loader`

### less

声明LESS模块

```ts
// typings/custom.d.ts
declare module '*.less'
```

### styled-jsx

除以上配置外，还需要增加`sytled-jsx`声明文件。

```bash
yarn add -D @types/styled-jsx
```

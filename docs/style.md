# 样式

## 约定

| 作用域 |    方案     |          位置          |                    约定                    |
| ------ | ----------- | ---------------------- | ------------------------------------------ |
| 全局   | css-loader  | 应用入口文件同名`.css` | 以`.css`扩展名引入，不启用CSS模块化        |
| 局部   | less-loader | 组件文件同名`.less`    | 以`.less`扩展名引入，启用css-loder的module |
| 内置   | styled-jsx  | 内置`styled-jsx`       | 使用`styled-jsx`                           |

```
`-- src                   # 入口目录
    |-- components        #   组件目录
    |   |-- Hello.jsx     #     组件
    |   `-- Hello.less    #     组件局部样式.less
    |-- App.jsx           #  应用入口
    |-- App.css           #  应用全局样式
    `-- index.js          #  入口文件
```

## 安装

```bash
yarn add -D styled-jsx less-loader less
```

## 配置

### Babel

```json
{
  "plugins": [
    "styled-jsx/babel"
  ]
}
```

### Webpack

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // 全局.css
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.less$/, //局部.less
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]-[local]-[hash:base64:5]',
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
}
```

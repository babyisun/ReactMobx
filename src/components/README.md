**`src/components`**


# 公共组件

本文件夹存放多个页面用到的公共组件，组件名称须与其 `.scss` 样式文件名称一致，以 [PascalCase](https://baike.baidu.com/item/PascalCase) 命名，，共同放置在目录第一层，不放置在子文件夹中。

Good:

```
src
  componenents
    CommonComponenetA.jsx
    CommonComponenetA.scss
    CommonComponenetB.jsx
    CommonComponenetB.scss
```

Bad:

```
src
  componenents
    CommonComponenetA // 不应放置在子文件夹内
      index.jsx
      index.scss
    CommonComponenetB
      index.jsx
      style.scss
    CommonComponenetC
      CommonComponenetC.jsx
      CommonComponenetC.scss
    CommonComponenetD.jsx
    commonComponenetD.scss // 应使用 PascalCase
```

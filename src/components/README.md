**`src/components`**


# 公共组件

本文件夹存放多个页面用到的公共组件，相关公共组件建议存放在一个单独文件夹，与pages文件夹规范一致，组件名称须与其 `.scss` 样式文件名称一致，如需 `store` 可以引入对应文件，以 [PascalCase](https://baike.baidu.com/item/PascalCase) 命名

Good:

```
src
  componenents
    common
     ComponenetA.jsx
     ComponenetA.scss
     store.js
    Modal
     ComponenetB.jsx
     ComponenetB.scss
     store.js
```

Bad:

```
src
  componenents
    ComponenetA.jsx // 不应该全部都堆在根目录
    ComponenetA.scss
    ComponenetAStore.js
    ComponenetB.jsx
    ComponenetB.scss
    ComponenetBStore.js
    
    common
     ComponenetD.jsx
     componenetd.scss // 应使用 PascalCase
```

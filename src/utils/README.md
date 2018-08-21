**`src/utils`**


# 工具函数

本文件夹存放全局公用的工具函数，最好是[纯函数](https://zh.wikipedia.org/wiki/%E7%BA%AF%E5%87%BD%E6%95%B0)，函数文件以 [camelCase](https://baike.baidu.com/item/camelCase) 命名。

Good:

```
src
  utils
    fnA.js
    fnB.js
```

Bad:

```
src
  utils
    FnA.js // 应使用 camelCase
    helloword.js // 应使用 camelCase
    fnB.jsx // 应使用 `.js` 文件
```

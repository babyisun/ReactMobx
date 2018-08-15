**`src/pages`**


# 页面文件

本文件夹存放与路由配置对应的页面文件，页面文件夹以 [PascalCase](https://baike.baidu.com/item/PascalCase) 命名，文件夹中的组件与其 `.scss` 样式文件名称一致，同样以 PascalCase 命名，放置在文件夹第一层。

页面自有的组件文件夹命名为 `components`（复数，小写），`model.js` 为页面 Redux
 文件（小写）。
 
页面用到的图片等资源文件（`assets`）、工具函数（`utils`）等，均放置在页面文件夹中，不在 `src` 下建公共目录。

总之，这是一种去中心化、扁平化的目录结构思想，每个页面需要的所有文件，均放置在自己的文件夹中。

Good:

```
src
  pages
    PageA
      assets
      components
        ComponentA.jsx
        ComponentA.scss
        ComponentB.jsx
        ComponentB.scss
      utils
      ListPage.jsx
      ListPage.scss
      ItemPage.jsx
      ItemPage.scss
    PageB
      ListPage.jsx
      ListPage.scss
      ItemPage.jsx
      ItemPage.scss
```

Bad:

```
src
  pages
    PageA
      Assets
      Components // 首字母小写
      component // 应为复数
      Utils
      util
      ListPage // 不应放置在子文件夹内
        index.jsx
        index.scss
      ItemPage
        index.jsx
        style.scss
      listPage.jsx
      itemPage.jsx // 应使用 PascalCase
```
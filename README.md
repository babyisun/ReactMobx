# saas-agent

> ReactMobx最佳实践


## 开发构建

安装项目的全部依赖
### `npm install` or `yarn`

开发模式，运行项目
### `npm start` or `yarn start`

带有mock数据的开发模式，运行项目
### `npm run start:mock` or `yarn start:mock`

生产模式，构建项目
### `npm run build` or `yarn build`




## Git 脚本

说明：每个人新建自己的分支

`git clone -b dev http://gitlab.sftcwl.com/fe/saas-agent.git`

`git checkout -b ${yourname}`

`git push --set-upstream origin ${yourname}`

默认将更新合并到 dev 分支，其他人从 dev 分支拉取更新。

使用：将下面的代码保存为 `git.sh` 文件，将变量 `ME` 的值改为自己的分支名，每次在自己的分支下提交 commit 后，`sh git.sh` 运行脚本，即可实现与 dev 分支的自动更新合并同步。（如有冲突，自行解决冲突后，再次运行脚本即可。）


### 备注：

1.如需同步 master 分支，将 `MAIN` 变量的值改为 `master` 并运行脚本即可。

2.如果不能运行.sh文件，请在当前目录运行 `chmod +x *`

3.从远程分支拉取到自己的分支`git pull origin dev:${yourname}`


```bash
#!/bin/sh

if [ $? -ne 0 ]; then
exit 1
fi

MAIN="dev"
# 将变量 ME 的值改为自己的分支名
ME="branch_name"

git push
git pull
git merge origin/${MAIN}
git push

git checkout ${MAIN}
git pull
git merge ${ME}
git push

git checkout ${ME}
```

## 打包

`sh zip.sh` 运行 `zip.sh` 脚本，即可生成构建好的文件的压缩包。


## 目录结构

```
├── README.md
├── build  --项目编译后的目录
├── config --webpack等配置文件目录
├── package-lock.json
├── package.json
├── public   --html模板目录
├── scripts  --npm脚本目录
├── src
│   ├── index.scss  --公共样式文件
│   ├── App.js  --主业务入口
│   ├── components  --组件文件夹
│   ├── index.js  --SPA生成入口
│   ├── pages
│   │   ├── Page1.jsx  --页面文件
│   │   ├── Page1.scss --页面文件样式表
│   ├── assets  --图片图标等资源文件目录
│   ├── stores  --store文件集合
│   │   ├── MyStore.js
│   │   ├── YourStore.js
│   │   └── index.js
│   └── utils  --工具类
├── theme.js  --antd的主题文件
├── yarn-error.log
└── yarn.lock
```


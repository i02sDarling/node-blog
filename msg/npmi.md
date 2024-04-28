### npm支持react
>注意 npm 有-g 和本项目的概念 没有webpack中的 devlopment和production的概念

```cpp
/*
*/
npm i react react-dom
npm i webpack webpack-cli --save-dev
npm i @babel/register @babel/preset-react @babel/core babel-loader --save-dev

npm script "build": "webpack --config ./browser/webpack.config.js"
```


### npm 选项
下面是一个Markdown表格，总结了不同npm install选项的含义和作用：

| 命令                            | 描述                                                                                     |
|-------------------------------|----------------------------------------------------------------------------------------|
| `npm install module`          | 将某个module安装到本地项目的`node_modules`文件夹，但不会将安装包信息添加到`package.json`文件 |
| `npm install module --save`   | 将某个module安装到本地项目的`node_modules`文件夹，并将相关模块依赖添加到`package.json`文件的`dependencies`中  |
| `npm install module --save-dev` | 将某个module安装到本地项目的`node_modules`文件夹，并将相关模块依赖添加到`package.json`文件的`devDependencies`中 |

### 说明：  
- **dependencies**：这些包是应用程序在生产环境中所需的，它们包括运行应用程序所必须的模块和库。
- **devDependencies**：这些包只在开发和测试过程中需要，例如测试框架、构建工具等，不会随着应用程序一起部署到生产环境中。

<!-- <li class=nav-item><a class=nav-link href=/note />笔记甄选</a></li>
<li class=nav-item><a class=nav-link href=/core />精选</a></li>
<li class=nav-item><a class=nav-link href=/hot />热门</a></li> -->
### Git提交格式化

- feat - 新功能 feature
- fix - 修复 bug
- docs - 文档注释
- style - 代码格式(不影响代码运行的变动)
- refactor - 重构、优化(既不增加新功能，也不是修复bug)
- perf - 性能优化
- test - 增加测试
- chore - 构建过程或辅助工具的变动
- revert - 回退
- build - 打包


<p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);">Edit by</span><em style="color: rgba(91, 255, 247, 0.65);">@02sDarling</em></p><p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);"><em>2024-04-28-17:05:40(星期日)</em></span></p>
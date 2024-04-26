day 3
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
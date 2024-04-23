下面是一个Markdown表格，总结了不同npm install选项的含义和作用：

| 命令                            | 描述                                                                                     |
|-------------------------------|----------------------------------------------------------------------------------------|
| `npm install module`          | 将某个module安装到本地项目的`node_modules`文件夹，但不会将安装包信息添加到`package.json`文件 |
| `npm install module --save`   | 将某个module安装到本地项目的`node_modules`文件夹，并将相关模块依赖添加到`package.json`文件的`dependencies`中  |
| `npm install module --save-dev` | 将某个module安装到本地项目的`node_modules`文件夹，并将相关模块依赖添加到`package.json`文件的`devDependencies`中 |

### 说明：  
- **dependencies**：这些包是应用程序在生产环境中所需的，它们包括运行应用程序所必须的模块和库。
- **devDependencies**：这些包只在开发和测试过程中需要，例如测试框架、构建工具等，不会随着应用程序一起部署到生产环境中。

## 主线分支已更改

由于本项目初期在[StackBlitz](https://stackblitz.com/)开发，
由于Node版本不一致导致的错误,故将项目移交到[localdevlopment](https://github.com/jiuyue1368458/node-blog/tree/localdevlopment)分支开发



### 项目已更新

[Node-blog](http://116.62.176.221:3000/)

[Node-blog-admin](http://116.62.176.221:3000/admin)

请看网站首页的入站必看

### 项目描述

技术栈：Webpack+Nodejs+Koa+Protobuf+Easysock+React+Bootstrap+Docker+Nginx

技术侧重点：包含文章，每日一句，简历，思维导图等功能，伪后台使用RPC(EasySock)基于定制化协议(ProtoBuf)进行通信，管理员页面(登录功能)，基于LocalStorage与SessionId的身份验证，页面通过React进行重渲染，网页通过Nodejs子进程优化首屏渲染时间，通过进程守护(cluster)与心跳保证项目运行健壮性。图片采用Base64方式减少请求次数，项目打包通过Webpack定制需求减少打包时间。
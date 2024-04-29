

### Hr您好


从4月20日开始 到现在为止 整个项目已经可以有了几个页面或者功能了，所以也需要做个了结了。截至目前，还有管理员页面的个人账户，消息，文章管理，没有做，剩余的时间也有些不够了。

因为本项目的主要目的还是着重于Nodejs，所以前端页面并没有使用类似Vue和React等主流框架进行开发，只是通过模板引擎换了文字拿来用的。

 

---
### Admin页面

Admin页面的账户是**Admin** 密码是**123**

F12查看LocalStorage 是每次登录保存的SessionId和User相关信息 保留登录状态,每次只需要登录到`/vertifyed`( _单词错了_/_\  ) 会将sessionId发送到Bff层进行比较  安全基本保障有SeessionToken垫底



---
### 优化问题

- 请求速度：cluster创建woker时 数量为CPU核数的一半，保证了速度可以根据环境提高。静态文件可以通过CDN

- 健壮性 ：cluster可以提供子进程来分发请求 此外还能保证错误进程退出 后可以重启 

- 代码可读性：并没有额外处理杂乱的注释 用于体现做这个功能的思路(包括一些即时的测试)

- 体积问题 ：保留了一些开发过程中的中间文件，考虑到主要是一些文本文件，体积并不会很大。

- 代码维护性：Eslint主要用于多人项目，项目中也尽量的






---
### 空间

- [Github](https://github.com/jiuyue1368458)

- [Gitee](https://gitee.com/yuan-02sDarling)

- [Acgit](https://git.acwing.com/Gy-Sherlock)

- [Acwing](https://www.acwing.com/user/myspace/index/168875/)

---
### 本项目用到的工具或者网站

当您读到这条消息，我觉得还是不能只是花费时间的，我希望可能会有些东西能够分享出去。这里是一些网站

0. [MyKeyMap](https://github.com/xianyukang/MyKeymap),仍然是笔者的主流开发辅助软件

1. [CodePen](https://codepen.io/trending),特效或者是模板以及应用
>只需要将所有CDN引入到Html的头部，将您自己的Js引入到Html或者在Window挂载成功之后执行您的脚本

2. [FreeFronted](https://freefrontend.com/bootstrap-code-examples/),特效或者是模板以及应用

3. [PdfToHtml](https://tools.pdf24.org/zh/pdf-to-html#s=1713874755643)

4. [阮一峰的网络日志](https://www.ruanyifeng.com/blog/)

5. [网道](https://wangdoc.com/)

6. [StackBlitz](https://stackblitz.com/)

7. [AlibabaIconFont](https://www.iconfont.cn/)

8. [Figma](https://www.figma.com/),原型与Svg



<p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);">Edit by</span><em style="color: rgba(91, 255, 247, 0.65);">@02sDarling</em></p><p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);"><em>2024-04-29-20：24：48（星期一）</em></span></p>
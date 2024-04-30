

### Hr您好


&nbsp;&nbsp;&nbsp;&nbsp;从4月20日开始 到现在为止 整个项目已经可以有了几个页面或者功能了，所以也需要做个了结了。截至目前，还有管理员页面的个人账户，消息，文章管理，等没有做，主要实现的登录即可以作为样例了。

-  _以下是对本网站的一些补充_ 

 

---
### Admin页面

>Admin页面的账户是**Admin** 密码是**123**

F12查看LocalStorage,是每次登录保存的SessionId和User相关信息。保留登录状态,每次只需要登录到`/vertifyed` 会将sessionId发送到Bff层进行比较  安全基本保障有SeessionToken。




---------

### 数据问题

mockData的来源主要是根据Markdown笔记由`GetMockData.py`生成的，你可以在这里文章列表( _PyApplication_ )找到本项目涉及的所有Py脚本，mockData.js可以在`front-data/mockData.js找到`,设计原则上本站并不提供多用户，所以笔记是固定的并不支持修改。

如果你拉取本地进行使用:
>将Py脚本复制本地之后 填入md文件所在地址 将生成的Data.js复制到front-data中的originData.js 使用node covertMdToHtml即可

---
### 优化问题

- **请求速度：**
    >cluster创建woker时 数量为CPU核数的一半，保证了速度可以根据环境提高。静态文件可以通过CDN提高范文速度。
    
    >项目运行后第一次请求网页之后会在HomePage中缓存下来，之后返回首页就不再生成了(根目录)

- **健壮性** ：cluster可以提供子进程来分发请求 此外还能保证错误进程退出 后可以重启 

- **代码可读性**：并没有额外处理注释 用于体现做这个功能的思路(包括一些即时的测试)

- **体积问题** ：保留了一些开发过程中的中间文件，考虑到主要是一些文本文件，体积并不会很大。

- **代码维护性**：Eslint主要用于多人项目，项目中也尽量的使用驼峰或者可读性函数名称

---

### 本项目的地址

[https://github.com/jiuyue1368458/node-blog](https://github.com/jiuyue1368458/node-blog)





---

### 本项目用到的工具或者网站

当您读到这条消息，我觉得还是不能只是花费时间的，我希望可能会有些东西能够分享出去。这里是一些网站

0. [MyKeyMap](https://github.com/xianyukang/MyKeymap),仍然是笔者的主流开发辅助软件

1. [CodePen](https://codepen.io/trending),特效或者是模板以及应用
>只需要将所有CDN引入到Html的头部，将您自己的Js引入到Html或者在Window挂载成功之后执行您的脚本

2. [FreeFronted](https://freefrontend.com/bootstrap-code-examples/)
>特效或者是模板以及应用

3. [PdfToHtml](https://tools.pdf24.org/zh/pdf-to-html#s=1713874755643)

4. [阮一峰的网络日志](https://www.ruanyifeng.com/blog/)

5. [网道](https://wangdoc.com/)

6. [StackBlitz](https://stackblitz.com/)

7. [AlibabaIconFont](https://www.iconfont.cn/)

8. [Figma](https://www.figma.com/)
>原型与Svg

9. [QuickRef](https://quickref.cn/index.html)

### 空间

- [Github](https://github.com/jiuyue1368458)

- [Gitee](https://gitee.com/yuan-02sDarling)

- [Acgit](https://git.acwing.com/Gy-Sherlock)

- [Acwing](https://www.acwing.com/user/myspace/index/168875/)

---
### 结尾

人海浮沉你我皆是沙砾，此刻相逢知己便以足以。祝安。


<p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);">Edit by</span><em style="color: rgba(91, 255, 247, 0.65);">@02sDarling</em></p><p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);"><em>2024-04-29-20：24：48（星期一）</em></span></p>
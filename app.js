const path = require('path');
const fs = require('fs');
const koa = require('koa');
const mount = require('koa-mount');
const serveStatic = require('koa-static');
const staticPath='./template/static'
const template = require('./template/template.js')(path.join(__dirname + '/template/template.html'))
const app = new koa();
console.log(path.join(__dirname, staticPath))
app.use(
    serveStatic(path.join(__dirname, staticPath))
);

app.use(
    mount('/resume',serveStatic(path.join(__dirname, staticPath,'resume.pdf')))
);

app.use(async (ctx, next) => {
    if (ctx.url === '/resume') {
        ctx.type = 'application/pdf';
        ctx.body = fs.readFileSync(path.join(__dirname, staticPath,'resume.pdf'));
    } else {
        await next();
    }
});

app.use(

    mount('/', async (ctx) => {
        ctx.status = 200;
        const filePath = path.join(__dirname, 'template','template.html');
        ctx.body = template({
            Title1:"hh",
            Data1:'2023-1-2',
            TagF:'Note',
            URL1:'https://nodeblog-d2hk--3000--7dbe22a9.local-corp.webcontainer.io/article?page=1&id=1',
            
            Title2:'hh2',
            Data2:'2023-1-2',
            Tag2:'Note',
            URL1:'https://nodeblog-d2hk--3000--7dbe22a9.local-corp.webcontainer.io/article?page=1&id=2',

            

        })
        
    })
);

//fetch(`./data?sort=${this.state.sortType}&filt=${filtType}`)
app.listen(3000);
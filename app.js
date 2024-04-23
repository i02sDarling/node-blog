const path = require('path');
const fs = require('fs');
const koa = require('koa');
const mount = require('koa-mount');
const serveStatic = require('koa-static');
const staticPath='./template/static'
const app = new koa();
const getPage=require('./data/getPage.js')
const template=require('./template/template.js')(path.join('./template/template.html'))

app.use(
    serveStatic(path.join(__dirname, staticPath))
);

app.use(
    mount('/resume',serveStatic(path.join(__dirname, staticPath,'resume.pdf')))
);
app.use(
    mount('/svg',serveStatic(path.join(__dirname, staticPath,'nodejs.html')))
);

app.use(async (ctx, next) => {
    if (ctx.url === '/resume') {
        ctx.type = 'application/pdf';
        ctx.body = fs.readFileSync(path.join(__dirname, staticPath,'resume.pdf'));
    } else if(ctx.url==='/svg'){
        ctx.body=fs.readFileSync(path.join(__dirname,staticPath,'nodejs.html'),'utf-8')
    }
    else{
        await next();
    }
});
reqCache=[]
app.use(

    mount('/', async (ctx) => {
        ctx.status = 200;
        const templateParams = {};
        getPage(1,13).forEach((data, index) => {
            const num = index + 1;
            templateParams[`Title${num}`] = data.title;
            templateParams[`Date${num}`] = data.date;
            templateParams[`Tag${num}`] = 'note';
            templateParams[`URL${num}`] = null;
        });

        
        ctx.body =template(templateParams)
        
    })
);

//fetch(`./data?sort=${this.state.sortType}&filt=${filtType}`)
app.listen(3000);
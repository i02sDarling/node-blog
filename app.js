const path = require('path');
const fs = require('fs');
const koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();

app.use(
    static(path.join(__dirname, '/source/'))
);

app.use(
    mount('/resume',static(path.join(__dirname, 'msg')))
);

app.use(async (ctx, next) => {
    if (ctx.url === '/resume') {
        ctx.type = 'application/pdf';
        ctx.body = fs.readFileSync(path.join(__dirname, 'msg/resume.pdf'));
    } else {
        await next();
    }
});

app.use(
    mount('/', async (ctx) => {
        ctx.status = 200;
        const filePath = path.join(__dirname, 'msg/template.html');
        ctx.body = fs.readFileSync(filePath, 'utf-8');
        
    })
);


app.listen(3000);
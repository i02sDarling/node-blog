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
    mount('/', async (ctx) => {
        const filePath = path.join(__dirname, '/source/ctTitle.svg');

        // 使用异步读取文件
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                ctx.status = 500;
                ctx.body = 'Error reading file.';
            } else {
                ctx.type = 'image/svg+xml'; // 设置响应类型为 SVG
                ctx.body = data;
            }
        });
    })
);
app.listen(3000);
const path = require('path');
const fs = require('fs');
const koa = require('koa');
const mount = require('koa-mount');
const serveStatic = require('koa-static');
const staticPath = './template/static'
const app = new koa();
const getPage = require('./front-data/getPage.js')
const getArticle = require('./front-data/getArticleMsg.js')
const Template = require('./template/template.js')
const articleTemplate = require('./template/template.js')(path.join(staticPath, 'article.html'))
const HomePage = require('./template/Home.js');
const getData = require('./request/get-data.js')
const bodyParser = require('koa-bodyparser');

// const convert=require('./data/converMdToHtml.js')

// await getData(+(ctx.query.sort || 0), +(ctx.query.filt || 0));

app.use(bodyParser());

const header = fs.readFileSync(path.join(staticPath, '/header.txt'), 'utf-8');

app.use(
    serveStatic(path.join(__dirname, staticPath))
);

app.use(
    mount('/resume', serveStatic(path.join(__dirname, staticPath, 'Resume-index.html')))
);
app.use(
    mount('/svg', serveStatic(path.join(__dirname, staticPath, 'Svg-nodejs.html')))
);
app.use(
    mount('/day', serveStatic(path.join(__dirname, staticPath, 'Day-index.html')))
);
app.use(
    mount('/404', serveStatic(path.join(__dirname, staticPath, '404-index.html')))
);
// app.use(
//     mount('/day',serveStatic(path.join(__dirname, staticPath,'article2')))
// );

app.use(async (ctx, next) => {
    if (ctx.url === '/resume') {
        // ctx.body = fs.readFileSync(path.join(__dirname, staticPath,'resume.pdf'));
        ctx.body = fs.readFileSync(path.join(__dirname, staticPath, 'Resume-index.html'), 'utf-8');
    } else if (ctx.url === '/svg') {
        ctx.body = fs.readFileSync(path.join(__dirname, staticPath, 'Svg-nodejs.html'), 'utf-8')
    }
    else if (ctx.url === '/day') {
        ctx.body = fs.readFileSync(path.join(__dirname, staticPath, 'Day-index.html'), 'utf-8')
    }
    else if (ctx.url === '/404') {
        ctx.body = fs.readFileSync(path.join(__dirname, staticPath, '404-index.html'), 'utf-8')
    }
    else {
        await next();
    }
});

app.use(
    mount('/article', async (ctx, next) => {
        req = +(ctx.query.articleId || 0)
        if (req === 0) {
            next();
        }
        else {
            article = getArticle(req);
            component_header = header;
            ctx.body = Template(path.join(staticPath, 'article.html'))({ article, component_header });
        }

    })
)


app.use(
    mount('/admin', async (ctx, next) => {
        //admin Post

        if (ctx.method === 'POST') {
            if (ctx.request.body) {
                const { username, password } = ctx.request.body;
                let res = await getData(username, password);
                ctx.body = res;
            }
        } else {
            ctx.body = fs.readFileSync(path.join(__dirname, staticPath, 'admin.html'), 'utf-8');
        }
    })
)

app.use(
    mount('/vertifyed', async (ctx, next) => {
        if (ctx.method === 'POST') {
            if (ctx.request.body) {
                const { sessionId } = ctx.request.body;
                let msg = sessionId;
                ctx.body = { msg };
            }

        } else {
            let root_app = 'hh';
            let tems = {};
            // tems.rootApp='hh';
            // tems[`rootApp`]='hh';
            // console.log(tems);
            // ctx.body = Template(path.join(staticPath,'dashboard.html'))(tems);
            ctx.body = fs.readFileSync(path.join(__dirname, staticPath, 'dashboard.html'), 'utf-8');
        }
        // admin Post

        // {
        //     Title1: '经验总结',
        //     Date1: '2024-04-01',
        //     Tag1: 'note',}


    })
)



app.use(

    mount('/', async (ctx) => {
        ctx.status = 200;
        pageNum = ctx.query.page ? ctx.query.page : 0;
        if (pageNum === 0) {
            ctx.body = HomePage();

        } else {
            const templateParams = {};
            pageInfo = getPage(pageNum);
            pageInfo.pages.map((data, index) => {

                const num = index + 1;
                templateParams[`Title${num}`] = data.title;
                templateParams[`Date${num}`] = data.date;
                templateParams[`Tag${num}`] = 'note';
                templateParams[`URL${num}`] = '/article?articleId=' + data.id;
            });
            templateParams[`component_header`] = header;
            templateParams[`nextPageURL`] = pageInfo.nextUrl;
            ctx.body = Template(path.join(staticPath, 'template.html'))(templateParams);

        }
    })
);


// 404 page
// app.use(async (ctx) => {
//     ctx.status = 200;
//     ctx.body =fs.readFileSync(path.join(staticPath,'404-index.html'));
// });

//fetch(`./data?sort=${this.state.sortType}&filt=${filtType}`)

app.listen(3000);
console.log("App:App is rungning at prot 3000,you can use `node server` to start necessry service later")

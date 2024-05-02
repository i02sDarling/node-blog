const fs = require('fs');
const mocData = require('./mockdata')
const Max = mocData.length;

//{'id': 1, 'title': 'Webpack_key', 'date': content
// /article?articleid=1
const Titles = []
function getMsg(id) {

    let description = '';
    let title = '';
    let content = 'Ops!作者还未完成';
    let date = '';


    for (const item of mocData) {

        if (item.title) {
            Titles.push(item.title);
        }

        if (item && item.id === id && item.title) {
            title = item.title;
            content = item.content;
            date = item.date;
            description = item.content.slice(1, 30).replace("#", "");
        }


    }
    let lastURL = (id - 2) < 0 ? '/' : '/article?articleId=' + (id - 1);
    let nextURL = (id) >= Max - 1 ? '/' : 'article?articleId=' + (id + 1);
    let pay = '/pay';
    let next = (id) >= Max - 1 ? '未完待续' : Titles[id];//从0开始 tit[max-1]结束
    let last = (id - 2) < 0 ? '前边没有咯' : Titles[id - 2];
    return {
        last,
        lastURL,
        next,
        nextURL,
        date,
        title,
        description,
        content,
        pay

    }
}
//${article.last}
// ${article.lastURL}
// ${article.next}
// ${article.nextURL}
// ${article.title}
// ${article.description}
// ${article.date}
// ${article.pay}
module.exports = getMsg;
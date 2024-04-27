const path = require('path');
const fs = require('fs');
const getPage = require('../front-data/getPage.js')
const Template = require('./template.js')




const header = fs.readFileSync(path.join(__dirname, 'static/header.txt'), 'utf-8');
let is_init = false;
let HomePage = null;
function getHome() {
    if (!HomePage) {
        HomeInit();
        return HomePage;
    }
    is_init = true;
    return HomePage;
}

function HomeInit() {
    const templateParams = {};//对象 地址
    pageInfo = getPage(0);
    pageInfo.pages.map((data, index) => {
        const num = index + 1;
        templateParams[`Title${num}`] = data.title;
        templateParams[`Date${num}`] = data.date;
        templateParams[`Tag${num}`] = 'note';
        templateParams[`URL${num}`] = '/article?articleId=' + data.id;
    });
    templateParams[`component_header`] = header;
    templateParams[`nextPageURL`] = pageInfo.nextUrl;
    HomePage = Template(path.join(__dirname, 'static/template.html'))(templateParams);
}


//fetch(`./data?sort=${this.state.sortType}&filt=${filtType}`)
module.exports = getHome;
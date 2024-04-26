const path = require('path');
const fs = require('fs');
const getPage=require('../data/getPage.js')
const Template=require('./template.js')





let is_init=false;
let HomePage=null;
function getHome(){
    if(!HomePage){
        HomeInit();
        return HomePage;
    }
    is_init=true;
    return HomePage;
}

function HomeInit(){
    const templateParams = {};//对象 地址
    pageInfo=getPage(0);
    pageInfo.pages.map((data, index) => {
        const num = index + 1;
        templateParams[`Title${num}`] = data.title;
        templateParams[`Date${num}`] = data.date;
        templateParams[`Tag${num}`] = 'note';
        templateParams[`URL${num}`] = '/article?articleId='+data.id;
    }); 
    templateParams[`nextPageURL`]=pageInfo.nextUrl;
    HomePage=Template(path.join(__dirname,'static/template.html'))(templateParams);    
}


//fetch(`./data?sort=${this.state.sortType}&filt=${filtType}`)
module.exports=getHome;
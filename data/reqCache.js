const path = require('path');
const fs = require('fs');

console.log(path.join(__dirname,'../template/template.js'))
console.log(path.join(__dirname,'/../template/template.html'))
const template = require(path.join(__dirname,'../template/template.js'))(path.join(__dirname,'/../template/template.html'))
const getData=require('./getPage.js');

reqCache=[]
find=false
function getTemplate(start,end){
    // if(reqCache.length>0){
    //   reqCache.map(item=>{
    //     if(item.start===start&&item.end===end) return item.templateStr;
    //   })
        
    // }
    // if(!find){
    const templateParams = {};
    getData(start,end).forEach((data, index) => {
        const num = index + 1;
        templateParams[`Title${num}`] = data.title;
        templateParams[`Date${num}`] = data.date;
        templateParams[`Tag${num}`] = 'note';
        templateParams[`URL${num}`] = null;
    });

    return template(templateParams)
        
    //     reqCache.push({
    //         start:start,
    //         end:end,
    //         templateStr:templateStr
    //     }) 
    //     return templateStr; 
    // }
    
}

module.exports=getTemplate// template or temp(cache)
        

//fetch(`./data?sort=${this.state.sortType}&filt=${filtType}`)

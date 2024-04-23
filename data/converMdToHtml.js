const fs = require('fs');
const marked = require('marked');
const originData = require('./mockdata1');

function convert() {
    const content = [];
    originData.map(item => {
        content.push({
            id: item.id,
            title: item.title,
            date: item.date,
            content: marked.parse(item.content)
        });
    });

    const res = `module.exports = ${JSON.stringify(content)};`;

    try {
        fs.writeFileSync('data.js', res);
        console.log('File generated successfully!');
    } catch (err) {
        console.error('Error generating file: ', err);
    }
}

module.exports = convert;
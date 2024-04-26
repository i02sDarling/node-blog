const fs = require('fs');
const path = require('path')
const userData = require('../mockdata/userData')
const getPassword = require('../lib/encodePassword')
// test sample in server.js fine
// const reg=require('./apis/register')
// console.log(reg('test','pasd'));
// console.log(reg('test','pasd',true));
function reg(username, password, is_admin = false) {
    if (username && password) {
        if (userData.filter(user => user.username === username).length !== 0) {
            return 'error:user is already exit';
        } else {

            let newUser = {
                id: userData.length,
                username: username,
                password: getPassword(password),
                is_admin: is_admin,
                articles: [],
            }
            userData.push(newUser);
            fs.writeFileSync(path.join(__dirname, './mockdata/nuserData.js'), `module.exports = ${JSON.stringify(userData, null, 4)};`);
            return 'success'
        }
    }



}


module.exports = reg;
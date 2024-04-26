const fs = require('fs');
const userData = require('./mockdata/userData')
const token = require('./lib/shaToken')
const crypto = require('crypto')


function decodePassword(pd) {
    const hs = crypto.createHash('sha256');
    hs.update(pd);
    return hs.digest('hex');
}

function reg(username, password, is_admin = false) {
    if (username && password) {
        console.log(token);
        let newUser = {
            id: userData.length,
            username: username,
            password: decodePassword(password),
            is_admin: is_admin,
            articles: [],
        }
        userData.push(newUser);
        fs.writeFileSync('./mockData/nuserData.js', `module.exports = ${JSON.stringify(userData, null, 4)};`);
        return
    }



}


module.exports = reg;
const listClient = require('./list-client.js');
const sessionId = require('./sessionId.js');
const sessionListData = require('./sessionId.js');
const sessionToken = require('./sessionToken.js');
const crypto = require('crypto')
const fs = require('fs');
const path = require('path')




// function isExceedSevenDays(timestamp1, timestamp2) {
//     const millisecondsInOneDay = 24 * 60 * 60 * 1000;
//     const diffDays = Math.abs(timestamp1 - timestamp2) / millisecondsInOneDay;
//     return diffDays > 7;
// }
function storeId(id, username, curts, sessionId) {
    if (id === undefined || username == undefined || curts === undefined || sessionId == undefined) {
        return 'faild:arguments is required'
    }
    let is_exist = false;
    let sessionList = sessionListData;
    if (Array.isArray(sessionList)) {
        sessionList.forEach(user => {//如果有sessionid 记录 
            if (user.username === username && user.id === id) {
                user.lastTimestamp = curts;
                user.sessionId = sessionId;
                is_exist = true;
            }
        })
    } else {
        sessionList = [];
    }
    if (!is_exist) {
        sessionList.push({
            id: id,
            username: username,
            lastTimestamp: curts,
            sessionId: sessionId
        });
    }

    fs.writeFileSync(path.join(__dirname, './sessionId.js'), `module.exports=${JSON.stringify(sessionList)}`);
    return 'sucess';

}
function generateSesionId(id, username) {
    const curts = Date.now();
    // const curts = 'hh';
    let needUpdate = false;//每次登录都会发送getData 返回一个sessionId
    let sessionId = null;
    let token = sessionToken + id + curts;
    const hs = crypto.createHash('sha256');
    hs.update(token);
    sessionId = hs.digest('hex');
    storeId(id, username, curts, sessionId);
    return sessionId;
}
function processUser(res) {

    let user = res['users'][0];
    user = {
        id: user.id,
        username: user.username,
        articles: user.articles,
    }
    if (user.id != 0 && user.username != 'null') {
        user['sessionId'] = generateSesionId(user.id, user.username);
    }

    return user;
}

module.exports = async function (username, password) {

    // 使用微服务拉取数据
    const data = await new Promise((resolve, reject) => {
        listClient.write({
            ruser: {
                rname: username,
                rpass: password,
            }

        }, function (err, res) {
            res = processUser(res);
            err ? reject(err) : resolve(res);
        })
    });

    return data
}
/*

*/ 
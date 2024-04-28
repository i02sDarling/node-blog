const sessionIdList = require('./sessionId.js');
const sessionToken = require('./sessionToken.js');
const crypto = require('crypto')
const fs = require('fs');
const path = require('path')

function storeId(id, username, curts, sessionId) {
    if (id === undefined || username == undefined || curts === undefined || sessionId == undefined) {
        return 'faild:arguments is required'
    }
    let is_exist = false;
    let sessionList = sessionIdList;
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
generateSesionId(1, 'admin');
module.exports = {
    generateSesionId,
    storeId,
}


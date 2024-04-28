
const sessionIdList = require('./sessionId');

function isExceedSevenDays(timestamp1, timestamp2) {
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.abs(timestamp1 - timestamp2) / millisecondsInOneDay;
    return diffDays > 7;
}
function vertifySessionId(userId, sessionId) {
    console.log('vertify session:', userId, sessionId);
    userId = parseInt(userId);
    let findUser = false;
    let verificationExpires = false;
    let identityTampering = false;//默认没有被篡改
    let res = false;
    sessionIdList.map(user => {
        if (user.id === userId) {
            findUser = true;
            if (!isExceedSevenDays(Date.now(), user.lastTimestamp)) {
                if (user.sessionId === sessionId) {
                    res = true;
                } else {
                    identityTampering = true;
                }
            } else {
                verificationExpires = true;
            }

        }


    })
    if (findUser && !verificationExpires && !identityTampering) {//找到用户 没有过期 没有被篡改
        return true;
    } else {
        return false;
    }




}
module.exports = vertifySessionId;
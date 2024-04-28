const listClient = require('./list-client.js');
const { generateSesionId } = require('./sessionIdProcesser.js');




// function isExceedSevenDays(timestamp1, timestamp2) {
//     const millisecondsInOneDay = 24 * 60 * 60 * 1000;
//     const diffDays = Math.abs(timestamp1 - timestamp2) / millisecondsInOneDay;
//     return diffDays > 7;
// }

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
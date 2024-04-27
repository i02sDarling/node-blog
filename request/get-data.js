const listClient = require('./list-client.js');
const sessionList = require('./sessionId.js')

function isExceedSevenDays(timestamp1, timestamp2) {
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.abs(timestamp1 - timestamp2) / millisecondsInOneDay;
    return diffDays > 7;
}
console.log(Date.now());
function generateSesionId(id, username) {
    const curts = Date.now();


    // if (id, username exit &&)


    return sessionId;
}
function eraseSecretData(res) {
    user = res.users[0];
    newData = {
        id: user.id,
        username: user.username,
        articles: user.articles,
    }
    console.log(newData);
    return newData;
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

            err ? reject(err) : resolve(eraseSecretData(res));
        })
    });

    return data
}
/*

*/ 
const listClient = require('./list-client.js');

function eraseSecretData(res) {
    user=res.users[0];
    newData={
        id:user.id,
        username:user.username,
        articles:user.articles,
    }
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
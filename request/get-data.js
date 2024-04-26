const listClient = require('./list-client.js');

module.exports = async function (username, password) {

    // 使用微服务拉取数据
    const data = await new Promise((resolve, reject) => {
        listClient.write({
            ruser: {
                rname: username,
                rpass: password,
            }

        }, function (err, res) {
            console.log(res);
            err ? reject(err) : resolve(res);
        })
    });

    return data
}
/*

*/ 
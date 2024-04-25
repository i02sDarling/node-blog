const listClient = require('./list-client');

module.exports = async function (username = 'admin', password=`123`) {

    // 使用微服务拉取数据
    const data = await new Promise((resolve, reject) => {
        listClient.write({
            username,
            password

        }, function (err, res) {
            err ? reject(err) : resolve(res.columns);
        })
    });

    return data
}
/*

*/ 
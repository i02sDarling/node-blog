const listClient = require('./list-client.js');

module.exports = async function (sortType = 0, filtType = 0) {

    // 使用微服务拉取数据
    const data = await new Promise((resolve, reject) => {
        listClient.write({
            ruser:{
                rname:"hhh",
                rpass:"this is rpass",
            }

        }, function (err, res) {
            err ? reject(err) : resolve(res.columns);
        })
    });

    return data
}
/*

*/ 
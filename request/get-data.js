const listClient = require('./list-client.js');

module.exports = async function () {
    rname="admin";
    rpass="123";
    // 使用微服务拉取数据
    const data = await new Promise((resolve, reject) => {
        listClient.write({
            ruser:{
              rname,
              rpass
            } 

        }, function (err, res) {
            err ? reject(err) : resolve(res);
        })
    });

    return data
}
/*

*/ 
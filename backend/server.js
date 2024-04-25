const fs = require('fs')
const path=require('path')
const protobuf = require('protocol-buffers');

const schemas = protobuf(
    fs.readFileSync(path.join(__dirname,`admin.proto`),'utf-8')
);
// 假数据
const Users = require('./mockdata/user')

/**
 * 服务端的编解包逻辑
 */
const server = require('./lib/geeknode-rpc-server')(schemas.LoginRequest, schemas.UserResponse);

// console.log(Users[0].articles);
// app.listen(3001);
server.createServer((request, response) => {
        // const { username, password } = request.body;
        username="admin";
        password="hh";

        // 直接返回假数据
        response.end({
            // user: Users
            //     .filter((item) => {
            //         if(item.username===username){
            //             console.log(password);
            //         }
            //     })
            is_admin:1,
            token:"hh",
            articles:[
                {
                  id:1,
                  title:"管理员日记",
                  content:"今天创建了后端",
                }  ,
                {
                  id:2,
                  title:"管理员日记",
                  content:"今天创建了后端",
                } 
              ],
            
        });
    })
    .listen(3001, () => {
        console.log('rpc server listened: 3001')
    });
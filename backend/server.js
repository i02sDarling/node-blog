const fs = require('fs')
const getUsr=require('./vetifyAdmin');
const protobuf = require('protocol-buffers');
const schemas = protobuf(
    fs.readFileSync(`${__dirname}/user.proto`)
);
const userData = require('./mockdata/userData');
const reg=require('./register')
reg('hhh','pasd');



// const server = require('./lib/geeknode-rpc-server')(schemas.UserRequest, schemas.UserResponse);
// server.createServer((request, response) => {
        
//         const { ruser } = request.body;
//         const {rname,rpass}=ruser;
        
//         response.end({
//             users: getUsr(rname,rpass)
//         });
//     })
//     .listen(3001, () => {
//         console.log('rpc server listened: 3001')
//     });



//debugmsg
// console.log("listening")
// const tcpServer = net.createServer((socket) => {

//     socket.on('data', (data) => {
//         console.log(data.toString());
//     })
// });
// tcpServer.listen(3002);
// console.log("listen finishied")



// let stringhh=schemas.ListRequest.decode(buffer);

// let res=schemas.UserResponse.encode({
//     users:columnData
    
// })
// let res=schemas.UserRequest.encode({
//     ruser:{
//         rname:"hh",
//         rpass:"hh"
//     }
    
// })

// console.log(res)
// const buffer = Buffer.from('Hello, world!');
// console.log(buffer)
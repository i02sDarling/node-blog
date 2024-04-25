const fs = require('fs')
const net=require('net')
const protobuf = require('protocol-buffers');
const schemas = protobuf(
    fs.readFileSync(`${__dirname}/user.proto`)
);
const columnData = require('./mockdata/userData');

const server = require('./lib/geeknode-rpc-server')(schemas.UserRequest, schemas.UserResponse);
// server.createServer((request, response) => {
//         console.log(request);
//         const { rname, rpass } = request.body;
        
//         response.end({
//             columns: columnData
//         });
//     })
//     .listen(3001, () => {
//         console.log('rpc server listened: 3001')
//     });

const tcpServer = net.createServer((socket) => {

    socket.on('data', (data) => {
        console.log(data.toString());
    })
});
tcpServer.listen(3002);



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
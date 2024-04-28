const cp = require('child_process');
const app = cp.fork('app.js');
const server = cp.fork('server.js')


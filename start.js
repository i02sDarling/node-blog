const cp = require('child_process');
const cluster = require('cluster');
const path = require('path');

if (cluster.isMaster) {
    for (let i = 0; i < Math.floor(require('os').cpus().length / 2); i++) {

        createWorker();
        // createWorker('app.js');
    }


    cluster.on('exit', function () {
        setTimeout(() => {
            createWorker();
        }, 5000)
    })

    function createWorker() {
        var worker = cluster.fork();
        var missed = 0;

        var timer = setInterval(function () {
            if (missed == 3) {
                clearInterval(timer);
                console.log(worker.process.pid + ' has become a zombie!');
                process.kill(worker.process.pid);
                return;
            }

            missed++;
            worker.send('ping#' + worker.process.pid);
        }, 10000);

        worker.on('message', function (msg) {
            if (msg == 'pong#' + worker.process.pid) {
                missed--;
            }
        });

        worker.on('exit', function () {
            clearInterval(timer);
        });
    }

} else {
    process.on('uncaughtException', function (err) {
        console.log(err);
        process.exit(1);
    });

    process.on('message', function (msg) {
        if (msg == 'ping#' + process.pid) {
            process.send('pong#' + process.pid);
        }
    });

    if (process.memoryUsage().rss > 734003200) {
        process.exit(1);
    }

    require('./app.js'); // 调用相应的脚本
    require('./server.js');
}
const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World');
//     res.end();
// }).listen(8888, console.log('server running...'));

function start() {
    function onRequest(req, res) {
        console.log('Request received.');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World');
        res.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;
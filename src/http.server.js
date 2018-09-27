var http = require('http');

// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     response.end('hello world\n')
// }).listen(8888)


function onRequest(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("hello ---world")
    response.end()
}

http.createServer(onRequest).listen(9999)
console.log('server running at http://127.0.0.1:9999')

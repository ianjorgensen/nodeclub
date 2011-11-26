var server = require('router').create();
var port = process.argv[2] || 8080;

server.file('/s/{file}','./s/{file}');

server.file('/','./s/index.html');
server.file('./s/404.html',{status:404});

process.on('uncaughtException', function(err) { console.log(err.stack) });

server.listen(port);
console.log('server running on port',port);

console.log("hello world start");


var http = require("http");
var server=http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type": "text/plain"});
	response.end("Hello world\n");
});

server.listen(8000);

console.log("Server running in localhost:8000");



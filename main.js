console.log("Hello World");

var http = require("http");

var server = http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
});

server.listen(8081);

// Console will log the message
console.log("Server running at http://localhost:8081");

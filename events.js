// Import events module
var events = require("events");

// Create an EventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log("Connection Successful.");

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log("data received successfully.");
});

var http = require("http");

var server = http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});

    // Send the response body as "Event Fired"
    response.end('Event Fired\n');

    // Fire the connection event
    eventEmitter.emit('connection');
});

server.listen(8081);

// Console will log the message
console.log("Event Server running at http://localhost:8081");

// Let's try to print the value of __filename
console.log(__filename);

// Let's try to print the value of __dirname
console.log(__dirname);

var c = 0;
function printInterval() {
    console.log("Interval " + c++);
}
var interval = setInterval(printInterval, 1000)

function printHello() {
    console.log("Hello!");
    clearInterval(interval);
}
setTimeout(printHello, 4000);


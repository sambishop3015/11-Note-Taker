// Require dependencies
var http = require("http");
var fs = require("fs");
// const { Script } = require("vm");
// const bodyParser = require("body-parser");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    // Capture the url the request is made to
    var path = req.url; 

    switch (path) { 
    
    case "/notes":
        return fs.readFile(__dirname + "/notes.html", function(err, data) {
            if (err) throw err;
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    default:
        return fs.readFile(__dirname + "/index.html", function(err, data) {
            if (err) throw err;
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
}

// Starts our server.
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });
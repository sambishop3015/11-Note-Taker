// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var http = require("http");
var fs = require("fs");
// const { Script } = require("vm");
// const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
    name
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/notes.html"));
  });
  
  // Displays all characters
  app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });

// Displays a single character, or returns false
app.get("/api/notes/:note", function(req, res) {
    var chosen = req.params.note;
  
    console.log(chosen);
  
    for (var i = 0; i < notes.length; i++) {
      if (chosen === notes[i].routeName) {
        return res.json(notes[i]);
      }
    }
  
    return res.json(false);
  });

// Create New Characters - takes in JSON input
app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newNote);
  
    notes.push(newNote);
  
    res.json(newNote);
  });


// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     // Capture the url the request is made to
//     var path = req.url; 

//     switch (path) { 
    
//     case "/notes":
//         return fs.readFile(__dirname + "/notes.html", function(err, data) {
//             if (err) throw err;
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.end(data);
//         });
//     default:
//         return fs.readFile(__dirname + "/index.html", function(err, data) {
//             if (err) throw err;
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.end(data);
//         });
//     }
// }

// Starts our server.
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });
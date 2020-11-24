// Dependencies -----------------------------------------
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
 
// Server Setup -----------------------------------------
var app = express()
var PORT = process.env.PORT || 8080 

// to serve static files; images, css, javascript
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

// Routes -----------------------------------------------
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// App listening ----------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})
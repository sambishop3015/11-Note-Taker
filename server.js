var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
 
var app = express()
var PORT = process.env.PORT || 8080 

// to serve static files; images, css, javascript
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(express.static("app/public"));

app.use(bodyParser.urlencoded({ extended: false}));

//Routes
//=================================
require("./app/routes/api-routes-js")(app);
require("./app/routes/html-routes.js")(app);

//Start server
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
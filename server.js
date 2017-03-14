
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

module.exports = server;
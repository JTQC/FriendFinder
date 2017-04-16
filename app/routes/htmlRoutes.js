// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

//index route loads home.html
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/../public/home.html"));
});

//survey route loads survey page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/../public/survey.html"));
});


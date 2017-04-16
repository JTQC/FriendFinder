// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

	//Get Route to pull all user info from DB so we can compare user info
	app.get("/api/answer", function(req, res) {
		db.Answer.findAll({}).then(function(result){
			res.json(result);
		});
	});


	//Post Route to add user submitted survey info to DB
	app.post("/api/answer", function(req, res) {
		var newAnswer = req.body;

		Answer.create({
			name: newAnswer.name,
			photo: newAnswer.photo,
			scores: newAnswer.scores,
			total: newAnswer.total
		});
	});
};
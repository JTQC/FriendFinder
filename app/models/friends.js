// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Answer = sequelize.define("answer", {
name: Sequelize.STRING,
photo: Sequelize.STRING,
scores: Sequelize.INTEGER,
total: Sequelize.INTEGER
}, {
	timestamps: false
});

Answer.sync();

module.exports = Answer;



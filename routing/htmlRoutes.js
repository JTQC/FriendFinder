app.use('/home', function (req, res, next) {
  next();
});

app.get("/survey", function(req, res){
	res.json(survey);
})

module.exports = htmlRoutes;
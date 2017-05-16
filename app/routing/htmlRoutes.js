var path = require("path");

module.exports = function(app) {
	//displays survey page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	//default USE route that displays home page
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
}


var friendData = require("../data/friends.js");
var express = require("express");
var app = express();

module.exports = function(app) {
	//display a JSON of all possible friends
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});
	//post incoming survey data
	app.post("/api/friends", function(req, res) {
		var newUser = req.body;
		console.log(newUser.scores);
		var index = compare(friendData, newUser);
		friendData.push(newUser);

		function findFriend(friends, user) {
			var differences = [];
			for (var i = 0; i < friends.length; i++) {
				var totalDifference = 0;
				for (var j = 0; j < 10; j++) {
					var difference = Math.abs(friends[i].scores[j] - user.scores[j]);
					totalDifference += difference;
				}

				differences.push(totalDifference);
			}

			var closestMatch = Math.min.apply(null, differences);
			var index = differences.indexOf(closestMatch);
			return index;
		}
		
		console.log(friendData[index]);

		res.json(friendData[index]);

	});
}




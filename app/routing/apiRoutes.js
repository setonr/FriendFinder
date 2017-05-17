var friendData = require("../data/friends.js");

module.exports = function(app) {
	//display a JSON of all possible friends
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});
	//post incoming survey data
	app.post("/api/new", function(req, res) {
		var newUser = req.body;
		friendData.push(newUser);
		res.json(newUser);
	});
};

// 		console.log(newUser);

// 		var friendsArray = [];
// 		var userScores = newUser.scores;
	
// 		// var index = compare(friendData, newUser);
// 		// friendData.push(newUser);

// 		for (var i = 0; i < friendData.length; i++) {
// 			var matchCloseness=0;
// 			var friendScores = friendData[i].answers;
// 			for (var j=0; j < friendScores.length; j++) {
// 				matchCloseness += Math.abs(parseInt(friendScores[j]) - parseInt(userScores[j]));
// 			}

// 			friendsArray.push(matchCloseness);
// 		}

// 		console.log(friendsArray);

// 		var smallest = Math.min(friendsArray);
// 		console.log(smallest);

// 		var match = [];

// 		for (var i = 0; i < friendsArray; i++) {
// 			if (smallest === friendsArray[i]) {
// 				match.push(i);
// 			}
// 		}

// 		console.log(match);
// 		var newFriends = [];

// 		for (var i = 0; i < match.length; i++) {
// 			var friend = friendData[match[i]];

// 			newFriends.push(friend);
// 		}

// 		console.log(newFriends);

// 		res.json(newFriends);
// });

// }
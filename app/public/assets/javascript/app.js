var newFriend = {
        "name": $("#name").val().trim(),
        "photoLink": $("#photo").val().trim(),
        "scores": [
              $("#q1").val(), 
              $("#q2").val(), 
              $("#q3").val(), 
              $("#q4").val(), 
              $("#q5").val(), 
              $("#q6").val(), 
              $("#q7").val(), 
              $("#q8").val(), 
              $("#q9").val(), 
              $("#q10").val()
            ]
      }

var createNewProfile = function() {
            // console.log(newFriend);
      
      $.post("/api/friends", newFriend, function(data) {});
    
      findMatch();
    };

var findMatch = function() {
  var index;
  var currentURL = window.location.origin;

  $.ajax({url: currentURL + "/api/friends", method: "GET"})
    .done(function(friendData){
      var diffArray = [];

      for (var i = 0; i < friendData.length; i++) {
        console.log(friendData[i]);
        
        var diff = 0; 

        for (var j = 0; j < friendData[i].scores[i].length; j++) {


          diff += Math.abs((parseInt(friendData[i].scores[j]) - parseInt(newFriend[i].scores[j])));

          console.log(diff);
        }

        diffArray.push(diff);
      }

      var arrayMin = function(array) {
        return Math.min.apply(null, array);
      };

      var smallest = arrayMin(diffArray);

      index = diffArray.indexOf(smallest);

      console.log(friendData[index].name);

      $(".modal-body").html("<h1 class='name'>" + friendData[index].name + "</h1>" + "<img class='img' width = '200px' height = '200px' margin='auto' src='" + friendData[index].photoLink + "'>");

      modalActive();

    });
};

var modalActive = function() {
  $("#resultsModal").modal({
    keyboard: false
  });
};

$("#submit").on("click", function(event) {
  //alert("hi!");
  event.preventDefault();
  createNewProfile();

$("#name").val("");
$("#photo").val("");

for (var i = 0; i < 10; i++) {
  $("#q" + (i + 1)).val("");
}


});





// var newFriend = {
//         "name": $("#name").val().trim(),
//         "photo": $("#photo").val().trim(),
//         "scores": [
//               $("#q1").val(), 
//               $("#q2").val(), 
//               $("#q3").val(), 
//               $("#q4").val(), 
//               $("#q5").val(), 
//               $("#q6").val(), 
//               $("#q7").val(), 
//               $("#q8").val(), 
//               $("#q9").val(), 
//               $("#q10").val()
//             ]
//       }

// var createNewProfile = function() {
//             // console.log(newFriend);
      
//       $.post("/api/friends", newFriend, function(data) {});
    
//       findMatch();
//     };

// var findMatch = function() {
//   var index;
//   var currentURL = window.location.origin;

//   $.ajax({url: currentURL + "/api/friends", method: "GET"})
//     .done(function(friendData){
//       var diffArray = [];

//       for (var i = 0; i < friendData.length; i++) {
//         console.log(friendData[i]);
        
//         var diff = 0; 

//         for (var j = 0; j < friendData[i].scores[i].length; j++) {


//           diff += Math.abs((parseInt(friendData[i].scores[j]) - parseInt(newFriend[i].scores[j])));

//           console.log(diff);
//         }

//         diffArray.push(diff);
//       }

//       var arrayMin = function(array) {
//         return Math.min.apply(null, array);
//       };

//       var smallest = arrayMin(diffArray);

//       index = diffArray.indexOf(smallest);

//       console.log(friendData[index].name);

//       $(".modal-body").html("<h1 class='name'>" + friendData[index].name + "</h1>" + "<img class='img' width = '200px' height = '200px' margin='auto' src='" + friendData[index].photoLink + "'>");

//       modalActive();

//     });
// };

// var modalActive = function() {
//   $("#resultsModal").modal({
//     keyboard: false
//   });
// };

// $("#submit").on("click", function(event) {
//   //alert("hi!");
//   event.preventDefault();
//   createNewProfile();
// });

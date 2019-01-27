var express = require("express");
var router = express.Router();
var friends = require("../data/friends");

router.get("/friends", function(req, res) {
  res.send(friends);
});

router.post("/friends", function(req, res) {
  var difference;
  var min;
  var name;
  var current = req.body.scores;
  friends.forEach(element => {
    difference = 0;
    for (var i = 0; i < element.scores.length; i++) {
      if (element.scores[i] - current[i] < 0) {
        difference += current[i] - element.scores[i];
      } else {
        difference += element.scores[i] - current[i];
      }
    }
    if (difference < min || min === undefined) {
      min = difference;
      name = element.name;
      photo = element.photo;
    }
    console.log("Min: " + min);
    console.log("Dif:" + difference);
  });
  console.log("Name: " + name);

  friends.push(req.body);
  res.send(name);
});

module.exports = router;

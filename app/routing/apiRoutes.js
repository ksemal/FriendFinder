var express = require("express");
var router = express.Router();
var friends = require("../data/friends");

router.get("/friends", function(req, res) {
  console.log("asasas");
  res.json(friends);
});

router.post("/friends", function(req, res) {});

module.exports = router;

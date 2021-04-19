var express = require("express");
var router = express.Router();
const User = require("../model/User");

/* GET users listing. */
router.get("/:id", async function (req, res, next) {
  const user = await User.findById(req.params.id);
  console.log(user);
  res.send({ user: user.name, newsletter: user.newsletter });
});

module.exports = router;

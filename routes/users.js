var express = require("express");
var router = express.Router();
const User = require("../model/User");

/* GET users listing. */
router.get("/:id", async function (req, res, next) {
  const user = await User.findById(req.params.id);
  console.log(user);
  res.send({ user: user.name, newsletter: user.newsletter, id: user._id });
});

router.post("/changesubscription/:id", function (req, res) {
  console.log("hejhej", req.params.id);
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { newsletter: false },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/changetosubscribe/:id", function (req, res) {
  console.log("hejhej", req.params.id);
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { newsletter: true },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;

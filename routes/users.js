var express = require("express");
var router = express.Router();
const User = require("../model/User");

/* GET users listing. */
router.get("/:id", async function (req, res, next) {
  const user = await User.findById(req.params.id);
  res.send({ user: user.name, newsletter: user.newsletter, id: user._id });
});

router.post("/changesubscription/:id", function (req, res) {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { newsletter: false },
    { new: true },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          user: result.name,
          newsletter: result.newsletter,
          id: result._id,
        });
      }
    }
  );
});

router.post("/changetosubscribe/:id", function (req, res) {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { newsletter: true },
    { new: true },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          user: result.name,
          newsletter: result.newsletter,
          id: result._id,
        });
      }
    }
  );
});

module.exports = router;

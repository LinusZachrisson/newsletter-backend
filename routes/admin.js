var express = require("express");
var router = express.Router();
const User = require("../model/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  let template = `<h3>Please enter admin password!</h3> <form action="/admin/adminpage" method="post"> <label for="admin">Enter admin password here: </label><input type="password" id="adminPw" name="adminpassword"> <input type="submit" value="submit"></form>`
  res.send(template);
});

router.post("/adminpage", function (req, res) {
  console.log(req.body)
  if(req.body.adminpassword=== "admin") {
  console.log("du är admin")
  res.redirect("/admin/adminUserinfo")
  }
  
})

router.get("/adminUserinfo", function (req, res) {
  res.send("hej")
})

module.exports = router;

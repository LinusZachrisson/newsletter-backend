var express = require("express");
var router = express.Router();
const User = require("../model/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  let template = `<h3>Please enter admin password!</h3> <form action="/admin/adminpage" method="post"> <label for="admin">Enter admin password here: </label><input type="password" id="adminPw" name="adminpassword"> <input type="submit" value="submit"></form>`;
  res.send(template);
});

router.post("/adminpage", async function (req, res) {
  let template = `<h3>All users & subscribed emails : </h3>`;
  let allUsers = await User.find();
  console.log(allUsers);
  for (users in allUsers) {
    template += `<div>${allUsers[users].name}</div>`;
  }

  for (users in allUsers) {
    if (allUsers[users].newsletter === true) {
      template += `<div>${allUsers[users].email}</div>`;
    }
  }

  console.log(req.body);
  if (req.body.adminpassword === "admin") {
    console.log("du är admin");
    res.send(template);
  }
});

// router.get("/adminUserinfo", async function (req, res) {
//   let template = `<script> if(!localStorage.getItem("adminpassword")) {window.location.replace("/admin");}</script> <h3>All users & subscribed emails : </h3>`;
//   let template = `<h3>All users & subscribed emails : </h3>`;
//   let allUsers = await User.find();
//   console.log(allUsers);
//   for (users in allUsers) {
//     template += `<div>${allUsers[users].name}</div>`;
//   }

//   for (users in allUsers) {
//     if (allUsers[users].newsletter === true) {
//       template += `<div>${allUsers[users].email}</div>`;
//     }
//   }

//   res.send(template);
// });

module.exports = router;

const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.post("/users/login", (req, res) => {
  console.log(req.body);
  res.send("Login!");
});

router.get("/users", async (req, res) => {
  try {
    let users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    let user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/users/:id", async (req, res) => {
  let updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "address", "email", "phone"];
  let isValid = updates.every(update => {
    return allowedUpdates.includes(update);
  });
  if (!isValid) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    let user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;

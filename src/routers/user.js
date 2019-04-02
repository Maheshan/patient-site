const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.post("/users/login", async (req, res) => {
  try {
    let user = await User.findByCredentials(req.body.email, req.body.password);
    await user.populate("role").execPopulate();
    const token = await user.generateAuthToken();
    res.send({ user: user, token });
  } catch (e) {
    res.status(401).send("Bad man");
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users", auth, async (req, res) => {
  try {
    if (req.role !== "Doctor") {
      return res.status(401).send();
    }
    let roles = ["Patient"];
    let users = await User.find();
    await User.find()
      .populate("role", null, { role: { $in: roles } })
      .exec((err, users) => {
        users = users.filter(user => {
          return user.role;
        });
        res.send(users);
      });

    // res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

router.get("/users/:id", auth, async (req, res) => {
  try {
    let _id = req.params.id;
    //Prevent a patient from see another patient's info
    if (req.user.role.role === "Patient" && _id !== req.user.id) {
      return res.status(400).send();
    }
    let user = await User.findById(_id);
    await user.populate("role").execPopulate();
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/users/me", auth, async (req, res) => {
  let updates = Object.keys(req.body);
  const allowedUpdates = [
    "firstname",
    "lastname",
    "age",
    "address",
    "email",
    "phone"
  ];
  let isValid = updates.every(update => {
    return allowedUpdates.includes(update);
  });
  if (!isValid) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    let user = req.user;

    updates.forEach(update => {
      user[update] = req.body[update];
    });

    //Must do this as mongoose findByIdAndUpdate bypasses middleware so if we
    //ever wanted to chage password, it'd get stored as plaintext. calling save triggers
    //middleware
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;

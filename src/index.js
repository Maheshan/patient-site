const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Role = require("./models/role");

const app = express();
const port = process.env.PORT || 5000;

// Parsing JSON
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    let users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    let user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login!");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Role = require("./models/role");

const app = express();
const port = process.env.PORT || 5000;

// Parsing JSON
app.use(express.json());

app.get("/users", (req, res) => {
  res.send("testing!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login!");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

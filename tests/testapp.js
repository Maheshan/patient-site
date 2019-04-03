const express = require("express");
const userRouter = require("../src/routers/user");
var cors = require("cors");
const port = process.env.PORT || 5000;
const testapp = express();

testapp.use(cors());
testapp.use(express.json());
testapp.use(userRouter);

testapp.listen(port, () => {
  console.log("Server is up on port " + port);
});

module.exports = testapp;

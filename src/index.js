const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

// Parsing JSON
app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

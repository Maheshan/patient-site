const mongoose = require("mongoose");

const Role = mongoose.model("Role", {
  role: {
    type: String,
    required: true
  }
});

module.exports = Role;

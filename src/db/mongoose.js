const mongoose = require("mongoose");
const connectionString = require("../../config/keys").mongoURI;
const seededRoles = require("../db/seededRoles");
const seededUsers = require("../db/seededUsers");
const User = require("../models/user");
const Role = require("../models/role");

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true
});

Role.collection.drop();
User.collection.drop();

const seedData = async () => {
  let roles = await Role.create(await seededRoles());
  let users = await User.create(await seededUsers(roles));
  return users;
};

seedData()
  .then(() => {
    console.log("Users and roles seeded successfully.");
  })
  .catch(err => {
    console.log("Failed to seed data", err);
  });

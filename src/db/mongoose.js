const mongoose = require("mongoose");
const connectionString = require("../../config/keys").mongoURI;
const User = require("../models/user");
const Role = require("../models/role");

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true
});

Role.collection.drop();
User.collection.drop();

const seedData = async () => {
  let seededRoles = [
    {
      role: "Doctor"
    },
    {
      role: "Patient"
    }
  ];
  let roles = await Role.create(seededRoles);
  let seededUsers = [
    {
      name: "Doogie Howser",
      age: 14,
      email: "dhowser@aol.com",
      password: "tester1234567",
      address: "Something",
      phone: "1234567890",
      role: roles[0]
    },
    {
      name: "Rick Sanchez",
      age: 70,
      email: "wubbalubbadubdub@hotmail.com",
      password: "IheartMeseeks23",
      address: "Something",
      phone: "1234567890",
      role: roles[1]
    },
    {
      name: "Dante",
      age: 37,
      email: "devilmayweep@gmail.com",
      password: "betterthanvirgil25",
      address: "Something",
      phone: "1234567890",
      role: roles[1]
    },
    {
      name: "Motoko Kusanagi",
      age: 30,
      email: "hackerleet@gmail.com",
      password: "Tachikoma123",
      address: "Something",
      phone: "1234567890",
      role: roles[1]
    }
  ];
  let users = await User.create(seededUsers);
  return users;
};

seedData()
  .then(() => {
    console.log("Users and roles seeded successfully.");
  })
  .catch(err => {
    console.log("Failed to seed data", err);
  });

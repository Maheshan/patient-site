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

let seededRoles = [
  {
    role: "Admin"
  },
  {
    role: "User"
  }
];

Promise.all([Role.create(seededRoles)])
  .catch(err => {
    // log that I have an error
    console.log("A promise failed to resolve", err);
  })
  .then(roles => {
    let users = [
      {
        name: "Doogie Howser",
        age: 14,
        email: "dhowser@aol.com",
        password: "tester1234567",
        address: "Something",
        phone: "1234567890",
        role: roles[0][0]
      },
      {
        name: "Rick Sanchez",
        age: 70,
        email: "wubbalubbadubdub@hotmail.com",
        password: "IheartMeseeks23",
        address: "Something",
        phone: "1234567890",
        role: roles[0][1]
      },
      {
        name: "Dante",
        age: 37,
        email: "devilmayweep@gmail.com",
        password: "betterthanvirgil25",
        address: "Something",
        phone: "1234567890",
        role: roles[0][1]
      },
      {
        name: "Motoko Kusanagi",
        age: 30,
        email: "hackerleet@gmail.com",
        password: "Tachikoma123",
        address: "Something",
        phone: "1234567890",
        role: roles[0][1]
      }
    ];
    return User.create(users, (err, docs) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("Multiple docs inserted into users");
      }
    });
  });

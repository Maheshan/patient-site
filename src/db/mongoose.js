const mongoose = require("mongoose");
const connectionString = require("../../config/keys").mongoURI;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const Role = mongoose.model("Role", {
  role: {
    type: String,
    required: true
  }
});

const adminRole = new Role({
  role: "Admin"
});

adminRole
  .save()
  .then(() => {
    console.log(adminRole);
  })
  .catch(error => {
    console.log("Error");
  });

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const doctor = new User({
  name: "Doogie Howser",
  age: 14,
  email: "dhowser@aol.com",
  address: "Something",
  phone: "1234567890"
});

doctor
  .save()
  .then(() => {
    console.log(doctor);
  })
  .catch(error => {
    console.log("Error");
  });

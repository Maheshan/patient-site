const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const connectionString = require("../config/keys").mongoURI;
const app = require("../tests/testapp");
const User = require("../src/models/user");
const Role = require("../src/models/role");
const seededRoles = require("../src/db/seededRoles");
const seededUsers = require("../src/db/seededUsers");

beforeEach(async () => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  await Role.deleteMany();
  await User.deleteMany();
  let roles = await Role.create(await seededRoles());
  await User.create(await seededUsers(roles));
  await request(app)
    .post("/users/login")
    .send({
      email: "dhowser@aol.com",
      password: "tester1234567"
    });
  await request(app)
    .post("/users/login")
    .send({
      email: "devilmayweep@gmail.com",
      password: "betterthanvirgil25"
    });
});

test("User should login", async () => {
  let response = await request(app)
    .post("/users/login")
    .send({
      email: "dhowser@aol.com",
      password: "tester1234567"
    })
    .expect(200);

  expect(response.body.token).not.toBeNull();
});

test("User cannot login", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "dhowser@aol.com",
      password: "asdas"
    })
    .expect(401);
});

test("Doctor can get users", async () => {
  let doctor = await User.findOne({ firstname: "Doogie" }).populate("role");
  let response = await request(app)
    .get("/users")
    .set("Authorization", `Bearer ${doctor.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toBe(6);
});

test("Patient will get error when attempting to get users", async () => {
  let patient = await User.findOne({ firstname: "Dante" }).populate("role");
  await request(app)
    .get("/users")
    .set("Authorization", `Bearer ${patient.tokens[0].token}`)
    .send()
    .expect(401);
});

test("user can get own information", async () => {
  let user = await User.findOne({ firstname: "Doogie" }).populate("role");
  let response = await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${user.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.firstname).toBe("Doogie");
});

test("User can get own information via id", async () => {
  let user = await User.findOne({ firstname: "Doogie" }).populate("role");
  let response = await request(app)
    .get(`/users/${user._id}`)
    .set("Authorization", `Bearer ${user.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.firstname).toBe("Doogie");
});

test("Patient cannot get other patient information", async () => {
  let loggingUser = await User.findOne({ firstname: "Dante" }).populate("role");
  let targetUser = await User.findOne({ firstname: "Motoko" }).populate("role");
  await request(app)
    .get(`/users/${targetUser._id}`)
    .set("Authorization", `Bearer ${loggingUser.tokens[0].token}`)
    .send()
    .expect(400);
});

test("Doctor can get other patient information", async () => {
  let loggingUser = await User.findOne({ firstname: "Doogie" }).populate(
    "role"
  );
  let targetUser = await User.findOne({ firstname: "Motoko" }).populate("role");
  let response = await request(app)
    .get(`/users/${targetUser._id}`)
    .set("Authorization", `Bearer ${loggingUser.tokens[0].token}`)
    .send()
    .expect(200);
  expect(response.body.firstname).toBe("Motoko");
});

test("User can not update certain information", async () => {
  let loggingUser = await User.findOne({ firstname: "Dante" }).populate("role");
  await request(app)
    .patch(`/users/me`)
    .set("Authorization", `Bearer ${loggingUser.tokens[0].token}`)
    .send({
      password: "tester1234"
    })
    .expect(400);
});

test("User can update their own information", async () => {
  let loggingUser = await User.findOne({ firstname: "Dante" }).populate("role");
  await request(app)
    .patch(`/users/me`)
    .set("Authorization", `Bearer ${loggingUser.tokens[0].token}`)
    .send({
      firstname: "first",
      lastname: "last",
      age: 10,
      address: "address",
      email: "email@email.com",
      phone: "777777777"
    })
    .expect(200);
  let updatedUser = await User.findOne({ firstname: "first" }).populate("role");
  expect(updatedUser).not.toBeNull;
});

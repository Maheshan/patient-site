const seededUsers = async roles => {
  return [
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
};

module.exports = seededUsers;

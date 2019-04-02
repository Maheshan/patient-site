const seededUsers = async roles => {
  return [
    {
      firstname: "Doogie",
      lastname: "Howser",
      age: 14,
      email: "dhowser@aol.com",
      password: "tester1234567",
      address: "Something",
      phone: "1234567890",
      role: roles[0]
    },
    {
      firstname: "Rick",
      lastname: "Sanchez",
      age: 70,
      email: "wubbalubbadubdub@hotmail.com",
      password: "IheartMeseeks23",
      address: "Something",
      phone: "1234567890",
      role: roles[1]
    },
    {
      firstname: "Dante",
      lastname: "Alighieri",
      age: 37,
      email: "devilmayweep@gmail.com",
      password: "betterthanvirgil25",
      address: "Something",
      phone: "1234567890",
      role: roles[1]
    },
    {
      firstname: "Motoko",
      lastname: "Kusanagi",
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

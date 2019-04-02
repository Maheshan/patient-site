const seededUsers = async roles => {
  return [
    {
      firstname: "Doogie",
      lastname: "Howser",
      age: 14,
      email: "dhowser@aol.com",
      password: "tester1234567",
      address: "Doogies address",
      phone: "1234567890",
      role: roles[0]
    },
    {
      firstname: "Rick",
      lastname: "Sanchez",
      age: 70,
      email: "wubbalubbadubdub@hotmail.com",
      password: "IheartMeseeks23",
      address: "Ricks address",
      phone: "1234567890",
      role: roles[1]
    },
    {
      firstname: "Morty",
      lastname: "Smith",
      age: 16,
      email: "ohgeez@hotmail.com",
      password: "C137rulez",
      address: "Mortys address",
      phone: "1234567890",
      role: roles[1]
    },
    {
      firstname: "Dante",
      lastname: "Alighieri",
      age: 37,
      email: "devilmayweep@gmail.com",
      password: "betterthanvirgil25",
      address: "Dante address",
      phone: "1234567890",
      role: roles[1]
    },
    {
      firstname: "Motoko",
      lastname: "Kusanagi",
      age: 30,
      email: "hackerleet@gmail.com",
      password: "Tachikoma123",
      address: "Motoko address",
      phone: "1234567890",
      role: roles[1]
    },
    {
      firstname: "Optimus",
      lastname: "Prime",
      age: 99,
      email: "truckman@gmail.com",
      password: "iheartmegatron",
      address: "Cybertron",
      phone: "1234567890",
      role: roles[1]
    },
    {
      firstname: "Thomas",
      lastname: "Anderson",
      age: 31,
      email: "theone@gmail.com",
      password: "preferpostgres",
      address: "Internet",
      phone: "1234567890",
      role: roles[1]
    }
  ];
};

module.exports = seededUsers;

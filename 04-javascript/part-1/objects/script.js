// let person = ["Ataberk", "Kaya", 24];

let user = {
  Name: "Ataberk",
  Surname: "Kaya",
  Age: 24,
  Address: {
    Country: "Turkey",
    City: "Bursa",
  },
};

let user2 = {
  Name: "Ata",
  Surname: "Berk",
  Age: 15,
  Address: {
    Country: "Turkey",
    City: "Bursa",
  },
};

let users = [user, user2];

let result = user;

result = user["Age"];
result = user["Name"];
result = user["Address"]["City"];
result = user.Name;

result = users[0].Address;

console.log(result);
console.log(user);

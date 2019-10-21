var hector = {
  name: "Hector",
  lastname: "Flores"
};
var vicky = {
  name: "Vicky",
  lastname: "Acosta"
};

var people = [hector, vicky];

for (var i = 0; i < people.length; ++i) {
  console.log(`${people[i].name} ${people[i]["lastname"]}`);
}

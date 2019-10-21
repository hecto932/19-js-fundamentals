var x = 5;
var y = "5";

console.log(x == y);
console.log(x === y);

var person = {
  name: "Hector",
  lastname: "Flores"
};

var person2 = {
  name: "Hector",
  lastname: "Flores"
};

console.log(person == person2);
console.log(person === person2);

var person3 = {
  ...person
};

console.log(person3 == person);
console.log(person3 === person);

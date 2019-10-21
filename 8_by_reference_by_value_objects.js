var hector = {
  name: "Hector",
  lastname: "Flores",
  age: 27
};

function birthday(person) {
  person.age += 1;
}

console.log(hector);
console.log(birthday(hector));
console.log(hector);

function birthdayNew(person) {
  return {
    ...person,
    age: person.age + 1
  };
}

console.log(hector);
console.log(birthdayNew(hector));
console.log(hector);

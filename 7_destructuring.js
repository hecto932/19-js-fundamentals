var hector = {
  name: "Hector",
  lastname: "Flores",
  age: 27
};

var vicky = {
  name: "Vicky",
  lastname: "Flores",
  age: 28
};

function printNameInUpperCase(person) {
  const { name } = person;
  console.log(name.toUpperCase());
}

printNameInUpperCase(hector);
printNameInUpperCase(vicky);
printNameInUpperCase({ name: "Pepito" });

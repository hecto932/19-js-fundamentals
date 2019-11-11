const hector = {
  name: "Hector",
  lastname: "Flores",
};

const pedro = {
  name: "Pedro",
  lastname: "Perez",
};

function sayHi(hi) {
  console.log(`${hi} My name is ${this.name}`);
}

sayHi("Hola pana!");
sayHi.apply(hector, ["Hola pana!"]);
const newFunc = sayHi.bind(hector, ["Hola pana!"]);
newFunc();
sayHi.call(hector, "Hola pana!");

// USING VAR

var person = {
  name: "Hector",
  lastname: "Flores",
  age: 29,
};

function itHasMoreThanEighteen(person) {
  if (person.age >= 18) {
    var mensaje = "Es mayor de edad";
  } else {
    var mensaje = "Es menor de edad";
  }

  console.log(mensaje);
}

itHasMoreThanEighteen(person);

// USING LET
var person = {
  name: "Hector",
  lastname: "Flores",
  age: 29,
};

function itHasMoreThanEighteenLet(person) {
  let mensaje;
  if (person.age >= 18) {
    mensaje = "Es mayor de edad";
  } else {
    mensaje = "Es menor de edad";
  }

  console.log(mensaje);
}

itHasMoreThanEighteenLet(person);

const MORE_THAN_EIGHTEEN = 18;

var person = {
  name: "Hector",
  lastname: "Flores",
  age: 27
};

function isItHaveMoreThanEightTeen(person) {
  return person.age >= MORE_THAN_EIGHTEEN;
}

function printResult(person) {
  if (isItHaveMoreThanEightTeen(person)) {
    console.log(`Yes`);
  } else {
    console.log(`No`);
  }
}

printResult(person);

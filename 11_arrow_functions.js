const MORE_THAN_EIGHTEEN = 18;

var person = {
  name: "Hector",
  lastname: "Flores",
  age: 27
};

var isItHaveMoreThanEightTeen = ({ age }) => {
  return age >= MORE_THAN_EIGHTEEN;
};

function printResult(person) {
  if (isItHaveMoreThanEightTeen(person)) {
    console.log(`Yes`);
  } else {
    console.log(`No`);
  }
}

printResult(person);

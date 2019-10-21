var a = 5;
var b = 7;

function MathOperation(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Nothing happen..";
  }
}

console.log(MathOperation(a, b, "+"));
console.log(MathOperation(a, b, "-"));
console.log(MathOperation(a, b, "*"));
console.log(MathOperation(a, b, "/"));

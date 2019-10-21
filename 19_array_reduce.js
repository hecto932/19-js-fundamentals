var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const counter = (beforeValue, currentValue) => beforeValue + currentValue;

console.log(numbers.reduce(counter, 0));

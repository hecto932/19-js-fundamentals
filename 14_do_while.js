var counter = 0;

const raining = () => Math.random() < 0.25;

do {
  counter++;
} while (!raining());

console.log(`I went to check if it's raining ${counter} times`);

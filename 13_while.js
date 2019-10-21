const GOAL = i => i < 365;
var i = 1;

while (GOAL(i)) {
  console.log(Math.random());
  i += 1;
}

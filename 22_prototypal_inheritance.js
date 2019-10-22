function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.age = 20;
}

function Developer(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

function inheritFrom(childrenPrototype, fatherPrototype) {
  var fn = function() {};
  fn.prototype = fatherPrototype.prototype;
  childrenPrototype.prototype = new fn();
  childrenPrototype.prototype.constructor = childrenPrototype;
}

Person.prototype.sayHello = function() {
  console.log(`Hi! ${this.name} ${this.lastname}`);
};

inheritFrom(Developer, Person);

Developer.prototype.sayHello = function() {
  console.log(`Hi! my name is ${this.name} ${this.lastname}`);
};

var hector = new Person("Hector", "Flores");
var victoria = new Person("Victoria", "Flores");
var leslie = new Person("Hector", "Flores");

console.log(hector);

hector.sayHello();
victoria.sayHello();
leslie.sayHello();

var dev = new Developer("Victoria", "Acosta");

console.log(dev);
dev.sayHello();

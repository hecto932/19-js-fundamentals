function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.age = 20;
}

Person.prototype.sayHello = () => {
  console.log(`Hi! ${this.name} ${this.lastname}`);
};

var hector = new Person("Hector", "Flores");
var victoria = new Person("Victoria", "Flores");
var leslie = new Person("Hector", "Flores");

console.log(hector);

hector.sayHello();
victoria.sayHello();
leslie.sayHello();

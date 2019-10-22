class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} make noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} bark`);
  }
}

const dog = new Dog("Asha");
dog.speak();

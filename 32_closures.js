function createGreeting(lastPhrase) {
  return function(name) {
    return `Hello ${name}! ${lastPhrase} `;
  };
}

const MexicanGreeting = createGreeting("guey");
const ArgentinianGreeting = createGreeting("che");
const VenezuelanGreeting = createGreeting("pana");

console.log(MexicanGreeting("Hector"));
console.log(ArgentinianGreeting("Hector"));
console.log(VenezuelanGreeting("Hector"));

class OldSyntax {
  constructor() {
    this.name = "Mike";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `hi. My name is ${this.name}.`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());
console.log(oldSyntax);

// ------

class NewSyntax {
  name = "jen";
  // arrow functions dont bind their own this value
  getGreeting = () => {
    return `hi. My name is ${this.name}.`;
  };
}
// didnt need constructor function

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting();
console.log(newSyntax);

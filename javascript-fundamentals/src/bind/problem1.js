var bob = {name: "Bob"};
function greet() {
    return "I'm " + this.name;
}
bob.greeting = greet;
bob.greeting = bob.greeting.bind(greet);
// bind greet to bob
console.log(bob);
module.exports = greet;
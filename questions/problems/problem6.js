// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["mult", 20, 10],
  ["sub", 20, 10],
  ["add", 20, 10],
  ["add", 30, 5]
]

let outputs = [
  30,
  undefined,
  200,
  10,
  30,
  35
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/

function f(operation) {
    var operation1 = operation[0];
    var firstArgument1 = operation[1];
    var secondArgument2 = operation[2];
    var add = firstArgument1 + secondArgument2;
    var sub = firstArgument1 - secondArgument2;
    var mult = firstArgument1 * secondArgument2;
    if (operation[0] === "add") {
      return add;
    } else if ( operation1 === "sub") {
      return sub;
    } else if ( operation1 === "mult")  {
      return mult;
    } else {
      return undefined;
    }


}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);

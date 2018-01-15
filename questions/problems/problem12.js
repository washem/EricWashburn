var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[], []],
    [[1], [1]],
    [[1], [2]],
    [[1, 2, 4], [2, 3]],
    [[1, 1, 2], [2, 3, 3]]
]

let outputs = [
    [],
    [],
    [1, 2],
    [4, 3, 1],
    [1, 3]
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
function f(arr) {
    var arr1 = arr[0];
    var arr2 = arr[1];
    var ret = [];
    for (var i = 0; i < arr1.length ; i++) {
        if (isNaN(arr1[i])) {
            i++   
           }
        var inArray2 = false;
        var array1Element = arr1[i];
        for (var j = 0; j < arr2.length; j++) {
            if (isNaN(arr2[j])) {
                j++   
               }
            var array2Element = arr2[j];
            console.log("arr2[j] = "+arr2[j]);
            if (array1Element === array2Element)    {
                inArray2 = true; 
            } else { 
                //send arr2[j] somewhere
                var b = [arr2[j]];
            }

        }
        if (!inArray2) {
            var a = [arr1[i]];
            var c = a.concat(b);
            ret.push(c);
            console.log("a = "+a)
            console.log("b = "+b)//holding no value
            console.log("array2Element = " +array2Element)
            console.log("c = "+c);
            //console.log("arr1[i] = " +arr1[i]);
            //console.log("ret = "+ret);
        }
    }
    //return c;
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    console.log("outputs " + outputs[i]);
    var actual = f(inputs[i]);
    console.log("inputs " +inputs[i]);
    assert.deepEqual(actual, expected);
}

//runTest(0);
//runTest(1);
runTest(2);
runTest(3);
runTest(4);
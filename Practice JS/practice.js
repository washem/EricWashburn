// QUESTION 1
function a(x) {
    let fullName = {
        name: `${x.firstName} ${x.lastName}`
    }
    return fullName;
    
}

//console.log(a({ firstName: 'George', lastName: 'Washington' })) // should return { name: 'George Washington' }
    
    // QUESTION 2
    function b(x) {
   if (x === 10)    {
       return "TEN";
   } else if (x === 13) {
       return "THIRTEEN";
   } else {
       return "I can't handle that request at the moment, just give me 10 and 13";
   }
    }
    
    // console.log(b(10)) // should return 'TEN'
    // console.log(b(13)) // should return 'THIRTEEN'
    
    // QUESTION 3
    function c(x) {
    for (let i = 0; i < x.length; i++)  {
        x[i] *= 2;
    }
    return x;
    }
    
    //console.log(c([1,2,3])) // should return [2,4,6] 
    
    // QUESTION 4
    const NUM1 = Math.floor(Math.random() * 2);
    const NUM2 = NUM1;

    // console.log(NUM1 === NUM2) // should return true
    
    // QUESTION 5
    function d(x) {
        let newArr = [];
        for (var i = 0; i < x.length; i++)  {
            if (x[i]%2 === 0) {
                newArr.push(x[i]);
            }
        }
        return newArr;
    }
    
    // console.log(d([11,2,4,5])) // should return [2,4]
    
    // QUESTION 6
    function e(x) {
    if (x.key1 && x.key2)   {
        return true
    } else {
        return false
    }
    }
    
    // console.log(e({ key1: false, key2: true })) // should return false
    // console.log(e({ key1: true, key2: true })) // should return true
    
    // QUESTION 7
    function f(x, y) {
    if (y > 0) {
        return `${x} has ${y} apples`;
    } else {
        return `${x} has no apples`;
    }
    }
    
    // console.log(f('Jimmy', 5)) // should return 'Jimmy has 5 apples'
    // console.log(f('Johnny', -9)) // should return 'Johnny has no apples :('
    
    // QUESTION 8
    function g(x, y, z) {
        var result = {
        "x": x,
        "y": y,
        "z": z
        };
        return result;
    }
    
    //console.log(g(3, 'Information', [true, false, 8])) // should return { x: 3, y: 'Information', z: [true, false, 8] };


    function capitalizeWords(sentence)  {
        sentence.toLowerCase();
        var sentenceArray = sentence.split(" ");
        //return sentenceArray;
        sentenceArray = sentenceArray.map(function(str){
            return str.charAt(0).toUpperCase()
        })
        return sentenceArray;
       
            
       
        }
        console.log(capitalizeWords("i like to cook fresh fish with lemon"));
    
    
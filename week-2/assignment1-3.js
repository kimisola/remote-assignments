// Assignment 1: Function and Array

function max(...numbers) {
    // your code here for-loop method preferred
    var maxNum = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if ( numbers[i] > maxNum ) {
            maxNum = numbers[i];
        } 
    } 
    return maxNum
}

console.log(max(1, 2, 4, 5));  // 5
console.log(max(5, 2, 7, 1, 6));  // 7


// Assignment 2: Object

function calculate(args){
    let result;
    if(args.op==="+"){
    result=args.n1+args.n2;
    }else if(args.op==="-"){
    result=args.n1-args.n2;
    }else{
    result="Not supported";
    }
    return result;
    }

    calculate( {op:"+", n1:3, n2:4} );
    console.log(calculate( {op:"+", n1:3, n2:4} ));   // 7

// way 1.
   var args = {
        op: "+",
        n1: 3,
        n2: 4
    }
    console.log(calculate(args)); 

// way 2.
    obj1 = {op:"+", n1:3, n2:1}
    console.log(calculate(obj1));

// way 3.
    obj2 = {op:"+"}
    obj2.n1 = 3
    obj2.n2 = 1
    console.log(calculate(obj2))

    // Try to call calculate function correctly
    /*
    For example, if we have an add function like this:
    function add(args){
    return args.n1+args.n2;
    }
    We can call it by passing an object created by JSON literal:
    add({n1:3, n2:4}); // your first way
    You should find another way to create a proper object.
    // your second way
    */


// Assignment 3: Function, Array, and Object

function avg(data) {
        // your code here
    let totalPrice = 0;
    let avrPrice;
    let num = Object.keys(data["products"]).length;
    data["products"].forEach(function(value) {
        totalPrice += value["price"]
        });
　　return avrPrice = totalPrice / num;
    }

 // 第一個key是size 第二個key是products而裡面有三個項目的list 
    var final = avg({
        size:3,
        products:[
        {
        name:"Product 1",
        price:100
        },
        {
        name:"Product 2",
        price:700
        },
        {
        name:"Product 3",
        price:250
        }
        ]
        }); // show the average price of all products

   　console.log(final);  //350



// Assignment 5: Algorithm Practice (Advanced Optional) 

   function twoSum(nums, target){

    for ( var i = 0; i < nums.length; i++ ) {
        var firstNum = nums[i];
        
        for( var k = 0; k < nums.length; k++ ){
          if ( nums[i] + nums[k] == target) {
            return [i, k];
          }
        }
    }
 }

console.log(twoSum([2, 7, 11, 15], 9))  // [0,1]


// 1. Function : block of code 

// function hello(){
//     console.log("hello world")
// }
// hello(); // function calling 



// 2. Practice Qs : create a function that prints a poem . 

// function poem() {
//     console.log("Twinkle, twinkle, little star,");
//     console.log("How I wonder what you are!")
// }
// poem();



// 3. Practice Qs : Create a function to roll a dice & always display the value of the dice (1 to 6).

//  function dice() {
//     console.log(Math.floor(Math.random()*6)+1);
// }
// dice();



// 4. Function with Arguments :
// arg : values we pass to the function. 

/*
syntax :
    function funName(agr1,agr2...) {
    // do something
    }
*/ 

// function printName(name , age) {
//     console.log(`${name}'s age is ${age}`)
// }
// printName("vivek", 23);
// printName("sahil"); // sahil's age is undefined (age is not passed)
// printName(23); // 23's age is undefined
// printName(); // undefined's age is undefined

// Note: function print argument orderwise . 

// sum function
// function sum(a,b) {
//     console.log(a+b);
// }
// sum(4,5);
// sum(4,4)



// 5. Practice Qs : Create a function that gives us the average of 3 numbers. 

// function avg(a,b,c) {
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// avg(2,2,2);
// avg(4,4,10);



// 6. Practice Qs : Create a function that prints the multiplication table of a number.

// function table(n) {
//     for(let i = 1; i<=10; i++) {
//         console.log(n*i);
//     } 
// }
// table(5);
// console.log(" ");
// table(10)



// 7. return keyword :
// use to return some value from the function.

// sum of two number :
// function sum(a,b) {
//     console.log("hello")
//      console.log("hello")
//     return a+b;
//      console.log("hello") // return statement ke baad jo bhi likte hai wo execute nhi hota hai.
// }
// let s = sum(4,4); // 8
// let n = sum(sum(4,4),4); // 12
// console.log(n);
// console.log(s);

// is adult code 
// function isAdult (age) {
//     if(age>=18) {
//         return "adult";
//     } else {
//         return "not adult";
//     }
//     console.log("this will not execute !")
// }
// console.log(isAdult(19));

// note : return keyword only return single value , but if we want to return multiple value we use array or object.  array or object  bhi ek he return kargega lekin oske andar multiple value store rahete hai.



// 8. Practice Qus : Create a function that returns the sum of numbers from 1 to n.

// function sumOfNum(n) {
//     let sum = 0;
//     for(let i = 1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// let num = 5;
// console.log(sumOfNum(num));



// 9. Practice Ques: Create a function that returns the concatenation of all strings in an array. 

// function str(arr) {
//     let concat = "";
//     for(let i = 0; i<arr.length; i++){
//         concat += arr[i];
//     }
//     return concat;
// }
// let arr = ["v","k","inshu","simran"];
// console.log(str(arr));



// 10.  What is scope ? 
// it determine the accessiblity of variables , objects , functions from different parts of code. scope are : function , block , lexical. 
// function scope  : var defined inside a function are not accessible (visible) from outside the function.
// search karna : can i make the function and variable name same in javascript ?

// let sum = 55; // global scope. (we can use anywhere in this code)
// function Calsum(a,b) {
    // let sum = a+b; // function scope. (can be accessed inside the function only. but if i want to access it ouside the fun it will give error : sum is not defined)
    // console.log(sum); // 3
    // note :  agar fun ke pass same naam ka var hai to fun wala use karega because it is more specific / jada pass me hai but agar nhi hai to wo global scope ka var ka use karega. 
// }
// Calsum(1,2);
// console.log(sum); // 55

// inshort : same var fighting outside the fun then global scope win 
// same var fighting inside the fun then fun scope win.



// 11. Block Scope : variables(let , const) declared inside a {} block cannote be accessed from outside the block. 

// eg 1.
// {
//     let a = 25; 
// }
// console.log(a); // error : a is not defined

// eg 2.
// for(let i=1; i<=5; i++) {
// }
// console.log(i); // error
 
// eg 3. 
// let age = 20;
// if(age>=18) {
//     let str = "adult";
// }
// console.log(str) // error



// 12. Lexical Scope : a variable defined outside a function can be accessible inside another function defined after the variable declaration.  
// The opposite is NOT true. 

// eg 1 :
// function outerFun() {
//     let x = 5;
//     let y = 6; 
//     function innerFun() {
//         console.log(x); // 5
//         console.log(y); // 6
//     }
//     innerFun();
// }
// outerFun();

// eg 2
// function outerFun() {
//     function innerFun() {
//         console.log(x); // 5
//         console.log(y); // 6
//     }
//     innerFun(); // error : Cannot access 'x' before initialization
//     let x = 5;
//     let y = 6; 
// }
// outerFun();

// eg 3 
// function outerFun() {
//     function innerFun() {
//         console.log(x); // 5
//         console.log(y); // 6
//     }
//     let x = 5;  
//     let y = 6; 
//     innerFun(); // it will print
// }
// outerFun();

// eg4 
// bahar se andar - access kar loge
// andar se bahar -  not access .
// function outerFun() {
//     let x = 5;
//     let y = 6;
//     function innerFun() {
//         let a = 10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(a); // error : a is not defined
//     innerFun();
// }
// outerFun();

// eg 5
// function outerFun() {
//     let x = 5;
//     let y = 6;
//     function innerFun() { // function scope
//         let a = 10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(a); // error : a is not defined
//     innerFun();
// }
// innerFun(); // bahar se access nhi kar sakte hai.



// 13 . Practice Question :
//  what will be the output ? 

// let greet = "hello";
// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreen() {
//         console.log(greet);
//     }
// }

// console.log(greet);
// changeGreet();

// Study hoisting then solve these questions .
// Question 1 
// console.log(foo);
// var foo = 10;
// function foo() {
//   console.log("Hello");
// }
// console.log(foo);

// Question 2 
// let x = 5;
// function test() {
//   console.log(x);
//   if (true) {
//     let x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// test();

// Question 3 
// let b = 100;
// function tdzCheck() {
//   console.log(b);
//   let b = 50;
// }
// tdzCheck();


// Question 4 
// var a = 1;
// if (true) {
//   var a = 2;
//   let b = 3;
// }
// console.log(a);
// console.log( b);


// Question 5 

// let x = 10;

// function scopeTest(x) {
//   console.log(x);
//   x = 20;
//   console.log(x);
// }

// scopeTest();
// console.log(x);


// 14. Function Expression :
// storing fun in some variable 
// nameless function 

// let sum = function(a,b) {
//     return a+b;
// }
// console.log(sum(1,2));

// hello fun
// let hello = function() {
//     console.log("hello");
// }
// hello();

// update
// hello = function() {
//     console.log("namaste");
// }
// hello();


// 15. Higher Order Function :
// 1. takes one or multiple function as arguments .
// 2. return a function.

// function multipleGreet(hi,func , count) {
//     for(let i = 1; i<=count; i++) {
//         func(); // variable call hoga
//         hi();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(function() {console.log("hii");},greet,4);


function oddEvenFactory() {
    if(request == "odd") {
    let odd = function() {
    if(!(n%2==0)) {
        return "odd"; 
    }
}
    }
   
}
}
let odd = function() {
    if(!(n%2==0)) {
        return "odd"; 
    }
}

let even = function() {
     if((n%2==0)) {
        return "even"; 
    }
}

let request = "odd";
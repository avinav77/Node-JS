// function sayHello() {
//     let you= prompt("What is your name?");
//     console.log("Hello " + you + "!");
// }
// sayHello();
// let varContainingFunction = function() {
//     let varInFunction = "I am in a function";  
//     console.log("hi there!",varInFunction); 
// }
// varContainingFunction();
// function tester(para1, para2) {
//     return para1 +" "+ para2;
// }
// const arg1= "argument1";
// const arg2= "argument2";
// console.log(tester(arg1,arg2));
// function addTwoNumbers(x,y) {
//     console.log(x+y);
// }
// let x= parseInt(prompt("Enter first number:"));
// let y= parseInt(prompt("Enter second number:"));
// addTwoNumbers(5,10);
// let arr=[];
// arr.push("argument1");
// console.log(arr[0]);
// function addTwoNumbers(x=2,y=3) {
//     console.log(x+y);
// }
// addTwoNumbers();
// addTwoNumbers(5,10);
// addTwoNumbers(5);
// addTwoNumbers(1,2,3,4);
// Arrow function are a shorter syntax for writing function expressions.
// let doingStuff= x => console.log(x);
// doingStuff("hi there!");
// const arr =["squirrel","alpaca","buddy"];
// arr.forEach(e=> console.log(e));

// SPREAD OPERATOR
// let spread=["so","much","fun"];
// let message= ["hello",...spread,"world"];
// console.log(message);
// let message1= ["hello",spread,"world"];
// console.log(message1);
// function addTwoNumbers(x,y,z,a) {
//     console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr1=[10,20];
// addTwoNumbers(...arr,...arr1);

//REST OPERATOR/PARAMETER
// function someFunction(param1,...param2) {
//     console.log(param1,param2);
// }
// someFunction("hi","there!","how are you");

//Returning Function Values 
// function addTwoNumbers(x,y) {
//         console.log(x+y);
//     }
// let result= addTwoNumbers(5,10); // This will log undefined because the function does not return a value
// If you want to return the sum, you can modify the function like this:
// function addTwoNumbers(x,y) {
//         return x+y; 
// }
// let result= addTwoNumbers(5,10); 
// console.log(result);
// let resultsArr=[];
// for(let i=0; i<10; i++) {
//     let result= addTwoNumbers(i,2*i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);
// RETURNING WITH ARROW FUNCTION
// let addTwoNumbers= (x,y) => x+y; 
// let result= addTwoNumbers(5,10); 
// console.log(result);
// let addTwoNumbers= (x,y) => {
//     console.log("Adding...");
//     return x+y;
// }
// let result= addTwoNumbers(5,10);
// console.log(result);


//Variable Scope in Functions:-
 // Local Variables in functions
// function testAvailability(x){
//     console.log("Available here: ",x);
// }
// testAvailability("hi");
// console.log("Available here: ",x); // This will throw an error because x is not defined in this scope
// function testAvailability(){
//     let y="Local variable";
//     console.log("Available here: ",y);
// }
// testAvailability();
// console.log("NOT Available here: ",y); 
// function testAvailability(){
//     let y="I will Return"
//     console.log("Available here: ",y);
//     return y;
// }
// let z=testAvailability();
// console.log("Outside the function: ",z); 
// console.log("Not Available here: ",y); // This will throw an error because y is not defined in this scope

// function doingStuff() {
//     if(true){
//         var x="local";
//     }
//     console.log(x);
    
// }
// doingStuff(); // This will log "local" because var is function-scoped
// 
// function doingStuff(){
//     if(true){
//     console.log(x);
//     //let x="local";} // This will throw an error because let is block-scoped
//     var x="local";}   // This will log "undefined" because var is hoisted to the top of the function
// }
// doingStuff();

//const scope

// function doingStuff() {
//     if(true){
//         const x="local";
//     }
//     console.log(x);
    
// }
// doingStuff(); 


//Global Variables:- In JavaScript, variables declared outside of a function are global variables and can be accessed from anywhere in the code.
// let globalVar = "I am a global variable";
// console.log("Outside function",globalVar); // This will log "I am a global variable"
// function creatingNewScope(x) {
//     console.log("Inside function",globalVar); // This will log "I am a global variable"
// }
// creatingNewScope("hi");
// console.log("Still Outside function",globalVar); 
// If i want to hide the accessibility of global variable inside the function i can a new variable with same name inside the function(scope),this can be done for let,var,const.

// let x="Global";
// function doingStuff() {
//     let x="Local";
//     console.log(x); // This will log "Local"
// }
// doingStuff();
// console.log(x); // This will log "Global" 
// let x="Global";
// function doingStuff(x) {
//     console.log(x); 
// }
// doingStuff("param");

// function confuseReader() {
//     x="Guess my scope..."
//     console.log("Inside the function: ",x); // This will log "Guess my scope..."
    
// }
// confuseReader();
// console.log("Outside the function: ",x); // This will log "Guess my scope..." because x is declared without var, let, or const inside the function, making it a global variable.

// Immediately invoked function expression (IIFE) is a function that runs as soon as it is defined.
//  (function() {
//     console.log("I am an IIFE!"); 
// })();
// (()=>{
//     console.log("I am an IIFE!"); 
// })();
// RECURSIVE FUNCTION
// function getRecursive(nr) {
    
//     if(nr > 0) {
//         getRecursive(--nr);
//     }
//     console.log(nr);
// }
// getRecursive(3);
// function logRecursive(nr) {
//     console.log(nr);
//     if(nr > 0) {
//         logRecursive(nr-1);
//     }
//     else {
//         console.log("End of recursion");
//     }
//     console.log("Exiting recursion",nr);
// }
// logRecursive(3);

// The performance of recursive functions is slightly worse than that of iterative functions because of the overhead of function calls and stack management.
// However, recursive functions can be more elegant and easier to read in some cases.

//Nested Functions
// function outerFunction(nr) {
//     console.log("I am the outer function!");
//     doInnerFunction(nr);
//     function doInnerFunction(x) {
        
//         console.log(x+7);
//         console.log("I am the inner function!",nr);
//     }
// }
// outerFunction(2);

// Anonymous Functions & Function Callbacks
// let functionVariable = function () {
//     console.log("I am an anonymous function!"); 
// };
// functionVariable();
// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Doing flexible stuff...");
// };
// doFlexibleStuff(functionVariable); // This will log "I am an anonymous function!" and "Doing flexible stuff..."
// let youGotThis= function(){
//     console.log("You got this!");
// };
// setTimeout(youGotThis, 10000); // This will log "You got this!" after 1 seconds
// setInterval(youGotThis, 1000); // This will log "You got this!" every 1 seconds
let val=10;

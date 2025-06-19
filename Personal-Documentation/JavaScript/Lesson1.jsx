let num = 25; //variables declared with let can be redefined. 
const num2 = 25; //variables declared with const can not be redefined. 

//Data types: string, numbers, booleans and objects. 
function helloWorld(){
    return "Hello World";
}

function greet(name){
    console.log("Hello "+ name);
}
const sayBye = (name) => {
    console.log("Bye "+ name);
}

//arrays
let arr = [2, 5, "Gagan", true];

//Objects
let person = {
    name: "Gagandeep",
    age: 25
}

//Callback functions 
//Functions can take other functions as input. 

//Example 1
function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log(data);
}

sum(1,2, displayResult);

//Example 2
function calculateArithmetic(num1, num2, doArithmetic){
    doArithmetic(num1, num2);
}

function doSum(num1, num2){
    console.log(num1+ num2);
}

function doSubtract(num1, num2){
    console.log(num1 - num2);
}

calculateArithmetic(4,2, doSubtract);


//setTimeout
//Number of seconds you wait then the function you mention gets called
// , till then it waits in the stack, even this is a callback since a function is being 
//sent as a parameter.

//Example 1
setTimeout(helloWorld,5000);


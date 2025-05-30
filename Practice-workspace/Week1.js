/* String Manipulation */

let str1 = "Hi my name is Gagandeep and my father's name is Harjit singh";
let str2 = "Gagandeep";
let str3 = "JavaScript";

console.log(str1.indexOf(str2)); //first occurance of a string.
console.log(str1.lastIndexOf(str2)); //last occurance of a string. 
console.log(str1.slice(0,23)); //fetch of slice of the string much like java's substring method, beginning index
//is inclusive and the ending index is exclusive. 
console.log(str1.replace(str2, str3)); //replacing str2 with str3 in str1
console.log(str1.split(" ")); //splits string into an array
console.log("      gagandeep            ".trim())
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(parseInt("12nroicn"));
console.log(parseInt("12.432"));

/* Arrays */
const initialArray = [1,2,3,4];
const arr2 = [5,6,7];
initialArray.push(2);
initialArray.push(3); //adds elements into the array
initialArray.pop(); //deletes from the end of the array
initialArray.shift(); //deletes from the front of array
initialArray.unshift(23); //puts something in the front of the array
console.log(initialArray);
console.log(initialArray.concat(arr2));

function printElement(str){
  console.log(str);
}
initialArray.forEach(printElement);  //for each can be used instead of fori, 
// by giving it an array and a callback function that prints. 

//Classes
//classes
class Animal{
  constructor(animalName)
  {
    this.animalName = animalName;
}
  speak(){
    console.log(this.animalName + " makes a noise");
  }
  static myType(){
    console.log("Living organism");
}
}

let dog = new Animal("Tommy");
dog.speak();
Animal.myType();

//Dates
const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getDay());
console.log(currentDate.getFullYear());

//JSON
//parse
const users = '{"userName": "Gagandeep", "age": 26}';
const user = JSON.parse(users);
console.log(user["userName"]);
console.log(user["age"]);

//Stringify
const users1 = {
  "name":"Gagandeep singh",
  "age" : 26
}
const user1 = JSON.stringify(users);
console.log(user);
//Callback functions 

function calculateArithmetic(a,b, fn){
  fn(a,b);
}

function sum(a,b){
  console.log(a+b);
}

function diff(a,b){
  console.log(a-b);
}

calculateArithmetic(5,2,sum); 

calculateArithmetic(5,2,diff);

//Async 
function findSum(n){
  let sum = 0;
  for(let i = 0; i <= n; i++){
     sum = sum + i;
  }
  console.log(sum);
} 
function findSumTill100(){
  return findSum(100);
}

setTimeout(findSumTill100  ,1000);
console.log("Hello World");

const fs = require("fs");
//filesystem module

fs.readFile("Practice-workspace/a.txt", "utf-8", function(err, data){
  console.log(data);
})
 

//callbacks only make sense in async functions.
const fs = require("fs");

function gaganReadFile(cb) {
    fs.readFile("Practice-workspace/a.txt","utf-8", function(err, data) {
        cb(data);
    });
}

function onDone(data){
    console.log(data);
}

gaganReadFile(onDone);

//Above code with promise. 
function GagansReadFile(){
  return new Promise(function(resolve){
    fs.readFile("Practice-workspace/a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  })
}

function onDonePrint(data){
  console.log(data);
}

GagansReadFile().then(onDonePrint);

//Async await
 function gaganAsyncFunction(){
    let p = new Promise(function(resolve) {
        setTimeout(function(){
            resolve("Hi there");},1000);
    });
    return p;
}

async function gaganAsyncFunctionAsync() {
    let value = await gaganAsyncFunction();
    console.log(value);
}

gaganAsyncFunctionAsync();

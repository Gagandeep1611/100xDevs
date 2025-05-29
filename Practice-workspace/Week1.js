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

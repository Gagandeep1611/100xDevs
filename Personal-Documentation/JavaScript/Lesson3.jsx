//Aynsc await and promises
//A Promise represents a value that may be available now, later, or never
//async functions always return a promise. await pauses execution until the promise resolves.
//Example Async functions: fs.readFile, fetch etc. 

//Example to explain.
function findSumTill100(){
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        sum = sum+i;
    }
   console.log(sum);
}
setTimeout(findSumTill100,5000);
console.log("Hello World");

// The above example is asynchronous.
// setTimeout schedules findSumTill100 to run after 5000ms.
// Meanwhile, "Hello World" is printed immediately.
// findSumTill100 is placed in the event queue and runs only after the delay and when the call stack is empty. 

//Explain1
//Promises are syntactical sugar to make callbacks readable. 
const fs = require("fs");
function GaganReadFile(){
    return new Promise(function(resolve, reject){
        fs.readFile("D:/Study/100xDevs/Personal-Documentation/JavaScript/a.txt", "utf-8", function(err, data){
            if(err){
                console.log(err);
                reject(err)
            }else{
            resolve(data);
            }
        });
    })    
}

//callback funtion to call
function onDone(data){
    console.log(data);
}

GaganReadFile().then(onDone);


//Async await

function gaganAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there");
        },3000)
    });
    return p;
}

async function main(){
    let value = await gaganAsyncFunction();
    console.log("Hello World");
    console.log(value);
}

main();
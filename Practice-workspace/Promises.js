/* promises are just syntactical sugar, to write asynchronous function. */
const fs = require("fs");

//Ugly way 
function gaganReadsFile(cb){
    fs.readFile("Practice-workspace/a.txt","utf-8", function(err, data){
        cb("First data: "+ data);
    });
}

//callback function to call
function onDone(data){
    console.log(data);
}

gaganReadsFile(onDone);

//cleaner way using promises.
/* the motive to use promises is to get rid of callbacks */

function promiseGaganReadsFile(){
    return new Promise(function(resolve){
        fs.readFile("Practice-workspace/a.txt", "utf-8", function(err, data){
            resolve("Second data: "+ data);
        });
    });
}

promiseGaganReadsFile().then(onDone);


//Async Await

function asyncGaganReadsFile(){
    return new Promise(function(resolve){
        fs.readFile("Practice-workspace/a.txt", "utf-8", function(err, data){
            resolve("Third data: "+ data);
        });
    });
}

async function main(){
    let value =await asyncGaganReadsFile();
    console.log(value);
}

main();
const fs = require("fs");

fs.readFile("Practice-workspace/a.txt","utf-8", function(err, data) {
    console.log(data);
})

console.log("Hi there");


fs.writeFile("Practice-workspace/a.txt","This is the new content", function(err){
    if(err){
        console.log("Not done");
    }else{
        console.log("File written successfully.");
    }
})

/* Hi there will print first since fs is an asynchronous function and it takes time
so it continues till fs returns the contents.*/
/* Intial Notes */
/*
What is ECMAScript is a standard to create javascript engines
Java script is the browser javascript runtime, v8 engine, the java compiler that runs in your browser
NodeJS pulls JS from browser and runs it in your local system.  
*/

// What node js can do: make games, CLIs, HTTP Servers or a video player. 

/*What is HTTP Server: 
HTTP(Hyper text transfer protocol) is defined for machines to communicate 
specifically for websites. Very common way for a website's frontend to talk to the backend. */

//basic node.js hello world

const express = require("express");

const port = 3000;
const app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
})

app.listen(port, function() {
    console.log(`Example app listening to port ${port}`);
})

//Second code
const express = require("express");
const bodyParser = require("body-parser");
// const port = 3000;
// const app = express();

app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log(req.body);
    res.send("<h1>Hello</h1> <h5>Whatsupp</h5>");
})

app.post("/conversation", function(req, res) {
    console.log(req.body);
    res.send(
        
    )
})

app.listen(port, function() {
    console.log(`Example app listening to port ${port}`);
})

//Third code - Fetch

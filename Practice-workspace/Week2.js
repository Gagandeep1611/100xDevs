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


//Bash commands 

/* 
pwd = print working directory
cd = change directory 
cd .. to go back one dir
cd ../.. to go back two dirs 
cd to go to root 
cd (either absolute or relative address)
ls = lists all the contents in the current directory. 
mkdir to make directories
touch to create a file. 
nano also creates a file and also lets you edit existing files in the terminal itself. 
cat prints the contents of a file.
vi also lets you edit files (press esc :q! to exit the vi editor.)
mv lets you move files from one directory to another
cp copies files
use cp -r to do recursive copying
Node will let you run js in your command line. 
npm is node package manager
*/

/* 
chmod is used to change permissions 
chmod ugo+/-rwx <folder or file name>
ugo is user group other
+/- plus is adding - is removing permissions
rwx read write execute
if its a folder we have to add -R option for recursive. 

4 for read
2 for write
1 for execute. 

chmod 664 <filename>
it means 6 is 4+2 i.e, read and write and each digit is user group other in this sequence. 
 echo is like println 
head -numberofrows<filename> 
tail <filename> for first 10 and last 10 lines of a file.
command 1 || command2 whatver result comes from command1 flows to command2 

head -n +7 index.txt| tail -3
this means give me the first 7 lines (+7) and then give me the last 3 lines (-3) of those 7 lines. 
wc <filename> gives you number of lines, number of words and number of characters.
grep is used for string search. 
sed awk. 
*/



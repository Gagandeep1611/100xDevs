const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

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
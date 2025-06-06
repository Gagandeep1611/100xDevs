const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/add", function(req, res){
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
})

app.listen(3000);
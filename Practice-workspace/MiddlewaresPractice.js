const express = require("express");
const  zod = require("zod");
const app = express();

app.use(express.json());

//first type of middleware, used as a constructor for APIs.  
function middleware1(req, res, next) {
    console.log("middleware1 running before /health-checkup for input validation.");
    next();
}
app.post("/health-checkup", middleware1, function(req,res,next){
    console.log("In /health-checkup post API.")
    
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have "+ kidneyLength + " Kidneys");

});

//Second type of middleware. used for error handling
app.use(function(err, req, res, next){
    res.json({
        error: "Something went wrong on our end."
    })
})
app.listen(3000);
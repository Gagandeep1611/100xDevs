const express = require("express") 
const app = express()
const cors = require("cors");
app.use(cors())
app.use(express.json()) 
const mainRouter = require("./routes/index");


// Routing
app.use("/api.v1/",mainRouter)
//requests coming to this prefix of url should go to the mainRouter. 

app.get("/", function(req, res){
    res.send("Welcome to paytm.")
})

app.listen(3000);
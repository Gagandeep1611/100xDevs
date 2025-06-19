const express = require("express");
const app = express();
app.use(express.json()) //is used to parse incoming JSON payloads from HTTP requests.
//GetAPI
app.get("/", (req, res)=>{
    res.send("Hello World");
})

//Middlewares
function middlewareFunction(req, res, next){
    console.log("Hello from middleware.s")
    next();
}
app.get("/middleware", middlewareFunction,(req, res)=>{
    res.send("middleware functions run before this API.")
})

//Zod : used for input validation.
const zod = require("zod");

const schema = zod.array(zod.number()); //defining schema

app.post("/get-input", function(req, res){
    const input = req.body.input;
    const response = schema.safeParse(input);
    if(!response.success){
        res.status(401).json({
            msg: "Invalid Input!"
        })
    }else{
    res.send({response});
    }
})

// in postman {
//     "input": [1,2,3,4,5]
// }

//examples of more schemas
const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
})
app.listen(3000);
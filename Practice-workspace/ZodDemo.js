const express = require("express");
const  zod = require("zod");
const app = express();
const schema = zod.array(zod.number()); //defines that my schema would be an array of number. 

//Example of how we can declare a schema using zod. 
const schema2 = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: z.array(zod.number())
});

app.use(express.json());

app.post("/health-checkup", function(req,res){
    
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success)   {
        res.status(411).json({
            msg:"Something's wrong!"
        })
    }else{
    res.send({
        response
    });
    }
});

app.listen(3000);
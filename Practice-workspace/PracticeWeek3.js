const express = require("express");
const zod = require("zod");

const app = express();
const schema = zod.object({
    str: zod.array(zod.string())
});
app.use(express.json());

app.post("/checkString", function(req, res){

    const str = req.body;
    const response = schema.safeParse(str);

    if(!response.success){
        res.json({
            message: "That aint no array of string bro."
        });
    }else{
        res.json({
            message: "Found it!!!",
            data: response.data
        })
    } 
})

app.listen(3000)
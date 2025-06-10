const express = require("express");
const { createToDo, updateToDo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");


const app = express();
app.use(cors());

app.use(express.json()) 

app.get("/welcome", function(req, res){
    console.log("in /welcome endpoint.")
    res.send("Hello World");
})
app.get("/todos",async function(req, res){
    const todos =await todo.find({}); 
 
    res.json({
        todos
    })
})

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs."
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created."
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateToDo.safeParse(updatePayload);
    if(!parsedPayload.success){
       res.status(411).json({
            msg: "You sent wrong inputs."
        })
        return; 
    }
    //update in mongodb
    const result = await todo.updateOne(
    { _id: req.body.id },
    { $set: { completed: true } }
  );
  console.log(result)
    res.json({
        msg: "Todo marked as completed."
    })
})

app.listen(3000);
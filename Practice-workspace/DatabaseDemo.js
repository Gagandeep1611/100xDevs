const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/userappnew");

//Describe schema
const User = mongoose.model("Users", {
    name: "String",
    email: "String",
    password: "String",
})   

app.post("/signup", async function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req. body.password;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send("Username already exists.");
    }

    const user = new User({
    name: name, 
    email: email, 
    password: password
    });
user.save();
res.json({
    msg: "User created successfully."
})
})

app.listen(3000);


// //create user
// const user = new User({
//     name: "Gagandeep", 
//     email: "gagandeep161198@gmail.com", 
//     password: "12345"});

//Save
// user.save();
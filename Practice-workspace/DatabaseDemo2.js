const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/userappnew");

//Describe schema
const User = mongoose.model("Users", {
    name: "String",
    email: "String",
    password: "String",
})   

//create user
const user = new User({
    name: "Gagandeep", 
    email: "gagandeep161198@gmail.com", 
    password: "12345"});

//Save
user.save();
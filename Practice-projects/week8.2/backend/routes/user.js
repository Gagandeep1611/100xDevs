const express = require("express");
const{authMiddleware} = require("../middleware");
const zod = require("zod");
const { User } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const{JWT_SECRET} = require("./config");


const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})
router.post("/signup",async (req, res) => {
    const body = req.body;
    const{success} = signupSchema.safeParse(body);
    if(!success){
        return res.json({
            message: "Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: body.username
    })

    if(existingUser){
        return res.status(400).json({
            message: "User already exists!"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
    
});
router.post("/signin",async (req, res)=>{
    const body = req.body;
    const{success} = signinSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect Username/Password"
        })
    }
     const user = await User.findOne({
        username: body.username,
        password: body.password
     });
     if(user){
        const token = jwt.sign({
            userId: user._id
        },JWT_SECRET);
        res.json({
            token: token,
            message: "Signed in Successfully!"
        });
     }
     res.status(411).json({
        message: "User doesnt exist."
     })
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put("",authMiddleware, async (req, res)=>{
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message : "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id:req.userId
    })

    res.json({
        message:'Updated successfully'
    })
})

module.exports = router;

//api/v1/user 


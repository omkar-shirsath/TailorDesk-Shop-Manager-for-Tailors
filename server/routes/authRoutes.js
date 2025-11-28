const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/register",async(req,res)=>{
    try{
        const {name , email,password} = req.body;

        const existing = await User.findOne({email});
        if(existing){
            return res.status(400).json({error:"Admin already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });

        res.json({message:"Admin registered Successfully",user});
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

//Login

router.post("/login",async(req,res)=>{
    try{
        const{email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Invalid credentials"});
        }

        const passwordMatch = await bcrypt.compare(password,user.password);
        if(!passwordMatch){
            return res.status(400).json({error:"Invalid credentials"});
        }

        const token = jwt.sign(
            {
                userId:user._id, role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"7d"
            }
        );

        res.json({message:"Login successful",token});

    }catch(err){
        res.status(500).json({error:err.message});
    }
});

module.exports = router;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        eamil:{type:String, required:true,unique:true},
        password:{type:String, required:ture},
        roal:{type:String,enum:["admin"],default:"admin"},

    },
    {timestamps:true}


);

module.exports = mongoose.model("User",userSchema);
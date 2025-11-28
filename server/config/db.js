const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    }catch(err){
        console.log("Database connection Error",err.message);
        process.exit(0);
    }
}

module.exports = connectDB;
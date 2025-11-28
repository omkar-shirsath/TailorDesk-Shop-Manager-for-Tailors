const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");


dotenv.config();

const app = express();

//midelwares
app.use(cors());
app.use(express.json());

//connect the database
connectDB();

app.use("/auth",authRoutes);

app.get("/",(req,res)=>{
    res.send("runing api call");
})


const PORT = process.env.PORT || 8000;
app.listen(PORT,(req,res)=>{
    console.log(`Server runing on ${PORT}`);
})
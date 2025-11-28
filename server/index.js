const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//midelwares
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("runing api call");
})
const PORT = process.env.PORT;
app.listen(PORT,(req,res)=>{
    console.log(`Server runing on ${PORT}`);
})
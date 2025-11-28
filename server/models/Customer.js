const mongoose = require("mongoose");

const measurementSchema = new mongoose.Schema(
    {
        bust: Number,
        underbust: Number,
        shoulder: Number,
        blouseLength: Number,
        sleeveLength: Number,
        neckFront: Number,
        neckBack: Number,
        armhole: Number,
        fitType: {
        type: String,
        enum: ["Tight", "Regular", "Loose"],
        },
        notes: String,
    },
    {_id:false} //no seperate id for this doc
);

const customerSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        phone:{type:String,required:true,unique:true},
        notes:{type:String},

        latestMeasurements:{
            type:measurementSchema,
            defualt:null,
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("Customer",customerSchema);
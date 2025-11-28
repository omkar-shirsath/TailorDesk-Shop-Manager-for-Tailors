const mongoose = require("mongoose");

const measurementSnapshotSchema = new mongoose.Schema(
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
  { _id: false }
);

const orderSchema = new mongoose.Schema(
   {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
        },

        orderType: {
            type: String,
            enum: ["Blouse", "Lehenga Blouse", "Saree Fall", "Alteration", "Other"],
            default: "Blouse",
        },

        status: {
            type: String,
            enum: ["Pending", "Cutting", "Stitching", "Ready", "Delivered"],
            default: "Pending",
        },

        deliveryDate: { type: Date, required: true },

        price: { type: Number, required: true },
        advance: { type: Number, default: 0 },
        balance: { type: Number, default: 0 },

        designNotes: { type: String },
        designImageUrl: { type: String },

        measurementsSnapshot: measurementSnapshotSchema,
  },
  { timestamps: true }
);

moduel.exports = mongoose.model("Order",orderSchema);
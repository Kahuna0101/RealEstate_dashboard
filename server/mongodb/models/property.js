import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    propertyType: { type: String, required: true },
    propertyStatus: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    gateHouse: { type: String, required: true },
    baths: { type: Number, required: true},
    rooms: { type: Number, required: true },
    area: { type: Number, required: true },
    video: { type: String, required: true },
    panorama: { type: String, required: true },
    images: [{ type: String, required: true }],
    legalDoc: { type: Number, required: true },
    structuralDrawing: { type: Number, required: true },
    surveyPrice: { type: Number, required: true },
    certificationFee: { type: Number, required: true },
    devFee: { type: Number, required: true },
    meFeeDuplex: { type: Number, required: true },
    meFeeBungalow: { type: Number, required: true },
    archFeeDuplex: { type: Number, required: true },
    archFeeBungalow: { type: Number, required: true },
    approvalBungalow: { type: Number, required: true },
    approvalDuplex: { type: Number, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: { type: Date, default: Date.now },
})

const propertyModel = mongoose.model('Property', PropertySchema);

export default propertyModel;
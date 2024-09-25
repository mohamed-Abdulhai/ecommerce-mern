import mongoose from "mongoose";

const schema = new mongoose.Schema({
    code:{
        type:String,
        minLength:[3,'Minimum is 3 letters'],
        maxLength:[200,'Maximum is 200 letters'],
        required:[true, 'The code is required'],
        trim:true,
    },
    amount:{
        type:Number,
        min:0,
        required:[true, 'The amount is required']
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'CreatedBy is required']
    },
    expiryDate:Date,
},{timestamps:true})

export const cuponModel = mongoose.model('Cupon',schema)
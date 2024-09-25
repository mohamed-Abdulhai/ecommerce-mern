import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[3,'Minimum is 3 letters'],
        maxLength:[200,'Maximum is 200 letters'],
    },
    logo:String,
    addedBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'CreatedBy is required']
    },
},{timestamps:true})

export const brandModel = mongoose.model('Brand',schema)
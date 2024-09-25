import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[3,'minimum is 3 letters'],
        maxLength:[200,'maximum is 200 letters'],
        trim:true,
    },
    slug:{
        type:String,
        minLength:[3,'minimum is 3 letters'],
        maxLength:[200,'maximum is 200 letters'],
        trim:true,
    },
    image:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'createdBy is required']
    }
},{timestamps:true})

export const categoryModel = mongoose.model('Category',schema)
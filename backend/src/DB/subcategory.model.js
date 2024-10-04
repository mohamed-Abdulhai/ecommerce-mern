import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[3,'Minimum is 3 letters'],
        maxLength:[200,'Maximum is 200 letters'],
        trim:true,
    },
    slug:{
        type:String,
        minLength:[3,'Minimum is 3 letters'],
        maxLength:[200,'Maximum is 200 letters'],
        trim:true,
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:'Category',
        required:[true,'Category is required']  
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'CreatedBy is required']
    },
},{timestamps:true})

export const subcategoryModel = mongoose.model('Subcategory',schema)
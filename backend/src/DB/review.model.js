import mongoose from "mongoose";

const schema = new mongoose.Schema({
    text:{
        minLength:[1,'Minimum is 1 letter'],
        maxLength:[1000,'Maximum is 1000 letters'],
        trim:true,
    },
    rate:{
        type:Number,
        min:[0,'Minimum number is 0'],
        max:[5,'Maximum number is 5'],
        required:[true,'The rate is required']
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'user is required']
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:'Product',
        required:[true,'Product is required']
    }

},{timestamps:true})

export const reviewModel = mongoose.model('Review',schema)
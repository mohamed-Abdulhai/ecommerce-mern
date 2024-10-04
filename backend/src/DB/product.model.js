import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        minLength:[3,'minimum is 3 letters'],
        maxLength:[200,'maximum is 200 letters'],
        trim:true,
        required:[true,'The title is required'],
        unique:true
    },
    slug:{
        type:String,
        minLength:[3,'minimum is 3 letters'],
        maxLength:[200,'maximum is 200 letters'],
        trim:true,
        required:[true,'The slug is required'],
    },
    coverImage:String,
    images:Array,
    desciption:{
        type:String,
        minLength:[3,'minimum is 3 letters'],
        maxLength:[1000,'maximum is 1000 letters'],
        trim:true,
        required:[true,'The desciption is required'],

    },
    price:{
        type:Number,
        min:0,
        required:[true,'The desciption is required'],
    },
    priceAfterDiscount:{
        type:Number,
        min:0, 
    },
    rateCount:Number,
    rateAvg:Number,
    sold:Number,
    stock:Number,
    category:{
        type:mongoose.Types.ObjectId,
        ref:'Category',
        required:[true,'Category is required']  
    },
    subCategory:{
        type:mongoose.Types.ObjectId,
        ref:'Subcategory',
        required:[true,'Subategory is required']  
    },
    brand:{
        type:mongoose.Types.ObjectId,
        ref:'Brand'
    },
    addedBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'AddedBy is required']
    },
},{timestamps:true})

export const productModel = mongoose.model('Product',schema)
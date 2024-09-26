import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        minLength:[2,'minimum is 2 letters'],
       maxLength:[50,'maximum is 50 letters'],
       required:[true,'The First name is required']
    },
    lastName:{
        type:String,
        trim:true,
        minLength:[2,'minimum is 2 letters'],
        maxLength:[50,'maximum is 50 letters'],
        required:[true,'The last name is required']
    },
    email:{
        type:String,
        trim:true,
        required:[true,'The  email is required'],
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"You're email is not right"],
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:[true,'The password is required'],
    },
    phone:{
        type:String,
        trim:true,
        required:[true,'the phone is required'],
        match:[/^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|51|52|54|55|56)[0-9]{7}$/, "You're phone is no UAE number"],
        unique:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:"user"
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    DOB:String,
    image:String
},{timestamps:true})

export const userModel = mongoose.model('User',schema)
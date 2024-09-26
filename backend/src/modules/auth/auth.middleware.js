import { userModel } from "../../DB/user.model.js"
import { AppError, catchError } from "../../utilities/error.handler.js"
import bcrypt from 'bcrypt'

export const emailChecker = async (req,res,next)=>{
    const user = await userModel.findOne({email:req.body.email})
    if(user){
        return next(new AppError('Email already exist'))
    }
    next()
}
export const phoneChecker = async (req,res,next)=>{
    const user = await userModel.findOne({phone:req.body.phone})
    if(user){
        return next(new AppError('Phone already exist'))
    }
    next()
}

export const hashPassword = catchError( async(req,res,next)=>{
    
    const hashPassword =  bcrypt.hashSync(req.body.password,10)
    req.body.password = hashPassword
    next()
})

export const isBlocked = async(req,res,next)=>{
    
}
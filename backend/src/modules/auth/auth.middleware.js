import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userModel } from "../../DB/user.model.js"
import { AppError, catchError } from "../../utilities/error.handler.js"



export const emailChecker = async (req,res,next)=>{
    const user = await userModel.findOne({email:req.body.email})
    if(user){
        return next(new AppError('Email already exist',403,"failed"))
    }
    next()
}
export const phoneChecker = async (req,res,next)=>{
    const user = await userModel.findOne({phone:req.body.phone})
    if(user){
        return next(new AppError('Phone already exist',403,"failed"))
    }
    next()
}

export const hashPassword = catchError( async(req,res,next)=>{
    
    const hashPassword =  bcrypt.hashSync(req.body.password,10)
    req.body.password = hashPassword
    next()
})

export const isConfirmed = catchError(async (req,res,next)=>{
    const user = await userModel.findOne({email:req.body.email})
    const confirmEmail = user.confirmEmail
    if(confirmEmail === false){
        return next(new AppError('Please confirm your email',401,'failed '))
    }
    next()
})


export const authentication = catchError(async (req,res,next) =>{
    const token = req.cookies.token
    if(!token) return next(new AppError('Plasse login first',401,'failed'))
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            return next(new AppError('Invalid or expired token.', 401, 'failed'));
        }
        const user = await userModel.findById(decoded.id)

        if (!user) {
            return next(new AppError('User not found.', 404, 'failed'));
        }
        
        req.user = decoded
        next()
    });
})

export const authorization = catchError(async (req,res,next)=>{
    const user = await userModel.findById(req.user.id)
    if(user.role === 'admin') return next()
    return next(new AppError('admin only',401,'failed'))    
})


export const isBlocked = async(req,res,next)=>{
    const user = await userModel.findById(req.user.id)
    if(user.isBlocked) return next(new AppError("you are temporary blocked. please contact customer care",409,'failed'))
    next()
}
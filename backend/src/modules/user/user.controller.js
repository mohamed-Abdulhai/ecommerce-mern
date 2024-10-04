import { AppError, catchError } from "../../utilities/error.handler.js";
import {userModel} from '../../DB/user.model.js'

export const getUser = catchError(async (req,res,next)=>{
    const userId = req.user.id
    const user = await userModel.findById(req.params.id)
    if(userId === user._id){
        user.password = undefined
        return res.status(200).json({status:'success',data:{user}})
    } else if(req.user.role === 'admin') return res.status(200).json({status:'success',data:{user}})

    next(new AppError('unauthorized',403,"failed"))
    
})

export const updateUser = catchError(async (req,res,next)=>{

})

export const deleteUser = catchError(async (req,res,next)=>{
    
    if(req.use.id === req.params._id){
        return res.status(200).json({status:'success',data:{user}})
    } else if(req.user.role === 'admin') return res.status(200).json({status:'success',data:{user}})

    next(new AppError('unauthorized',403,"failed"))
})

export const getAllUsers = catchError(async (req,res,next)=>{
    const users = await userModel.find()
    return res.status(200).json({
        status:"success",data:{users}
    })
})

export const deleteAllUsers = catchError(async (req,res,next)=>{
    const users = await userModel.deleteMany()
    return res.status(200).json({
        status:"success",data:{users}
    })

})

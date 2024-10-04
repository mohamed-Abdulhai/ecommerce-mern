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
    if(req.user.id === req.params.id){
        const user = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        user.password = undefined
        return res.status(200).json({status:'success',message:'User updated successfully',data:{user}})
    }
    next(new AppError('unauthorized',403,"failed"))
})

export const deleteUser = catchError(async (req,res,next)=>{
    
    if(req.user.id === req.params.id){
        const user = await userModel.findById(req.params.id)
        return res.status(200).json({status:'success',message:'User deleted successfully'})
    } else if(req.user.role === 'admin'){
        const user = await userModel.findById(req.params.id)
        return res.status(200).json({status:'success',message:'User deleted successfully'})  
    }
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
        status:"success",message:'All users are deleted'})

})

export const blockUser = catchError(async (req,res,next)=>{

})

export const unBlockUser = catchError(async (req,res,next)=>{
    
})

export const makeAdmin = catchError(async (req,res,next)=>{
    
})

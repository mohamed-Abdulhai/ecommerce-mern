import { userModel } from "../../DB/user.model.js";
import { AppError, catchError } from "../../utilities/error.handler.js";
import bcrypt from 'bcrypt'

export const signup = catchError(async (req,res,next)=>{
    const user = await userModel.create(req.body); 
    user.password = undefined; 
    return res.status(201).json({status: 'success',user});
})
export const signin = catchError(async (req,res,next)=>{
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password'); 
    if (!user) {
         next(new AppError('Invalid email or password', 401))
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        next(new AppError('Invalid email or password', 401))
    }
    user.password = undefined;
    return res.status(200).json({
        status: 'success',token:"token",data: {user,},});

})

export const logout = catchError(async (req,res,next)=>{
    
})

export const forgetPassword = catchError(async (req,res,next)=>{
    
})
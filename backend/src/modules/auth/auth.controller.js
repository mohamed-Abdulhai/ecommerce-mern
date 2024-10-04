import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userModel } from "../../DB/user.model.js";
import { AppError, catchError } from "../../utilities/error.handler.js";
import { sendConfirmEmail } from '../../utilities/Emails/confirmEmail/confirmEmail.js';

export const signup = catchError(async (req,res,next)=>{
    const user = await userModel.create(req.body); 
    user.password = undefined; 
    sendConfirmEmail(user._id,user.email)
    return res.status(201).json({
        status: 'success',message:'Siggned up successfully please confirm email',data: {user,},});
})
export const signin = catchError(async (req,res,next)=>{
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password'); 
    if (!user) {
         next(new AppError('Invalid email or password', 401,"failed"))
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        next(new AppError('Invalid email or password', 401,"failed"))
    }
    user.password = undefined;
     const token = jwt.sign({id:user._id,role:user.role,userName:user.userName},process.env.SECRET_KEY)
    res.cookie('token',token,)
    return res.status(200).json({
        status: 'success',message:'Singged in successfully',data: {user,},});

})


export const verifyEmail = catchError(async (req, res, next) => {
    const token = req.params.token
    if(!token) return next(new AppError('Plasse login first',401,'failed'))
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            return next(new AppError('Invalid or expired token.', 401, 'failed'));
        }
        const user = await userModel.findByIdAndUpdate(decoded.id,{confirmEmail:true})

        if (!user) {
            return next(new AppError('User not found.', 404, 'failed'));
        }
        
        return res.status(200).json({
            status:'succes',message:'Confirmed email successfully',
        })
    
    });
});

export const logout = catchError(async (req, res, next) => {
    req.user = null
    res.clearCookie('token');
    
    return res.status(200).json({
        status: 'success',
        message: 'Logged out successfully',
    });
});

export const changePassword = catchError(async (req,res,next)=>{

})


export const forgetPassword = catchError(async (req,res,next)=>{
    const {email} = req.body
    if(!email) return next(new AppError("Enter you're email",403,'failed'))
    const user = await userModel.findOne(email)
    if(!user) return next(new AppError('Email not found',404,'failed'))
})

export const resetPassword = catchError(async (req,res,next)=>{

})
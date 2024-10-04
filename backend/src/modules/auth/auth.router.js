import { Router } from "express";
import { forgetPassword, logout, signin, signup, verifyEmail } from "./auth.controller.js";
import { authentication, emailChecker, hashPassword, isConfirmed, phoneChecker } from "./auth.middleware.js";
import { validate } from "../../middlewares/validation.js";
import { signinSchema, signupSchema, verifyEmailSchema } from "./auth.validation.js";

const router = Router()

router.post('/signup',validate(signupSchema),emailChecker,phoneChecker,hashPassword,signup)
router.post('/signin',validate(signinSchema),isConfirmed,signin)
router.get('/logout',authentication,logout)
router.post('/forget-password',forgetPassword)
router.post('/reset-password/:toekn')
router.get('/verify/:token',validate(verifyEmailSchema),verifyEmail)


export default router
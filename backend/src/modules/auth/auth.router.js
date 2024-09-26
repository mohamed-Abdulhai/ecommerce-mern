import { Router } from "express";
import { forgetPassword, logout, signin, signup } from "./auth.controller.js";
import { emailChecker, hashPassword, phoneChecker } from "./auth.middleware.js";
import { validate } from "../../middlewares/validation.js";
import { signinSchema, signupSchema } from "./auth.validation.js";

const router = Router()

router.post('/signup',validate(signupSchema),emailChecker,phoneChecker,hashPassword,signup)
router.post('/signin',validate(signinSchema),signin)
router.post('/logout',logout)
router.post('/forget-password',forgetPassword)


export default router
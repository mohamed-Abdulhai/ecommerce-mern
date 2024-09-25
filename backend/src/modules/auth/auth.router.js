import { Router } from "express";
import { forgetPassword, logout, signin, signup } from "./auth.controller.js";

const router = Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/logout',logout)
router.post('/forget-password',forgetPassword)


export default router
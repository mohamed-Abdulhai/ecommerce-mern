import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import { confirmEmailTemplate } from './confirmEmailTemplate.js';



export const sendConfirmEmail = async(id,email) =>{
  try {
    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
      const token =  jwt.sign({email,id},process.env.SECRET_KEY)
   
      const info = await transporter.sendMail({
        from: `"ECOMMERCE" <${process.env.EMAIL}>`,
        to: email, 
        subject: "Forget password",
        html: forgetPasswordTemplate(token), 
      });
    
      console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error)
  }
    
}
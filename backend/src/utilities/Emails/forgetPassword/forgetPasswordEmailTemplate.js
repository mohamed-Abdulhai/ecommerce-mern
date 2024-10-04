export const forgetPasswordTemplate = (token)=>{
    return `
    <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2>You have requested to reset your password</h2>
        <p>You received this E-mail in response to your request to reset your password.</p>
        <p>Click the button below to reset your password, the reset password link is only valid for 1 hour.</p>
        <a href="${process.env.HOST}/api/v1/auth/verify/${token}" 
           style="display: inline-block; padding: 10px 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
           Reset Password
        </a>
        
        <br/>
        <p>Best regards,<br/>ECOMMERCE mohamed Abdulhai</p>
      </div>
    `
}
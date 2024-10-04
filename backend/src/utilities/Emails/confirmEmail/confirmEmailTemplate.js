export function confirmEmailTemplate(token) {
    return `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2>Email Confirmation</h2>
        <p>Thank you for registering! Please confirm your email address by clicking the link below:</p>
        <a href="${process.env.HOST}/api/v1/auth/verify/${token}" 
           style="display: inline-block; padding: 10px 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
           Confirm Email
        </a>
        <p>If you didn't create an account, please ignore this email.</p>
        <br/>
        <p>Best regards,<br/>ECOMMERCE mohamed Abdulhai</p>
      </div>
    `;
  }
  
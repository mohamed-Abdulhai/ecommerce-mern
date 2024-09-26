import Joi from "joi";


export const signupSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).required().messages({
        'string.base': `"First Name" should be a type of 'text'`,
        'string.min': `"First Name" should have a minimum length of {#limit}`,
        'string.max': `"First Name" should have a maximum length of {#limit}`,
        'any.required': `"First Name" is required`
    }),
    lastName:Joi.string().min(2).max(50).required().messages({
        'string.base': `"Last Name" should be a type of 'text'`,
        'string.min': `"Last Name" should have a minimum length of {#limit}`,
        'string.max': `"Last Name" should have a maximum length of {#limit}`,
        'any.required': `"Last Name" is required`
    }),
    email:Joi.string().email().required().messages({
        'string.base': `"Email" should be a type of 'text'`,        
        'any.required': `"Email" is required`                      
    }),
    phone:Joi.string().pattern(/^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|51|52|54|55|56)[0-9]{7}$/).required().messages({
        'string.pattern.base': 'Phone number must be a valid UAE number starting with +971, 00971, or 0 and followed by a valid area or mobile code.',
        'string.empty': 'Phone number is required.',
    }),
    password:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/).required().messages({
        'string.pattern.base': 'Password must be 8-30 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (#$@!%&*?).',
        'string.empty': 'Password is required.',
    }),
    
})

export const signinSchema = Joi.object({
    email:Joi.string().email().required().messages({
        'string.base': `"Email" should be a type of 'text'`,        
        'any.required': `"Email" is required`                      
    }),
    password:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/).required().messages({
        'string.pattern.base': 'Password must be 8-30 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (#$@!%&*?).',
        'string.empty': 'Password is required.',
    }),
})
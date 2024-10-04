import Joi from "joi";

export const addsubcategorySchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(200)
        .required()
        .messages({
            'string.base': 'Name must be a valid string.',
            'string.min': 'Name must be at least 3 characters long.',
            'string.max': 'Name must be less than or equal to 200 characters long.',
            'any.required': 'Name is required.',
        }),
    category:Joi.string().hex().length(24).required().messages({
        'string.base': 'category ID must be a valid string.',
        'string.hex': 'category ID must be a valid hexadecimal string.',
        'string.length': 'category ID must be exactly 24 characters long.',
        'any.required': 'category ID is required.',
    })
})

export const updatesubcategorySchema = Joi.object({
    id: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            'string.base': 'ID must be a valid string.',
            'string.hex': 'ID must be a valid hexadecimal string.',
            'string.length': 'ID must be exactly 24 characters long.',
            'any.required': 'ID is required.',
        }),
    name: Joi.string()
        .min(3)
        .max(200)
        .messages({
            'string.base': 'Name must be a valid string.',
            'string.min': 'Name must be at least 3 characters long.',
            'string.max': 'Name must be less than or equal to 200 characters long.',
        }),

        category:Joi.string().hex().length(24).messages({
            'string.base': 'category ID must be a valid string.',
            'string.hex': 'category ID must be a valid hexadecimal string.',
            'string.length': 'category ID must be exactly 24 characters long.',
        })    
});


export const getsubcategorySchema = Joi.object({
    id: Joi.string()
        .hex()
        .length(24)
        .messages({
            'string.base': 'ID must be a valid string.',
            'string.hex': 'ID must be a valid hexadecimal string.',
            'string.length': 'ID must be exactly 24 characters long.',
            'any.required': 'ID is required.',
        })
})

export const deletesubcategorySchema = Joi.object({
    id: Joi.string()
        .hex()
        .length(24)
        .messages({
            'string.base': 'ID must be a valid string.',
            'string.hex': 'ID must be a valid hexadecimal string.',
            'string.length': 'ID must be exactly 24 characters long.',
            'any.required': 'ID is required.',
        })
})


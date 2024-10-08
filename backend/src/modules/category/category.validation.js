import Joi from "joi";

export const addCategorySchema = Joi.object({
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
    
})

export const updateCategorySchema = Joi.object({
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
        .required()
        .messages({
            'string.base': 'Name must be a valid string.',
            'string.min': 'Name must be at least 3 characters long.',
            'string.max': 'Name must be less than or equal to 200 characters long.',
            'any.required': 'Name is required.',
        }),
});


export const getCategorySchema = Joi.object({
    id: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            'string.base': 'ID must be a valid string.',
            'string.hex': 'ID must be a valid hexadecimal string.',
            'string.length': 'ID must be exactly 24 characters long.',
            'any.required': 'ID is required.',
        })
})

export const deleteCategorySchema = Joi.object({
    id: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            'string.base': 'ID must be a valid string.',
            'string.hex': 'ID must be a valid hexadecimal string.',
            'string.length': 'ID must be exactly 24 characters long.',
            'any.required': 'ID is required.',
        })
})


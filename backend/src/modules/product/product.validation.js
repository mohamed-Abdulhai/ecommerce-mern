import Joi from 'joi';

const fileSchema = Joi.object({
    mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/gif').required().messages({
        'any.only': 'Only .jpeg, .png, or .gif file formats are allowed',
        'any.required': 'Image file is required'
    }),
    size: Joi.number().max(1024 * 1024 * 5).messages({
        'number.max': 'Image size must be less than 5MB'
    })
});

export const addProductSchema = Joi.object({
    title: Joi.string().min(3).max(200).required().messages({
        'string.min': 'Title must be at least 3 characters',
        'string.max': 'Title must be at most 200 characters',
        'any.required': 'Title is required'
    }),
    description: Joi.string().min(3).max(1000).required().messages({
        'string.min': 'Description must be at least 3 characters',
        'string.max': 'Description must be at most 1000 characters',
        'any.required': 'Description is required'
    }),
    price: Joi.number().min(0).required().messages({
        'number.min': 'Price must be at least 0',
        'any.required': 'Price is required'
    }),
    priceAfterDiscount: Joi.number().min(0).optional().messages({
        'number.min': 'Price after discount must be at least 0'
    }),
    stock: Joi.number().min(0).optional().messages({
        'number.min': 'Stock must be at least 0'
    }),
    category: Joi.string().hex().length(24).required().messages({
        'any.required': 'Category is required',
        'string.hex': 'Category must be a valid hexadecimal string',
        'string.length': 'Category must be exactly 24 characters long'
    }),
    subCategory: Joi.string().hex().length(24).required().messages({
        'any.required': 'Subcategory is required',
        'string.hex': 'Subcategory must be a valid hexadecimal string',
        'string.length': 'Subcategory must be exactly 24 characters long'
    }),
    brand: Joi.string().hex().length(24).optional().messages({
        'string.hex': 'Brand must be a valid hexadecimal string',
        'string.length': 'Brand must be exactly 24 characters long'
    }),
    coverImage: fileSchema.optional().messages({
        'any.required': 'Cover image is required'
    }),
    images: Joi.array().items(fileSchema).optional().messages({
        'any.required': 'At least one image is required'
    })
});

export const updateProductSchema = Joi.object({
    title: Joi.string().min(3).max(200).optional().messages({
        'string.min': 'Title must be at least 3 characters',
        'string.max': 'Title must be at most 200 characters'
    }),
    description: Joi.string().min(3).max(1000).optional().messages({
        'string.min': 'Description must be at least 3 characters',
        'string.max': 'Description must be at most 1000 characters'
    }),
    price: Joi.number().min(0).optional().messages({
        'number.min': 'Price must be at least 0'
    }),
    priceAfterDiscount: Joi.number().min(0).optional().messages({
        'number.min': 'Price after discount must be at least 0'
    }),
    stock: Joi.number().min(0).optional().messages({
        'number.min': 'Stock must be at least 0'
    }),
    category: Joi.string().hex().length(24).optional().messages({
        'string.hex': 'Category must be a valid hexadecimal string',
        'string.length': 'Category must be exactly 24 characters long'
    }),
    subCategory: Joi.string().hex().length(24).optional().messages({
        'string.hex': 'Subcategory must be a valid hexadecimal string',
        'string.length': 'Subcategory must be exactly 24 characters long'
    }),
    brand: Joi.string().hex().length(24).optional().messages({
        'string.hex': 'Brand must be a valid hexadecimal string',
        'string.length': 'Brand must be exactly 24 characters long'
    }),
    coverImage: fileSchema.optional().messages({
        'any.required': 'Cover image is required'
    }),
    images: Joi.array().items(fileSchema).optional().messages({
        'any.required': 'At least one image is required'
    }),
    slug: Joi.string().min(3).max(200).required().messages({
        'string.min': 'Slug must be at least 3 characters',
        'string.max': 'Slug must be at most 200 characters',
        'any.required': 'Slug is required'
    })
});

export const deleteProductSchema = Joi.object({
    slug: Joi.string().min(3).max(200).required().messages({
        'string.min': 'Slug must be at least 3 characters',
        'string.max': 'Slug must be at most 200 characters',
        'any.required': 'Slug is required'
    })
});

export const getProductSchema = Joi.object({
    slug: Joi.string().min(3).max(200).required().messages({
        'string.min': 'Slug must be at least 3 characters',
        'string.max': 'Slug must be at most 200 characters',
        'any.required': 'Slug is required'
    })
});

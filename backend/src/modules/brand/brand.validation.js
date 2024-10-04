import Joi from 'joi';

export const addBrandSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(200)
    .required()
    .messages({
      'string.empty': 'Brand name is required',
      'string.min': 'Brand name must be at least 3 characters',
      'string.max': 'Brand name must not exceed 200 characters'
    }),
  logo: Joi.any()
    .custom((value, helpers) => {
      if (!helpers.state.ancestors[0].file) {
        return helpers.message('Logo file is required');
      }
      return value;
    })
    .messages({
      'any.required': 'Logo is required'
    })
});

export const updateBrandSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(200)
    .optional()
    .messages({
      'string.min': 'Brand name must be at least 3 characters',
      'string.max': 'Brand name must not exceed 200 characters'
    }),
  logo: Joi.any()
    .custom((value, helpers) => {
      if (helpers.state.ancestors[0].file) {
        return value;
      }
      return value;
    }),
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
});

export const deleteBrandSchema = Joi.object({
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
});

export const getBrandSchema = Joi.object({
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
});

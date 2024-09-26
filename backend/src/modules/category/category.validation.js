import Joi from "joi";

export const addCategorySchema = Joi.object({
    name:Joi.string().min(3).max(200).required(),
    
})
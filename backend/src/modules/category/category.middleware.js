import { categoryModel } from "../../DB/category.model.js";
import { AppError, catchError } from "../../utilities/error.handler.js";

export const findCategory = catchError(async (req,res,next)=>{
    const category = await categoryModel.findById(req.params.id)
    if(!category) return next(new AppError('category not found',404,'failed'))
    next()

})

export const existCategory = catchError(async (req,res,next)=>{
    const category = await categoryModel.findOne({name:req.body.name})
    if(category) return next(new AppError('category already exist',403,'failed'))
    next()
})
import { subcategoryModel } from "../../DB/subcategory.model.js"
import { catchError } from "../../utilities/error.handler.js"

export const findSubcategory = catchError(async (req,res,next)=>{
    const subcategory = await subcategoryModel.findById(req.params.id)
    if(!subcategory) return next(new AppError('category not found',404,'failed'))
    next()

})

export const existSubcategory = catchError(async (req,res,next)=>{
    const subcategory = await subcategoryModel.findOne({name:req.body.name})
    if(subcategory) return next(new AppError('category already exist',403,'failed'))
    next()
})



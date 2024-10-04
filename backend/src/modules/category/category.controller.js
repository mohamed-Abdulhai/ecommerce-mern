import slugify from "slugify";
import { categoryModel } from "../../DB/category.model.js";
import { AppError, catchError } from "../../utilities/error.handler.js";

export const addCategory = catchError(async (req,res,next)=>{
    req.body.createdBy = req.user.id
    req.body.slug = slugify(req.body.name,{ lower: true, strict: true })
    const category = await categoryModel.insertMany(req.body)
    return res.status(201).json({
        status: 'success',message:'Category added successfully',data: {category,},});
})

export const getCategory = catchError(async (req,res,next)=>{
    const category = await categoryModel.findById(req.params.id).populate('createdBy','userName _id')
     
    return res.status(200).json({
    status:"success",data:{category,},})
})

export const updateCategory = catchError(async (req,res,next)=>{
    
    req.body.slug = slugify(req.body.name,{ lower: true, strict: true })
     const category = await categoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).json({
        status:"success",message:'Category updated successfully',data:{category,},})
})

export const deleteCategory = catchError(async (req,res,next)=>{
    const category = await categoryModel.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        status:"success",message:'Category deleted successfully',})

})

export const getAllCategories = catchError(async (req,res,next)=>{
    const categories = await categoryModel.find().populate('createdBy','userName _id')
    return res.status(200).json({
        status:"success",data:{categories,},
    })
})

export const deleteAllCategories = catchError(async (req,res,next)=>{
    const categories = await categoryModel.deleteMany()
    return res.status(200).json({
        status:"success",message:'Categories deleted successfully'
    })
})
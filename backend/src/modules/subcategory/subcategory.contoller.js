import slugify from "slugify";
import { subcategoryModel } from "../../DB/subcategory.model.js";
import { catchError } from "../../utilities/error.handler.js";

export const addSubcategory = catchError(async (req,res,next)=>{
    req.body.createdBy = req.user.id
    req.body.slug = slugify(req.body.name,{ lower: true, strict: true })
    const Subcategory = await subcategoryModel.insertMany(req.body)
    return res.status(201).json({
        status: 'success',data: {Subcategory,},});
})

export const getSubcategory = catchError(async (req,res,next)=>{
    const subcategory = await subcategoryModel.findById(req.params.id).populate('createdBy','userName _id').populate('category','name _id')
     
    return res.status(200).json({
    status:"success",message:'Subcategory added successfully',data:{subcategory,},})
})

export const updateSubcategory = catchError(async (req,res,next)=>{
    req.body.slug = slugify(req.body.name,{ lower: true, strict: true })
     const subcategory = await subcategoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).json({
        status:"success",message:'Subcategory updated successfully',data:{subcategory,},})
})

export const deleteSubcategory = catchError(async (req,res,next)=>{
    const subcategory = await subcategoryModel.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        status:"success",message:'Subcategory deleted successfully'})
})

export const getAllSubcategories = catchError(async (req,res,next)=>{
    const subcategories = await subcategoryModel.find().populate('createdBy','userName _id').populate('category','name _id')
    return res.status(200).json({
        status:"success",data:{subcategories,},
    })
})

export const deleteAllSubcategories = catchError(async (req,res,next)=>{
    const subcategories = await subcategoryModel.deleteMany()
    return res.status(200).json({
        status:"success",message:'subcategories deleted successfully'
    })
})
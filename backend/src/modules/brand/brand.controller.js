import { brandModel } from "../../DB/brand.model.js";
import { cloudinary } from "../../file uplode/cloudinary.config.js";
import { AppError, catchError } from "../../utilities/error.handler.js";

export const addBrand = catchError(async (req, res, next) => {
    const { name } = req.body;


    
    let logoUrl, logoPublicId;
    if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        logoUrl = result.secure_url;
        logoPublicId = result.public_id;
    }


    const newBrand = await brandModel.create({
        name,
        logo: logoUrl,
        logoPublicId,
        addedBy:req.user.id
    });

    res.status(201).json({ status:'success', data: {newBrand} });
});

export const getBrand = catchError(async (req,res,next)=>{
    const brand = await brandModel.findById(req.params.id).populate('addedBy','userName _id')
    return res.status(200).json({
        status:"success",data:{brand,},
    })
})

export const getAllBrands = catchError(async (req,res,next)=>{
    const brands = await brandModel.find().populate('addedBy','userName _id')
    return res.status(200).json({
        status:"success",data:{brands,},
    })
})

export const updateBrand = catchError(async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    const brand = await brandModel.findById(id);

    if (req.file) {
        if (brand.logoPublicId) {
            await cloudinary.uploader.destroy(brand.logoPublicId);
        }

        const result = await cloudinary.uploader.upload(req.file.path);
        
        brand.logo = result.secure_url;
        brand.logoPublicId = result.public_id;
    }

    if (name) {
        brand.name = name;
    }

    await brand.save();

    res.status(200).json({ status: 'success', message: "Brand updated successfully", data: { brand } });
});


export const deleteBrand = catchError(async (req, res, next) => {
    const { id } = req.params;

    const brand = await brandModel.findById(id);
    
    if (brand.logoPublicId) {
        await cloudinary.uploader.destroy(brand.logoPublicId);
    }

    await brand.deleteOne();

    res.status(200).json({ status: 'success', message: "Brand and logo deleted successfully" });
});


export const deleteAllBrands = catchError(async (req, res, next) => {
    const brands = await brandModel.find();
    if (!brands.length) {
        return res.status(404).json({ message: "No brands found" });
    }

    for (const brand of brands) {
        if (brand.logoPublicId) {
            await cloudinary.uploader.destroy(brand.logoPublicId);
        }
    }

    await brandModel.deleteMany();

    res.status(200).json({ status: 'success', message: "All brands and logos deleted successfully"});
});

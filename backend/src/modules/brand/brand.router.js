import { Router } from "express";
import { addBrand, deleteAllBrands, deleteBrand, getAllBrands, getBrand, updateBrand } from "./brand.controller.js";
import { authentication, authorization } from "../auth/auth.middleware.js";
import { existBrand, findBrand } from "./brand.middleware.js";
import { upload } from "../../file uplode/multer.js";
import { validate } from "../../middlewares/validation.js";
import { addBrandSchema, deleteBrandSchema, updateBrandSchema } from "./brand.validation.js";

const router = Router()

router.route('/')
.post(authentication,authorization,upload.single('logo'),validate(addBrandSchema),existBrand,addBrand)
.delete(authentication,authorization,deleteAllBrands)
.get(getAllBrands)
router.route('/:id')
.put(authentication,authorization,upload.single('logo'),validate(updateBrandSchema),findBrand,updateBrand)
.delete(authentication,authorization,validate(deleteBrandSchema),findBrand,deleteBrand)
.get(findBrand,getBrand)
export default router
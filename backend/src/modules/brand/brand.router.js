import { Router } from "express";
import { addBrand, deleteAllBrands, deleteBrand, getAllBrands, getBrand, updateBrand } from "./brand.controller.js";

const router = Router()

router.route('/').post(addBrand).delete(deleteAllBrands).get(getAllBrands)
router.route('/:id').put(updateBrand).delete(deleteBrand).get(getBrand)
export default router
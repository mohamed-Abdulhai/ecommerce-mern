import { Router } from "express"
import { addProduct, deleteAllProducts, deleteProduct, getAllProducts, getProduct, updateProduct } from "./product.controller.js"
import { authentication, authorization } from '../auth/auth.middleware.js'
import { existProuduct, findProduct } from "./product.middleware.js"
import { upload } from "../../file uplode/multer.js"
import { validate } from "../../middlewares/validation.js"
import { addProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "./product.validation.js"
const router = Router()

router.route('/')
.post(authentication,authorization,existProuduct,upload.fields([{ name: 'coverImage', maxCount: 1 }, { name: 'images', maxCount: 5 }]),validate(addProductSchema),addProduct)
.delete(authentication,authorization,deleteAllProducts)
.get(getAllProducts)
router.route('/:slug')
.put(authentication,authorization,findProduct,upload.fields([{ name: 'coverImage', maxCount: 1 }, { name: 'images', maxCount: 5 }]),validate(updateProductSchema),updateProduct)
.delete(authentication,authorization,validate(deleteProductSchema),findProduct,deleteProduct)
.get(findProduct,validate(getProductSchema),getProduct)
export default router
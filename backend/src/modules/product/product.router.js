import { Router } from "express"
import { addProduct, deleteAllProducts, deleteProduct, getAllProducts, getProduct, updateProduct } from "./product.controller.js"

const router = Router()

router.route('/').post(addProduct).delete(deleteAllProducts).get(getAllProducts)
router.route('/:id').put(updateProduct).delete(deleteProduct).get(getProduct)
export default router
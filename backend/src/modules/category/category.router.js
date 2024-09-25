import { Router } from "express"
import { addCategory, deleteAllCategories, deleteCategory, getAllCategories, getCategory, updateCategory,  } from "./category.controller.js"

const router = Router()

router.route('/').post(addCategory).delete(deleteAllCategories).get(getAllCategories)
router.route('/:id').put(updateCategory).delete(deleteCategory).get(getCategory)
export default router
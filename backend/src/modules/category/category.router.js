import { Router } from "express"
import {validate} from '../../middlewares/validation.js'
import { addCategory, deleteAllCategories, deleteCategory, getAllCategories, getCategory, updateCategory,  } from "./category.controller.js"
import { addCategorySchema, deleteCategorySchema, getCategorySchema, updateCategorySchema } from "./category.validation.js"
import { authentication, authorization } from "../auth/auth.middleware.js"
import { existCategory, findCategory } from "./category.middleware.js"

const router = Router()

router.route('/')
.post(authentication,authorization,validate(addCategorySchema),existCategory,addCategory)
.delete(authentication,authorization,deleteAllCategories)
.get(getAllCategories)
router.route('/:id')
.put(authentication,authorization,validate(updateCategorySchema),existCategory,findCategory,updateCategory)
.delete(authentication,authorization,validate(deleteCategorySchema),findCategory,deleteCategory)
.get(validate(getCategorySchema),findCategory,getCategory)
export default router
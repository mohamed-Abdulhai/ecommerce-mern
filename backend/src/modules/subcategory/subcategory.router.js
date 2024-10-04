import { Router } from "express"
import { addSubcategory, deleteAllSubcategories, deleteSubcategory, getAllSubcategories, getSubcategory, updateSubcategory,  } from "./subcategory.contoller.js"
import { authentication, authorization } from "../auth/auth.middleware.js"
import { validate } from "../../middlewares/validation.js"
import { addsubcategorySchema, deletesubcategorySchema, getsubcategorySchema, updatesubcategorySchema } from "./subcategory.validation.js"
import { existSubcategory, findSubcategory } from "./subcategory.middleware.js"

const router = Router()

router.route('/')
.post(authentication,authorization,validate(addsubcategorySchema),existSubcategory,addSubcategory)
.delete(authentication,authorization,deleteAllSubcategories)
.get(getAllSubcategories)
router.route('/:id')
.put(authentication,authorization,validate(updatesubcategorySchema),findSubcategory,updateSubcategory)
.delete(authentication,authorization,validate(deletesubcategorySchema),findSubcategory,deleteSubcategory)
.get(validate(getsubcategorySchema),findSubcategory,getSubcategory)
export default router
import { Router } from "express"
import { addSubcategory, deleteAllSubcategories, deleteSubcategory, getAllSubcategories, getSubcategory, updateSubcategory,  } from "./subcategory.contoller.js"

const router = Router()

router.route('/').post(addSubcategory).delete(deleteAllSubcategories).get(getAllSubcategories)
router.route('/:id').put(updateSubcategory).delete(deleteSubcategory).get(getSubcategory)
export default router
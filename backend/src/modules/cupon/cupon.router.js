import { Router } from "express"
import { addCupon, deleteAllCupons, deleteCupon, getAllCupons, getCupon, updateCupon } from "./cupon.controller.js"

const router = Router()

router.route('/').post(addCupon).delete(deleteAllCupons).get(getAllCupons)
router.route('/:id').put(updateCupon).delete(deleteCupon).get(getCupon)
export default router
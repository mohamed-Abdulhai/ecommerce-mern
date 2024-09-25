import { Router } from "express";
import { addReview, deleteAllReviewsOnTheProduct, deleteReview, getAllReviewsOnTheProduct, updateReview } from "./review.contoller.js";

const router = Router()

router.route('/').post(addReview)
router.route('/:id').delete(deleteReview).put(updateReview)
router.route('/:productId').get(getAllReviewsOnTheProduct).delete(deleteAllReviewsOnTheProduct)

export default router
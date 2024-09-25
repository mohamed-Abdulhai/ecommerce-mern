import { Router } from "express";
import authRouter from './../modules/auth/auth.router.js'
import categoryRouter from './../modules/category/category.router.js'
import subcategoryRouter from './../modules/subcategory/subcategory.router.js'
import brandRouter from './../modules/brand/brand.router.js'
import userRouter from './../modules/user/user.router.js'
import cuponRouter from './../modules/cupon/cupon.router.js'
import reviewRouter from './../modules/review/review.router.js'
import productRouter from './../modules/product/product.router.js'
import cartRouter from './../modules/cart/cart.router.js'
import orderRouter from './../modules/order/order.router.js'

const router = Router()


router.use('/auth',authRouter)
router.use('/categories',categoryRouter)
router.use('/subcategories',subcategoryRouter)
router.use('/brands',brandRouter)
router.use('/users',userRouter)
router.use('/cupons',cuponRouter)
router.use('/reviews',reviewRouter)
router.use('/products',productRouter)
router.use('/cart',cartRouter)
router.use('/orders',orderRouter)



export default router
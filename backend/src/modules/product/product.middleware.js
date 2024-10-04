import { productModel } from "../../DB/product.model.js";
import { AppError } from "../../utilities/error.handler.js";


export const existProuduct = async (req, res, next) => {
  const product = await productModel.findOne({ title:req.body.title });
  if (product) {
    return next(new AppError('product already exist',403,'failed'))
  }
  next();
};

export const findProduct = async (req, res, next) => {
  const product = await productModel.findById(req.params.slug);
  if (!product) {
    return next(new AppError('product not found',404,'failed'))
  }
  next();
};

import { brandModel } from "../../DB/brand.model.js";
import { AppError } from "../../utilities/error.handler.js";


export const existBrand = async (req, res, next) => {
  const brand = await brandModel.findOne({ name:req.body.name });
  if (brand) {
    return next(new AppError('Brand already exist',403,'failed'))
  }
  next();
};

export const findBrand = async (req, res, next) => {
  const brand = await brandModel.findById(req.params.id);
  if (!brand) {
    return next(new AppError('Brand not found',404,'failed'))
  }
  next();
};

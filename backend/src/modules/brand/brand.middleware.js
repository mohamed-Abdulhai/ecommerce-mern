import { brandModel } from "../../DB/brand.model.js";


export const existBrand = async (req, res, next) => {
  const brand = await brandModel.findOne({ name:req.body.name });
  if (brand) {
    return res.status(400).json({ message: 'Brand already exists' });
  }
  next();
};

export const findBrand = async (req, res, next) => {
  const brand = await brandModel.findById(req.params.id);
  if (!brand) {
    return res.status(404).json({ message: 'Brand not found' });
  }
  req.brand = brand;
  next();
};

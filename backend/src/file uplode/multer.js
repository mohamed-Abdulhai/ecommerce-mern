import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueSuffix = `${new mongoose.Types.ObjectId()}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG and PNG images are allowed'), false);
  }
};

export const upload = multer({ storage, fileFilter });

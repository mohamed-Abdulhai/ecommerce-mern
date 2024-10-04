import mongoose from "mongoose";
import slugify from "slugify";

const schema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'Minimum is 3 letters'],
        maxLength: [200, 'Maximum is 200 letters'],
        trim: true,
        required: [true, 'Name is required'],
        unique:true
    },
    slug: {
        type: String,
        minLength: [3, 'Minimum is 3 letters'],
        maxLength: [200, 'Maximum is 200 letters'],
        trim: true,
    },
    image: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'createdBy is required'],
    }
}, { timestamps: true });

export const categoryModel = mongoose.model('Category', schema);

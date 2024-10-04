import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [3, 'minimum is 3 letters'],
        maxLength: [200, 'maximum is 200 letters'],
        trim: true,
        required: [true, 'The title is required'],
        unique: true
    },
    slug: {
        type: String,
        minLength: [3, 'minimum is 3 letters'],
        maxLength: [200, 'maximum is 200 letters'],
        trim: true,
        required: [true, 'The slug is required'],
    },
    coverImage: String,
    coverImagePublicId: String,
    images: [{ url: String, publicId: String }],
    description: {
        type: String,
        minLength: [3, 'minimum is 3 letters'],
        maxLength: [1000, 'maximum is 1000 letters'],
        trim: true,
        required: [true, 'The description is required'],
    },
    price: {
        type: Number,
        min: 0,
        required: [true, 'The price is required'],
    },
    priceAfterDiscount: {
        type: Number,
        min: 0,
    },
    rateCount: Number,
    rateAvg: Number,
    sold: Number,
    stock: {
        type: Number,
        min: 0
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required']
    },
    subCategory: {
        type: mongoose.Types.ObjectId,
        ref: 'Subcategory',
        required: [true, 'Subcategory is required']
    },
    brand: {
        type: mongoose.Types.ObjectId,
        ref: 'Brand'
    },
    addedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'AddedBy is required']
    },
}, { timestamps: true });

export const productModel = mongoose.model('Product', schema);

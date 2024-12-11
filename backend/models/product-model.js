const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    price: {
        type: Number,
        required: true,
        min: 0 // Price must be positive
    },
    discount: {
        type: Number,
        default: 0,
        // validate: {
        //     validator: (v) => v >= 0 && v <= 100, // Validates that the discount is between 0 and 100
        //     message: "Discount must be between 0 and 100"
        // }
    },
    bigcolor: {
        type: String,
        required: true,
        // match: /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, // Validates hex color
        trim: true
    },
    panelcolor: {
        type: String,
        required: true,
        // match: /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, // Validates hex color
        trim: true
    },
    textcolor: {
        type: String,
        required: true,
        // match: /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, // Validates hex color
        trim: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model('Product', productSchema);

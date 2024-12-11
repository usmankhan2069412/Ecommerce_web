const mongoose = require('mongoose');

// Define the user schema
const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Email validation regex
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    products: {
        type: Array,
        default: []
    },
    
    picture: {
        type: String,
        default: ""
    },
    gstin:String
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model("owner", ownerSchema);

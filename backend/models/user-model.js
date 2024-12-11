const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
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
    cart: {
        type: Array,
        default: []
    },
    isadmin: {
        type: Boolean,
        default: false
    },
    order: {
        type: Array,
        default: []
    },
    contact: {
        type: Number,
        required: true,
        validate: {
            validator: (v) => /^\d{10,15}$/.test(v), // Accepts numbers with 10 to 15 digits
            message: "Contact number must be between 10 and 15 digits"
        }
    },
    picture: {
        type: String,
        default: ""
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model("User", userSchema);

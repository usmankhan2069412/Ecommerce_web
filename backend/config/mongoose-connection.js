const mongoose = require('mongoose');

// Use environment variables for the connection string
const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Database connection error:", err));


module.exports =  mongoose.connection;
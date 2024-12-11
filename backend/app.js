const express = require('express');
const app = express();

// Correct import for cookie-parser
const cookieParser = require('cookie-parser');
const path = require('path');

// Import database connection
const db = require('./config/mongoose-connection');

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use cookie-parser middleware
app.use(cookieParser());

const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a simple route
app.use("/owener" , ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// import app from "./app.js";
// import cloudinary from "cloudinary";

// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// app.listen(process.env.PORT, () => {
//     console.log(`Server listening at port ${process.env.PORT}`);
// });

import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

// Cloudinary config
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
    // Start the server only after successful DB connection
    app.listen(process.env.PORT, () => {
        console.log(`Server listening at port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error("Some error occurred while connecting to database:", err);
});

// Root route for Render health check
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

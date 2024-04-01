const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
require("./config/mongoose.config");
const cookieParser = require('cookie-parser')
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());


//Image Storage Engine 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        console.log(file);
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: storage})
app.post("/api/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

app.use('/images', express.static('upload/images'));
const UserRoutes = require('./routes/userRoutes');
UserRoutes(app);
const ProductRoutes = require('./routes/productRoutes');
ProductRoutes(app);

app.listen(port, () => console.log(`Server Running on port ${port}`));
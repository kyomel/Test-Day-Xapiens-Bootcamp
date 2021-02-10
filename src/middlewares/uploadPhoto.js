'use strict'

const multer = require('multer');
const path = require('path');

const disk = multer.diskStorage({
    destination: path.join(__dirname, './../../public/uploads/author'),
    filename: (req, file, callback) => {
        const uniqueSurfix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        callback(null, file.fieldname + "-" + uniqueSurfix + path.extname(file.originalname));
    }
});

module.exports = disk;
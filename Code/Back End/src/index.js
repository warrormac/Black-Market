const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const {v4: uuidv4} = require('uuid');

require('./db/mongoose');


const app = express();
app.set('port', 8000);

app.use(cors());

const storage = multer.diskStorage({
    destination: 'src/products',
    filename: (req,file,cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    },

});



const uploadProduct = multer({
    storage: storage,
    dest: 'products',
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb("Error: Archivo debe tener una extención valida")
    }
}).single('file');

app.use(uploadProduct);

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(require('./routes/index.routes'));

app.use("/products",express.static(path.join(__dirname, 'products')));

app.listen(app.get('port'), () => {
    console.log("SERVER RUNNING");
});
import multer from "multer";
import storage from "./cloundinary";
import { imageMimeTypes } from "./imagesType";


const upload = multer({
    storage,
    fileFilter(req, file, cb) {
        if(imageMimeTypes.includes(file.mimetype)){
            cb(null,true);
         }else{
            cb(new Error("Unsupported File"))
         }
    },
});

export default upload
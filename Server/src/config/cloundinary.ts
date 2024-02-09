import {v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import Keys from "../keys";

cloudinary.config({
    cloud_name: Keys.CLOUD_NAME,
    api_key: Keys.CLOUDINARY_API_KEY,
    api_secret: Keys.CLOUD_KEY_SECRET
});
interface customParams{
    folder: string
}
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "BOOKSTORE",
    } as customParams ,
});

export default storage
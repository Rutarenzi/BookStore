import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000
const Keys ={
    // DATABASE KEYS
 PORT : Number(PORT),
 NODE_ENV : process.env.NODE_ENV,
 DEV_DATABASE : process.env.DEV_DATABASE,
 DATABASE_HOST : process.env.DATABASE_HOST,
 DATABASE_USER : process.env.DATABASE_USER,
 DATABASE_PORT :process.env.DATABASE_PORT,
 DATABASE_PASSWORD : process.env.DATABASE_PASSWORD,

//  CLOUDINARY KEYS
CLOUD_NAME : process.env.CLOUD_NAME,
CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
CLOUD_KEY_SECRET : process.env.CLOUD_KEY_SECRET 

}

export default Keys
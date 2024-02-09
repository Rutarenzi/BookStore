import {Request,Response, NextFunction} from 'express'
import upload from "../config/multer";



const ImageCheck=(name: string)=> {
    return async(req:Request,res:Response, next:NextFunction)=>{
        try{
          upload.single(name)(req,res,(err:any)=>{
            if(err){
                return res.status(400).json({
                    status: 400,
                    error: 'Unsupported Format'
                });
            }
            next()
          });
        }catch(error:any){
            res.status(500).json({status: 500,error:"Cloudinary Error"});
        }
    }
}

export default ImageCheck;        
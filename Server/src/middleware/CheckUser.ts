import { Request,Response,NextFunction } from "express";
import UserRepository from "../repositories/UserRepository";


 const CheckUserExist = async(req:Request,res:Response,next:NextFunction)=>{
    try{
     const user = await UserRepository.findUser(req.body.email);
     if(user){
        return next();

     }
     else{
        return res.status(404).json({status: 404, error: "User does not exit"})
     }
    }catch(error: any){
        return res.status(500).json({status: 500,error: error.message})
    }

}

const CheckUserDoesNoExist=async(req:Request,res:Response,next:NextFunction)=>{
   try{
    const user = await UserRepository.findUser(req.body.email);
    if(!user){
       return next();

    }
    else{
       return res.status(404).json({status: 404, error: "User exit"})
    }
   }catch(error: any){
       return res.status(500).json({status: 500,error: error.message})
   }

} 

export {CheckUserExist,CheckUserDoesNoExist}


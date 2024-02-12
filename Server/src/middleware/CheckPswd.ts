import { NextFunction, Request,Response } from "express";
import UserRepository from "../repositories/UserRepository";
import Bcrypt from "../utils/bcryptUtil";

const CheckPswd =async(req:Request,res:Response,next:NextFunction)=>{
    try{
     const user = await UserRepository.findUser(req.body.email);
     if(user){
        const compare = Bcrypt.compare(req.body.email,user.password);
        if(!compare){
          return res.status(400).json({status: 404, error: "Invalid password"})
        }
        next();
     }else{
        return res.status(404).json({status: 404, error: "No user Exist"})
     }
    }catch(error:any){
     return res.status(500).json({status: 500, error: error.message})
    }
}
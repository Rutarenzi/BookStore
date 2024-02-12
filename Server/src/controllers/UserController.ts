import { Request,Response } from "express";
import UserService from "../services/UserService";




class UserController{
 
static signUp=async(req:Request,res:Response)=>{
  try {
     const response = await UserService.signup(req)
     return res.status(201).json({status:201,response})
  }catch(error:any){
   return res.status(500).json({status: 500, error:error.message})
  }
}

static login=async(req:Request,res:Response)=>{
  try{
    const response = await UserService.login(req)
    return res.status(200).json({status:200,response})
  }catch(error: any){
   return res.status(500).json({status: 500, error: error.message})
  }

}

}


export default UserController;



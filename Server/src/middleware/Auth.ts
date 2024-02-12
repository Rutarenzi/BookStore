import { Response,NextFunction } from "express";
import JWT from "../utils/JwtUtils";
import UserRepository from "../repositories/UserRepository";


const Auth=async(req:any,res:Response,next:NextFunction)=>{    
    const token= req.header("Authorization")?.split(" ")[1];
    if(!token){
        return res.status(401).json({status: 401,error: "Please login"})
    }
    console.log(token)
    const dataValid= JWT.verify(token);
    if(dataValid){
        const  email= dataValid.data.email
        const user = await UserRepository.findUser(email);
        if(!user){
            return res.status(404).json({status: 404, error: "user Not Found"})
        }
      req.userDetails = user
      next()
    }
}

export default Auth;
import { Request } from "express";
import { UserCreactionProps } from "../database/models/User";
import Bcrypt from "../utils/bcryptUtil";
import UserRepository from "../repositories/UserRepository";
import JWT from "../utils/JwtUtils";
// import JWT from "../utils/JwtUtils";

class UserService {
  
    static signup=async(req:Request)=>{
        const HashedPassWord = Bcrypt.hash(req.body.password)
       const user: UserCreactionProps={
        email :req.body.email,
        password: HashedPassWord
       }
       const response = await UserRepository.signup(user)

       return response;
    }

    static login = async(req:Request)=>{
        const obj ={email:req.body.email}
      const token = JWT.generator(obj)
    
       return token
    }
}

export default UserService;
import Jwt from "jsonwebtoken";
import Keys from "../keys"


class JWT {
   static generator =(data: { email: string })=>{
    const token = Jwt.sign({data},Keys.JWT_SECRET) 
   return token
   }

   static verify(token:string){
     const data :any= Jwt.verify(token,Keys.JWT_SECRET);
     return data;
   }
}

export default JWT;
import {Request,Response} from  "express"
import BookService from "../services/BookService";

class BookController {
   static createbook=async(req:Request,res:Response)=>{
      try{
       const response = await BookService.createbook(req);
       return res.status(201).json({status: 200, response})
      }catch(error:any){
        return res.status(error?.status|500).json({status: error?.status|500, error:error.message})
      }
   }

   static getAllbook=async(req:Request,res:Response)=>{
      try{
        const data = await BookService.getAllbook();
        return res.status(200).json({status: 200, data})
      }catch(error:any){
         return res.status(500).json({status: 500,error:error.message})
      }
   }
}

export default BookController;
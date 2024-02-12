import { Response,NextFunction } from "express";
import BookRepository from "../repositories/BookRepository";

const BookExist=async(req:any,res:Response,next:NextFunction)=>{
    try{
        const Book = await BookRepository.findBook(Number(req.params.id));
        
     if(Book){
      
        req.book = Book.dataValues;
        
        return next();  
     }
     else{
        return res.status(404).json({status: 404, error: "Book does not exist"})
     }
    }catch(error: any){
        return res.status(500).json({status: 500,error: error.message})
    }
 
 } 

 export default  BookExist
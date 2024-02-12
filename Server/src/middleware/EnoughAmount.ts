import { Response,NextFunction } from "express";
import Account from "../database/models/account";
import AccountRepository from "../repositories/AccountRepository";


const EnoughAmout=async(req:any,res:Response,next:NextFunction)=>{
    try{
        
        const Account = await AccountRepository.getAccount(req.userDetails.id);
        console
    
     if(Account){
        if(req.book.price >  Account.balance){
            return res.status(404).json({status: 404, error: "No Enough amount to order book"})
        }
        
        return next();  
     }
     else{
        return res.status(404).json({status: 404, error: "Book does not exist"})
     }
    }catch(error: any){
        return res.status(500).json({status: 500,error: error.message})
    }
 
 } 

 export default  EnoughAmout
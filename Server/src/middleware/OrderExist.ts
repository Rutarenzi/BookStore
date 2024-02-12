import { Response,NextFunction } from "express";
import OrderRepository from "../repositories/OrderRepository";

const  OrderExist=async(req:any,res:Response,next:NextFunction)=>{
    try{
        const Order = await OrderRepository.findOrder(Number(req.params.id));
     if(Order){
        if(req.userDetails.id !=Order.dataValues.user_id){
            return res.status(404).json({status: 404, error: "You can cancel only your order"}) 
        };
        return next();  
     }
     else{
        return res.status(404).json({status: 404, error: "Order does not exist"})
     }
    }catch(error: any){
        return res.status(500).json({status: 500,error: error.message})
    }
 
 } 

 export default  OrderExist
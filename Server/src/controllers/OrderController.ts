import { Response } from "express"
import OrderService from "../services/OrderService"

class OrderController {
   static OrderCreate=async(req:any,res:Response)=>{
    try{
       const response = await OrderService.OrderCreate(req);
       return res.status(201).json({status: 201, response})
    }catch(error: any){
        return res.status(500).json({status: 500, error:error.message})
    }

   }
   static getOrders=async(req:any,res:Response)=>{
      try{
         const response = await OrderService.getOrders(req);
         return res.status(200).json({status: 200, response})
      }catch(error: any){
          return res.status(500).json({status: 500, error:error.message})
      }
   }
   static getCancel=async(req:any,res:Response)=>{
      try{
         const response = await OrderService.getCancel(req);
         return res.status(200).json({status: 200, response})
      }catch(error: any){
          return res.status(500).json({status: 500, error:error.message})
      }
   }
}

export default OrderController
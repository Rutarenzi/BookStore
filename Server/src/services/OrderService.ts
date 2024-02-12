import { OrderCreationProps } from "../database/models/order"
import { UserReq} from "../interfaces/auth.interface";
import OrderRepository from "../repositories/OrderRepository";


class OrderService {
    static OrderCreate=async(req:UserReq)=>{
      console.log(req)
     const Order:OrderCreationProps={
        user_id: req.userDetails.id,
        book_id: req.book.id,
        status: "pending"
     }
  
     return await OrderRepository.OrderCreate(Order,req.book.price);
     
    }
    static getOrders=async(req:UserReq)=>{
      const  BuyerId =req.userDetails.id
      return await OrderRepository.getOrders(BuyerId)
    }
    static getCancel=async(req:UserReq)=>{
      
      return await OrderRepository.getCancel(Number(req.params.id),"Cancel")
    }
 }
 
 export default OrderService
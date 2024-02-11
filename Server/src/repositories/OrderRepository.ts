import Account from "../database/models/account"
import Order,{OrderCreationProps} from "../database/models/order"






class OrderRepository {
    static OrderCreate=async(order:OrderCreationProps,price:number)=>{
        await Order.create(order)
        const account = await Account.findOne({where: {user_id: order.user_id}})
      
        if(account){
            const balance = account.balance - price;
        
            await Account.update({balance},{where:{user_id: order.user_id}})
            
        }
        return "Ordered successfully"
 
    }
    static getOrders=async(BuyerId: number)=>{
     return await Order.findAll({where: {user_id:BuyerId}})
    }
    static getCancel=async(id:number,status:string)=>{
     await Order.update({status},{where: {id}});
     return "updated successfully"
    }
    static async findOrder(id:number){
        return Order.findOne({where: {id}})
       }
 }
 
 export default OrderRepository 
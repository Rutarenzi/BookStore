import User,{UserCreactionProps} from "../database/models/User"
import Account, { AccountCreationProps } from "../database/models/account";



class UserRepository {
 
    static signup =async(user:UserCreactionProps)=>{
      await User.create(user);
      const userdetails = await User.findOne({where: {email: user.email}})
     if(userdetails){
      const account:AccountCreationProps={
        user_id: userdetails.id,
        balance: 100
          }
          Account.create(account)
     }
      return "signed up successfully"
   
    }

   static login = async()=>{
    
   }

   static findUser=async(user:string)=>{
    return await User.findOne({where:{email:user}})
   }
}

export default UserRepository
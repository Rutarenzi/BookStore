import Account from "../database/models/account"




class AccountRepository {

    static getAccount=async(id:number)=>{
        return Account.findOne({where: {id}})
    }

}

export default AccountRepository
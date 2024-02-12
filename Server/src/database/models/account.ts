import { DataTypes, Model,Optional } from 'sequelize';
import {sequelize} from "."

interface AccountProps {
    id: number,
    user_id:number,
    balance: number
}

export interface AccountCreationProps
extends Optional<AccountProps,'id'>{}

interface AccountInstance
extends Model<AccountProps,AccountCreationProps>,
AccountProps{
    createdAt?: Date;
    updatedAt?: Date;
}

const Account = sequelize.define<AccountInstance>(
    'Account',{
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true,
         },
         user_id:{
            allowNull: false,
            type: DataTypes.INTEGER,
         },
         balance: {
            allowNull: true,
            type: DataTypes.INTEGER,
            defaultValue : 0
         }
    }
)



export default Account
import { DataTypes, Model,Optional } from 'sequelize';
import { sequelize } from '.';
import Account from './account';
import Order from './order';
interface UserProps {
    id: number;
    email: string;
    password: string;
}

interface UserCreactionProps 
extends Optional<UserProps,'id'>{}

interface UserInstance extends 
Model<UserProps,UserCreactionProps>,UserProps{
 createdAt?:Date;
 updatedAt?: Date;
}


const User = sequelize.define<UserInstance>(
    'User',
    {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
          unique: true,
        },
        email: {
          allowNull: false,
          type: DataTypes.TEXT,
          unique: true
        },
        password:{
            allowNull: false,
            type: DataTypes.TEXT,
        }
      }
)

User.hasOne(Account,{
    sourceKey: 'id',
    foreignKey:"user_id",
    as: 'Account'
});
Account.belongsTo(User,{
    foreignKey: 'user_id',
    as: 'owner'
})

User.hasMany(Order,{
    sourceKey: 'id',
    foreignKey:"user_id",
    as: 'Orders'
})
Order.belongsTo(User,{
    foreignKey: 'user_id',
    as: 'Buyer'
})


export default User
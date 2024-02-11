import { DataTypes, Model,Optional } from 'sequelize';
import {sequelize} from ".";


 export interface  OrderProps {
    id: number,
    user_id: number,
    book_id: number,
    status: string
}

export interface OrderCreationProps
extends Optional<OrderProps,'id'>{}

interface OrderInstance 
extends Model<OrderProps,OrderCreationProps>,OrderProps{
    createdAt?:Date;
    updatedAt?: Date
}

const Order = sequelize.define<OrderInstance>(
    'Order',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true,
        },
        user_id: {
           allowNull : false,
           type: DataTypes.INTEGER,            
        },
        book_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING,
        },
}
)

export default Order;
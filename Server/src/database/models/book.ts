import { DataTypes, Model,Optional } from 'sequelize';
import { sequelize } from '.';
import Order from './order';


export interface BookProps{
    id: number;
    title: string;
    writer: string;
    image: string;
    price: number;
    tags: number[]
}

export interface BookCreation 
extends Optional<BookProps,'id'>{}

export interface  BookInstance 
extends Model<BookProps,BookCreation>,
BookProps{
    createdAt?:Date;
    updatedAt?: Date;
}

const Book = sequelize.define<BookInstance>(
    'Book',{
       id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
       },
       title: {
         allowNull: false,
         type: DataTypes.STRING
       },
       writer: {
        allowNull: false,
         type: DataTypes.STRING
       },
       image: {
        allowNull: false,
        type: DataTypes.STRING
       },
       price: {
        allowNull: false,
         type: DataTypes.INTEGER
       },
       tags: {
        allowNull: false,
         type: DataTypes.ARRAY(DataTypes.STRING)
       }, 
       
    }
)

Book.hasMany(Order,{
    sourceKey: 'id',
    foreignKey:"book_id",
    as: 'ordered'
});

Order.belongsTo(Book,{
    foreignKey: 'book_id',
    as: 'product'
})
// console.log(Book)
export default Book;
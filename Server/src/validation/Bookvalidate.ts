import  Joi from "joi";
import { BookCreation } from "../database/models/book";
import {Request,    Response, NextFunction} from "express";

const BookSchema:Joi.ObjectSchema<BookCreation>=Joi.object({
    title:Joi.string().required(),
    writer: Joi.string().required(),
    image: Joi.object().required(),
    price: Joi.number().required(),
    tags: Joi.string().required()
})
interface dataProps{
    title: string;
    writer: string;
    image: any | string,
    price: number,
    tags: string[]
}
const BookValidate=(req:Request,res:Response, next:NextFunction)=>{
    const {title,writer,image, price, tags } = req.body

    const data: dataProps ={
        title,
        writer,
        image:req.file,
        price,
        tags,
    }
    const {error}:{error:any} = BookSchema.validate(data,{abortEarly: false} )
    if(error){
        return res.status(400).json({
            status: 400,
            error: error.details.map(
                (detail:any) => detail.message.replace(/[^a-zA-Z0-9 ]/g, "")
            ),
        });
    }
    next();
}


export default BookValidate
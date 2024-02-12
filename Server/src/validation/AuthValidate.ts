import {Request,Response, NextFunction} from "express";
import  Joi from "joi";
import { TagCreationProps } from "../database/models/tag";


const UserSchema:Joi.ObjectSchema<TagCreationProps>=Joi.object({
    email: Joi.string().min(5).trim().required(),
    password: Joi.string().min(8).trim().required(),

})

const UserValidate=(req:Request,res:Response, next:NextFunction)=>{
    console.log(req.body)
    const {error}:{error:any} = UserSchema.validate(req.body,{abortEarly: false} )
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


export default UserValidate
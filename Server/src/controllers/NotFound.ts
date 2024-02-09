import { Request,Response } from "express";

const NotFound =(req:Request,res:Response)=>{
  return res.status(404).json({status: 404,message: "Sorry! this page not Found"})
}

export default NotFound
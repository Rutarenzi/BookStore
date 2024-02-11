import {Request, Response } from "express";
import TagService from "../services/TagService";


class TagController{
  static createTag=async(req:Request,res:Response)=>{
    try{
      const response = await TagService.createTag(req);
      return res.status(201).json({status: 201, response})
    }catch(error:any){
      return res.status(500).json({status: 500, error: error.message})
    }
    
  }
}

export default TagController;
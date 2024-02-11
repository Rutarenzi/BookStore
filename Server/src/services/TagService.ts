import TagRepository from "../repositories/TagRepository"
import { Request } from "express";
import { TagCreationProps } from "../database/models/tag";

class TagService {
    static createTag=async(req:Request)=> {
       return await TagRepository.createTag(req.body)
    }
}


export default TagService
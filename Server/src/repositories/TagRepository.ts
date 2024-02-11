import Tag ,{ TagCreationProps } from "../database/models/tag"



class TagRepository {
    static createTag=async(tagname:TagCreationProps)=>{
        
       await Tag.create(tagname)
       return "created successfully"
    }
}

export default TagRepository
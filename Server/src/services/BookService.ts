import { Request } from "express";
import { BookCreation } from "../database/models/book"; 
import { HttpException } from "../exception/HttpException";
import BookRepository from "../repositories/BookRepository";
class BookService {
  static createbook = async(data:Request)=>{
    const {title,writer,price,tags } = data.body;
    const imageObj:any = data.file;
    const imageUrl: string = imageObj.path
    const book:BookCreation={
      title,
       writer,
       price,
       tags:[tags],
       image: imageUrl
    };
   return await BookRepository.createbook(book)
    // if (tags !== "bite") {
    //   throw new HttpException(409,"tags does not exists")
    // }
    
  }
  static async getAllbook(){
    return await BookRepository.getAllbook()
  }
}

export default BookService;
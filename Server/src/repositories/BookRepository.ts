import Book ,{BookInstance,BookCreation} from "../database/models/book";



class BookRepository{
   static async createbook(book:BookCreation){
     await  Book.create(book)

     return "created successfull"
   }
   static async getAllbook(){
    return await Book.findAll()
   }
   static async findBook(id:number){
    return Book.findOne({where: {id}})
   }
}

export default BookRepository
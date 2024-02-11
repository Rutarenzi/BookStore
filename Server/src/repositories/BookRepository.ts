import Book ,{BookInstance,BookCreation} from "../database/models/book";



class BookRepository{
   static async createbook(book:BookCreation){
     await  Book.create(book)

     return "created successfull"
   }
   static async getAllbook(){
    return await Book.findAll()
   }
}

export default BookRepository
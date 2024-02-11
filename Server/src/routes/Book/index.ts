import { Router } from "express";
import BookController from "../../controllers/BookController";
import ImageCheck from "../../middleware/ImageCheck";
import BookValidate from "../../validation/Bookvalidate";

const BookRoute = Router();

BookRoute.post('/',
ImageCheck('image'),
BookValidate,
BookController.createbook
)
BookRoute.get('/',
 BookController.getAllbook
)

export default BookRoute


import { UserInstance } from "../database/models/User";
import { Request } from "express";
import { UserProps } from "../database/models/User";
import { BookProps } from "../database/models/book";

export interface UserReq extends Request{
    userDetails: UserProps ;
    book: BookProps
}

export { UserProps };


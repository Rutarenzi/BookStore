import { Router } from "express";
import TagController from "../../controllers/TagController";
import TagValidate from "../../validation/TagValidate";

const TagRoute = Router();

TagRoute.post('/',
TagValidate,
TagController.createTag
)

export default TagRoute
import { Router } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../documentation"
import NotFound from '../controllers/NotFound';
import BookRoute from './Book';
import TagRoute from './Tag';
const routes = Router();

routes.use('/docs', swaggerUi.serve);
routes.get('/docs',swaggerUi.setup(swaggerOptions))
routes.use('/Tag',TagRoute);
routes.use('/Book',BookRoute);
routes.get('*',NotFound)

export default routes
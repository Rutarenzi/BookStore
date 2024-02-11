import { Router } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../documentation"
import NotFound from '../controllers/NotFound';
import BookRoute from './Book';
import TagRoute from './Tag';
import UserRouter from './User';
import OrderRouter from './Order';
const routes = Router();

routes.use('/docs', swaggerUi.serve);
routes.get('/docs',swaggerUi.setup(swaggerOptions))
routes.use('/User',UserRouter);
routes.use('/Tag',TagRoute);
routes.use('/Book',BookRoute);
routes.use('/Order',OrderRouter);
routes.get('*',NotFound)

export default routes
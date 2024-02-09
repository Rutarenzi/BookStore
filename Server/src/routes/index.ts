import { Router } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../documentation"
import NotFound from '../controllers/NotFound';
const routes = Router();

routes.use('/docs', swaggerUi.serve);
routes.get('/docs',swaggerUi.setup(swaggerOptions))
routes.get('*',NotFound)

export default routes
import { Router } from "express";
import OrderController from "../../controllers/OrderController";
import Auth from "../../middleware/Auth";
import BookExist from "../../middleware/BookExist";
import OrderExist from "../../middleware/OrderExist";
import EnoughAmout from "../../middleware/EnoughAmount";

const OrderRouter = Router();

OrderRouter.post('/Book/:id',
Auth,
BookExist,
EnoughAmout,
OrderController.OrderCreate
)

OrderRouter.get('/',
Auth,
OrderController.getOrders
)

OrderRouter.put('/cancel/:id',
Auth,
OrderExist,
OrderController.getCancel
)

export default OrderRouter




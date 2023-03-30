import express from 'express';
import orderController from '../controller/orderController';

const orderRoute = express.Router();

orderRoute.get('/orders', orderController.getAllOrders);

export default orderRoute;
import express from 'express';
import productController from '../controller/productController';

const productRoute = express.Router();

productRoute.post('/products', productController.createProduct);
productRoute.get('/products', productController.getAllProducts);

export default productRoute;
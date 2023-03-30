import { Request, Response, NextFunction } from 'express';
import { Product } from '../interfaces/product';
import productsService from '../services/productsService';

const getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await productsService.getAllProducts();
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products: Product = req.body;
    const { name, amount } = products;
    const id: number = await productsService.createProduct(products);
    return res.status(201).json({ id, name, amount });
  } catch (error) {
    next(error);
  }
};

const productController = {
  getAllProducts,
  createProduct,
};

export = productController;
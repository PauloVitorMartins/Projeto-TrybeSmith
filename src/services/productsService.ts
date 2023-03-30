import { Product } from '../interfaces/product';
import productModel from '../models/product.model';

const getAllProducts = async (): Promise<Product[]> => {
  const response = await productModel.getAll();
  return response;
};

const createProduct = async (product: Product): Promise<number> => {
  if (!product.name) {
    throw new Error('Name is Missing');
  }
  const response: number = await productModel.createProduct(product);
  return response;
};

const allFuncsService = { getAllProducts, createProduct };

export default allFuncsService;
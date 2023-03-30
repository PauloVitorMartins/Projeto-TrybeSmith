import { NextFunction, Request, Response } from 'express';
import orderService from '../services/orderService';

const getAllOrders = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await orderService.getAllOrders();
    return res.status(200).json(result.message);   
  } catch (Error) {
    next(Error);
  }
};

const allControllerFunc = {
  getAllOrders,
};

export default allControllerFunc;
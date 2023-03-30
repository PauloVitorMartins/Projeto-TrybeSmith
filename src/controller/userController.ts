import { Request, Response, NextFunction } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { User, Login } from '../interfaces/user';
import userService from '../services/userService';

const secret = process.env.JWT_SECRET || 'crazy';

const JWT_CONFIG: SignOptions = { 
  algorithm: 'HS256',
  expiresIn: '10d',
};

const tokenMaker = (data: User | Login | string) => jwt.sign({ data }, secret, JWT_CONFIG);

const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const login: Login = req.body;
    if (!login.username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    if (!login.password) {
      return res.status(400).json({ message: '"password" is required' });
    }
    const resultExist = await userService.loging(login);
    if (resultExist.type === 401) {
      return res.status(401).json({ message: resultExist.message });
    }
    const token = tokenMaker(resultExist.message);
    return res.status(200).json({ token });
  } catch (Error) {
    next(Error);
  }
};

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User = req.body;
    await userService.registerUser(user);
    const token = await tokenMaker(user);
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const allControllerFunc = {
  registerUser,
  loginController,
};

export default allControllerFunc;
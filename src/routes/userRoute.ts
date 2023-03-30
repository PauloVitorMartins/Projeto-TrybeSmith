import express from 'express';
import userController from '../controller/userController';

const userRoute = express.Router();

userRoute.post('/users', userController.registerUser);
userRoute.post('/login', userController.loginController);

export default userRoute;
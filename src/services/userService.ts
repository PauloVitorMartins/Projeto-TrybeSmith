import { User, Login } from '../interfaces/user';
import userModel from '../models/user.model';

const registerUser = async (user: User): Promise<User[]> => {
  const response: User[] = await userModel.userRegister(user);
  return response;
};

const loging = async (login: Login) => {
  const exist = await userModel.existUser(login);
  if (exist === undefined) {
    return ({ type: 401, message: 'Username or password invalid' });
  }
  return ({ message: exist });
};

const allServiceFunc = {
  registerUser,
  loging,
};

export default allServiceFunc;
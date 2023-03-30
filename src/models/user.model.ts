import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { User, Login } from '../interfaces/user';

const userRegister = async (user: User) => {
  const { username, vocation, level, password } = user;
  const result = await connection.execute(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  const [rows] = result;
  return rows as User[];
};

const existUser = async (login: Login) => {
  const { username, password } = login;
  const [[result]] = await connection.execute<Login[] & RowDataPacket[]>(
    'SELECT id, username FROM Trybesmith.users WHERE (username = ? AND password = ?)',
    [username, password],
  );
  return result;
};

const allModelFuncs = {
  userRegister,
  existUser,
};

export default allModelFuncs;
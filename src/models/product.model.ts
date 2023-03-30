import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/product';

const getAll = async (): Promise<Product[]> => {
  const result = await connection.execute('SELECT * FROM Trybesmith.products');
  const [rows] = result;
  return rows as Product[];
};

const createProduct = async (product: Product): Promise<number> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader & Product[]>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  const { insertId: id } = result;
  return id;
};

const allFuncsModel = { getAll, createProduct };

export default allFuncsModel;
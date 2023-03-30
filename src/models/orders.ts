import { RowDataPacket } from 'mysql2';
import connection from './connection';

const allOrders = async () => {
  const [result] = await connection.execute<RowDataPacket[]>(`
    SELECT O.id, O.user_id AS userId, JSON_ARRAYAGG(P.id) as productsIds
     FROM Trybesmith.orders AS O
     INNER JOIN Trybesmith.products AS P ON O.id = P.order_id GROUP BY P.order_id`);
  return result as RowDataPacket[];
};

const allFuncsModel = {
  allOrders,
};

export default allFuncsModel;
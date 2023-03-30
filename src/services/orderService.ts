import order from '../models/orders';

const getAllOrders = async () => {
  const result = await order.allOrders();
  return { message: result };
};

const allServiceFunc = {
  getAllOrders,
};

export default allServiceFunc;
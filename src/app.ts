import express from 'express';
import productRoute from './routes/productRoute';
import orderRoute from './routes/ordersRoute';
import userRoute from './routes/userRoute';

const app = express();
app.use(express.json());

app.use('/', productRoute);
app.use('/', userRoute);
app.use('/', orderRoute);

export default app;

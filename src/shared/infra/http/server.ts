import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import '../typeorm';
import AppError from '../../errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.post('/test', (requesnt, response) => {
  return response.json({ user: 'user' });
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(3333, () => {
  console.log('Serve on');
});

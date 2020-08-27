import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
// add 'express-async-errors' after express
import 'express-async-errors';
import '../typeorm';
import { errors } from 'celebrate';
import AppError from '../../errors/AppError';
import routes from './routes';
// dependency injection
import '../../container';

const app = express();

app.use(express.json());
app.use(routes);

app.post('/test', (requesnt, response) => {
  return response.json({ user: 'user' });
});

app.use(errors());

// add erros after routes
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(3333, () => {
  console.log('Serve on');
});

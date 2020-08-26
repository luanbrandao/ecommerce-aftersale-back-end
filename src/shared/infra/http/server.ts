import 'reflect-metadata';
import express from 'express';
import '../typeorm';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.post('/test', (requesnt, response) => {
  return response.json({ user: 'user' });
});

app.listen(3333, () => {
  console.log('Serve on');
});

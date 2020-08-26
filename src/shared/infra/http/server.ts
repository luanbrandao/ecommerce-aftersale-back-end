import express from 'express';
import '../typeorm';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log('Serve on');
});

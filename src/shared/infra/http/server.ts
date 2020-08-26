import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'server ok' });
});

app.listen(3333, () => {
  console.log('Serve on');
});

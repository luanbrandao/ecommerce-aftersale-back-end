import { Router, Request, Response } from 'express';

const sessionsRouter = Router();

sessionsRouter.post('/', (request: Request, response: Response) => {
  return response.json({ message: 'favorites' });
});

export default sessionsRouter;

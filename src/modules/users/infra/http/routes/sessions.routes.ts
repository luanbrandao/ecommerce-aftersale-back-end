import { Router, Response, Request } from 'express';

const sessionsRouter = Router();

sessionsRouter.post('/', (_request: Request, response: Response) => {
  return response.json({ message: 'session' });
});

export default sessionsRouter;

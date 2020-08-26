import { Router } from 'express';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  return response.json({ user: 'user1' });
});

export default userRouter;

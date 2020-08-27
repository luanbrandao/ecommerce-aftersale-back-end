import { Router, Response, Request } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (_request: Request, response: Response) => {
    return response.json({ message: 'session' });
  },
);

export default sessionsRouter;

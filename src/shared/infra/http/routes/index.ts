import { Router } from 'express';
import users from '../../../../modules/users/infra/http/routes/users.routes';
import session from '../../../../modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', users);
routes.use('/session', session);

export default routes;

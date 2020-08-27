import { Router } from 'express';
import users from '../../../../modules/users/infra/http/routes/users.routes';
import favorites from '../../../../modules/favorites/infra/http/routes/favorites.routes';

const routes = Router();

routes.use('/users', users);
routes.use('/users', users);
routes.use('/favorites', favorites);

export default routes;

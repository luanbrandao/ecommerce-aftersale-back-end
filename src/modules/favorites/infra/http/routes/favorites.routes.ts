import { Router } from 'express';
import FavoritesController from '../controllers/FavoritesController';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const favoriteRouter = Router();
const favoritesController = new FavoritesController();

favoriteRouter.use(ensureAuthenticated);

favoriteRouter.post('/', favoritesController.findAll);

export default favoriteRouter;

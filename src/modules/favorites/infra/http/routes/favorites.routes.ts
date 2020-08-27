import { Router } from 'express';
import FavoritesController from '../controllers/FavoritesController';

const sessionsRouter = Router();
const favoritesController = new FavoritesController();
sessionsRouter.post('/', favoritesController.findAll);

export default sessionsRouter;

import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import FavoritesController from '../controllers/FavoritesController';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const favoriteRouter = Router();
const favoritesController = new FavoritesController();

favoriteRouter.use(ensureAuthenticated);

favoriteRouter.get('/', favoritesController.findAll);

favoriteRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      product_id: Joi.string().required(),
      title: Joi.string().required(),
      price: Joi.number().required(),
      image_url: Joi.string().required(),
    },
  }),
  favoritesController.create,
);

favoriteRouter.delete(
  '/:favorite_id',
  celebrate({
    [Segments.PARAMS]: {
      favorite_id: Joi.string().uuid().required(),
    },
  }),
  favoritesController.delete,
);

export default favoriteRouter;

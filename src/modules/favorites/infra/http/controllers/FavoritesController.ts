import { Request, Response } from 'express';
import FindAllFavoritesService from '../../../services/FindAllFavoritesService';
import CreateFavoriteService from '../../../services/CreateFavoriteService';
import FavoriteRepository from '../../typeorm/repositories/FavoriteRepository';

export default class FavoritesController {
  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const favoritesRepository = new FavoriteRepository();
    const findAllController = new FindAllFavoritesService(favoritesRepository);

    const favorites = await findAllController.execute(request.user.id);
    return response.json(favorites);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const favoritesRepository = new FavoriteRepository();
    const createFavoriteService = new CreateFavoriteService(
      favoritesRepository,
    );

    const user_id = request.user.id;
    const { product_id, title, price, image_url } = request.body;

    const favorites = await createFavoriteService.execute({
      product_id,
      title,
      price,
      image_url,
      user_id,
    });
    return response.json(favorites);
  }
}

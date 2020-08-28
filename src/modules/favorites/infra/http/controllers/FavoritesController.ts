import { Request, Response } from 'express';
import FindAllFavoritesService from '../../../services/FindAllFavoritesService';
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
}

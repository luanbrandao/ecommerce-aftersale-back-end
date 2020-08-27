import { Request, Response } from 'express';
import FindAllFavoritesService from '../../../services/FindAllFavoritesService';

export default class FavoritesController {
  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllController = new FindAllFavoritesService();

    const favorites = findAllController.execute();
    return response.json(favorites);
  }
}

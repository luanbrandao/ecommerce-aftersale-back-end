import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindAllFavoritesService from '../../../services/FindAllFavoritesService';
import CreateFavoriteService from '../../../services/CreateFavoriteService';
import RemoveFavoriteService from '../../../services/RemoveFavoriteService';

export default class FavoritesController {
  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllController = container.resolve(FindAllFavoritesService);

    const favorites = await findAllController.execute(request.user.id);
    return response.json(favorites);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createFavoriteService = container.resolve(CreateFavoriteService);

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

  public async delete(request: Request, response: Response): Promise<Response> {
    const removeFavoriteService = container.resolve(RemoveFavoriteService);

    const { favorite_id } = request.params;

    await removeFavoriteService.execute(favorite_id);
    return response.status(201).json();
  }
}

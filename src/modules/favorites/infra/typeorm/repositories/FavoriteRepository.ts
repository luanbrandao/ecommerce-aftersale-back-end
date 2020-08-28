import { getRepository, Repository } from 'typeorm';

import ICreateFavoriteDTO from '@modules/favorites/dtos/ICreateFavoriteDTO';
import Favorite from '../entities/Favorite';
import IFavoritesRepository from '../../../repositories/IFavoritesRepository';

class FavoriteRepository implements IFavoritesRepository {
  private ormRepository: Repository<Favorite>;

  constructor() {
    this.ormRepository = getRepository(Favorite);
  }

  public async create({
    product_id,
    title,
    price,
    image_url,
    user_id,
  }: ICreateFavoriteDTO): Promise<Favorite> {
    const favorite = this.ormRepository.create({
      product_id,
      title,
      price,
      image_url,
      user_id,
    });
    await this.ormRepository.save(favorite);

    return favorite;
  }

  async findAll(user_id: string): Promise<any> {
    const favorites = await this.ormRepository.find({
      where: {
        user_id,
      },
    });

    return favorites;
  }

  async remove(favoriteId: string): Promise<void> {
    await this.ormRepository.delete(favoriteId);
  }
}

export default FavoriteRepository;

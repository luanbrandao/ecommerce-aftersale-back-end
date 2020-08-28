import { getRepository, Repository } from 'typeorm';

import Favorite from '../entities/Favorite';
import IFavoritesRepository from '../../../repositories/IFavoritesRepository';

class FavoriteRepository implements IFavoritesRepository {
  private ormRepository: Repository<Favorite>;

  constructor() {
    this.ormRepository = getRepository(Favorite);
  }

  async findAll(user_id: string): Promise<any> {
    const favorites = await this.ormRepository.find({
      where: {
        user_id,
      },
    });

    return favorites;
  }
}

export default FavoriteRepository;

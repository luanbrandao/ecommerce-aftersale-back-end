import { getRepository, Repository } from 'typeorm';

import Favorite from '../entities/Favorite';
import IFavoritesRepository from '../../../repositoris/IFavoritesRepository';

class FavoriteRepository implements IFavoritesRepository {
  private ormRepository: Repository<Favorite>;

  constructor() {
    this.ormRepository = getRepository(Favorite);
  }

  async findAll(): Promise<any> {
    const favorites = await this.ormRepository.find();
    return favorites;
  }
}

export default FavoriteRepository;

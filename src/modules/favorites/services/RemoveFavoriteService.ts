import { injectable, inject } from 'tsyringe';
import IFavoritesRepository from '../repositories/IFavoritesRepository';

@injectable()
class RemoveFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoriteRepository: IFavoritesRepository,
  ) {}

  async execute(favoriteId: string): Promise<void> {
    await this.favoriteRepository.remove(favoriteId);
  }
}

export default RemoveFavoriteService;

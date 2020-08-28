import IFavoritesRepository from '../repositories/IFavoritesRepository';

class RemoveFavoriteService {
  constructor(private favoriteRepository: IFavoritesRepository) {}

  async execute(favoriteId: string): Promise<void> {
    await this.favoriteRepository.remove(favoriteId);
  }
}

export default RemoveFavoriteService;

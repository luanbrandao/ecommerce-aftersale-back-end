import { injectable, inject } from 'tsyringe';
import IFavoritesRepository from '../repositories/IFavoritesRepository';
import AppError from '../../../shared/errors/AppError';

@injectable()
class RemoveFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoriteRepository: IFavoritesRepository,
  ) {}

  async execute(user_id: string, favoriteId: string): Promise<void> {
    const favorite = await this.favoriteRepository.findById(
      user_id,
      favoriteId,
    );

    if (!favorite) {
      throw new AppError('This product does not belong to you!', 403);
    }

    await this.favoriteRepository.remove(favoriteId);
  }
}

export default RemoveFavoriteService;

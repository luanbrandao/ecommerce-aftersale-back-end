import IFavoritesRepository from '../IFavoritesRepository';
import Favorite from '../../infra/typeorm/entities/Favorite';

class FakeFavoritesRepository implements IFavoritesRepository {
  private favorites: Favorite[] = [];

  public async findAll(user_id: string): Promise<Favorite[]> {
    const findAllFavorites = this.favorites.filter(favorite => {
      return favorite.user_id === user_id;
    });
    return findAllFavorites;
  }
}

export default FakeFavoritesRepository;

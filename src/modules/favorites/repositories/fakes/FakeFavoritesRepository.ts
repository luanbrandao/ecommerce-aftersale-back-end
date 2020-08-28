import IFavoritesRepository from '../IFavoritesRepository';
import Favorite from '../../infra/typeorm/entities/Favorite';

class FakeAppointmentsRepository implements IFavoritesRepository {
  private favorites: Favorite[] = [];

  public async findAll(): Promise<Favorite[]> {
    const findAllFavorites = this.favorites;
    return findAllFavorites;
  }
}

export default FakeAppointmentsRepository;

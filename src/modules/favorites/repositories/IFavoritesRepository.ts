import Favorite from '../infra/typeorm/entities/Favorite';

export default interface IFavoritesRepository {
  findAll(user_id: string): Promise<Favorite[]>;
}

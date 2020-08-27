import Favorite from '../infra/typeorm/entities/Favorite';

export default interface IFavoritesRepository {
  findAll(): Promise<Favorite | undefined>;
}

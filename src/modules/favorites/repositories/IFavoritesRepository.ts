import Favorite from '../infra/typeorm/entities/Favorite';
import ICreateFavoriteDTO from '../dtos/ICreateFavoriteDTO';

export default interface IFavoritesRepository {
  findAll(user_id: string): Promise<Favorite[]>;
  findById(user_id: string, product_id: string): Promise<Favorite | undefined>;
  create(params: ICreateFavoriteDTO): Promise<Favorite>;
  remove(favoriteId: string): Promise<void>;
}

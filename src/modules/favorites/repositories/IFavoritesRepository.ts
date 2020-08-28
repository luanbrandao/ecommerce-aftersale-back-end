import Favorite from '../infra/typeorm/entities/Favorite';
import ICreateFavoriteDTO from '../dtos/ICreateFavoriteDTO';

export default interface IFavoritesRepository {
  findAll(user_id: string): Promise<Favorite[]>;
  create(params: ICreateFavoriteDTO): Promise<Favorite>;
}

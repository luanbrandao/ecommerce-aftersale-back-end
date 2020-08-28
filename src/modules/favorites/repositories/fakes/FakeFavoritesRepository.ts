import { uuid } from 'uuidv4';
import IFavoritesRepository from '../IFavoritesRepository';
import Favorite from '../../infra/typeorm/entities/Favorite';
import ICreateFavoriteDTO from '../../dtos/ICreateFavoriteDTO';

class FakeFavoritesRepository implements IFavoritesRepository {
  private favorites: Favorite[] = [];

  public async findAll(user_id: string): Promise<Favorite[]> {
    const findAllFavorites = this.favorites.filter(favorite => {
      return favorite.user_id === user_id;
    });
    return findAllFavorites;
  }

  public async findById(
    user_id: string,
    product_id: string,
  ): Promise<Favorite | undefined> {
    const findAppointment = this.favorites.find(
      favorite =>
        favorite.user_id === user_id && favorite.product_id === product_id,
    );

    return findAppointment;
  }

  public async create({
    product_id,
    title,
    price,
    image_url,
    user_id,
  }: ICreateFavoriteDTO): Promise<Favorite> {
    const favorite = new Favorite();

    Object.assign(favorite, {
      id: uuid(),
      product_id,
      title,
      price,
      image_url,
      user_id,
    });

    this.favorites.push(favorite);

    return favorite;
  }

  remove(favoriteId: string): Promise<void> {
    const removeIndex = this.favorites
      .map(favorite => {
        return favorite.id;
      })
      .indexOf(favoriteId);
    this.favorites.splice(removeIndex, 1);

    return new Promise(resolve => resolve());
  }
}

export default FakeFavoritesRepository;

import { injectable, inject } from 'tsyringe';
import IFavoritesRepository from '../repositories/IFavoritesRepository';
import Favorite from '../infra/typeorm/entities/Favorite';

interface IRequest {
  product_id: string;
  title: string;
  price: number;
  image_url: string;
  user_id: string;
}

@injectable()
class CreateFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoriteRepository: IFavoritesRepository,
  ) {}

  async execute({
    product_id,
    title,
    price,
    image_url,
    user_id,
  }: IRequest): Promise<Favorite> {
    const favorite = await this.favoriteRepository.create({
      product_id,
      title,
      price,
      image_url,
      user_id,
    });

    return favorite;
  }
}

export default CreateFavoriteService;

import { injectable, inject } from 'tsyringe';
import IFavoritesRepository from '../repositories/IFavoritesRepository';

@injectable()
class FindAllFavoritesService {
  constructor(
    @inject('FavoritesRepository')
    private usersRepository: IFavoritesRepository,
  ) {}

  async execute(user_id: string) {
    const favorites = await this.usersRepository.findAll(user_id);
    return favorites;
  }
}

export default FindAllFavoritesService;

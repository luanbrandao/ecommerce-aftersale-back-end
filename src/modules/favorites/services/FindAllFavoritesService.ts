import IFavoritesRepository from '../repositories/IFavoritesRepository';

class FindAllFavoritesService {
  constructor(private usersRepository: IFavoritesRepository) {}

  async execute(user_id: string) {
    const favorites = await this.usersRepository.findAll(user_id);
    return favorites;
  }
}

export default FindAllFavoritesService;

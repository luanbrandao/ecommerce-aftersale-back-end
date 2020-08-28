import { injectable, inject } from 'tsyringe';
import IFavoritesRepository from '../repositories/IFavoritesRepository';
import AppError from '../../../shared/errors/AppError';
import IMailProvider from '../../../shared/container/providers/MailProvider/models/IMailProvider';

@injectable()
class RemoveFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoriteRepository: IFavoritesRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  async execute(user_id: string, favoriteId: string): Promise<void> {
    const favorite = await this.favoriteRepository.findById(
      user_id,
      favoriteId,
    );

    if (!favorite) {
      throw new AppError('This product does not belong to you!', 403);
    }

    await this.mailProvider.sendMail('luanbrandao4@gmail.com');

    await this.favoriteRepository.remove(favoriteId);
  }
}

export default RemoveFavoriteService;

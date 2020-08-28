import FakeFavoritesRepository from '../repositories/fakes/FakeFavoritesRepository';
// import AppError from '../../../shared/errors/AppError';
import RemoveFavoriteService from './RemoveFavoriteService';

describe('RemoveFavoriteService', () => {
  let fakeFavoritesRepository: FakeFavoritesRepository;
  let removeFavoriteService: RemoveFavoriteService;

  beforeEach(() => {
    fakeFavoritesRepository = new FakeFavoritesRepository();
    removeFavoriteService = new RemoveFavoriteService(fakeFavoritesRepository);
  });

  it('should be able to create a new favorite', async () => {
    const userId = 'any_user_id';

    const productId = 'product_id';

    await fakeFavoritesRepository.create({
      product_id: productId,
      title: 'title',
      price: 12,
      image_url: 'image_url',
      user_id: userId,
    });

    await removeFavoriteService.execute(productId);

    const favorites = await fakeFavoritesRepository.findAll(userId);

    expect(favorites).toEqual([]);
  });
});

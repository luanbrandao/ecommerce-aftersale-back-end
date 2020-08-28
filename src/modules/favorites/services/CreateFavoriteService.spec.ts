import FakeFavoritesRepository from '../repositories/fakes/FakeFavoritesRepository';
// import AppError from '../../../shared/errors/AppError';
import CreateFavoriteService from './CreateFavoriteService';

describe('CreateFavoriteService', () => {
  let fakeFavoritesRepository: FakeFavoritesRepository;
  let createFavoriteService: CreateFavoriteService;

  beforeEach(() => {
    fakeFavoritesRepository = new FakeFavoritesRepository();
    createFavoriteService = new CreateFavoriteService(fakeFavoritesRepository);
  });

  it('should be able to create a new favorite', async () => {
    const userId = 'any_user_id';

    const favoryte = await createFavoriteService.execute({
      product_id: 'product_id',
      title: 'title',
      price: 12,
      image_url: 'image_url',
      user_id: userId,
    });

    expect(favoryte).toHaveProperty('id');
    expect(favoryte.user_id).toBe(userId);
  });
});

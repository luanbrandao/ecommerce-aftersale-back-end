import FakeFavoritesRepository from '../repositories/fakes/FakeFavoritesRepository';
// import AppError from '../../../shared/errors/AppError';
import FindAllFavoritesService from './FindAllFavoritesService';

describe('FindAllFavoritesService', () => {
  let fakeFavoritesRepository: FakeFavoritesRepository;
  let findAllFavoritesService: FindAllFavoritesService;

  beforeEach(() => {
    fakeFavoritesRepository = new FakeFavoritesRepository();
    findAllFavoritesService = new FindAllFavoritesService(
      fakeFavoritesRepository,
    );
  });

  it('should be able to retruns all favorites ', async () => {
    const userId = 'any_user_id';
    const favorite1 = await fakeFavoritesRepository.create({
      product_id: 'product_id',
      title: 'title',
      price: 12,
      image_url: 'image_url',
      user_id: userId,
    });
    const favorite2 = await fakeFavoritesRepository.create({
      product_id: 'product_id',
      title: 'title',
      price: 12,
      image_url: 'image_url',
      user_id: userId,
    });

    const favorytes = await findAllFavoritesService.execute(userId);

    expect(favorytes).toEqual([favorite1, favorite2]);
  });
});

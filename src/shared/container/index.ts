import { container } from 'tsyringe';
import '../../modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IFavoritesRepository from '@modules/favorites/repositories/IFavoritesRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

import FavoriteRepository from '../../modules/favorites/infra/typeorm/repositories/FavoriteRepository';

// register, cria uma nova instância
// registerSingleton, instância apenas uma vez
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IFavoritesRepository>(
  'FavoritesRepository',
  FavoriteRepository,
);

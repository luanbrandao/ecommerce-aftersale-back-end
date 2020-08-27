import { container } from 'tsyringe';
import '../../modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

// register, cria uma nova instância
// registerSingleton, instância apenas uma vez
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

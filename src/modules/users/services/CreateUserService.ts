// import { getRepository } from 'typeorm';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: IRequest): Promise<User> {
    // const usersRepository = getRepository(User);
    // const checkUserExists = await usersRepository.findOne({
    //   where: { email },
    // });

    // if (checkUserExists) {
    //   throw Error('Email address alredy used.');
    // }

    return new Promise(resolve =>
      resolve({
        id: 'any_id',
        name,
        email,
        password,
      } as User),
    );
  }
}

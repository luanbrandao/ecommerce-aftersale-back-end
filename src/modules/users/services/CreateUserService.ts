import Service from '@shared/infra/protocols/service';
import { EmailInUseError } from '../../../shared/errors/EmailInUseError';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService implements Service<IRequest, User> {
  constructor(
    private usersRepository: IUsersRepository,
    private iHashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new EmailInUseError();
    }

    const hashedPassword = await this.iHashProvider.generateHash(password);

    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

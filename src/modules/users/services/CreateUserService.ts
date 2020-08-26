import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: IRequest): Promise<User> {
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

import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  create(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<User>;
}

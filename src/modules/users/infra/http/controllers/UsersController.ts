import { Request, Response } from 'express';
import CreateUserService from '../../../services/CreateUserService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';
import BCryptHashProvider from '../../../providers/HashProvider/implementations/BCryptHashProvider';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const bCryptHashProvider = new BCryptHashProvider();
    const createUser = new CreateUserService(
      usersRepository,
      bCryptHashProvider,
    );
    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}
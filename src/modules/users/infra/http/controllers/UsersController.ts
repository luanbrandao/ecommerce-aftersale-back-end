import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateUserService from '../../../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    // const usersRepository = new UsersRepository();
    // const bCryptHashProvider = new BCryptHashProvider();
    // const createUser = new CreateUserService(
    //   usersRepository,
    //   bCryptHashProvider,
    // );

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(classToClass(user));
  }
}

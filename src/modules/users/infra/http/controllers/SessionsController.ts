import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import AuthenticateUserService from '../../../services/AuthenticateUserService';
import IUsersRepository from '../../typeorm/repositories/UsersRepository';
import HashProvider from '../../../providers/HashProvider/implementations/BCryptHashProvider';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = new IUsersRepository();

    const iHashProvider = new HashProvider();

    const authentucate = new AuthenticateUserService(
      usersRepository,
      iHashProvider,
    );

    const { user, token } = await authentucate.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}

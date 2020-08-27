import { Router } from 'express';
import CreateUserService from '../../../services/CreateUserService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const createUser = new CreateUserService(usersRepository);
    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default userRouter;

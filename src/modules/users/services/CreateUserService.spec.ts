import { CreateUserService } from './CreateUserService';

let createUser: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    createUser = new CreateUserService();
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'any_name',
      email: 'any_email@gmail.com',
      password: 'any_password',
    });

    expect(user).toHaveProperty('id');
  });
});

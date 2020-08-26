import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

const makeFakeRequest = () => ({
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'valid_password',
});

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'any_name',
      email: 'any_email@gmail.com',
      password: 'any_password',
    });

    expect(user).toHaveProperty('id');
  });

  test('Should call execute with correct values', async () => {
    const isValidParams = jest.spyOn(createUser, 'execute');
    await createUser.execute(makeFakeRequest());
    expect(isValidParams).toHaveBeenCalledWith(makeFakeRequest());
  });
});

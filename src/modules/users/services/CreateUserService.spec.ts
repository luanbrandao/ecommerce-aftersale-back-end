import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

const makeFakeRequest = (): ICreateUserDTO => ({
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
    const user = await createUser.execute(makeFakeRequest());

    expect(user).toHaveProperty('id');
  });

  test('Should call execute with correct values', async () => {
    const isValidParams = jest.spyOn(createUser, 'execute');
    await createUser.execute(makeFakeRequest());
    expect(isValidParams).toHaveBeenCalledWith(makeFakeRequest());
  });
});

import { EmailInUseError } from '@shared/errors/EmailInUseError';
import CreateUserService from './CreateUserService';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;

let createUser: CreateUserService;

const makeFakeRequest = (): ICreateUserDTO => ({
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'valid_password',
});

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
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

  test('Should call generateHash with correct password', async () => {
    const encryptSpy = jest.spyOn(fakeHashProvider, 'generateHash');
    const request = makeFakeRequest();
    await createUser.execute(request);
    expect(encryptSpy).toHaveBeenCalledWith(request.password);
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      name: 'any_name',
      email: 'duplicate_email@gmail.com',
      password: 'any_password',
    });

    await expect(
      createUser.execute({
        name: 'any_name',
        email: 'duplicate_email@gmail.com',
        password: 'any_password',
      }),
    ).rejects.toBeInstanceOf(EmailInUseError);
  });
});

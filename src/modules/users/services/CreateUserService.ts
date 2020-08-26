interface IRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  execute({ name, email, password }: IRequest): any {
    return {
      name,
      email,
      password,
      id: 'any_id',
    };
  }
}

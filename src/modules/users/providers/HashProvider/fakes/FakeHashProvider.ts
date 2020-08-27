/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async generateHash(_playload: string): Promise<string> {
    return faker.random.number().toString();
  }

  public async compareHash(playload: string, hashed: string): Promise<boolean> {
    return playload === hashed;
  }
}

export default FakeHashProvider;

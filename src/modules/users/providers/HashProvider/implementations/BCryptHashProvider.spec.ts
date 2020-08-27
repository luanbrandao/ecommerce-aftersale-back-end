/* eslint-disable import/no-extraneous-dependencies */
import bcrypt from 'bcrypt';
import faker from 'faker';
import BcryptAdapter from './BCryptHashProvider';

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return faker.random.number().toString();
  },

  async compare(): Promise<boolean> {
    return true;
  },
}));

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter();
};

const salt = 8;

describe('BCryptHashProvider', () => {
  describe('generateHash()', () => {
    test('Should call generateHash with correct values', async () => {
      const sut = makeSut();
      const hashSpy = jest.spyOn(bcrypt, 'hash');
      await sut.generateHash('any_value');
      expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
    });

    test('Should return a valid generateHash on hash success', async () => {
      const sut = makeSut();
      const playload = 'any_value';
      const hash = await sut.generateHash(playload);
      expect(hash).not.toBe(playload);
    });
  });
});

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

    test('Should throw if hash throws', async () => {
      const sut = makeSut();
      jest
        .spyOn(bcrypt, 'hash')
        .mockReturnValueOnce(
          new Promise((resolve, reject) => reject(new Error())),
        );

      const promise = sut.generateHash('any_value');
      await expect(promise).rejects.toThrow();
    });
  });

  describe('compareHash()', () => {
    test('Should call compareHash with correct values', async () => {
      const sut = makeSut();
      const compareSpy = jest.spyOn(bcrypt, 'compare');
      await sut.compareHash('any_value', 'any_hash');
      expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_hash');
    });

    test('Should return true when compareHash succeeds', async () => {
      const sut = makeSut();
      const isValid = await sut.compareHash('any_value', 'any_hash');
      expect(isValid).toBe(true);
    });
  });
});

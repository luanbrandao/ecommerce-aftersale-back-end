import AppError from './AppError';

export class EmailInUseError extends AppError {
  constructor() {
    super('The received email is already in use');
  }
}

import {
  signUpPath,
  sessionPath,
} from '../../modules/users/infra/http/doc/paths';

export default {
  '/users': signUpPath,
  '/session': sessionPath,
};

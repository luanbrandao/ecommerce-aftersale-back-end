import {
  signUpPath,
  sessionPath,
} from '../../modules/users/infra/http/doc/paths';

import { findAllFavoritesPath } from '../../modules/favorites/infra/http/doc/paths';

export default {
  '/users': signUpPath,
  '/session': sessionPath,
  '/favorites': findAllFavoritesPath,
};

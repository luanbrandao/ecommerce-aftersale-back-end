import {
  accountSchema,
  signUpParamsSchema,
  sessionParamsSchema,
} from '../../modules/users/infra/http/doc/schemas';

import { findAllFavoritesParamsSchema } from '../../modules/favorites/infra/http/doc/schemas';

export default {
  account: accountSchema,
  signUpParams: signUpParamsSchema,
  sessionParams: sessionParamsSchema,
  findAllFavoritesParams: findAllFavoritesParamsSchema,
};

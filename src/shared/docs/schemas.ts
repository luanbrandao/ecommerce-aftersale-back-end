import {
  accountSchema,
  signUpParamsSchema,
  sessionParamsSchema,
} from '../../modules/users/infra/http/doc/schemas';

export default {
  account: accountSchema,
  signUpParams: signUpParamsSchema,
  sessionParams: sessionParamsSchema,
};

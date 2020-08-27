import {
  accountSchema,
  signUpParamsSchema,
} from '../../modules/users/infra/http/doc/schemas';

export default {
  account: accountSchema,
  signUpParams: signUpParamsSchema,
};

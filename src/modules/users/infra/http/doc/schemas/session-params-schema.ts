export const sessionParamsSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  required: ['email', 'password'],
};

export const apiKeyAuthSchema = {
  type: 'apiKey',
  name: 'Authorization',
  scheme: 'bearer',
  in: 'header',
};

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema,
  },
};

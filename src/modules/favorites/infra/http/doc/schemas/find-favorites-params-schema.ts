export const findAllFavoritesParamsSchema = {
  type: 'object',
  properties: {
    product_id: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    price: {
      type: 'string',
    },
    image_url: {
      type: 'string',
    },
  },
  required: ['email', 'password'],
};

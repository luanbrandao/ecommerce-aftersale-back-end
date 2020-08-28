export const favoriteParamsSchema = {
  type: 'object',
  properties: {
    product_id: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    price: {
      type: 'number',
    },
    image_url: {
      type: 'string',
    },
  },
  required: ['product_id', 'title', 'price', 'image_url'],
};

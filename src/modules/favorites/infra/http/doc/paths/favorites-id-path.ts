export const favoritesIdPath = {
  delete: {
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    tags: ['Favorites'],
    summary: 'API para remover um produto favorito',
    description:
      'Essa rota pode ser executada apenas por **usuários autenticados**',
    parameters: [
      {
        in: 'path',
        name: 'favorite_id',
        description: 'ID de um produto favorito',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Sucesso',
      },
    },
  },
};

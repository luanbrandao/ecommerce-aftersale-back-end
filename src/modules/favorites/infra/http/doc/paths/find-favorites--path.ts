export const findAllFavoritesPath = {
  get: {
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    tags: ['Favorites'],
    summary: 'API para retornar os produtos favoritos do usuário',
    description:
      'Essa rota pode ser executada apenas por **usuários autorizados**',
    responses: {
      200: {
        description: 'Sucesso',
      },
    },
  },
  post: {
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    tags: ['Favorites'],
    summary: 'API para criar um novo produto favorito',
    description:
      'Essa rota pode ser executada apenas por **usuários autenticados**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/favoriteParams',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Sucesso',
      },
    },
  },
};

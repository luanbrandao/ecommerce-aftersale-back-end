export const findAllFavoritesPath = {
  post: {
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
};

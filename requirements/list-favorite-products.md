# Listagem de Produtos Favorito

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/favorites**
2. ✅ Valida se o usuário está autenticado.
3. ✅ **Busca** todos os produtos favoritos do usuário
4. ✅ Retorna **200** com a listagem dos produtos

> ## Exceções

1. ✅ Retorna erro **400** se **favorite_id** não estiver no formato uuid
2. ✅ Retorna erro **401** se o usuário não passar o token de acesso
3. ✅ Retorna erro **401** se o usuário passar o token de acesso inválido
4. ✅ Retorna erro **404** se não passar o **favorite_id**

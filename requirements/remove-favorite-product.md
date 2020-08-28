# Remover Produto Favorito

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **DELETE** na rota **/favorites**
2. ✅ Valida se o usuário está autenticado.
3. ✅ Valida se o parametro **favorite_id** e passado
4. ✅ **Deletar** produto favorito
5. ✅ Retorna **201**

> ## Exceções

1. ✅ Retorna erro **400** se **favorite_id** não estiver no formato uuid
2. ✅ Retorna erro **401** se o usuário não passar o token de acesso
3. ✅ Retorna erro **401** se o usuário passar o token de acesso inválido
4. ✅ Retorna erro **404** se não passar o **favorite_id**

# Adiconar Produto Favorito

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/session**
2. ✅ Valida dados obrigatórios **product_id** , **title** , **price** e **image_url**
3. ✅ **Criar** novo produto favorito
4. ✅ Retorna **200** com o novo produto favorito

> ## Exceções

1. ✅ Retorna erro **400** se algum dos campos não for fornecido
2. ✅ Retorna erro **401** se o usuário não passar o token de acesso
3. ✅ Retorna erro **401** se o usuário passar o token de acesso inválido

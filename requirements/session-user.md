# Session

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/session**
2. ✅ Valida dados obrigatórios **email** e **password**
3. ✅ Valida que o campo **email** é um e-mail válido
4. ✅ **Busca** o usuário com o email e senha fornecidos
5. ✅ Gera um **token** de acesso
7. ✅ Retorna **200** com o token

> ## Exceções

1. ✅ Retorna erro **400** se email ou password não forem fornecidos pelo client
2. ✅ Retorna erro **400** se o campo email for um e-mail inválido
3. ✅ Retorna erro **401** se não encontrar um usuário com os dados fornecidos

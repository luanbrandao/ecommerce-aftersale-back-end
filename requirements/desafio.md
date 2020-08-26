# Requisitos

1. X Possibilitar o cadastro do usuário no seu serviço
2. X O usuário deve se autenticar para usar as funcionalidades.
3. X O usuário deve conseguir favoritar/desfavoritar produtos dentro da sua aplicação.
4. X O usuário precisa visualizar sua lista de produtos favoritos
5. X Os usuários são independentes dos consumidores da loja no Shopify, ou seja, não é
necessário integrar com a base de clientes e usuários da plataforma

> # Regras
  ## Apenas usuários logados podem favoritar/desfavoritar produtos.
  ## O usuário autenticado só pode favoritar/desfavoritar os produtos dele mesmo.
  ## O usuário autenticado só pode visualizar os favoritos dele mesmo.
  ## Ao salvar ou remover um produto favorito, deverá ser enviado um e##mail para o  usuário que realizou a ação, 2 minutos após o evento. Esse email deve conter uma lista com todos os produtos atuais na lista de favoritos.
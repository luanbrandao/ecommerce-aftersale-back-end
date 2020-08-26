
## !!! Para executar os comandos abaixo é priciso ter o docker instalado.
## Criando container do banco postgres
### escolhi a porta 5433, você pode optar por outra
``` docker run --name postgres -e POSTGRES_PASSWORD=SUA_SENHA -p 5433:5432 -d postgres:11 ```
### rodando o container do postgres
```  docker start postgres

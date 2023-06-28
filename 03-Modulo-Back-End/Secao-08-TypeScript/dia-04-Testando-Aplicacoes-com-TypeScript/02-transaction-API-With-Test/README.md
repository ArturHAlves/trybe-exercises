# Transactions API

App para gestão financeira desenvolvida no conteúdo do dia BE8.3.

## Como executar?

O arquivo `docker-compose.yml` já define que ao subir o container, a aplicação já seja iniciada por meio do comando `npm run dev`. Portanto, basta executar o comando:

```bash
docker-compose up -d
```

### Dica

Caso tenha conflitos com portas já usadas. Use os comandos:

```bash
killall node # Parar qualquer aplicação node que esteja sendo executados na máquina!
docker stop $(docker ps -qa) # Para containers que estão sendo executados!

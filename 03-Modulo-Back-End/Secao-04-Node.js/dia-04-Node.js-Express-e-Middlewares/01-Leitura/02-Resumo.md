# Glossário

  
  

## Middlewares

  

Para o Express, um [middleware](https://expressjs.com/pt-br/guide/using-middleware.html) é uma função que realiza o tratamento de uma requisição HTTP e que pode responder essa request(res) ou chamar o próximo middleware (next).

  
  

### CORS

  

CORS é a sigla de Cross-origin Resource Sharing. Ele é um middleware utilizado pelos navegadores para compartilhar recursos entre diferentes origens. Um exemplo disso é uma aplicação front-end rodando em um endpoint (localhost:3000) que tenta acessar uma API que está rodando em outro endpoint (localhost:3001). A função do CORS aí seria basicamente gerenciar se essa API poderia ou não receber as requisições dessa aplicação.

  
  

### Express.json

É um middleware nativo do Express que lê o conteúdo da requisição HTTP, interpreta os conteúdos como JSON e cria no objeto req uma propriedade body com o valor encontrado no conteúdo.

  
  

### Middleware de erro

  

São identificados pelo Express pela quantidade de parâmetros e por isso apresentam obrigatoriamente quatro parâmetros: err, req, res, next.

É possível encadear vários middlewares de erro apenas colocando-os na sequência em que devem ser executados, mas atenção: eles sempre devem vir depois de rotas e outros middlewares!

Além disso, middlewares de erro só recebem requisições se algum middleware lançar um erro ou chamar next(err) com algum parâmetro.

  
  

### Middleware de validação

O Express permite que o tratamento de uma rota seja feito por vários middlewares em conjunto, cada um fazendo uma parte do tratamento da requisição. Nesse sentido, podemos criar um ou vários middlewares de validação, como um responsável por verificar se um id é válido, por exemplo.

Validações não costumam ser o objetivo final das requisições e por isso middlewares de validação costumam ter o parâmetro next, além dos já conhecidos req e res, para que após fazer a validação pertinente possam, em seguida, escolher entre responder (res) a requisição ou chamar o próximo middleware (next).

  
  

### Middlewares globais

  

São middlewares que interceptam todas ou quase todas as rotas. De forma simplista, para que um middleware seja aplicado em todas as rotas basta que ele seja usado (app.use) antes das rotas no código.

  
  

### Morgan

É um middleware de logs de requisições do Node.js. Com ele, podemos monitorar informações sobre as requisições feitas para uma API, como o método utilizado (POST, PUT, GET, etc.) e o status code da resposta, por exemplo.

  
  

### Router

Este é mais um middleware nativo do Express e é utilizado para agrupar várias rotas em um mesmo lugar, trazendo mais organização para o código, e depois é passado no arquivo que lê as rotas, geralmente o app.js em nossos exemplos.
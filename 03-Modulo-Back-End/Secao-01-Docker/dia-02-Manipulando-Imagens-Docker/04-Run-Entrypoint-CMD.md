# RUN vs. ENTRYPOINT vs. CMD

  

Essas três palavras reservadas do Dockerfile são as maiores fontes de confusão para as pessoas iniciantes de Docker:

  

RUN, ENTRYPOINTS e CMD

  
  

## EXPLICANDO:

  
  

RUN <comando> <argumento1> <argumento2> <argumentoN>:

Durante

-   Indica que o comando dado deve ser executado durante a construção da imagem Docker
    
-   Ou seja, é muito comum utilizar o RUN para fazer instalações de dependências
    

  
  

ENTRYPOINT <comando> <argumento1> <argumento2> <argumentoN>:

  

-   Indica qual é o comando (e seus argumentos) que deve ser executados ao iniciar esta imagem Docker como um container
    
-   Considere o ENTRYPOINT como OBRIGAÇÃO de comando a ser executado.
    
-   Ele sempre será utilizado como ponto de entrada da imagem
    

  
  

CMD <comando> <argumento1> <argumento2> <argumentoN>:

  

-   Indica qual é o comando (e seus argumentos) que pode ser executado ao iniciar esta imagem Docker como um container
    
-   Considere o CMD como sugestão de comandos a ser executados.
    
-   Ele pode ser substituído ao executar o comando docker run imagem <comando><argumento1>
    

  
  
  

## EXEMPLOS:

  

### CMD

É substituido

  

▶️ Considere o seguinte Dockerfile abaixo e que já construímos essa imagem com nome de exemplo-cmd:

  

![](https://lh3.googleusercontent.com/mty8XR_vbooauD4Axp2ur6llA6bSMaMrumXZCY6zDH3PMDF6dz8w5d6JqUzSUmhX7D3xBc7-pIPRN6-mLXMcIxHAsuCP-lYFlx1AA1EEFHgg2LFeR2rpFfM8QWfb7nQOim5HBVL_MlSrxoZMHx36qp4)

  

▶️ Ao executar essa imagem como um container com o comando docker run --rm exemplo-cmd, sem passar nenhum parâmetro extra, temos:

  

![](https://lh3.googleusercontent.com/_650jOecrB9LZVt8XrVG9FxPBNzvQ2ZD-vLNZafevtzxjY4FtoGfqjWtZGSKmJbDP6aeaY6OLl3LV40uIQhYfazJzNxS5XLV0tuGeN8pBO41N3-Ko2rHmgZxO-g6EguC9BnzCWP35X0kNJxcRMT6lwM)

  
  

▶️ Agora, ao executar essa imagem como um container com o comando docker run --rm exemplo-cmd echo "Sou diferente!", temos:

  

![](https://lh5.googleusercontent.com/VkblxdZJKfmE0RcJzgacKjCQc09S80h5XKGlX8iWkyczawOSCI4t_ngF4kA4z-SekKY6JOsvUqQq8vJpy5RebTJzPvHE4QoVDwAUEnW-dKg1dL_7UxUX8pAxmsR2p8PVVVETFY12SUQxL3hJ7OUJezo)

  

Perceba que o conteúdo de CMD foi totalmente substituído.

  
  
  

ENTRYPOINT

  

▶️ Agora vamos mudar este Dockerfile de CMD para ENTRYPOINT, de modo a construir essa imagem com o nome de exemplo-entrypoint:

  

![](https://lh6.googleusercontent.com/wLeWwpMf7SG37ZsLgEM7Sxo28zR6Ji33WSRSunlPJbFZOPub0CXJ3DqRgMed3AZZiVDp0jSj9WTr-c6zif2mQIslI87x1FiJrUj9VR01m7lKiasIB277tAKca8LJzU0fquBaz1WweJRCYmox6SCUvBg)

  
  

▶️ Ao executar essa imagem como um container com o comando docker run --rm exemplo-entrypoint, sem passar nenhum parâmetro extra, temos:

  

![](https://lh4.googleusercontent.com/t4qBhb8vKLxWBpVKdtyvPQgxXsjHejoPtNNdUkevTQ_G1IReo9M7Weayf4cNrbW6xBwtiF9N7fRZxa_K4t0nJ75Xw81x14cQJyj2mrX2fvu_DGvJKE_kQvgLZDWskmi5gElTNWjzEUhR77nHsaOpLdE)

  
  
  

▶️ Agora, ao executar essa imagem como um container com o comando docker run --rm exemplo-entrypoint "Sou diferente!", temos:

  

![](https://lh3.googleusercontent.com/TzFTRZE2TeY17wQDk1u27I0CldtbJT4C8yUL0pv8m8_w0oW5WoHVnmXP350UAYj6M0gxnoDZDsnApBcbGh0OHtmWOXA388eh5o0mXGlBXpvkg5V9JCjmyrswbbmKjS5_NuxKv4gX6jwL5DWau3G8ozs)

  

Perceba que o conteúdo de ENTRYPOINT  não é substituído e que o parâmetro "Sou diferente" é colocado depois do comando do ENTRYPOINT. Isso significa que o container executou o comando echo "Olá mundo!" "Sou diferente".

  
  
  

USANDO CMD E ENTRYPOINT

  

▶️ Agora vamos mudar este Dockerfile para usar CMD e ENTRYPOINT ao mesmo tempo, de modo a construir essa imagem com o nome de exemplo-entrypoint-cmd:

  

![](https://lh3.googleusercontent.com/L7k4mw-rQENVjRRnurXzLs5541yRAqfCYG1p2m-wFtPw85MDwy6gb1emw3vnIbRV5ZTbSrNIDrtePFdiUIV0Am0DiZfFyBx_c7HOQ13aaC1sa0UP1mF7QG_5uSAFz0t_eBrlsVeYwWcz-Rq30SqcjY8)

  
  

▶️ Ao executar essa imagem como um container com o comando docker run --rm exemplo-entrypoint-cmd, sem passar nenhum parâmetro extra, temos:

  

![](https://lh6.googleusercontent.com/W-cocgqkVnn4zeWdzMkvg3-8jkZOvuXgmUaEMlQ-O5MAubRz6wSWKf-6ZR9TRzhOImo0ReTc1WrbHmbbZNWYvTiJr8lwz9TTfbnGMp28hAFHn7Fp1m0qeRKbnWe7YPzb5YoLRKQ3DNGqZdIEm7OKmkk)

  
  

▶️ Agora, ao executar essa imagem como um container com o comando docker run --rm exemplo-entrypoint-cmd "Sou uma mensagem nova!", temos:

  

![](https://lh3.googleusercontent.com/q0TiL-ynW-hEunyoP-gsn6GFlhcRm9x7bty6CwwXFuOPua6GmQlM6RJCj9o6rZdvatBzR6ZhyWr8i4JMgQOrzMoMpkdmWzcHBO5x_4QruIJJ1vd2S6rC7v59RrO8cDZiUDEDBgOAB5-Ilrr6ihLOcP8)

  
  

### RECOMENDAÇÃO

  

Podemos usar o ENTRYPOINT para dizer exatamente o que deve ser executado ao iniciar a imagem como um container. Também podemos usar o CMD como sugestão de parâmetro padrão

  

IMAGINE QUE O DOCKER AO INICIAR UM CONTAINER VAI EXECUTAR O COMANDO DA SEGUINTE MANEIRA

  

![](https://lh3.googleusercontent.com/d0EoOM0rlMHo4EyH-AR333AYKnwMTIkgFcCPPFaI_GWdA0hQg7usMx6hz2IbqK7lzyOMvNMADmEva6qa89QxvE_xXlS2eed5o8MlDkp6i6woGzs0LTf7aifPxOmtyrtuj0buzcM7xbrNj0HFn5mGl8g)

  

É por estes motivos que ENTRYPOINT e CMD  parecem ter a mesma funcionalidade, mas na prática eles são complementares!

  

  

RESUMINDO

  

-   Diferença entre RUN, ENTRYPOINT e CMD
    

-   RUN é a execução imediata durante o build;
    
-   ENTRYPOINT é a execução obrigatória ao iniciar o container;
    
-   CMD é uma sugestão de parâmetros ao iniciar o container.
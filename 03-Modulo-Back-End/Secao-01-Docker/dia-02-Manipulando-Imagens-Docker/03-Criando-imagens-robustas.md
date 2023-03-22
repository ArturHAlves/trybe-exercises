# Criando imagens mais robustas

  

Conhecer outras palavras reservadas

  

## Limpando tudo antes de começar!

  

Comando para remover imagens e containers

  

-   docker system prune -af
    

  
  

## Criando os arquivos para o novo servidor web com Hugo e NGINX

  

O Objetivo da ferramenta Hugo é facilitar a criação de páginas, de modo que as pessoas possam focar mais em escrever o conteúdo do que se preocupar com tags HTML das páginas.

  

Vamos começar criando três arquivos, sendo eles:

  

-   config.toml: será um arquivo de configuração para o Hugo;
    
-   index.html: será o template HTML que o Hugo utilizará para gerar páginas;
    
-   _index.md: será o arquivo com o conteúdo de fato.
    

  

  

▶️ Para o arquivo config.toml, use o seguinte código-fonte:

  

![](https://lh3.googleusercontent.com/CPKucqq-K85RRMf_P6_UHDHs6-NpyM2cppybl1OXJ9OExnqBAC7E1LiNv_Lwh1nWdVcH4ereh4x6QLx6AOAe-12TCNZgyea_47uSMtSrRzKFZoxvc2rbypvE5NJCbsNUjlB3Y2juFmS8UXk3-1s0rYY)

  
  

▶️ Para o arquivo index.html, use o seguinte código-fonte:

  

![](https://lh3.googleusercontent.com/qtIu_p8EzWWCce05d4MnoPyYIzer5ZJ3UPOwV-lUsjEw5TB7_RT3duKJ3EzRMOcj7A2Zy6518zpfz2QkuTP22_bL55TMkbJ0RktAmz5k4CZt9yTTFo76---8z3lbsxf1dKDNtXwkvvW2HnIXeODVv5I)

  
  

▶️ Para o arquivo _index.md, use o seguinte código-fonte:

  

![](https://lh5.googleusercontent.com/liQnT2GxURoPF3JDEoo8RQxmRCHeMChFbRKAdYoCFHbYev0f2fR10Cj-JksWMhdSU7QXsZTBCk6vYd4FAbr9nfMFn-ippxFePRCcpJ2CeI-H2naRPdOdPLnOeZN_Rj7AooADWDIZf2vFIzWsSrZ-dcA)

  
  

▶️ Por fim, para o nosso arquivo Dockerfile, use o seguinte código-fonte:

  

![](https://lh3.googleusercontent.com/UkS9szEbEpyDIebmSzW2lWNLL_jnFL_bnmNgZ_f2fSlhf2Hb5GIddAxTcyX83bWvBbouxcCxYjNnp1rwdfbDGb6DFdnU7E2b8QTx0stRgFyLnKubYlPai8ku5xiDCD1xeBr5Nh32-bNkgvBi8FT76uE)

  
  
  

### PASSO-PASSO

  
  

FROM nginx:1.21.3-alpine AS primeiro-estagio

  

-   O FROM já é nosso velho conhecido, mas agora temos um prefixo: AS;
    
-   Considere que durante o build podemos estar em estágios diferentes, e neste caso nós acabamos de nomear o estágio atual para primeiro-estagio;
    
-   Dar nome aos estágios será útil para nós mais adiante, porém neste caso não tem efeito algum.
    

  
  

WORKDIR /site

  

-   A palavra reservada WORKDIR indica para o Docker qual é a pasta atual de trabalho dentro da imagem;
    
-   Ou seja, nas próximas ações deste build e também quando essa imagem for executada como um container, estaremos no caminho especificado pelo WORKDIR.
    

  
  
  

Três linhas com COPY

  

-   Aqui copiamos os três arquivos no formato de pastas que o Hugo espera que estes arquivos estejam;
    
-   Não temos nenhuma novidade no uso do COPY aqui.
    

  
  

Três linhas com RUN

  

A palavra reservada RUN indica que o comando à frente deve ser executado imediatamente, durante o processo de build. Logo:

  

-   A primeira linha com RUN instala o ferramenta Hugo na nossa imagem Docker;
    
-   A segunda linha executa o comando hugo –minify –gc para gerar as páginas finais em HTML, baseados nos arquivos de templates (index.html) e conteúdos (_index.md);
    
-   A terceira linha executa o comando mv para mover as páginas resultantes do Hugo para o caminho onde o nginx espera que tenha páginas HTML para serem servidas.
    

  
  

ENTRYPOINT ["nginx", "-g", "daemon off;"]

  

-   A palavra reservada ENTRYPOINT indica para o Docker qual comando deve ser executado ao iniciar o container.
    

  
  
  

## Construindo a nossa nova imagem

  

Com os arquivos acima vamos construir uma buid

  

-   docker build -t site-hugo .
    

  

![](https://lh5.googleusercontent.com/akvT7rj7JHrF429bBj6g1EpD5aAiQDGixqAXw9y0DOHTt4uNWJ0ykS04bGF1N_g6JQc4wtr3NiiFdUK0Wa9c_UzMaxlEoswr5ztYzqyFIbnJZX-Y6J1vx4aA4tLaCu50q0XW7LYrRkTBto8yv0SRvaM)

  

Primeiro, avaliamos que não havia nenhuma imagem Docker em nosso computador.

  

-   A imagem nginx, que usamos como imagem base
    
-   A nossa imagem site-hugo
    

  
  

##   

## Executando um novo container com nossa imagem

  

Executando um novo container utilizando a nossa imagem recém criada. Lembre-se que vamos utilizar a tag -p para mapear a nossa porta

  
  

-   docker container run -d -p 1234:80 –name meu-container site-hugo
    

  

![](https://lh4.googleusercontent.com/jY8dJdmCWLaq1fvFy8tsdrLWtkcsjCUOIyaIi8fbZx4Y1TY3Xf93UWy6jjSAA63Hv0MthbeEYBdgJ_IbmGaFxU-rlr0yHm0_gIJoUECdId3Y4RTOQg0taP8LEnAn5ozRlUtsxobIDyFxMadnu3abOuQ)

  
  

Verifica o endereço do localhost http://localhost:1234

  
  

![](https://lh6.googleusercontent.com/IL3RhIGnJNTLBgamUyUPYNiEBcOVwInmUTwhMHw9V3QlJa0vzJNixG0UZNmRo1fJWUhPHcWx_RysP8XLy3DGrUsgY_qcNP9HQpG2PE-QvxEt-mt_66JYnHY3mev_IrpcCIAEEwHpvIvhBi9Yfl29DlE)

  

-   Removendo o container
    

docker rm -f meu-container

  
  
  

## Construção em múltiplos estágios

  

Voltando para o dockerfile

  

-   Na linha 8, nós instalamos a ferramenta Hugo, que foi útil apenas durante a execução do comando RUN hugo --minify --gc, na linha 9.
    

  
  

-   Após isso, a gente não precisou mais dessa ferramenta, porém ela ainda ficou instalada em nossa imagem Docker, ocupando espaço.
    

  

![](https://lh3.googleusercontent.com/dCl-3rRRZfww6a5wxfqn6z8vW45V3lixyt1EJsMoRO6-jHaI4wKp8p2WUCPhB541F1Ms1uD76inK9wnhu7jdfE9iFE_IK_hKXOIsuoGVpQ3BS9cd5g6Dca0_4aJALyBlQJ5OJ4rcrVdVdE_kQxSLQ3Q)

  
  
  

OBJETIVO:

  

Utilizando o docker build para fazer tudo o que for preciso para construir uma imagem Docker funcional, ou seja, não queremos instalar nada extra em nosso computador

  

Precisamos encontrar uma maneira de:

  

1.  instalar a ferramenta Hugo;
    
2.  Executar o comando hugo --minify --gc;
    
3.  Obter as páginas HTML resultantes;
    
4.  Criar uma nova imagem limpa baseada no nginx;
    
5.  Copiar apenas as páginas HTML geradas pelo Hugo para esta nova imagem;
    

  
  

Após tudo isso, vamos ter uma imagem Docker apenas com o nginx e as páginas geradas pelo Hugo.

  
  

## Dockerfile adaptado

  

Dockerfile adaptado para fazer a construção em múltiplos estágios, e assim, usar imagens intermediárias.

  

![](https://lh6.googleusercontent.com/kHKH7hShZ_eVPL5rxY3du0wZCR78sTbCA1qYAT9MnM82gvWCcIo4xj3I2uS5xhJnUMBmeWPzORbM7KpO0FX-fp642hjqdX3NAxp42ZCmmtIshfzSr4tLnWNIk38BaiZe_wTPw29WRtdZfns09hq22SE)

  
  

É muito parecido, mas existem dois detalhes importante.

  
  

Temos duas linhas de FROM:

-   Cada linha de FROM significa o início de um novo estágio;
    
-   Você pode considerar cada estágio como uma imagem Docker intermediária;
    
-   A última referência de FROM no Dockerfile sempre será a imagem final.
    

  
  

No segundo estágio, a linha COPY possui uma flag extra --from=primeiro-estagio:

  
  

-   Esse é o segredo principal de construção de múltiplos estágios;
    
-   O COPY possui a capacidade de copiar arquivos entre os estágios;
    
-   A flag --from indica que devemos copiar o seguinte arquivo ou pasta de um estágio para o estágio atual;
    
-   Neste caso acima, estamos copiando as páginas HTML resultantes do Hugo diretamente para uma imagem Docker limpa de nginx!
    

  
  

![](https://lh3.googleusercontent.com/zUHRHgb_0rqGnspF4dYb3zSowV1uV4NFHPBCnrzVOyRm_cl5DEGVt-PdrMJnZvow1dBCi_Z0TuWbpPlTWbmkgmqV5rXzbX5-X2TYm_TUCsQhi8DxVDChhcWqv2q_-Ji8gQJ6OAenCqeE_piNwj8IgTE)

  

  

COMPARAÇÃO

  

![](https://lh5.googleusercontent.com/mZhezHE6GilKr5VSs1tH9BYWmgIKDJaXXV8Pxch8PC-_8VY5h-wmS0-4LaNNPwM1dh9Fhpxm20XXO3aVxQQomgJZJssZP_D9YwIJlPo7u-Z9kvLHXf76sCpRyXTgvKxGsNbhYVVvgydfHlxHnzOmXZ4)

  

![](https://lh6.googleusercontent.com/a_1eMSlcQIRzv6UuKNeBXmjOoJRQnm36d0H1z3MveO3s90TY6eX1eza2_bDHw40Q8dB9mBJHc-QYqVwnIVZ9NYKpNSmT_7VpjLqgovVRAUPjnc_cSsycA3p8XfPolH6takUvr5pAfXnGhgTURwQc57Q)

  

  

Veja a diferença de tamanho das imagens! A imagem site-hugo, de apenas um estágio, possui 78.8MB de tamanho, enquanto a nova imagem usando múltiplos estágios possui 23.4MB
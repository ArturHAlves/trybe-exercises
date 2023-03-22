# Gerenciando nossos Serviços

  
  

Criamos o nosso arquivo docker-compose.yaml. Configurando da seguinte forma

  

-   Três serviços, um deles usando uma imagem Docker pronta e dois com arquivo Dockerfile;
    
-   Mapeamos as portas de conexão;
    
-   Configuramos a política de reinicialização;
    
-   Criamos uma variável de ambiente;
    
-   Definimos a ordem de subida dos serviços.
    

  

![](https://lh4.googleusercontent.com/_M9BU91bNH163DoGtwbw7fQcPgffSRbzXHl9AOYXDjdygmBHSqlvEtBY9Omp04FsiThAsSu6jFzmz2Lxl-JWGTMbdDEtAuXNmvNCd1XkGaCp1c-9OfGO9y-lZ_CuWKq0vI46H0UW6cO6hD9XOVhSw_E)

  
  

## Subindo todos os serviços

  

Chamados o ato de executar todos os serviços do Compose de subir. Para subir todos os serviços, utilizamos o comando docker-compose up no terminal

  

-   docker-compose up -d (deixar em background)
    

  

⚠️ Lembre-se que o arquivo docker-compose.yaml deve estar na mesma pasta da execução deste comando.

  
  
  

Execute o comando

  

![](https://lh5.googleusercontent.com/4DGDJcShQMqCAGFQ46RZCTXKyBscfNy6gMxNkmfho7QTo_uby3P_9Vs7CZMhY5jpXNafTMR0mmOdZ4JoZoBMgRoX7h08fDC7wrN1s5ths77H5OFAm0IB_FPwAPOqBex41UIZD6sDDqS7vf7MKZj9nXw)

  

Veja um exemplo de saída da execução deste comando:

  

![](https://lh3.googleusercontent.com/mkL7v3Tb8aZEDFA1rEciIv1uLN4oJVOV697ELHZLVSAHuDFy-hQyghKOBuVwZpUbt7B5R8N_dQC6Vpall674EzaD8AJnc_nRIKiNeZymnphHVBHVSjs7Na22lvfnvony69-9IoqQdtPb1Wf6WKzJg-k)

  
  

A flag -d serve para executarmos todos os serviços no modo segundo plano.

  
  

O Compose vai respeitar as regras de ordem de inicialização que especificamos, conforme a figura abaixo:

  

![](https://lh6.googleusercontent.com/JdduBtUicwDPweR1KtIHsobIYwOgWNrvW3P1ahLnuPyd3Dtw7_TSL_NEoX36eU65v7QWDVH4DVjbQ1vi_JVZgzi6mgvDWRufxF9TULwxzU9gvudeg1rYplN25duA604mBVULfFnchtVyHQauaYTUvoY)

  

O Compose vai executar todos os containers especificados, baixando as imagens do Registry (Docker Hub), de acordo com o que foi especificado no arquivo.

  

O compose vai criar uma rede virtual padrão entre esses containers

  

![](https://lh3.googleusercontent.com/_SCU2Mon6ZM2XDYxJosmJaxMq-JcAuaaCHz7LdEgthey9r7Kp-9IrSevNfE7PRXj1F7bMrA8GSXmXiMdAsPOWAr7kyGxk07XAQyVabLJ6U7_8vEq0IAk7IDziGhgyHlleVJ5TtbDs_TA5iobLsPXPuo)

  
  

## Verificando o status dos serviços

  

Agora precisamos visualizar o status dos nossos serviços, faremos isso usando o comando docker-compose ps.

  

-   docker-compose ps
    

  

Este comando traz um resumo do nome interno dos containers, se os containers estão saudáveis e se as portas foram mapeadas corretamente

  

![](https://lh4.googleusercontent.com/W0tczLi6szMhjVtudH4y9RHFzDGhWnT1dbUM1OHb-HF2W0MqT-xY0FYGoHxao8uJxExqA0ilrZYfj0D40ZGLkf1cbNUbN0vLbSAqvCAij9lgPSupyx-xr9WbylGWlEFcSHOnkCR2-YA483zWATJNWLc)

  

Podemos observar que os três serviços estão saudáveis e com as portas mapeadas

  
  

Acessando o endereço: [http://localhost:3000](http://localhost:3000)

  

![](https://lh5.googleusercontent.com/DopVkfCsjAhtS0HVocndOVgYK722rqOwQfNBx8-ZUGiu_lq5n-T-bfMQ6_r1k89ayhz-zLXdqetsE-fURVJ3mODyk3FSrhFls_TWkQoa_qQCTfK6raTSxm8FV7wCQCPg1sJSQfWIUMs4jTxnFEW5E8s)

  
  

## Reconstruindo a Imagem Docker

  

É comum fazer várias alterações em nosso código durante a fase de desenvolvimento.
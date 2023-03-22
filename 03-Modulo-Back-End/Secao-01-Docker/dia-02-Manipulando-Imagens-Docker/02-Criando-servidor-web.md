# Criando nosso primeiro servidor Web

  

## Limpando tudo antes de começar!

  

Comando para remover containers e imagens

  

-   docker system prune -af
    

  
  

## Construção da imagem

  

Vamos começar a construir nossa imagem com um arquivo chamado index.html, que será a página inicial do nosso servidor Web

  

![](https://lh5.googleusercontent.com/p668byTHiaGreDE_jegf4qA7MqI6htIBAIz6t3oQXBBE95erIgtz9olLmEkls06UkcVrEq6ZphaM5ZfBDGvMFU8zkAYRCCNLZB8dxVJaHvBJnrakFYb_0uXDQkXSjZBPZW3xcq3CvAUpabeahLRTPUw)

  

2-PARTE

  

Com o arquivo do HTML finalizado, podemos começar a escrever nosso Dockerfile e entender o COPY e o EXPOSE

  

![](https://lh3.googleusercontent.com/bYkfW4o2MMsKytumyJF0bFSAYzpIAmId_820i9iBFwlZxvs9F8ut9Z6L7ZHyXodXp3yel-6AoEEKZoO9UCzvR0NhW8xMbxRYe2qJCt_pvmDuYS8JbzwY9K_vvXA_BWZQH3wVm_JmZgeR_PhBmT9Rr4g)

  

PASSO-PASSO

  

FROM httpd:2.4.54

-   Vamos começar a construção desta imagem se baseando na imagem já existente, chamada httpd, com a tag 2.4.54
    

  
  

COPY index.html /usr/local/apache2/htdocs/

-   Temos uma nova palavra reservada: COPY
    

  

-   Esta linha vai copiar um arquivo no computador local e colocá-lo dentro da imagem, no caminho especificado à frente.
    

  

-   Ou seja, a linha vai copiar o arquivo index.html, que está na pasta atual da execução do comando docker build, e vai copiá-lo para o caminho /usr/local/apache2/htdocs/, dentro da imagem
    

  
  

[DICA] Poderíamos usar o comando ADD, porém o add tem outras funcionalidades

-   Fazer download do conteúdo de uma URL / <src> na pasta de destino /<dest>
    
-   Descompactar automaticamente arquivos compactos de formatos reconhecidos (.tar, .gzip, bzip2, etc)
    

  
  
  

EXPOSE 80

  

-   Temos uma nova palavra reservada: EXPOSE
    
-   Esta linha indica que a imagem poderá receber conexões pelo número da porta que for informado;
    
-   Neste caso, indica que a imagem poderá receber conexões na porta 80, que é a porta padrão utilizada pelo httpd.
    

  
  

CMD ["httpd-foreground"]

  

-   Estamos especificando que o programa httpd-foreground seja executado ao iniciar essa imagem como um container.
    
-   Este programa já veio junto com a imagem base, portanto não precisamos nos preocupar.
    

  
  
  

### CRIANDO NOVA IMAGEM

  

Vamos criar uma nova imagem Docker de meu-servidor-web.

  

docker build -t meu-servidor-web .

![](https://lh3.googleusercontent.com/deFK5rLqDPyd5XcBfgmN_avPEmFvSmAgxlp0v41GeKp1AKwQZrj6La1F7S2AgKuUEvHBE8iesE3HHOnL4IgCRrM9xuqtVGmv6M1dqte6yoySVkO3W4LzEtneBQ9xIgdv_WqrZlCsdMKir9B1aKk051s)

  

-   Executamos o comando docker build -t meu-servidor-web .
    

-   Lembrando que o comando precisa ser executado na mesma pasta onde o arquivo Dockerfile e o arquivo index.html estão presentes!
    
-   Como não tínhamos a imagem httpd:2.4.54 localmente, o Docker baixou esta imagem do Docker Hub.
    

  
  
  

## Executando um novo container com nossa imagem

  

Executar um servidor web a partir da nossa nova imagem Docker.

  

![](https://lh4.googleusercontent.com/mPXL__z-zLrOI3cTTac_ftSeLiMS02Y27CXY0LYqUZB90r1XycPrpVu562nsPiDBxpx7vi9XoDgB5r30x9Z2OjXyJ3mFAtI6W8iAPl6ZiPCZRqEMjUJrPYNLS6Oi4l66qd0rJpn7EU59QVO7U84xrA8)

  

Agora acessamos o endereço http://localhost:1234 em nosso navegador web e vemos o seguinte:

  

![](https://lh4.googleusercontent.com/AFDrnOsUuCtTqZENg8pTCUllDGl9usDn3TQky9ykvJB1ld0DrAWEhci9EnkVU7gBwfLwqKSx_OjchYX_GgaHm-IrPdLXQoNm2Han-u_B2pXcj369fCZ85m8yui_G6MV46DVs2ILpkYwqBfGfgKbp1n8)

  

-   Ao usar o comando docker run, uma nova flag foi utilizada -p 1234:80
    

  

AH, MAS NO EXPOSE NÃO UTILIZOU 80?

  

Mesmo declarando EXPOSE no arquivo Dockerfile, ainda não é o suficiente para expor a porta do container para o nosso computador.

  
  

PARA ISSO QUE SERVE A FLAG -p

-   Com o uso dessa flag, estamos solicitando ao Docker que abra uma exceção neste isolamento, fazendo um mapeamento da porta 1234 para a porta 80
    

  
  

-P (maiúsculo libera para portas aleatórias)

  
  

Logo, ao fazer uma conexão na porta 1234, estamos na verdade fazendo uma conexão na porta 80 dentro do container

  
  
  

FINAL - Remover o container que acabamos de criar

  

![](https://lh3.googleusercontent.com/EuT-jDgd2P0asZQi1uB0Pyy4azwbv8CkFpmngV4UN0ZG66lwi7oEk2RVAHABjfKaTnEWI9tQeZDV47rFLw_Rz7AxtT8WkqDAFOYHyAy947bmCPd9T-J56AoT94Bc3y_eGdMkYkXhL-Y3PJ-TZ4S_RgQ)
# Introdução

  

Aprender a configurar um ambiente com vários containers de maneira mais simples e prática. Faremos isso com o uso da ferramenta Docker Compose

  
  

-   Compose também devemos seguir um passo-passo, a qual indica todos os componentes que serão utilizados e também em que ordem cada container deve ser executado.
    

  

[DETALHE] - Nossos ambientes geralmente possuem vários serviços que precisam se comunicar entre si. Por exemplo, o back-end é dependente do dataBase, Front-end é dependente do back-End

  
  
  

## Volumes

  

São componentes docker responsáveis por preservar uma pasta dentro do container, mesmo se ele terminar a sua execução.

  

RESUMINDO: É um local da nossa máquina, onde vamos guardar dados.

  

![](https://lh5.googleusercontent.com/MeVnLP6-FoTRd6O7SBF4lnwDRuMKu2PUCHdGD_KHJbwSBTSEfg9xQa8emOjDPDZWPXbPQBKJ9mxIFD5Mys8i0joRIMKdG1BkWOChSibhiLYmhQ7_XyfebBOxnXpLMB_cYIdFF4bIenxGemzjTnLfLVY)

  
  
  

## Instalação

  

-   Caso esteja utilizando alguma distribuição Linux, basta usar o seguinte comando para realizar a instalação:
    

![](https://lh6.googleusercontent.com/zEAdh1VZrm5pKLGWzX42h8HrkN2GAZrmqePM4tWJiMvDrjMm_muhcqtWgL6Sb24s08qabRiRKygIGDuViNTSCp00edq3mY4JMv0m8afdecClT65dA77wR2lgcGLUtMSjaBI8WVxiT0sHx4BcYywaFAk)

  

sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

  
  

Por padrão, binários baixados da Internet não possuem permissão de execução. Logo, basta usar o programa chmod para aplicar a permissão de execução (+x) ao binário que acabamos de baixar. Execute o seguinte comando no seu terminal:

  

![](https://lh6.googleusercontent.com/GN8De9_xGztdM-lDjJErAa7vphlM_shjWamhPg2V_Heuw9e7yLtrt2XKcEICLMWW1eyg1LHdu_GrCiJbMjfbfACunSu4KNQUsI7YMSZxLF2ZIoyByMsH0f1jS8LUcE1VqN2Ddxixtz9o0Do0kO4OaUU)

  

Para validar a instalação basta executar o comando docker-compose --version. Se tudo ocorrer bem, você verá a seguinte saída em seu terminal:

  

![](https://lh4.googleusercontent.com/HbSH1qyIDg1DRPkiz4gR-9bcESHCcm_EbyJm3A_jxYcbejyEqbWIWul_XqApfy_qLhRFSufWwIqVFU6l3Raj_-2_ZWDNtMGwhVb5GpWo-uabb2q8UOjMX7QOPyXgjd5SsS4LXJwaelFw6YZxIO0cNxo)

  
  
  

# Criando nosso primeiro arquivo Compose

Criando nosso primeiro arquivo

  

Toda a configuração do Compose é feita por meio de um arquivo YAML e yml

  

-   É uma boa prática utilizar o nome docker-compose.yaml
    

  
  

# Estruturando nosso projeto

  

Objetivo criar três serviços que vão comunicar-se entre si.

  

Simular uma arquitetura muito comum com um banco de dados, um serviço de back-end e um serviço de front-end

  

![](https://lh3.googleusercontent.com/UpicGr98uBe0jcXlITb7TH0-Da7YTAcGCZ8J9GY_RvVkQHDaZDOxViZOsc_PctNBjQAhonuXAHFaKfIT6Rv7dN8wtsyIlSJicskwkp4Ik5Y1gH8YzhlHqhwTDmhdxARWKUxQcwZRC3_AmArJkxuHZds)

  

Para criar a Imagem Docker do back-end, crie a pasta backend e o arquivo Dockerfile com o seguinte conteúdo:

  

![](https://lh6.googleusercontent.com/8Ks3OhoXUUOvxh9ygPt7m5RjpIfu2ZfjMtmDMbWpEBsGsZww7GhqenbN27c0GifIALFpw34Y6PRGe1cMHvSH3--22vQau9lTtnU0viLzt_ft653BhFFadX24VNbBmY2CxFLx2cnFlONo73ytyfv3c6c)

  
  

Para criar a Imagem Docker do front-end, crie a pasta frontend e o arquivo Dockerfile com o seguinte conteúdo

  

![](https://lh5.googleusercontent.com/cgZmglMGfcKHpSatiLAGkGXv8zwUhLQ2ZVTduwC-G1RRNatDakvmBBC_kCtuiXzsKLo4Og2YDcaE8FHs_JgOv6Uc2cJErIEbpUcl70biPWy7P6JYC_Cbl0tmXajTu_PbJbLFUnVyryz9B-XDWad_Y5c)

  

Para o database, vamos usar a seguinte imagem Docker já pronta

  

-   betrybe/docker-compose-example-database:v1
    

  

  

  

## Versão do Arquivo Compose

  

Todo arquivo docker-compose.yaml deve iniciar com a chave version Dessa maneira, definimos qual versão deverá ser utilizada pelo Compose para interpretar o arquivo.

  

![](https://lh6.googleusercontent.com/__1GWD67OQjKEN5gUX9YD6biaso9gVkQ7nVubWvRF_u3_hwKT0Vrc0wGvmRMCUYqPi6WSHDLFZSSG2pa1DpDDCAhSqZzt5XMkvuSslB-k2Yu39ogfjZUaWdhva0xCnz1V7lVDfovSX0phepYUr-doPY)

  

  

# Criando Serviços

  

No compose existe o conceito de services.

  

Vamos configurar nosso arquivo Compose com os três serviços…

  

![](https://lh6.googleusercontent.com/ekm3mWhXYAAgHvgFfMrZBH132mZhYbhsYJg933vAxQx9dcO-ufhgATJpTQGnBMzLCTI930g3iPI4ICkE0nfysTiD9iOuP0ztioQJC-COIGgwLBnlmx79RZQWLa0Fd-bCwH8BIFsl3gG3pq26qSNjtq8)

  

Lembre-se que todo container é criado a partir de uma imagem. Sendo assim, precisamos especificá-las aos nossos serviços.

  

1️⃣ image: especifica uma imagem Docker pronta, seja local ou a ser baixada no Docker Hub;

  

2️⃣ build: especifica a pasta contendo um arquivo Dockerfile a partir do qual o Compose vai executar o comando docker build automaticamente.

  

  

![](https://lh6.googleusercontent.com/uISto3oSvXvqfZPOjASC_wPLTo1jY-JYFueJddGnnN3krFH3-oA1rtgORiVADO_0SXKvkFJ_ZVBnZqfdOdIcaWFZED2wEi62Spvple0GE5d7oCLNlw0FG6TxOeF3mYv48qvlQlP1Q52WPGCL3a9mobs)

  

  

  

# Mapeamento de Portas

  

A próxima configuração importante de cada serviço é o mapeamento de portas.

  

-p <porta-local> : <porta-container>

  

-   Dentro de cada serviço, podemos especificar o ports, que é uma lista de mapeamentos de portas entre o computador local e as portas do containers.
    

  

  

Nosso exemplo: Ficando assim:

  

![](https://lh6.googleusercontent.com/SZb9n0OPd8pwTDff5T1fx9kcpI6vNW4odGMoTRqjMdAvAJm0OzlNW6nRPotg-ud5Uze5flYjVPwJG-K62IyfPNUUANyrbpG5k06eD_VWYRkCTmnditbQqcFrSNOon_d3G0dUBseepWLu_nt1sQKAs1Q)

  

[DICA] O primeiro parâmetro é sempre a porta do computador local e o segundo parâmetro é a porta exposta no container

  

  

## E se o container apresentar um problema?

  

Quando estamos trabalhando com vários containers ao mesmo tempo, é possível que algum deles encontre problemas e pare de funcionar.

  

  

RESOLUÇÃO:

  

Dizemos ao Compose o que ele deve fazer caso um container pare sua execução. Devemos configurar este comportamento através da chave restart.

  

  

O compose possui quatro políticas de reinicialização:

  

-   no : define que o container não reiniciará automaticamente (Padrão)
    

  

-   on-failure: define que o container será reiniciado caso ocorra alguma falha apontada pelo exit code
    

  

  

-   always: especifica que sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado.
    

  

-   unless-stopped: define que o container sempre será reiniciado, a menos que utilizemos o comando docker stop <container> manualmente
    

  

  

É IMPORTANTE ESPECIFICARMOS ESTE VALOR

  

![](https://lh5.googleusercontent.com/_LxEGoiQc9SWHDOgcHJCtuzFp1SI9c7sm0ex9ZkLgZzdPS-MDbPPPQkyRF_aNMYGx51vdWFvEXUaMWKRKeXjSd5K2CgGS9xPzWCwFtRitxZNiO79tzcjn7XOu06EUfJv6-b-itZVjJ9gCpghTSQ2A8c)

  

  

## Usando Variáveis de Ambiente

  

Uma variável é um recurso disponível nos sistemas operacionais que permite criar uma variável no formato NOME_DA_VARIÁVEL=valor

  

Onde NOME_DA_VARIAVEL é o nome da variável de ambiente, e VALOR se refere a um valor que será vínculado a variável

  

-   Toda vez que solicitarmos ao sistema operacional o valor de uma variável de ambiente, fornecemos a ele uma NOME_DA_VARIÁVEL e ele retorna o VALOR associado a esta chave, se ela estiver definida.
    

  

  

  

Para exemplificar, ao digitar o seguinte comando no console:

![](https://lh3.googleusercontent.com/Cz__k-wR1euDcnEs8ETVpZR21LTWUwkHtTCBNzJJafeMA1OZsNlDQK0ua1ASfKMssvG6bdK9V6hoJiqKa6uqcBJ5cor2pLE-U3lfJuFRlotFO4r0qd_Y1Nyy0UPE2jSMRj2-bi40GuVLUaCQefX0gG4)

  

Agora será apresentado o valor da variável de ambiente $USER, cujo valor é o nome de usuário da pessoa que está utilizando o sistema no momento da execução:

  

  

Exemplo de saída deste comando

![](https://lh4.googleusercontent.com/58jY3bXNnFy1Cpxkl6DVPv90tZVxrqBuSplI914Ahc7aq9YTd3do5FBW6ZPWLGTQZ5OElrVjeaBRMPHH7p9DA4BlkpdkJfAOIDo8fE56myFMNOy5bPUZCyIH_U5DYTcWDwzCPOty20SxZOrFyxIZjY8)

  

  

É possível criar e usar variáveis de ambiente dentro dos containers. O nome da chave que utilizamos é environment.

  

environment

-   Com esta chave, configuramos as variáveis de ambiente em nossos serviços do Docker Compose.
    

Podemos especificar no arquivo docker-compose para que ele utilize o conteúdo de variáveis de ambiente do nosso próprio computador.

  

  

  

Exemplo: Em nosso exemplo, vamos precisar passar para nosso back-end o nome do serviço onde o banco de dados vai rodar, em uma variável chamada DB_HOST

  

  

![](https://lh4.googleusercontent.com/fXZ9hwQVY9KzoVtv9-tJKhv-ay0dJwiS7sf3CqFExrMEpVTyHWf6MR8oxiKQNWRMBsGSLbDbNMdJtv56tWfWBNoR4obrDBhaOi6h4qHtbUS8ddU1IBW7hufO0p-_fDV7pNjEn97KrMhDtQH2wf7r-mE)

  

O serviço backend agora possui uma variável de ambiente chamada DB_HOST, uma referência ao serviço database que poderá ser utilizada pelo servidor para se conectar ao banco de dados

  

  

  

CONCEITO:

-   A ideia de variáveis de ambiente é trazer mais dinamismo entre ambientes.
    

  

-   Por exemplo: Na maioria das empresas, usualmente temos o ambiente de teste e o ambiente de produção, esses dois ambientes possuem nome de pessoa usuária e senha diferente para cada ambiente.
    

  

-   Deixar esses dados fixos ou expostos no código, engessaria e seria inseguro. As variaǘeis de ambiente entram para reduzir esse problema. Tendo variáveis com o mesmo nome em cada ambiente, por exemplo DB_USER e DB_PASSWORD. Em cada ambiente a aplicação consegue se conectar em banco de dados diferentes, isolando assim o ambiente de teste e o de produção
    

  

  

  

# Dependências entre Serviços

  

Uma configuração importante para garantir a ordem de inicialização e encerramento dos nossos serviços e chave: depends_on

  

depends_on

-   Com esta chave, conseguimos criar dependências entre os serviços.
    

  

![](https://lh4.googleusercontent.com/o-wjcdf9IWCcNGPJ4-KM8A1CK7FLlXPvNunttIqtk9IG72tCST5Rj6Kl5r1NQa-TMT_WD-RXrgflTvNyB-HJuL7LGzwbA_l9gga9pcMgBWWxuSTXJVLVHjI_EYmoR-ezNlQUfRXOGSYe--gOGLXywqE)

  

Cada serviço do nosso arquivo docker-compose.yaml recebeu a chave depends_on , que é uma lista de quais serviços o Compose deve executar primeiro antes de executar o serviço atual.

  

Nesse exemplo, os serviços serão iniciados respeitando a ordem que especificamos:

Primeiro o serviço database será iniciado, depois o serviço backend e finalmente o serviço frontend
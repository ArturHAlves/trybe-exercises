Criando nossa primeira imagem Docker

Dockerfile 

Imagine esse arquivo como uma receita que o Docker deve seguir para criar uma nova imagem exatamente do jeito que você quer 


Limpando tudo antes de começar!

Use o comando abaixo para remover todos os containers e imagens Docker que estejam em seu computador 




Um passo de cada vez!


Passo 1 - Criando o arquivo Dockerfile


Crie um diretório para usarmos como base e entre nele: 





OBJETIVO:


Vamos criar uma imagem Docker que, quando executada como um container, vai imprimir na tela a seguinte mensagem: “Eu sou uma pessoa estudante da Trybe”




Vamos criar um arquivo Dockerfile na pasta que estamos programando com o conteúdo abaixo para a construção dessa imagem 





Ficando assim: 





Dentro do arquivo Dockerfile, adicione o conteúdo a seguir 





PASSO-PASSO 

1 - FROM alpine:3.14

Significa que vamos começar a construção desta imagem a partir da imagem Docker já existente! 


2 - CMD [“echo”, “Eu sou uma pessoa estudante da Trybe”]

A palavra reservada CMD mostra qual comando deve ser utilizado ao iniciar a imagem como um container 

Neste caso, o CMD aceita uma lista de parâmetros 

BOA PRÁTICA COLOCAR COLCHETES E VÍRGULAS PARA CADA “AÇÃO”


Passo 2 - Construindo a imagem Docker

Vamos utilizar o comando 
docker build <flags> -t <nome-da-imagem> <contexto> . 

Uma flag -t, que indicaŕa qual será o nome da imagem, e também a tag, se utilizar o formato <nome>:<tag> 

Um contexto, ou seja, em QUAL CAMINHO DE PASTA O DOCKER deve se basear para PROCESSAR O ARQUIVO DOCKERFILE 

Normalmente utilizamos apenas . (ponto final), que indica a pasta atual 


No terminal, rode os comandos abaixo dentro da pasta meu-primeiro-dockerfile para construir a imagem:



A saída do comando será similar a seguir 



PASSO-PASSO 

1- Nós executamos o comando docker images para mostrar que não temos nenhuma imagem Docker atualmente em nosso computador;

2- Executamos o comando docker build -t primeira-imagem .

3- Confirmamos que a imagem foi construída corretamente executando o comando docker images novamente;


Executando um novo container com nossa imagem

Vamos executar o comando 

docker run –rm primeira-imagem 

E verificar se realmente a mensagem que colocamos é impressa na tela. 





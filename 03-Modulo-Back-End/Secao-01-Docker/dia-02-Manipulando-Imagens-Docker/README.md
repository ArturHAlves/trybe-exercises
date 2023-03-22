Introdução - Manipulação e Criação de Imagens no Docker


Uma Imagem Docker é um arquivo imutável e a partir dele um ou mais containers podem ser gerados. 

Essa imagem pode ser criada a partir do comando Docker build, seguindo as instruções contidas em um arquivo Dockerfile 


Dockerfile 

DockerFile é um arquivo que contém instruções para criarmos uma imagem, assim como uma receita. 

Esse arquivo nos mostra as bibliotecas que devem ser instaladas, arquivos que devem ser iniciados.. etc.. 





Obtendo e removendo imagens

Como o Docker decide se precisa obter imagens de um Registry?


Do mesmo jeito que usamos o git pull para pegar o código fonte mais atualizada

existe o comando docker pull <nome-da-imagem>, Onde podemos obter a imagem direta do Registry (Docker Hub) 



PASSO-A-PASSO 

1- Executamos o comando dokcer images (visualizar todas as imagens) e vimos que tem apenas o hello-world 

2- Executa o comando de puxar uma imagem (alpine:3.14) bastante leve 

3- Executamos novamente o docker images onde o agora aparece tanto o alpine quanto hello-world 




1️⃣ Executamos o comando docker run hello-world

Neste momento, o Docker verifica se a imagem existe localmente;
Se a imagem existe, o docker começa o processo de subir o container baseado nesta imagem.

2️⃣ Como a imagem hello-world não é encontrada localmente por padrão, o Docker faz o mesmo processo que o comando docker pull faria, só que de maneira automática.

Ao terminar de fazer o download da imagem, o Docker finalmente pode iniciar o processo de subir um novo container baseado na imagem recém baixada!




Uma imagem, vários containers!



Podemos ter vários containers a partir de uma imagem. 



PASSO-A-PASSO 

Nós já tínhamos executado o comando docker run hello-world no exemplo anterior;
Agora executamos o mesmo comando novamente;
A mensagem de boas-vindas do Docker aparece;
Verificamos a lista de containers em execução ou parados com o comando docker ps -a;
Vimos que temos dois containers diferentes baseados em uma mesma imagem;
Executamos o comando docker images e verificamos que ainda temos uma imagem hello-world:latest!






REMOVENDO IMAGEM 

Para remover uma imagem usamos o comando 
docker rmi <id/tag/> da imagem 



Nós executamos o comando docker images para conhecer os identificadores das imagens;
Obtemos o ID da imagem alpine:3.14, sendo e04c818066af, e executamos o comando docker rmi;
Obtemos o ID da imagem hello-world:latest, sendo feb5d9fea6a5, e executamos o comando docker rmi;
Nós executamos novamente o comando docker images e validamos que não temos mais nenhuma imagem em nosso computador!





RECAPITULANDO: 

IMAGE ID e CONTAINER ID: as imagens Docker e containers possuem um identificador único que podemos usar para gerenciá-los, além dos seus nomes próprios.




Uma imagem, vários containers, podemos executar vários container partindo de uma imagem 


Arquivo Dockerfile: 
É uma “receita” de como criar uma imagem Docker 
Possui uma linguagem própria, com palavras reservadas 

EXEMPLO: FROM, COPY, ENTRYPOINT, CMD, RUN 


Flag -p <porta-computador>:<porta-container> no comando docker run 

Permite abrir uma exceção no isolamento 
Mapeia uma porta em nosso computador com uma porta container 
-P adiciona uma porta aleatória


Construção em múltiplos estágios 

Cada FROM dentro do Dockerfile significa o início de um novo estágio 
Processo de criação de uma imagem Docker super otimizada, com o uso de imagens intermediárias 


Diferença entre RUN, ENTRYPOINT e CMD 

RUN - É a execução imediata durante a build 
ENTRYPOINT é a execução obrigatória ao iniciar o container 
CMD é a sugestão de parâmetros ao iniciar o container 




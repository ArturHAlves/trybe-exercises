Conceitos iniciais do Docker

  
  

A principal palavra que você deve se lembrar quando ouvir sobre Docker é o isolamento!

  
  

### Containers vs. Máquinas Virtuais

  

-   Máquinas virtuais precisam ter a instalação completa de um sistema operacional convidado por cima do sistema operacional já existente na máquina hospedeira.
    

  

![](https://lh4.googleusercontent.com/IVX6-kGHK_GGGRPzv3FIeJ4KmurdHA8NoDqWMuLYkNz4IHD1Jy33wTsCL-fugjrqSCr7pSdWCkay4WlQamkXlNYAk0luSgLJjw15tAkDt5xp3Tkj5W5SV2PcBpWqDcgdSUWPC3N1lDSUFX3T8WXLfy0)

  
  
  

O QUE É UM HYPERVISOR?

  
![](https://lh3.googleusercontent.com/QLeNHyucAmPmrxHIPX78SnUUCFYjCryIfhGIQ1AHoqtB3HVv3gjCQeomy__dRBp-MFAv2vK6HTukDEfu9iHVs0mdVlNiGOF1u5lUaJO4oMyndgGVR5OCVXlAYJ4tkgmiasrVE1965MEp2cXAUqkrocQ)![](https://lh3.googleusercontent.com/IabqkEUVMKiWNVP3WgNv0DtWDoaFrEwCdOdKQliieB2adFWTEEIkkq7AKLhuPA7i22I0sZoq2CcTPptPAPJTNji8DjWhRcmnJWKFvFebNDdXwwKEE6U7qRBaCyVEAYHk9gEBBaEOPjBx_z2SYSzXw8I)  
  
  
  
  
  
  
  
  
  

VM -

Existe um espaço em disco perdido, precisamos instalar um novo SO para cada máquina virtual, além da instalação do Hypervisor

  

vs

  

Container -

Ele trabalhará, então, em cima da aplicação e suas dependências, criando uma virtualização apenas a nível do Sistema Operacional e não da máquina.

  

Necessitam de muito menos recursos, já que eles não possuem todo o Sistema Operacional incorporado . Dando maior rapidez.

  
  
  

## Imagens vs. Containers

  

Qual a diferença entre esses conceitos?

  
  

IMAGEM

  

A imagem é a nossa aplicação “empacotada” com todas as dependências necessárias já instaladas dentro dela.

  
![](https://lh6.googleusercontent.com/CVRVIylK_X-38xa0viYiVtIC3RLnhcoBfnJZySFGPhsLbWTdwtSokA9plhrCch4v_tRDcN1gedPHrGAtJAYuB2TpepnDor5ZBkJwIBHCIQPFvXXbBvtWd8gF2o1tLXpDIa0JPZhG5M1cgk6mlwvkFL0)

  

CONTAINER

  

O container é um processo que representa a execução de uma imagem já construída anteriormente.

  
![](https://lh5.googleusercontent.com/iQLoi1Vw42tgRWQl35b3uqy8brhlmwkMkiJ3-fHQ94EEoAjvaIkqvAlTJgOfmUdUROuWlclOor8mdQYUSJ5oGr8dyl8gu-R4iSlbAJ5fL9RB9ksfABMxVDR2zDh2fxBOI8DYu0XBxVcWJ2AYJJWj-UE)  

## Preciso instalar tudo o que é necessário dentro da imagem?

Sim

  
  

🔺Problema: você precisa executar um código JavaScript usando Node. O que você faz?

  
  

1️⃣ Cenário 1: Cria uma receita que, partindo de uma imagem Docker vazia:

  

-   Faz a instalação de um sistema operacional Linux
    
-   Faz a instalação das dependências para poder instalar o Node
    
-   Faz a instalação do Node
    
-   Copia seu código-fonte para dentro da imagem
    
-   Feito!
    

  
  

2️⃣ Cenário 2: Cria uma receita que, partindo de uma imagem Docker com Linux e Node já instalados:

  

-   Copia seu código-fonte para dentro da imagem
    
-   Feito!
    

  
  
  

Percebeu a diferença?

  

Se já existe uma “receita” de como construir uma imagem Docker com Linux e Node já instalados, podemos usar essa imagem como base para criarmos uma nova imagem!

  
  

## Registry

  
  

Registry é um local remoto onde podemos enviar e baixar imagens Docker. Podemos utilizá-lo como um catálogo de imagens Docker, onde é possível criar novas imagens usando outras imagens do catálogo como base.

  
  

Normalmente, este serviço é oferecido em duas categorias:

  
  

![](https://lh4.googleusercontent.com/B5sWm2kyw-oISgXwCcmmUOCC3J94Jno7J6eWkZz2_CCaggQSI-UYPnq-v6q_rasPSjGH8ZAvb6GHHqkegErHn-qHMmRY656kSwirGq4TmPAM7PKoauefr_OtQIgJjC5glu3i-NjeP-PXLC52eCUVG24)

  
  

Veja alguns exemplos de registries públicos:

  

-   [Docker Hub](https://hub.docker.com/): a própria Docker Inc. oferece um serviço de registry público;
    
-   [Quay Container Registry](https://quay.io/): a empresa Red Hat também oferece um serviço semelhante.
    

As grandes empresas de serviços em nuvem, como Amazon, Google Cloud Platform e Microsoft Azure, possuem seus próprios serviços de Registry! Entretanto, são serviços pagos. Acesse os links abaixo caso queira conhecer melhor cada um deles:

-   [Amazon Elastic Container Registry](https://aws.amazon.com/pt/ecr/) (ECR), oferecida pela Amazon.
    
-   [Google Container Registry](https://cloud.google.com/container-registry) (GCR), oferecido pelo Google Cloud Platform.
    
-   [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/) (ACR), oferecido pela Microsoft Azure.
    

Até agora já aprendemos vários conceitos novos, mas não tivemos mão na massa! Vamos conhecer nossos primeiros comandos do Docker pra ficar mais interessante?

Bora continuar mergulhando no incrível mundo de Docker! 🐋

  
  
  

## Revisão

  

-   Docker: conjunto de ferramentas (Daemon, API, CLI) para gerenciar imagens e containers.
    

  

-   Arquivo Dockerfile: arquivo com linguagem própria, com os passos necessários para criar uma nova imagem Docker usando o código-fonte de um projeto.
    

  

-   Imagem Docker: é o projeto “compactado”, que foi construído de acordo com os passos contidos no arquivo Dockerfile. Pode ser usado como base para criar novas imagens Docker.
    

  

-   Container: é a execução de projeto através da sua imagem Docker já construída anteriormente.
    

  

-   Registry: é o local remoto onde podemos enviar e baixar imagens Docker. Um registry pode ser público ou privado.
    

  

-   Docker Hub:
    

-   É o registry oficial da empresa Docker Inc.
    
-   Ele é público, porém possui alguns limites.
    
-   É possível assinar o serviço para utilizá-lo como registry privado.
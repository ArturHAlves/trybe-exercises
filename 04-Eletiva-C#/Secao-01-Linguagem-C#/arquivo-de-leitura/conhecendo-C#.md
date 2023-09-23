
## Instalando o .NET Core no linux

##   

## Antes de instalar o Software Development Kit (SDK) da plataforma de desenvolvimento, precisamos garantir que não há nenhuma versão do .NET já instalada, então remova qualquer versão já existente com o comando:

  

![](https://lh6.googleusercontent.com/yxF23ubVUOf8n1oDHzPyrkupbTLvbo3jdaqizC8qGSTpiataKLwcVHDtCCs3jPCcJTw7b34gfi9f_jZZvY7teyOQiqVzWU-pHWfOrsnri9rLRWHBzNtppAMmvk0y2wGQM1FWjUvktm-nFFdXVve_WXk)

  

Agora, só para confirmar que removemos com sucesso, use o comando:

  

![](https://lh4.googleusercontent.com/pEfOeIa5LGM9xhbKr2iYe5ESaCLX-Tm5HEWMq-NVc7Lk8zcBH_Lbv7GwPqbZUeE5JGdg6yEWnkFmsLqsLINSRk1x5yWapOgfP_ojendznnJ_tm5XD0sYhASHhFEz2sEonqxiOjj71PzBbKkwwnXGlsc)

  

Primeiro atualize os repositórios no Ubuntu:

  

![](https://lh4.googleusercontent.com/mZ8bmi-wtqyYbZkv67WPYQU_XZ2tMo_qs_7xQbLMBZpJLr3uF2RotL54dWojgFvg9y54IQ828ayGGQyOQnEJLq94hiKVQDqS5Gpg7QBIjXJnkiSCqrH0K6xjGTmLMPHfbIefAfivbjBgIvWhrdHNdd4)

  

Agora vamos instalar o runtime do .NET com o comando:

  

![](https://lh4.googleusercontent.com/dawjyZ-_QBFBio9MT_zrfLhiYFEXFXiplLLcdGgPHkBZ734VmObEED3coVs2ic3wZBiWdAYZycOVaL45WvIfJIXjFl1SD5rBpikk7fDBKkYNhlaequSOsw6UcxYCpjU7x9NluVCCuDJolFhbcS1t5jQ)

  

Após vamos instalar a SDK do .NET, é ele que permite o desenvolvimento dos aplicativos na plataforma do .NET. Para sua instalação, use o comando abaixo:

  

![](https://lh6.googleusercontent.com/kiGSKlTirtMGd9jgn3-Es_8qzlXHWzkxnpcmthZfX77PCzY43e6Dw2bLHUL6Mm22y9-oncHL72Cw4O_WyFVGY9FqT859wgF8XGOm2vLOCJc-hTvtl4R4ybGRRejG8JaiZNuYz8VBlZXc74AQFmAqBPs)

  

Pronto! 🎉 Agora, para testar se o .NET Core foi instalado com sucesso, execute o comando:

  

![](https://lh4.googleusercontent.com/cZUSxgRyjzA-NhZaaUVLxX-GFGwWrA3wLKBWUtEKMVa1WpOY0nomB2WR5_YgZIYvmtzra9UaYcJyyB_-auhPs8t19UdOmg9LOXmMWTkiQ0TN5oIYUEutDAn1qbejtAprnDnVA3qT3lGw5EkD8oqUvVY)

  
  
  
  
  
  

##   

## Versões do .NET

  

Com a criação e evolução de diversas versões do .NET, a Microsoft criou o conceito de .NET Standard: uma especificação padrão do conjunto de bibliotecas que possui uma versão para cada framework .NET ao qual está associada.

  

Atualmente, essa divisão resume-se em 3 principais frameworks, visando assim a uma melhor separação entre suas responsabilidades e objetivos. São eles:

  

-   .NET Framework: É o carro chefe da Microsoft, ou seja, o produto que por muito tempo seguiu como o mais utilizado pela Microsoft e outros desenvolvedores .NET. Ele é um framework utilizado para aplicações Desktop como Windows Forms, ASP.NET para backend e criação de APIs e aplicações de Console.
    

  

-   .NET Core: É a implementação mais recente, grátis e de código aberto, tendo como principal diferencial ser cross-platform, ou seja, ser executado em Windows, Linux e MacOS. Além disso, trabalha muito bem com alta performance, sistemas escaláveis, Docker, e possui suporte para criação de aplicações de Console, ASP.NET Core, Cloud, Microsserviços e UWP.
    

  

-   Xamarin: Foi criado como uma empresa de desenvolvimento de software, com sede na Microsoft e sendo incorporado ao ambiente .NET. O framework possui suporte para desenvolvimento de aplicativos móveis multiplataforma entre Android, IoS, MacOS e o antigo WindowsPhone.
    

  

  

![](https://lh4.googleusercontent.com/8fSsIzpJNGaqTsXmAbQcmMvBnudVL3Z-fyki_-aRzj5IqW7G7338lraAvA7bG3n-QuEpYUv9hcHBCaHyBlfwPf5TYK75odsQiSHTujvCTwlEbieu7L_JVkC7T-NyjnTadeZ_AVtF41PKtJF9NyrngUY)

  

## Criando projetos .NET com a CLI

  

Ao criar um novo projeto de aplicação para console, o comando a ser utilizado é:

  

![](https://lh5.googleusercontent.com/2O-xDCaZMuK75TXCqzlh06bsjb0R34eTNg_48U23rIj_Ip-MguqCT--lOlK-N8ytsfZbbwF4VnoPckEAvrUodaKZzR7Vonh551wKIXn1D_vAkTdl0GeP13YH1Fy0j0ZtdfMIRIu9rs5cwRO-mWhXOS4)

  

Esse comando vai criar um projeto .NET utilizando como base um modelo pré-configurado para aplicações de console.

  

  

De olho na dica 👀: Uma das opções disponíveis é a de já direcionar a saída desse comando para uma pasta específica com a option  -o. É super prático para já separar novos projetos em pastas diferentes

  

![](https://lh4.googleusercontent.com/gbaIbr9GSd15PtyrbHr6HbvCsxpReMDcfq6cW6iwL9YWC6NrPvnYUokBDFMniW_8wBemQJ1SEJ4j7SfFjYvHwI0ySXuW9uJ9Ynuj6MVbijPNEpruFQjdFdr6WCoWSB5utojEurTlMdzUC5HbVUO2jiA)

  

  

### Exemplo

  

Agora que você já sabe sobre a funcionalidade do comando dotnet new console , vamos usá-lo na criação de uma nova aplicação.

  

![](https://lh5.googleusercontent.com/35XLoFV9jeZW7vA5VFfNvcBhrCIb0cYoNQfgmfsjlzP3Doyd_Go2HImw0IiDNNa0AyFECReGxgQuxbMLNiukOSduiTBe9Y9D3-IgEcSqoL5edrbHF1q-ibRFHzL8Bwt0-LuMo7fbr6mcNBQ1S2EY1yM)

  

Quando a execução finalizar, você vai perceber que uma nova pasta chamada HelloWorld foi criada. Para acessá-la, utilize o comando cd HelloWorld/.

  

![](https://lh4.googleusercontent.com/uttq8boNp-lLWvBnWPcRZuOPQsdZB2K7FI2oPpKOTeZZwXuwNjEx36jwntJjlWcIIacJaCkWHysSgInBY5u3l8sY8Hvy3745wGMgLuj7AmgLcx3jo1MPQ7_DiBNBHtEtIDZCadJlGTsXhlvKEFR5jTQ)

  

  

  

## A estrutura de um projeto para console

  

Ao criarmos um projeto de aplicação para console, a estrutura básica é iniciada com dois arquivos e uma pasta. Veja mais sobre cada um a seguir:

1.  Program.cs  
    Este é o ponto de partida do seu projeto. Neste arquivo você vai escrever o código em C# que será executado quando seu projeto rodar.  
    Anota aí 🖊: Arquivos com a extensão .cs são automaticamente reconhecidos pelo VSCode como arquivos que contém código C#. cs de C Sharp.
    

  

2.  <nomeDoProjeto>.csproj  
    O .csproj é o arquivo de projeto e a base de configuração para projetos .NET. Ele vai ser usado para interpretar todas as suas dependências, além de contar com diversas informações de configuração, tais como:
    

-   conteúdo a ser incluído (quais bibliotecas e dependências de terceiros são utilizadas);
    
-   requisitos da plataforma;
    
-   informações de controle da versão;
    
-   configurações do servidor e muito mais.
    

  

3.  De olho na dica 👀: Esse arquivo é muito similar ao package.json em projetos Javascript com NPM em termos de funcionalidade.  
    Cada projeto .NET sempre inclui um arquivo de projeto, com uma extensão de arquivo referente ao tipo de projeto. Por exemplo, ao construirmos um projeto em C#, o arquivo tem a extensão .csproj. Para um projeto Visual Basic.NET, o arquivo é .vbproj; já para um de banco de dados é usado .dbproj. O nome deste arquivo é o mesmo valor utilizado para criar o projeto no parâmetro -o, que em nosso caso foi HelloWorld.
    

  

4.  Pasta obj/  
    Por fim, temos a pasta obj/, que vai receber as dependências do projeto após rodar o comando dotnet restore. Esse comando é semelhante, em termos de funcionalidade, ao comando npm install dentro dos projetos Javascript com NodeJS e NPM.  
    Talvez você possa ter percebido que essa pasta já havia sido criada, mesmo não sendo executado o comando nenhuma vez. Isso ocorre porque alguns outros comandos já o executam implicitamente, caso seja necessário. São eles:
    

-   dotnet new
    
-   dotnet build
    
-   dotnet build-server
    
-   dotnet run
    
-   dotnet test
    
-   dotnet publish
    
-   dotnet pack
    

De olho na dica 👀: Caso você faça uma atualização nas dependências do projeto, instale uma nova biblioteca ou clone um repositório e execute o comando dotnet restore para garantir que todas as dependências foram devidamente baixadas e atualizadas.

  

  

## Criando outros tipos de aplicações .NET

  

Existem vários modelos disponíveis para utilizar com o comando new e criar um projeto. Você pode listar todos os modelos pré-configurados disponíveis com o comando:

  

![](https://lh3.googleusercontent.com/G4zPVvA7pK6ma4wBL3jY-uIYQHiawhwl26s4oU9leYtAg441SPKeU51LI5Md_UphC4nDgnUdaUiXvlY9_UES0H4pprrUTlUaSIfEVKbC7XQ9DQhq4dVsAdYKiHAJAdvV80dvhkzr_Glr1IPSYL8tdBM)

  

Para criar um projeto de web API, você pode executar o seguinte comando no terminal:

  

![](https://lh4.googleusercontent.com/5IMzKmBfQEQNBroTPG13aKvfUVrX5qqEoM_P4RWPdAEECOPqRj45KuWER0Fv8JA-4R9nEGD6cgbXCQrJzmfMyVjm3gj_FT-lblOI-dvBEyEbhnhwtuEKgZynSVNzGKdinYZr0f3JXX3PYfVQLkkQAuw)

  

Já para criar uma aplicação seguindo o modelo MVC, que usa a arquitetura de sistemas (Model View Controller), você pode executar o seguinte comando no terminal:

  

![](https://lh3.googleusercontent.com/Zc38eLbCC4uQQXA9BzMZeyoYeN7VFHCj3gXZuVtvmO35fE8lavgSh_ByAC1nNDFwow1Dlsd9FMjyeqnXFonaYE6ZtEbi0h-FtXCW66gvzASjLx_ytwdtmmIh9-NCdLOA7vWaxxP4a1uVn6yWQ8DfrJg)

  

  

  

# Conhecendo os tipos de C#

  

  

  

## Outros Tipos de Dados do C#

  

  

O C# também possui outros tipos de dados e estruturas para complementar a manipulação de dados como o struct e enum.

  

  

### Enum

Basicamente enum é um tipo de dado constante, fortemente tipado e estático.

  

Esse tipo de dados é útil quando há necessidade de representar algum conjunto de dados que não sofrerá tantas alterações (algo quase não vai mudar)

  

Exemplo:

  

![](https://lh6.googleusercontent.com/mOnNsiWatyBmQiSxGJiVQhxDfYh7R0x_xlUFAxOY3LjVuZMlZXLIVRCgHyfeD1wBviiL0PLzVdaiNNxwdub-R8TJmitz_XxACXjI6CS-BFkJ2kqQsRircAcfUwoSTK80yqlmgBHjKPoostjdJluNLUo)

  

![](https://lh4.googleusercontent.com/n8VDl6P_FmRrSJO8CGHc-KZdRyQxjniGTEmafdonw_9sllDKC1Jfw5jKbyUI_M00vS1Orwn9D_ns1TJNEOIDB1WTphI78UuWVB4BDKduNf54fNAYuvH7fDZ2Ba5hLAwsZHtQDTB6gffnzpTpADnAOS4)

  

  

### Outros tipos de dados que representam números inteiros

  

Dependendo de alguns requisitos, principalmente relacionados ao uso de memória, podemos escolher outros tipos numéricos no C#.

  

Veja a seguir uma tabela com todos os tipos signed e unsigned do C#.

  

  
![](https://lh4.googleusercontent.com/N4asrz3z7AQFzUpUozk3T9Ii_EhWBYVGDYI86UJHVHFTCbfi8iHOtGvRUl7zxIKlLncTS6VylKHfYOKPjVH2NQyi5Kk9r_mqyXk2HzLYFt7JkkNPlUjqk8oGBuWrlbjsitPbbzeDA2gNzxCofqYp_iQ)

  

  

  

  

  

  

  

  

  

  

## Constantes

  

Com um nome bem sugestivo, uma constante é um valor que não pode ser alterado no decorrer do tempo de execução, fazendo o oposto a uma variável.

  

No C#, utilizamos a palavra reservada const para declarar uma constante antes do seu tipo.

  

obs: É o const do javascript

  

![](https://lh6.googleusercontent.com/UGUxByyfA8QrXauDNGB7_tPaqsUNDkV9mu5akglbpfR-qnotAibnwDIQS82KCMvbjRFXXP2qGz6aFQOFnc58PhEdnS6I4CZOk65Pk8faSxI5VfL0yKnOPJ6nYhEJK6vDkcdKr00u6EdOFi7d-Ryvb2Y)

  

NÃO É PERMITIDO MUDAR O VALOR DA CONSTANTE

  

![](https://lh5.googleusercontent.com/dzfX955-TpfLisTw9RVsJ3vbJwkkcIAd2OxmCrHCn8ojYW9jYLVMqm_BN-BjeCMeFhHW4LHhXgkQdcV5WbHYl0KITpxyV1eJxn1VVcvLrt7a5OI-cin9m6CgekWJB_Einrk4e6GXLrnOeke4ghsT6G4)

  

  

  

## Variáveis com tipo implícito

  

Seria o let com tipo qualquer

  

O C# traz a possibilidade de implicitamente definir um tipo de dado para uma variável quando se declara utilizando a palavra reservada var. Com essa instrução, o compilador vai deduzir o tipo a partir da expressão ou dado que está sendo atribuído a ela, podendo assim ser qualquer tipo primitivo ou definido pela pessoa que desenvolve o programa.

  

  

  

  

![](https://lh5.googleusercontent.com/P1O11LmIhJrCKqGikoVqhnqSp0PNd1kMwmeGTr5SgHnGlQcXpjGutsBM6Co4Ytgw9ga5VSkG_Dc18Ekmv_ZAtHE6kQm1TFcAaPlK5bky3jbCxfa8LKotEdzsv5l-49oeWCrQiEWbfQ1OrssG7FVA620)
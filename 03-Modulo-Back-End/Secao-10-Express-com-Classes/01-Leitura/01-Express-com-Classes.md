# Estudo de caso: Trybeteca API

  

A API de hoje tem o propósito de permitir que administradores de uma Biblioteca possam criar, visualizar, atualizar e deletar livros, bem como criar e fazer login em novos usuários (com autenticação e tudo mais!).

  

As entidades da aplicação são:

-   Pessoa usuária: a representação de uma pessoa com seus atributos básicos nome (name), e-mail (email) e senha (password).
    
-   Livros: a representação de um livro da biblioteca com os atributos título (title), valor (price), autor (author) e um código identificador do livro (isbn).
    

  

As rotas a serem implementadas são:

  

1.  Cadastrar livros
    
2.  Listar livros
    
3.  Listar livro por id
    
4.  Atualizar livros
    
5.  Deletar livros
    
6.  Listar livro por autor
    
7.  Modificar preço dos livros
    
8.  Autenticar pessoas usuárias
    
9.  Cadastrar pessoas usuárias
    
10.  Listar pessoas usuárias
    
11.  Listar pessoas usuárias por id
    

  

Iremos começar com as rotas de livros para nos alimentarmos com a criação de uma API utilizando Programação Orientada a Objetos + Arquitetura em Camadas. Serão feitos testes de integração em cada rota criada e, em alguns momentos, o código será refatorado para reforçar a aplicação dos conceitos de POO.

  

https://github.com/tryber/trybeteca-api

  

# Configurando Sequelize

  

A configuração do Sequelize será feita na pasta src/database, dessa forma conseguimos isolar a lógica do ORM utilizado do resto da aplicação.

  
  

##   

## Criando a primeira Interface

Como estamos utilizando TypeScript, precisamos criar o contrato dos nossos livros antes de criarmos nossa primeira Migration. Adicione o seguinte conteúdo no arquivo src/interfaces/books/IBook.ts:

  

![](https://lh3.googleusercontent.com/HuHP1VAvJoT1otRNnwUJh6b6io74q9LCoJ5AcFBAF4k4TCHQWATeq64n7XACHS2bHSp4LduOf9SnogKHef8r9Jb4hzZZdpbg5zvD-HqAHsgcwAkH628feNzEx6ZRSfMtkhiFJj1znqXKy9DoqVz_Kr8)

  
  

## Configurando as Migrations

  

A Interface IBook define o formato esperado dos livros na nossa base de dados, então quando formos adicionar novos livros devemos respeitar esse formato. Com uma Interface definida, podemos utilizá-la para criar a Migration da tabela de livros, insira o seguinte conteúdo no arquivo src/database/migrations/01-create-books-table.ts:

  
  
![](https://lh5.googleusercontent.com/QJx2vDTYwHyFtlKmeOnBs_NFobaAg_gtCHCdVaivP6uMe9ltAHK5XOtG-7zyYl5vi3_fwJ8DnQh5Hj3XQAWYtu-cQXaRqzmknd3wnvR0HcaT4r_6ou8GT74q6c-PSnrrb8h783wqaKbyjm0ZpyIHmuY)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

Perceba que a função createTable está recebendo o tipo genérico Model<IBook>, sendo Model um tipo já fornecido pelo Sequelize que está implementando a interface que criamos anteriormente.

  
  

## Configurando as Seeders

  

Depois de criarmos as Migrations, criaremos as Seeders para que tenhamos alguns livros pré-definidos na nossa base de dados. Insira o seguinte conteúdo no arquivo src/database/seeders/book.ts:

  

![](https://lh3.googleusercontent.com/FNiVAToRElIN4P9Ziu0RJZ_XZQj5h9xvrsidKAzaJ3yjkOa7f5459MLIV9LmTnPn6qGMytuxC3YqnBkvYWBhuMX67dUzdAKRkHzkMf6LM-jicD2FulfnL2s9JQw1tQezfuEELxpcT7s4zgpDqZTQuXU)

  

![](https://lh5.googleusercontent.com/vEnpb9LKW95ELSvczhgSC3-b_Xi8R4f2pocHCGsEIjDz4g7VBeKo1WS0FQzctMgPLc9o9DAC-UqNY3ajTECDjXcWubSEqXV-GRK5Rp5CVyCPgxyfeGm60ticny6etat8ahbw84b9Wuo-4-Vpv4vdUOc)

![](https://lh5.googleusercontent.com/D_7oEk49OrcLpzpUtAtssZb1NU8rolMtECN14t2kCBXu0Ul6MOutq7pUr7jYgisU6Rd1HX8pa6fRenUGdMdL8w8gQBEaNFU1rzdYzk2S8_qUx-cUMYnPX0eSWsbqCjkVrLa7h3R2WWRH8e9VpYDWyuc)

  

## Configurando a Model do Sequelize

  

Adicione o seguinte conteúdo no arquivo src/database/models/SequelizeBook:

  

![](https://lh6.googleusercontent.com/TbPsXXwR3tAVsjT9yQujHsa73cihsCr7COdtxqMqZwKpiImqGgpxJ1LhMnuezJE1YmTT3Xv_RjUpSXXAgJrILVrpusw4tyrqdamJa-xkAczwzFaUlkLXeFbJP_FR-xm7pDAvkneM_Ly9lmZuRCgbEk8)

![](https://lh3.googleusercontent.com/RSiglqwccx9pvkm_9JSWsuq5BVqzaHVBc1R3PTnHv3a3N9fIlsaNKj9WX95j4BEIC-GEv095I9H5_-b1RshKUNXr52JmLZpJzs5bS1EwTnG7czyzJ4RMg17JQw5oe5Tqs_CnLBk1W1HYQi5hCoK2Ww4)

Os tipos pré-definidos InferAttributes e InferCreationAttributes servem para ajudar o TypeScript a inferir os tipos das colunas no banco de dados e dos atributos de criação do modelo, respectivamente.

  

Já o tipo CreationOptional serve para definir um tipo opcional durante a criação do modelo.

  
  

# Cadastrando um livro

  

O primeiro passo para criarmos a rota de cadastro de livros é criar uma Interface para o nosso modelo. É aí que você me pergunta: “Como assim criar um modelo? Isso já não foi criado na lição anterior?”.

  

E a resposta é: Na lição anterior nós criamos um modelo exclusivo para o Sequelize, aqui estaremos criando um “modelo geral” para nossa aplicação, de forma que caso você queira trocar o ORM utilizado ou somente adicionar um novo, basta garantir que ele respeite a implementação do nosso “modelo geral”.

  
  

## Definindo Interfaces e Tipos

  

Para criar a Interface da nossa Model, adicione o seguinte conteúdo no arquivo src/interfaces/books/IBookModel.ts:

  

![](https://lh5.googleusercontent.com/98sogQxs4Jka-6Npf4RTxGi2K9OnuHV61jaWUJdzTP2Zw-Eb4l5AJHWsea52taaP-6qypU9lTVhsd3T7JcFAB-gGvHO130qHiYZ4a1dKzxEV-_K3hPkpbTSG5oxPZsRpLOJoS9gKbSbPoif7o0d_PH8)

  

Aqui estamos definindo um contrato que nossa Model de livros precisa seguir, ou seja, estamos criando as regras do jogo para que a nossa Model funcione perfeitamente. Isso garante que a nossa Model tenha um método create que recebe os dados de um livro e retorna o livro criado no banco de dados.

  
  
  

Em seguida, vamos criar um tipo auxiliar para representar somente os atributos recebidos na criação de um novo livro (o famoso body da requisição). Adicione esse conteúdo no arquivo src/interfaces/index.ts:

  

![](https://lh5.googleusercontent.com/53jSaPKlPT5DGzcbmYoPaBlkwEFykwZqMD2Ah99CuqCwNpoX0LPEKCOC7AadSmndWAz5IiUVUkmDPsHn163PHQBeA23tWKiPiy5E_dATdAN4GqJO6B7oDK3Vio7CI0EIL9IqavwKNDaeGFj4JS6uVMw)

  

A interface NewEntity. Ela é usada para criar novas entidades no banco de dados, como um novo livro. Ela basicamente remove o campo id do objeto, já que o banco de dados gera um valor para essa coluna de forma automática.

  
  

## Criando a Model

  

Finalmente chegamos na criação do nosso Model. O arquivo src/models/BookModel.ts

  

![](https://lh6.googleusercontent.com/o4VKkQpwPS9yMlZERaVEg_5BBftUHqT-k8lr0Hs4W8BubK_IYOMmlPayhwZB79zfPfApz4V1ATMsr4WFyzNS09nkaxqCP_t4nxx7h6CVH776bLEmVD1zj-x_xk0MIAwCPNyXKlPr-rvSCcfDWu08oa4)

  

Com essa classe, garantimos que cada parte do projeto tenha responsabilidades bem definidas e separadas, tornando o código mais organizado e fácil de manter.

  

## Criando a Service

  

O padrão escolhido para esse projeto é fazer com que a camada Service retorne um objeto contendo o status da requisição e uma chave data com uma mensagem ou o retorno da camada Model.

  

Vamos começar definindo uma Interface para a nossa resposta da camada Service, adicione o seguinte conteúdo no arquivo src/interfaces/ServiceResponse.ts

  

![](https://lh3.googleusercontent.com/TMnePa_GGOebFMuTGy0-XjBfKDEX2EOqCMHWeNWlTmHWQ3K6NyycYX1jQkwPI5Dihav0_GKnf9aDBPgkS0W35w7BmD4XhhkNGY4qSy-qIOieDsZqB8-iHqZEYzmcMxBZn-gvSr2T3otC_-QzWF1Bcv8)

  

Com esse contrato definido, podemos então criar o primeiro arquivo do Service. Crie o arquivo src/services/BookService.ts.![](https://lh5.googleusercontent.com/Koxvm8B4FakEsIImTje_KGLz_qpp6aNKgvvKu1mEK0iFJHfn8uFFJBsu4422ktZcRxx2owRmFD5_eoRh5qUvJVKwaCsdQ6bAMSHSqv8ZoMmXLDvK4KU1Uk_otbNKVMf2p_cCr1-G3GLsVAnp2PMHDAU)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

Note que dessa forma a camada Service sempre responderá para a Controller com um objeto contendo status e data, e a depender do valor da chave status, será executada uma determinada ação.

  

Outro ponto que vale ressaltar é o atributo bookModel que está sendo declarado no construtor. Estamos definindo que caso não seja passado nenhum modelo durante a criação de uma instância, por padrão será utilizado o BookModel.

  
  

## Criando o Controller

  

Com nosso primeiro serviço pronto, podemos então criar o Controller que irá lidar com a rota de criação de livros. Adicione o seguinte conteúdo no arquivo src/controllers/BookController.ts:

  

![](https://lh5.googleusercontent.com/BVovI0URZ64mjZaeqcxvkqR38-0IyWB-rXf_3AzqMzVy46TqlqqPykJY6qz_ENU-HiwVYPrjb-KDKTNRoGe5xPLoeZxa3YXdM1pOejSo7WkaksB9uMN-MacdVZeSQ6cjUU9ca24KUsohMUKmUK60b1g)

  
  
  
  
  
  
  
  
  
  

## Criando a rota de cadastro

  

Com um Controller pronto, podemos passar para a criação da rota. Para realizarmos a criação de um livro precisamos validar os atributos que estão sendo passados no corpo da requisição. Para isso, vamos criar um middleware, adicione o seguinte conteúdo no arquivo src/middlewares/Validations.ts:

  

### Middleware

  

![](https://lh3.googleusercontent.com/GI3IaLRyVx6Lg9nDvFy7vFT-2KIfo877YvSNju8fYtBBGrORQjDmEWY1R1jZP8CfKOxTRWvLw7oal2YLO_9e-qFxU2YFlejRDsi-CyLpHohsQdxYj8f_Pf_KOaoGtM-VJBiW8bBFuByG8BimeMNxFBc)

  

O nome dado a classe foi Validations pois nela implementaremos todas as outras validações de entradas, dessa forma concentramos essa parte da lógica em um lugar só, e as rotas que possuem validações podem chamar apenas o método que precisarem.

  
  
  

### ROUTES

  

Agora podemos partir para o último passo que é implementar uma rota para lidar com essa requisição. Vamos criar o arquivo src/routes/book.routes.ts e adicionar o seguinte conteúdo:

  
  

![](https://lh4.googleusercontent.com/8mJx3_6-d3YTDMiIx-2ZzfCP2nVdvpTG9Q7piOBF9YvmL51eVRsCqTqwm7GwMwZMH9KRhm508YAs0bp36NuQFP6sFSEV4lkxDBKKeF6WnGGDi2VaybfWZcbrzsSVCofwWogFHFeE6yWEtPEOkhdar-E)

  

Em seguida, crie um arquivo src/routes/index.ts para concentrar os routers criados. Adicione nesse arquivo o seguinte conteúdo:

  

![](https://lh6.googleusercontent.com/ofPfqUpurM7-lk4jmqEHmQ2RsXdLHb2khsyQj9Cafa_aQc0tBagoOVOh1sQRJiw4TAqMNpRSEmLeGK3IKIacjibQpVtAVTQcehTAJo6uSNWUdzxbnimFKo_stmt5-cCVCvT1mqQMQEmbD6OVZs7qXMg)

  
  
  

Por fim, abra seu arquivo src/App.ts e crie na classe App um método routes com a implementação abaixo e chame esse método no construtor da classe:

  
  

### APP

![](https://lh3.googleusercontent.com/H0aiMYPn0SkWUw3TmpACQdPDMK05tjfTvkSPsep8sNyu2yL1KrZpSwKnCE7A8Em0X6PJD1m7Kj1QGYeENYiStEoShQ8GXSZAjgH-PZ4yiyIDugx1VZBI9HmlsS18yby8LbQM2smFSWKwfqDV7qP8A8Y)

  
  
  

## Criando testes de integração

  

Para garantirmos o funcionamento do código que acabamos de criar, vamos implementar alguns testes de integração. No final desse dia você terá uma aplicação em Node.js + POO 100% testada!

  

Primeiramente vamos criar um mock para auxiliar o nosso teste. Adicione o seguinte conteúdo ao arquivo tests/mocks/Book.mocks.ts:

  
![](https://lh6.googleusercontent.com/va3jcSQFfrfhzndfywr-mWqX9cCtyUMYJsP3R83QxbVjS2KoMJQu67fFT9hyzkQROls8QG9wPA-YDEnoNgi9llSauNE1lwXJJJSA5B_4Xebc97FWTokFFQLcJEK5cd0p-o6prefUzA_HtN-mn8zYxK4)  
  
  
  
  
  
  
  
  
  

![](https://lh5.googleusercontent.com/fjzBHsPHcE-i8mfrN2E8AwaaD6Rb140J-FMtZuj1CpgDmLQfDXdYHD14Z_0yK8hbdLicDL_wuE_vcZ9tFaN4_b90w7Vhi4OJQ7k7WmBG28QJhPXddnaNdQE5jL2woRq0hm_HUyL1AtxvXHiPszKcffA)

  

Para executar os testes rode o comando npm run test.

  
  
  
  

# Listando os livros

  

## 📚 Model dos endpoints findAll e findById

  
  

Assim como anteriormente feito, antes de explicarmos nossa Model dos endpoints destinados à listagem de produtos, vamos alinhar as interfaces que estamos usando, e por quê.

  

![](https://lh4.googleusercontent.com/INBkgPWIr-WREJWkdm3f_2w07ResnwUUXyDbjOB8FPnoPO1ITt9XqLityxzLyaCfM5pv_8mEpGfJ6ur_xx1qmuU4A2T2fZJLnC7KjOGYJ61JbZM3yDfXkw82dTaLQVM1XfRiEyygIzuQ1Tc1frKg4a0)

  

Além do método create anteriormente implementado, agora estamos definindo os contratos dos métodos findAll e findById, que se destinarão a, respectivamente, retornar todos os livros cadastrados e o livro específico pelo seu id

  
  

## Criando a Model

  

Vamos agora implementar, na nossa Model, os métodos acrescentados na nossa interface, já que precisamos seguir o contrato estabelecido.

  
![](https://lh6.googleusercontent.com/e30-NJoOA9i9BFkKlRR1rH5xv0irIt-vCzjOqJnKai9AUsTrkhfB4TcsnJhYgxJIgudePgTemzNzwDo6i-cnd0rIBsuurZdghMmHdtiF2DGc1S5Unn2ICLlDGZB6plgyLkg74nSzNh1-ue6709spRB8)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

## Criando o Controller

  

Nossa camada de Controller ficará da seguinte forma:

![](https://lh3.googleusercontent.com/icMconK2BBPJGl1BXLofj8Jw9fuetfPXuUMYZ_YokP6K9PYOhrd7gg961K6IvjOU9r4YiVi1WLqWYv25C3OwDv2bdKYyd1zQyNCx71OZNhqDdJA6dQsNzLM7G56LExepweU4HpGBfwH6O9BasXe05Co)

  

Repare que aqui usamos o arquivo mapStatusHTTP, lembra-se dele? Serve para transformar o valor do atributo status dos cenários de erro em um status HTTP por meio de uma função - afinal de contas, não cabe ao serviço saber que status HTTP retornar.

  

![](https://lh5.googleusercontent.com/Yf7x6fUgyRfF6ezA57Dovjm99rfEKj6FOGWumdzuwnN0qaePXPcPrDBKz8EoHFktFpHoCcMMYM5y_lMNSCxpA3KTO5rpA7UyxFhAScszM6IS22A0MtK5jW5L8dIAXSdJIPi5M7HtAkUNkbmqNKd-h8Q)

## Criando a rota de cadastro

  

![](https://lh6.googleusercontent.com/N_jrlkkpmSGc1UKv9T-wiwqwkqozwtJ5nBnrIfav2jt4odb5N0kQ8LijD-m2Q3DwKvvGSN-KwtE1h0KNG0u-oNJVcZLQ5AMrb9vt30qKEy5DV7DXM1qJXrUE8eTTF8Zxp-a4g0CHXbxMfcKl1zp1KLY)

  
  

## Criando testes de integração

  

Para garantir a qualidade e a confiabilidade do software e para evitar problemas de integração que possam afetar negativamente a experiência do usuário ou o sucesso do negócio.

  

![](https://lh3.googleusercontent.com/DmH7yrvnqDhG0RvgDHX5FKm51tr7ooNC96v7TM7t_TcjEuBoAooHIwGLdfRIPnb_q4DsDqTxef_Uys_UFdMsk1Y8VsETfWnu7pCP3U0Es-m93khv3SH9S2YHfBXDPtQlwMPhw9lcyS3jLrogW2__b0w)

  
  
  
  

TESTE DE INTEGRAÇÃO

  
  

tests/integration/Book.test.ts

  

![](https://lh3.googleusercontent.com/uvWVAwPn2z7Jl7jxiJARv3rFD69E_Pu_7StuVAXQ8OP5k1XPjUKkfp3tfdbXv0mZuBH0kDaQhvnAzi4uaRREZPHPi-7izmwv1LRa0UBoW1o_iRc10QuLYk28SciBuKSKwJWE7nv4pMgucBjV0MiDenA)

  

![](https://lh4.googleusercontent.com/tYUKpYDZCHY5SWZsJsPOarvmtlC1EMw2rJvb5LDTTZDApr3_XB_rK67WqqicIuAMAQLMPRoBFfHZLhVVKjOxICvoUaYYR_ExYXi72Arem_YaneIFIn8N8oHyTdp4fQnZdCkCFAkGXw7gFxPX2gGraHg)

  

![](https://lh5.googleusercontent.com/e-J4mIoTcEE-U_WkZdpiLQV-ZpbfpiPPWj7MLu9NAuoDLrhxQjBBj6S0RaRaBrYgjVaI66rZRj4226TxGnZkDpsIa63lSZvTF85BAwYNHCU-oVUBp07VAwAg-EAa6yqd-90l8KhTj7nQRijlK4DrZiU)

  
  
  
  

# Atualizando um livro

  

Agora que já conseguimos cadastrar um livro (rota POST), e listar os livros (rotas GET), vamos incrementar nosso código criando rota para atualizar livros já existentes na nossa base de dados!

Vamos à rota PUT!

  

## Criando a Model

  

Como feito nos demais endpoints já implementados, precisamos, antes de chegar à camada de Model, definir o contrato do método na interface criada. Implemente no arquivo src/interfaces/books/IBookModel.ts.

  

![](https://lh4.googleusercontent.com/UGMmzjqHrahl8tnOKmPZIuPTlkMkdILFSAj7TX-3rCcQLud0Gl2J9Pz2V9FYL-5TFGVuwBVvFoZ2ChhLhIPMAhbxkbsT33SV6y2fqKzubpSBbHZkhHgxO8ryFm0qArwCJ8zfgWfBDYMXM-zzph8Papc)

  
  

## Criando a Service

  

Após a implementação da Model, vamos alterar nossa camada de Service, acrescentando o código abaixo:

  

![](https://lh5.googleusercontent.com/aCWsNNtQQqEJ-FCFDT4Mh2MeChndvW3eiUio2NXDNdCQcMCXpEZxY6oTqTEwBELA3ZJonu3N1cavGXEp1WufroX0f4oGlHngjRFgbRf4SxRtpx0oJrs0YJF8UTRAvYoOvEILUSF_yQ9zcuEZEkN35Rc)

![](https://lh5.googleusercontent.com/QT93L_px8kNPNK0RhuBwTyRBcOXG1lp17VDBRrOkAVoCwMPaJ_K7AKf19MDZwvT8azAkFR2vkfGp38ZAX8D4nIKHS1_1UPI4Nw45aKClDzYejo_S2S5FwZbY-P6NCGgUrcf3ikZl8WX9TaCaXZ4rziI)

Como de praxe, caso o id informado não corresponda a nenhum livro, o retorno ao usuário será uma mensagem informando que o livro não foi encontrado. Porém, caso não seja possível atualizar um livro existente porque as informações vindas da requisição já estão no banco de dados, o retorno ao usuário será a mensagem There are no updates to perform in Book ${id}.

  
  

## Criando a Controller

Agora, nossa camada de Controller deve conter:

  

![](https://lh4.googleusercontent.com/Lu3z8kkuIeN8vO-rFDlNX719_7HK_VrN26QOgKlHw-CybCbQZhRTsoDbYR7SBEplTHKo0oc_d8qnNlL8eaL_flMGlZn9E7SVpb1X0IpVuuvDF0z1_umm4pLNSBNSoHAMUO6Wxj8Nu4AmZLKX4eQed3M)

  

## Criando a rota de atualização de livros

  

Passando às nossas rotas, precisamos adicionar no arquivo o código a seguir:

  

![](https://lh3.googleusercontent.com/dU7mC-P_ePHkiACSUQCsorLDcUETSFWafYoEhX7cclOjWdhJ-rLODAIaXXSWz84TA8wKbIVh5ekkWSNE3RPv3t1D58ZfgTPgMK8xws4fe47iwT98PISUa7P25PA7b5RmjfZIqP6az5NXkVI696Xfh8Q)

  
  
  
  
  

## Criando testes de integração

  

Para finalizar nosso endpoint de PUT, vamos implementar os testes de integração:

  

![](https://lh6.googleusercontent.com/bW54xIMK8OSulRbzoC8VjBMwWpf_dG-uPoWxIx08nCherLUniBzmcQ6GmG5gD3DlJtUQZQ0ZfbSx7d3LgIS4BQWG8WimkuFCpmbAvBFMSacUoeygeoyI-dcpAM8Libo5VVvKj8uSOzqciynKKnLG_WU)

  
  

# Deletando um livro

  

## Criando a Model

  

Vamos primeiro definir o contrato na interface, como feito em todos os outros endpoints.

  
  
![](https://lh3.googleusercontent.com/hA8ZLrifD3kXyLGNOkCRvlLGj0yKC97rF1LPEupARV8WtGHct7H0hwbsRAwzrsebw5ld1d-oig9HKSxDD7Yln0C9DWcCf3Twz4e5XMEdBT5HkFMfMVjp_O915dq29FngPzk42ebVC4S2_aTCuERtG5U)  
  
  

Contrato feito, vamos à camada de model:

  

![](https://lh4.googleusercontent.com/tGIIJkAi4EBcNnffXk4KdEqDLbbGO8peqm_P_QHMok7Y9eNhqP9OhfxN9wwjLwqFC4MmbPCp0Z7WLLNI4vo1kxC94XStzs3KzRkAxM_8BHHmSDChRWp4doOhWes3YfFUDrR96mZENFxoKdamnUNOahc)

  

## Criando a Service

  

Acrescente o código abaixo no arquivo src/services/BookService.ts:

  

![](https://lh6.googleusercontent.com/c1kk9g6ufAYzbB85YQ8dJj6rrb_JgOjx4BxcC3G6MKdTlib3VPHTpTIUq44afo2G310IWvv-tpJgazsXwZIVM72gyx8uMKmDDwrlV4d3e0gYdk8d3cNShJKAP_v_13sBVei0-kkHd0SZlLkkosYMQsg)

##   

##   

## Criando a Controller

  
![](https://lh3.googleusercontent.com/Gyuv6K1OYEblfKip3vT6SdJiKOX8d2ZH61jM1nhqBLxdjZsef2gJjwJzUL9y7MKl1iyGthJyyouKbXy5H97VnrIzo1wR_IyeCTcTVlVL_kejy3F7HAOhJZSPiCbUFlVKyk-3jNnbOAXONoEy45qoEfY)  
  
  

## Criando a rota de deletar livro

  

Passando às nossas rotas, precisamos adicionar no arquivo src/routes/books.routes.ts o código a seguir:

  

![](https://lh3.googleusercontent.com/HxgUkK8_7-zg3I9hBDY5WLN_6HLNl6vzm4kkSeFkbEouKz1WYHutnTTebhcnJA_6VUneaH5fR5_sKYS0VkwfRB9kxscy1UoUGnI6MmjCQDOd-a1JZTUmc3JgjjOl_NfJmLse5pKU-ps8J1p4BrKipow)

  
  

## Criando testes de integração

  

![](https://lh5.googleusercontent.com/cGyWPs6GziknpXzPTjHq8aen0FNsBYD84PgnEJKe6iCHPkfGcinSlA1Cucf6B3Cn0X9vp-dN7xqboDja4_T9zMVPot3qdapJ3aA0kFMi2uGwuGmxvw1ETCXu-1_rRS49l99sxbRIwgP5hi4TdP-tIvM)
# Estudo de caso: aplicação de gestão financeira

  

Para aplicar o conteúdo apresentado nos últimos dias, isto é, os recursos do TypeScript, em uma API RESTful, vamos analisar o caso de uso de uma aplicação para gestão financeira. Nessa aplicação, tem-se duas entidades principais:

  
  

-   Pessoa usuária: representação de uma pessoa com seus atributos básicos (nome, e-mail e senha para acessar a aplicação).
    
-   Transações: representação de uma movimentação financeira que terá um nome (name), um valor (price) e um tipo (type) que pode ser saque ou depósito.
    

  
  

Vamos implementar algumas funcionalidades, como:

1.  Listar transações;
    
2.  Cadastrar transações;
    
3.  Autenticar pessoas usuárias.
    

  
  

Para as configurações iniciais, vamos trabalhar com esse [repositório](https://github.com/tryber/transactions-api). É necessário cloná-lo e rodar o npm i. Então, tudo estará pronto para começar.

  
  
  

# Models e migrations

  

Na lição anterior, você recebeu as especificações da aplicação a ser construída. Ela tem as informações necessárias para criar nossa solução! O primeiro passo é identificar as entidades com as quais vamos trabalhar.

  
  

## Definindo tipos

  

Pela especificação, aparecem dois tipos para serem representados com Type Alias: pessoa usuária e transação.

  
  

### Pessoa usuária

  

Na aplicação, uma pessoa usuária possui um id, e-mail, senha e nome. Dessa maneira, seu Type ficará assim:

  

![](https://lh4.googleusercontent.com/EK0WpoYWnjEXk5VSnfOfApHS7QaPwcXSeZZXtSPDhoWuB5WnY7IEHL646bqtNxmorYVsjcKFBSgz_jRx4COpb5wbe0h8KPkS6L2dACWemxVQoiA6nx51Hlwa9UZnPGDdGk4GZSYj7F0z52NKkVmvGJs)

  
  

### Transação

  

Cada transação possui como atributos: id, nome, valor, tipo (depósito ou saque) e identificador da pessoa usuária que fez a transação.

  

![](https://lh6.googleusercontent.com/RE_mYkCha-euoDE1fplXyqhfJvxVAZSESZV6DMSQq7JUHpBAMNLLEQmX0G6yeqjOV51zQS5fLUl0L9apuhEHdyN5kHQ_6vGIoABKF1fdextRzRQMaUs9bWX8kTpMeCQg2e7TEB5ZxHMtusiHiX1vFkY)

  

Então, para construir o banco de dados (a base da API), utilize esses tipos. Para começar, vamos implementar as migrations.

  
  

## Migrations

  

Quando comparamos com migrations em JavaScript puro, há as seguintes mudanças em TypeScript:

  

-   Uso de export default, em vez de export.default, no começo da lógica;
    
-   O parâmetro queryInterface é tipado explicitamente;
    
-   Não é necessário usar o segundo parâmetro, Sequelize, pois será usada diretamente a importação do objeto DataTypes.
    

  

Como o sequelize-cli não oferece a criação dos arquivos de migrations e seeders em TypeScript, vamos criar manualmente os arquivos de migrations.

  

Para determinar a ordem que elas serão executadas, em vez do timestamp  como prefixo para o nome do arquivo de cada migration, nós vamos adotar o seguinte padrão: usar uma sequência numérica que começa por 01-, 02- e, assim, sucessivamente.

  

![](https://lh6.googleusercontent.com/pQwUed1srHAVxvKmvBcRdT-SUrN0GflA-6annIbBw3nr8355Smb7lTktBQsSyshMpr8UngxXEeeyt0hJxm6yG9T_MTl_ZSw5bNdW-vqEBSy7YbnYbmYE6TE9VseL29EqFXp6G2ylm-61-oWuewpcwEY)

  

Perceba o TypeScript em ação:

  

-   O parâmetro das funções up e down da migration, queryInterface, foi tipado com um tipo de mesmo nome que o Sequelize havia fornecido.
    

  
  
  

-   A função queryInterface.createTable() é genérica! Ela recebe um tipo que havíamos importado do TypeScript, o Model. Este, por sua vez, recebe o tipo que queremos associar com essa tabela, que, no caso, é o User. Por isso, para chamar a função, é usada a sintaxe queryInterface.createTable<Model<User>>().
    

  
  
  

Para que isso se torne mais nítido, façamos algo similar na migration da tabela transactions (transações):

  

![](https://lh3.googleusercontent.com/VSx-2CbVMluKerKXxll4s9Mujwjx3VoBHzB35vXyePDpZ7-0qxFWZ1qLFSuCZZeVRgiqO1IoZE--hUoY-oHn4-YBynhkhY3sAG9UzlexM5NjLRiqigk4UjTZvCu5aKxmic1VdKP_2oSyBUygK5vT4e0)

![](https://lh4.googleusercontent.com/WNjC3kd2Ht7jGC1oQyfYJwpNFEM-VvJ0te3p4M7WfUbaByCUFvMh0767jRQmWvCtBqDzoCjGbcaj_CzHhBldhkjnbpNN1l1q8bI83Jy5W5I9Ym3ScDmB3qveU6LsSLDdc3GzL1y5-r_0xDcm7ykbr0M)

### Seeders

  

Para trabalhar com a autenticação, é necessário cadastrar pessoas usuárias para interagir com a aplicação. Com esse objetivo, crie um seeder para povoar essa tabela.

  

Edite o arquivo criado para que ele contenha o seguinte código:

  

![](https://lh6.googleusercontent.com/p6rgzpg-gSGLVvfFIaCsvU0NWXWGIQKyL2rEGFnU7Qg-ojMokdIDk43C1ae1QE8MTYh5_3Nw_bC4pwVo1b4wSITDrPrk6sn9aIPXcwZ-ErOzM979sOZtsLTIuCD6hlGjbv6Nfy8jQdP-uvQultPf9hU)

  

### Executando migrations e seeders

  

Para executar migrations e seeders, vamos utilizar um script já existente no arquivo package.json. Execute-o com os seguintes comandos:

  

![](https://lh5.googleusercontent.com/D1a-HcTJUCjhELvCpK6EiQnagqxVuA3VTVBZl87pU8b8DvL2CzGu5XLKk451IGmYwVBEdgy7T7MI_qIZ2sFJ5h-XBVv7W1T6AoZsIXNCYCpYVLvnwQex179-UANayaaW-_waQDY7O16ynAEES4sKYqM)

  
  

![](https://lh4.googleusercontent.com/-MUYvTSQp9Bu7KLNUvLtrgfCBxThJ17XBqg2rrtAW-9sIuIrY_sm-GMuwu7_pG9nCQRkm4ql_qnEu-d_3HRlraOOBOmns-EdKOSiIK_2uGv6eQfYeiI9mag6_PUfohqjU_nqtL7z2hyDMxVfXLzzkXA)

  

![](https://lh4.googleusercontent.com/xmEbAzl36yH6uALGIO4ZvoOFwmZuwqjU00NJnABZG8mZhcQBWnZbj-VqnItGf54C5jJauxRaZcGTsQCZCk84ZDCOfKby33ShXDZ9BJEuHdjhp7Nc6z0wmYDBbI1NglLymWIz6WOroPQjQfjMSb-h8nY)

  
  
  

## Models

  

O setup do Sequelize possui o arquivo src/database/models/index.ts, que exporta a entidade Sequelize inicializada com as configurações do banco.

  

Para que um model de Sequelize seja corretamente tipado, é necessário definir alguns tipos diferentes e usá-los na hora certa. Para entender, vamos parte por parte.

  

#### 1- PARTE

  

Primeiramente, o Sequelize precisa receber o tipo da entidade que você criou. Por exemplo, o User.

![](https://lh3.googleusercontent.com/eXYQ2-pxidI9i8RyA2j3VAj_uCqYlguvjrbSO0uWIF92a5z2zc5wKDDm_xq16EpqvTA7-mCBWZ2a4dIgQfKQQfKUVoHbj00P-hUWzadl0cLiGPicXcLQWYLbltsdahq-MGB5UUMopNyKwBoPlDpaIBI)

![](https://lh6.googleusercontent.com/hWiHAIzBMNISjLqf_im7T7jUzxDyHmGTpaBKDVQwPE2WKRMl24hMIO1ax8fkh02CTuOcdxgDcOEhtMeHhcX7YhOhohKfredP0B5svzWJW82rbdOkTnjyd7RYZPc7pnanhE9f6UsB3JgQYzIN3py2RrE)

  

Para o Sequelize, esse tipo tem um problema, afinal ele traz todos atributos que o tipo tem: id, email, password e name. Contudo, ao criar uma entidade do tipo User, propriedades como o id não podem ser definidas manualmente - e isso é uma definição interna do banco de dados. Ele precisa que você diga quais atributos devem ser definidos manualmente para que, na criação de um User, ele possa informar o que você precisa preencher (no autocompletar, por exemplo).

  

Então, o que nós precisamos aqui? Criar um segundo tipo, com base no primeiro. Dessa forma, atente-se para a sintaxe abaixo:

  

![](https://lh4.googleusercontent.com/VKSa4WS-Id0ddNDcKjfq3q9wD3LiEB5XilIeiNLcDuEt3yQBwW13_bctlx7LicntZzpnhb5tZrIhdEB5pAMbB6TNg4XKY9xgfloTYdJ3jHeoo3tbAODlnU287h5VAdvvhzLFlfzrSpE7PWAopcLMEmk)

  

Isso que usamos acima foi um utility type. Os utility types são ferramentas que criam um tipo a partir de outro.

  

Assim, devemos criar um tipo a partir do nosso tipo User, no qual o id seja opcional, com um utility type do Sequelize. Basicamente, em uma linha, só fizemos o equivalente ao seguinte código:

  

![](https://lh3.googleusercontent.com/kYmMBORHrFbQPou2pNDFWN0e65rKtK2Rezw-AXtRXQX70w2MwqBhnWQ2_pg6-UMv6yXPuodi7WJ6NISXyhOOxIaPU4pHJkxaresPV7RSzl8qGbEjqchlWjeQ4e5QGBSVJ_B-8FzJRTJza-IyQy46mbU)

  
  

Com isso feito, é necessário definir um tipo que o Sequelize usará para, com essas informações, criar, com nosso User, um model com todas as funções corretamente tipadas. Dessa forma, a tipagem nos obriga a manipular as entidades do model sempre de forma correta. Observe atentamente a sintaxe:

  

![](https://lh3.googleusercontent.com/MbAXUowVu3CNcCuiLAf1nXhgILeEQrMSyhV2lycc6KaMSPzunSXuvA9sFuIkmooQc_nhetPc10qosuaCeAJUL21ii-rnfA_TncKPr0IGrNRCKgDKPlxNnZiaEKSzX6Be6FGzOzDTBAvRW7ySb-1k3_o)

  

#### [OBSERVAÇÃO]

  

![](https://lh6.googleusercontent.com/28ExB-QIWT1KVS0GiUUNtYq-MKe_RfjRP-oO5RPyznQwcdxGF3TxOWXsp6qZfjGaF1skpq3FSteXmfIFoEInFrHB91QNFo49wMwfejnR-GbVFPAgW7FqjU0FcNCE-pAQvKWkzFDpelze1K9ENuQtWJw)

  

Definimos o tipo que o Sequelize precisa ter para criar o seu model. Agora, já podemos fazer essa criação!

  

![](https://lh3.googleusercontent.com/Y6414kHQAjNiLmsmfaZk9-cp0vzegY2Xwv1WePvM-mWKV3QweA2oZQPXACxoGXbBQNv6gHQL0vbxTRR26Y2i1vUziPiScVOVQdqdPQVFaz23bnxoh3kMlFW2mrUDb7I4Hh-r5TLmyiGyMINOTo8AO6c)

  

É importante perceber que você importe a entidade do Sequelize inicializada e exportada no arquivo src/database/models/index.ts com o nome db. Essa entidade é um objeto que possui a função define, utilizada para definir um Model.

  
  
  

Antes de concluir, vamos observar um último e importante detalhe. Visto que foram feitas todas essas tipagens, a entidade que o TypeScript nos retornará, quando fizermos consultas ao banco de dados, não será exatamente do tipo User. Será um tipo similar.

  

Vamos defini-lo agora para usá-lo no Service, para quando formos fazer consultas:

  

![](https://lh6.googleusercontent.com/i7AiPiIJFfHZ6htjcq1ZGGHGx6-UJ_uJ9qiNnCWIrRls9oaksS_ZtYGl_E4z0WLRqkHwSyjUURpe1XvE36WfacNmltKgToJla09ySCUEUEfRsVVdi73FxI0-GKkU3po2m_n_hMLsgGaPO2dPP9d5gxI)

  
  
  

#### 2 - PARTE - Transaction

  

![](https://lh4.googleusercontent.com/KPppYP4JIDG-b-JDDUXnWk3GqWsrvk52NJzl15sP_5FcyHExwVA09G6lmmFagfN6oVH0hmvVbqFeXjXf3DjacCrSHWvTvuX5N0r0yh-HifC_1b0Qsp1OOZdGlajxV14JspQ7tZf-QsGRDutLEcjPOpU)

  
  

#   

# Cadastrando uma transação: Service, Controller e Router

  

## Service

  

![](https://lh3.googleusercontent.com/Z9A65qHPDzLgsqLqU4cFZq97kyQsHe6b86Xak9vVy7yFeAj2qLIc80AGvs5lsaOO2eEr2jPHkk3aBjMEy8--XRsZnMZTpW9JWGXX0WusCEFCKZwwxw5qhibW2Wt3oWdcYQxs01_BOWgcb_E5UKkHx_k)

  

Ao replicar esse código, o linter acusará um problema.

  

![](https://lh6.googleusercontent.com/tUUnyWPkvTrK1_-r58rAxd6DrF4US4LAlcQEcgPLb75_nciBTY6cyCAVp_D-Kqe3VTT6T4mTx1QEAk-cVcBpiIaAG4y51Xph3iqKizc2dQkTVZUPtiLm02fUZbUqKDLINe4ymro-RH6M1b0Rl0Zr5Dw)

  

como podemos resolver esse problema? Aplicando o tipo TransactionInputtableFields que foi definido no arquivo do model para o parâmetro transaction.

  
  
  

![](https://lh3.googleusercontent.com/aBrHFyuUAu3-ANUuxsiXAKnMEWo8cU_sLBpeZc7VgMXIMkYvQUwra7hEXH4STawe-weUCctg2w5gI5mao1yTYYeHD9oA4zhdILBdICkzJksDj_mm6zvq1Tb9zeFkbZl9bF6kc5Wb0K2O8Fe4FWQW3yw)

![](https://lh4.googleusercontent.com/DY4Su-MsjckWRoTBH9gFbM1im6LJREE-T2vE0RIkCr6XiHztAcXoHCn57nxYI0c1-dPmlyWDyFV_oTl5k3Xrq7Lo96y46Pesaz2JWZxy00aAR38X1PbSHIDyA71pV7Nf9UfxTeiJ6Ko5qxQcSUCmWl8)

  

Resultado final:

![](https://lh3.googleusercontent.com/sfIXuDr0XmkQKiUGtISndVTYFjxZm-6i73dGQlcOPMsypQMX4nFYatuvNWedW0vMMNV1ge3HlplKBaQCD40uS_wKuGYQIwttj8121eg9-Bz0qYpG00fzxEgUNG-93tGfdr0Kf75v4EWgOmc-RPqF7p4)

  
  
  
  
  
  
  

## Controller

  

Crie uma função no Controller para implementar o endpoint de cadastrar transações:

  

![](https://lh4.googleusercontent.com/y3mc_KlLelABcQHMo9KGt2PuS8nJvqqVGXIwYlmg4i_3tpFnIvh7WcMOearTkEGfpx8KCp7Z4TrhsINVX4ts3Z-jx_jnErf4Npwi2Obox7kdTMKdgBOI5THhwCABDu8MiVPC4_Ur_e5Z0TGuIokqwko)

  

Perceba que nós importamos os tipos Request e Response do express e aplicamos nos parâmetros req e res. Felizmente, o express nos oferece os tipos prontos para usarmos, sendo necessário apenas importá-los

  
  

## Router

  

![](https://lh3.googleusercontent.com/EGeRk3O8Pt95xsUWfBt62vEdFe17ijp_wmuGxF4qWSKfFg94ABMaT3uIFRvsGWEPTPm11sxOjC8NNiE43_jjnPcnX5UrGY6YFy9CkVInCUsT5pcfpI6Aox6b8cIcRBGTKezjA1P0MC6csUE6YFgduRE)

  
  

## App

![](https://lh6.googleusercontent.com/Sy3yjQbhrJjgSiEJUpRGgw5QkFrl5rzbcQ7gNaOEasZyWDOh-FtkN-cK_8GXeR_O_G2Gc17DEQKKgvIUNl7bQQJEGQ50EDHs2NwF73OIyZuAjcewgb4TsPyxNxCQVgJF1FpQNgk1fEcXLoaWm5W8_G8)

  

Com isso, nós implementamos a primeira funcionalidade de uma aplicação com Express e Sequelize, utilizando TypeScript.

  
  

Confira a imagem abaixo que resume o que foi apresentado nessa lição.

  
  

![](https://lh3.googleusercontent.com/M9-Dgih5L3J1HErEif7aNkPy0K-5p7tEKIXWtJOpmWo7KEuk-OZxftqGApGaewAhRyd9cg3-f2OAarHMZWIbGFMZFuaEhiVvPUzyNQOHiaVERG3ZDo5Up8PfWvI3cb7dXikk_cZIocdH9LNUuFcb67Q)

TESTAR

  

-   Crie uma requisição para POST /transactions, enviando o seguinte objeto no body:
    

  

![](https://lh4.googleusercontent.com/kZQIgXDiDzjYij-_n2y6j31YvQShovFpBwknATbnkKS4yO-ClEQTCiQGBw4Q9ooENS_-Y4BsUYrDVkSfRaymsfW0c9qiDgI6jNzPPZGbx8R8xBhre5cfEsMKE_nxPCdr2PzlSb7uq2P0RIjLBKlewqk)

  

-   A resposta da requisição deve devolver o status HTTP 201 e um objeto que representa a transação criada.
    

  

![](https://lh6.googleusercontent.com/gfWN3UiYZQtaJ5CckJs0-VcPUD7d6nozJHeIKTkjxRhsCdHJYiiWZmvs9ZBtYJ9EOXB7ikay2UKQaYGjSvBDzHMGhiE8amAPLBns1w4A1rdX8dj2j57QOw63ynsxPjV5qAQ_1uXHtN_4z3Z0EUJg_mE)

  
  
  
  
  
  

# Extraindo um contrato a partir dos types

  

Depois de implementar a funcionalidade no cenário feliz, refatore a função create do Service para adicionar validações. Naturalmente, a tipagem do TypeScript já faz todas elas pra nós, mas nosso objetivo é retornar mensagens bem formatadas para quem usa nossa API.

  
  
  
  
  
  

#### Validações Service

![](https://lh4.googleusercontent.com/XqFd06kuuTHFKRf_AAy8oS-HXRCWjo50-8VleHbBa1l7L5KZR6RIBDtZI5nK6Mt06A7Ke7gn5CgietTFa9gRqfvWu6SCVGm4-5ipOLee5tTIkBzQEK2Tf36yI0SAWYQvKpa8NNva2490Y4Pawew2oDA)

  
  

#### Validações Controller

  

Refatore a função create do controller para se adaptar a essa mudança no service. Observe o erro que a mudança trará.

  

![](https://lh3.googleusercontent.com/5XW8xXWN1iyT86jiJprAOgT1dUGzTuKFZ5Mk8fd8lEskz0LH1-TRE7qKibOIIOhzxFHqjGm1ipIx7WvwnrNAfNKBpSfGLfOPYmFM7FjVu24WjqlErJhmfRsLHuOqgodrud7yXWqYUWAoG4PGOEf8HyE)

![](https://lh3.googleusercontent.com/_upF89Jl_CZjh2NXE4MI6gFOBgk7Ub17H5e-jUVYN6AV7MkuzEZTmKXcUaVG5nLI8QzsgkDjPAQD-DCxWVdwuo2ZesSlM7U-AlFTRcaozEO0HxZtT3vRpRc4TX_bZguYnbSs2ID_AfA-vwCzEVZzg_M)

  

Ao adicionar essa nova linha, o VSCode acusará o seguinte erro:

  

![](https://lh4.googleusercontent.com/IYkzePD-hHgzFjIwWi_IF-dcMotg88FiucadLi-vSNbmD9agmPrAryd8HAtB7XlbXud5cqGGseJiYAe86r8RHL9_Zs8BUwYayYIJIMwl2T_k2MGiRBfZ_Ya0AsMhGvYtWVek2v5itBJoc5joEY61vQM)

  
  
  
  

Resolver isso:

  

-   Tipo para o sucesso: retorna uma transaction, mas já é possível adiantar alguns passos e deixar o tipo reutilizável, especificando um que retorne um objeto genérico que será especificado por quem o utilizar. Vamos chamá-lo de ServiceResponseSuccess.
    

  

-   Tipo para o erro: ServiceResponseError, que deve conter uma forma de representar qual o tipo do erro e um objeto no formato { message: string }.
    

  

![](https://lh6.googleusercontent.com/g3Dti8ivpo3gnSg4Xj8HwkgMiRjKzwzFt3scXgYmNc9y_dNsZeNCtyhLEBB7BM4CrEaZVDmIJoK7e3ZblFa_kyS9AHqAzAmxDhOdX-fx6tkbMtKC1T3PRsBWwUTl1GApoayOgpXalSgtINt5dKo5mh8)

  
  

Observe como o código fica:

  

![](https://lh5.googleusercontent.com/iVAki5FyYGqAaiG-pMMD0tPSkkWrNYO6IkogZER7_3MmXxgFpH0kRw5FmeIHpQ9HjaS09QmbzHWmPDkG5PRvOqYq6ZrWRZYWPSSbC5sY0ZgSNwQgzqmtY9ZK6bw4v_fCMqKNrPUbqQ6elHcZmQ0QvAM)

  

![](https://lh5.googleusercontent.com/2w-F8ZTcDEXrHvefE7UwNHmXhS5nan5RsAog44v9OpcIuDaYODCA17w3q2GkXX5bH_wdAxBoGKU0JNs_Y1Wuulh3Hh48sfCEcAsd9AZ1XRRgrIdrr6L8aWYoGLDJuyT3O52cRMnjqfe_chnTNvhaZMM)

  
  

Pronto, o tipo está criado! Agora, falta estabelecer, usando o tipo, um contrato no service a ser conhecido e respeitado por quem utilize-o.

  

#### Refatoração Service

  

![](https://lh4.googleusercontent.com/X_79JxcyH7NdaqIOytABG3sMnnk9sW4oJZkO836jH79e819nUB07_xQp0RWWX09K42qJhjcuslnmtWm6pUuMdZpDGhQw2Fgt9bCtjsfY6D67-cSysamfQD-GC0Dho4a9AfGAwQqN6E2WC-pJLmVLlIM)

  

Nossa função precisa ser adaptada para retornar esses tipos de maneira adequada, seja em fracasso ou sucesso.

  
  

![](https://lh6.googleusercontent.com/vmgZgsDOW4S-tS2ZvZUiVaHTj97ApjEJJkCdUye8isYd1S49Wpm-JOBinElmRTiTaEpNyiHSoqv2LhEzROxY_YQOhe99dQ8hRQGdieLaxwUoF-3ddyDgFGGMNqlX5JIUdY7nW-c0y9DswX6lKp0hOV8)

![](https://lh6.googleusercontent.com/QJ24HHn6BQAwe9VvOqjCMZtpXS35XRqvVLZ_fzw2dD1sUo_iXUuMFrBPubgwZLbQVTOX1jrvleabZmqH38yzXxRn9i8e5uDleAmpQKruOwmpjvkaDmQIXQCjVbCQbqUXaIDife-pRnlU_KrtVyI-Mz8)

  
  

#### Refatorar Controller

  

O controller precisa transformar o valor do atributo status, dos cenários de erro, em um status HTTP por meio de uma função. Afinal, não cabe ao serviço saber qual status HTTP retornar, quem cuida dessa comunicação é o controller.

  
  

![](https://lh6.googleusercontent.com/hp0lDVoLZmn_W6IHkHiySt3kw8nC89T-736jWGdcbaB8O_V_JcjckgQb435nZ_6-n_0hUEssOD1DFlGUMmSl39qwR2e_obqyc64d18qX1TG-B-pUuLry75m2dGN_nPIt_3kcPIcXLESiOjenow7tyS0)

  

Para o objeto statusHTTPMap, utilizamos o tipo Record<T1, T2>. Essa é uma forma de definir um objeto que tenha chaves de um tipo e os valores de outro. Lembre-se de que Record é um utility type, tal como o Optional que já usamos anteriormente.

Agora, podemos reescrever a função create do controller para refletir as mudanças do service.

  

![](https://lh3.googleusercontent.com/kB_rCYBWy0-QTcul005LAhzoEIwPh_R5TTi4TT77LBG9JEez1Qb_8Mb69aM7qvRfucmUzpt-KF_Rg_69lR5SlJRFrjxKNXZ6LMBhHDo6nng3UoRjpvMdNYCGZAVEa6X3cfgEWEFonmskiBwGR_y7Wqk)

  

![](https://lh5.googleusercontent.com/Y_Ii-USOVULjFKziZKQ646dHrwRTdY4XPWZ6aMX7m6P8_EbpUA8-jQP1tOgtx7X9xWmylb_ARUzpUAXQdkzI_N65iGocyxoD5JTtlZBfj2F-bH25G5vqD_hcwq8NNqxC4hiqL4xrZYRU8wuSuqCqi1c)

  
  

![](https://lh6.googleusercontent.com/hRwT974t6j3WBaVQHG9KVSRQS31LrmmXfOJL9t-Qm-OfylS7GwrV6eVHPXeWkBr6GkxP6ACyC1hFxUQdh8mDZo69Sw5u74iMmAgvJobE35x6O19XJQ-D1IecGbaaILGNABeqJW4a7mFvsLk3R_5RVuU)

  

# Listando as transações -FindAll

  

## Service

![](https://lh3.googleusercontent.com/cS0iXhETkO7ECyB278Gl8xCbqIwKXnicSMSpPVCN9jouBghO86bpzwzIWedQNmYTLXF_s7fCNo7tZ3YLXoc_NirVOVS3R3Knl62ktv4-kSmUJkQY2b7i9126CPjlqQ3OitRmR8BawH7rd6e9DCVTeBw)

  
  

Transaction é o nosso tipo, e TransactionSequelizeModel é o alias (apelido) dado para o tipo que o Sequelize usa. Essa função irá retornar entidades do Sequelize, não nossas.

  
  

## Controller

  

Agora que já sabemos o que o Service retorna, você implementará o controller usando esse contrato.

  
  
  
  

![](https://lh4.googleusercontent.com/tLy1lXwxScu2QxJcfOArSzSGPCPMlgODUj47srFj4My56y5PlFY2EwNnSK7V4r_6pYVj600cMqDTriC4eiWrp8eqG9CL0xiwneUJarfCIcKevPWeZ0JpXA2dHsVvGHX9JCt5n9NBuPGXPt65WRlatPM)

  

Agora, conecte essa funcionalidade ao router.

  

## Router

  

![](https://lh6.googleusercontent.com/6Y2WPGMhBn0dK-EbH0EgAG1TxNHCVobEacOk86e7cm1gL404lKyWEZceUrQdr2WI-yrBrqtvaCi-1t7YXpaEgSOetDfizPf51Pup67GJZNZEI5FN_Rc641hGo1My_uCsQW3Q9QcxwunmdZoiK3ZFJRk)

  

![](https://lh5.googleusercontent.com/1GxXcwopRDlwidr2Hh25_br9wKb23MxvoGkL5Y_g6qzZ7lIgmrT_-X6k2-YsBGojQGvgnLKgL28baAFZk2YxZrx02pmej7o-5lZL7Jwf-CsFyELPd12asHNQeePsSpIliHifsBS08D71wcV4p8LeyLU)

  
  
  
  

# Implementando a autenticação com JWT

  

Todos os endpoints implementados até o momento aceitam requisições sem verificar se quem fez a requisição foi autenticado. Para resolver isso, vamos criar autenticação das rotas com JWT no TypeScript!

  

Primeiramente, nós precisamos definir funções para criar e validar um token. De certa forma, você já sabe fazer isso, mas agora será feito em TypeScript.

  
  

![](https://lh3.googleusercontent.com/Z6F7evHaCjSS57Mv2IWz4HdyGvt_uovOAPoYSbTQLKVOkhurraMR8pwB9r_RwMgSBXj5eH8Uz5108zKrsOsWEj_u5RUkiw_38A5aBbvZc0rssdYG2sxnurIHWEKSAW3f-YX0jXPQV4qnCLaHS4MT454)

  

O próximo passo é implementar a funcionalidade de permitir que uma pessoa usuária consiga se autenticar ao enviar suas credenciais de acesso.

  
  

-   Implemente o tipo Token.
    

  

![](https://lh3.googleusercontent.com/UftiezZ36XpyVGSzr0sSr2PVBavOapOePethykYcIYUDz9cu0wGKrCgqStJTYvM_JZw8S5HfIg-cEkrx7PJiz2LMhj_gDMm6npl__T-m4eeAbqbHXhtkgv-zXu23jJb7UmMyjnJ-rPXqlNOOoSr8liU)

  
  

-   Implemente o tipo Login.
    

  

![](https://lh6.googleusercontent.com/KMnA7SPwFFl0HxnjsRmsQ1sGMrL2WTb6ie0QhDI39V8CRFpwJ_hyA03y7STtBsqOXnDznV3xMndVaPgqN6zMfXqbBNiHX9oIx4ynLdpg7onByp10jZng89qSQh0tVexZgbnKC3hTW8pskzokFRR1dpM)

-   Implemente o service. Acompanhe os comentários no código para entender como tudo funciona:
    

  

### Service

  

![](https://lh3.googleusercontent.com/-G_eYALu_NHNuKgTuVBENtbC6L5WzFyenwBgYkWzW8WgaV2Ff6I6ULd398xnLlfHhmejqmUuUpmaibe2s87IJ0pShyaifW8cP1g_O09-TfTUvAztN41lUE0warQGwVjO351LBp_oiNeit7NHBrGKYlg)

  
  
  
  
  
  
  
  
  

### Controller

  

-   implemente o controller para chamar a função verifyLogin e devolver a resposta da requisição.
    

  

![](https://lh6.googleusercontent.com/po3qWKILkAikB35eO2aBQJsuTEIE4SzrQWy85lBdHmjOptDqqm9X8h4eq4HXzBGJ_liolwF51ARLxzcs7xpS5HjmYBcYwNuS_gESNELAAKL1i3oR9WjnntWygrxvHokH702Xaic6fDSG0dvbWcHeB-s)

  
  

### Router

  

-   O controller precisa ser chamado pelo router:
    

  

![](https://lh3.googleusercontent.com/9UAzesfrZtXyseQlOSAX6eYVTgcBcypspYh9ZLDhHed54mqAEaZHDh1djZ7nXpkQM28jZeOsji6i6NUL3l90sxSQwuU4TNYl01__0eUwBf2NOU3NJnEZ2LxrMuK-LilM6c1s-TSJF-5eyFwJlcXpy_M)

  
  
  

### App

  

![](https://lh5.googleusercontent.com/Gny3wvyR8dGDJW1jU22znSCSIFyLVlwN9GPcPjG8Z3sc7KW6V6cOnc2M8xkSb2fO0KA2NQK0TlwVywRyEKEXLrssW6fqCBMQUYLu-p9RIyLUSJIJWLruKCvW_mLDsdCcA8o0LxlztAYDFHvzsqu_YT0)

  

Agora, já é possível fazer requisições para a rota POST /login. Envie um e-mail e senha de um usuário válido (lembre-se de que já existem alguns no banco, que colocamos com nosso seed). A resposta será um token  JWT.

  

![](https://lh4.googleusercontent.com/eGDdv8wtbE6USl6tENPf8NWCMagQ3k995SX7ABSqwwYrOGLXvK16Lj1Ud4cwUxbbJFwoW5HbIVqrsAYXF5t-eWF5fE-hohjeksv-a2rlUuUXxQw1vhbcU26QfG35y8WztwehBPbk-Y9JQxi9Yb2Fhz0)

  
  
  

## Criando o middleware de autenticação

  

Implemente o middleware que verifica se a requisição possui um token válido.

  

![](https://lh3.googleusercontent.com/_XCT847RgQSRTh7oMRpYPQxr0j5KlUgg8Fk6F--DplEetzk5Kwy7nUCFSPOmZk088jVtZPczLDvn7U5rgNOUVWC2ohuZM1CGrCqW2WP_bL5mylIz06IQe7_uTVbaUijuesVNdTeTgh_BQrhCIchFmYw)

  

Observe que foi usado o parâmetro next para chamar o próximo middleware. Seu tipo é NextFunction do express.

  
  

Mas em que posição do arquivo app.ts devemos adicionar a chamada desse middleware?

  

Para quais rotas queremos exigir autenticação? No caso, são as rotas /transactions. Portanto, devemos adicionar uma linha entre os routers de login e de transações.

  
  
  
  
  
  
  

![](https://lh3.googleusercontent.com/-JtUiBuzkimi1xNC2gzCIQF4oV_B2H3J70kd73UB7cMrm6Y1PijeEHIcJiXZNa55C2ZG0QJI1mzXZrxzyb2NNm_OPg5XSftP8QCRGXg6J8HWtFXRSLnpHLkAt0Vanht4JilV8_xWHYYqRDGub89gKPc)

  
  

![](https://lh3.googleusercontent.com/MiHQJLQRQ3phWhM9oqeAOK6_F_mBI8O6FaMKVd_ZTvs8gweoGD6uKZy3J7lcwIpBHHrarmVsOKmZC9mFnf3bjuMBwxtSlSHS6WNdXOTwkmmHzBeI0KmsgNY93nDB9YL2UV5urkObl4m-b2YQRLd-dGo)

  

Agora, só é possível fazer requisições para cadastrar/listar transações se enviarmos um token válido.
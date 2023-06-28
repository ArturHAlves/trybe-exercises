-   Escrever testes de integração e testes unitários utilizando as dependências mocha, chai, sinon e chai-http com TypeScript.
    

  
  

# Contexto dos testes

  

O objetivo de hoje é conseguir escrever três tipos diferentes de testes nessa aplicação:

  

-   Testes de integração: testar uma funcionalidade realizando uma requisição para um endpoint e fazer asserções sobre a resposta da requisição.
    

  

-   Teste unitário na camada service: testar um service para verificar se, isoladamente, esse componente cumpre seu objetivo.
    

  

-   Teste unitário na camada controller: testar um controller para verificar se, isoladamente, esse componente cumpre seu objetivo.
    

  

  

  

## Dependências de testes

  

![](https://lh5.googleusercontent.com/MbN3ZFXTQdYt4wm7lYlUWMA9gtv9kGYkiGCvKZyBLcH_7li-ft36QPKgjg8RaGCYIBllL7zaOuXpkw7MwXq_eM9ddIURKu_MsPUwxQeux6urj4Of0aMsKxxd9UNuSvR8TNg4pJ0rEcHvpvrcInFw-cA)

  

npm i -E -D chai@4.3.6 mocha@9.2.1 sinon@13.0.1 chai-http@4.3.0 sinon-chai@3.7.0 nyc@15.1.0 @types/chai@4.3.0 @types/chai-http@4.2.0 @types/mocha@9.1.0 @types/sinon@10.0.11 @types/sinon-chai@3.2.9

  
  

Para finalizar, adicione os seguintes scripts no arquivo package.json.

  

![](https://lh6.googleusercontent.com/PvGAUX1bHz1I1CE5R9dwzg9HLPSBDG7AjOGDVqVa6MtBkX-vtqYk2gK6GnKgluYT0x-hwvZoJ2VyTCPqre6zPQYjA-PpeuiA8DQjKi-IyJ7vsSDDmsaHkT7WddGzwjATcPCJJTW3ONJ78EjsjT2sstQ)

  

O script  test vai rodar o mocha e garantir que todo o código dos testes será compilado para JavaScript antes de rodarem. Isso é o que torna possível escrever os testes em TypeScript. Algo semelhante acontece no script  test:coverage que serve para rodar o nyc e calcular a cobertura dos testes.

O ponto é que, para testes, aceitamos que haja funções mais longas e com mais repetição de lógica (devido à maior legibilidade), então vamos remover o linter que temos para o restante do código aqui.

  

![](https://lh4.googleusercontent.com/g5C9gP3vqxqmAwh9bfHiA3865INSTjiSofsOdZTAB3EO9VrubhXEzMi4-BLlxAUI_uiu9UO4ckeYZvktw7Gmhi_kfaMyl7K78kveWn3WY6aIrX5vmnqD838DLytujNEzNC7DMTGS34t3jNTqq_W5g5M)

  
  

# Teste de integração

  

## Setup do teste de integração

  

No teste de integração, utilizaremos chaiHTTP, sinon, chai e o objeto app para simular requisições do endpoint  POST /login.

  

![](https://lh3.googleusercontent.com/VWfn8eyNhr2s5TwR2rzSAxOW1pinfabVgM7wWEkDvMASeOMm8wN9y-UrXZRI6eO2sNZ_u-u4ElSyTP4_fNUU2tddAZKH4pJ0pM9uWs46haZytGsY1y6er5tvPeh9dnji7pReLpdFyetF3VYQQR_FoN0)

  
  
  

## Cenários de teste

  

Para escrever os testes, o primeiro passo é saber o que devemos testar.

  

Uma forma de descobrir isso é conseguir descrever, com palavras, um comportamento e os possíveis cenários que ele possui. Cada variação nos dados de entrada, e que gere um fluxo alternativo para a função, pode ser definido como um cenário de teste.

  
  

No caso da funcionalidade de login os cenários que vamos descrever são as seguintes ações por parte de um client fazendo uma requisição:

  

-   Cenário 1: ao não receber um e-mail, retorne um erro.
    
-   Cenário 2: ao não receber uma senha, retorne um erro.
    
-   Cenário 3: ao receber um e-mail inexistente, retorne um erro.
    
-   Cenário 4: ao receber um e-mail existente e uma senha errada, retorne um erro.
    
-   Cenário 5: ao receber um e-mail e uma senha válida, retorne um token de login.
    

  
  

Uma vez que somos capazes de descrever o comportamento de uma funcionalidade, mapeando cenários de testes, estes cenários podem ser replicados para escrever testes unitários para componentes das camadas.

  
  

Cada um dos cenários acima vai se transformar em um bloco de código it

  

Triple A:

  

-   Arranjar: organizar o testes. Deixar pronto tudo o que precisa ser mockado para que o teste seja bem executado. Por uma questão de desempenho, vamos sempre mockar o model e fazer com que as operações de banco de dados sejam somente simuladas. Isso deixará nossos testes muito mais rápidos, sem que percam assertividade.
    
-   Agir: executar a ação que é o foco do teste;
    
-   Asserção: validar se a função faz o que é esperado (em inglês, assertion, que também significa checagem, conferência).
    

  
  

## Cenário 1 - Ao não receber um e-mail, retorne um erro

  

Nesse cenário, a função do controller é chamada e deve retornar, ela mesma, um erro – visto que é um erro no formato da requisição recebida. Tem-se:

  
  
  
  
  

-   Arranjo: este cenário não passa pelo model, então não temos nada para mockar aqui. Precisaremos somente definir o body da requisição que chegará para o controller.
    
-   Ação: fazer uma requisição POST /login, enviando um objeto com um e-mail vazio.
    
-   Asserção: a resposta da requisição deve:
    

-   Ter o status HTTP  400.
    
-   Ter o body igual a { message: 'Dados inválidos' }.
    

  
  

![](https://lh5.googleusercontent.com/75dh1_4GC7QTJ4bOMyTmCQ0-_rxTONk6zCZpZQe-YW_kq0av1mS7szp0O40NIeEyONxvejtYYrbM81aRy95shj4OvbU8T1hLQCRu7YrGxcucOU1CvKlWFZpvw8bpdjxISZVuIumz-4NtHrIRP1DxVRA)

  
  
  
  
  
  
  
  
  
  

## Cenário 2 - Ao não receber uma senha, retorne um erro

  

-   Arranjo: neste cenário o model não é chamado, então nosso arranjo consiste somente da definição do corpo da requisição que será feita no teste.
    
-   Ação: fazer uma requisição POST /login enviando um objeto com uma senha vazia.
    
-   Asserção: a resposta da requisição deve:
    

-   Ter o status HTTP  400.
    
-   Ter o body igual a { message: 'Dados inválidos' }.
    

  
  

Precisamos também definir o objeto com uma senha vazia. Edite o arquivo de mocks assim:

  

![](https://lh6.googleusercontent.com/rknXlWh2EZrCLDgttnS1mQqyDVQX4s9P7eFVLO-pntngSeNzU-lxHSGXeLo0VBK-MF4hhHr88HI4_xcXYgxQR3MKbYY8AfJ-QaOjBZZ2R7YsfZ7lJ6sFax_Pcw8daNLglSdm_UCHz9HgxQBeyUtIR0w)

  
  
![](https://lh3.googleusercontent.com/6bDwsEBad3CuSz20w0LfVJURs4-Xg9jfS3opaiHgMuPpuawcE2whML1CmUBgSuK2FSbZNNKR4Yo1mQzJAJt8J1WvAx_FOps4QkJGo5ojoimIr8GVJvdp3ec7RHeYPXiQru3_111FbNzSJKAkrpWyVgk)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

## Cenário 3 - Ao receber um e-mail inexistente, retorne um erro

  

Neste cenário, precisaremos fazer uma consulta ao banco de dados para saber se existe uma pessoa usuária com este e-mail. Como alinhamos no começo, vamos simular essa interação para ganharmos em desempenho.

  

-   Arranjo: deve mockar a consulta do banco do model para simular um cenário em que um e-mail não é encontrado. Nesse caso, a função do model que chamaremos deve retornar um valor nulo, null.
    
-   Ação: fazer uma requisição POST /login enviando um objeto com um e-mail inexistente no banco.
    
-   Assertiva: a resposta deve:
    

-   Ter o status HTTP  401.
    
-   Ter o body igual a { message: 'E-mail ou senha inválidos' }.
    

  

![](https://lh3.googleusercontent.com/2l5eb8u3T23bSFOLTxbqcKOtW4bCI7xI-Ae-hgRBwPs4YYuvVF3NP_bzZIcwfFpi1IoiPKAtX5UI2i-6YLNH8IE9PchIKT9i7mmtk54BRapKJckGkWY48Jo4ukQ9JNEWcDT0NJwybOQjHJwE17483hA)

![](https://lh6.googleusercontent.com/b8qTlPi3fOheJaXo8mct12BQlw-ieK3rsYtVKoNHac8eqah6cM2iPQSzAKNnqntW_mPwUZRPFUwl5Jd2tcwHu1-JznmCGq-lET0MrnAF3HhSQdtaGr574wclSlyB_NReqBOqr875PX-YBl3bWGYWV_E)

##   

##   

## Cenário 4 - Ao receber um e-mail existente e uma senha errada, retorne um erro

  

-   Arranjo: devemos, além de definir o body da requisição que será feita, mockar a consulta do banco feita pelo model para retornar um user que exista e que tenha a senha diferente da que enviamos no body.
    
-   Ação: faz uma requisição POST /login enviando um objeto com um e-mail existente e uma senha diferente da que está salva no banco.
    
-   Assertiva: a resposta deve:
    

-   Ter o status HTTP  401.
    
-   Ter o body igual a { message: 'E-mail ou senha inválidos' }.
    

  
  
  
  
  

![](https://lh5.googleusercontent.com/liGX8XxDLnMxbAMUydGYDzh5bYIoFVs_EAUK_QIRkgYxHzkuG6jlW9s-TPuO0MUefCuDhGXt68PLFuDYZp9x3ap0WW5sHX25Fp9xoEqsdVQsvTcp0U7rnGX0NfhQPh2vth2ZErEOns2pTxQGUiiANP4)

  

O cenário de teste ficará assim:

![](https://lh6.googleusercontent.com/AMU7yRR3kdRRkpGiECP0_UPH0uGYz55UWC5BmzuH4soxcecC2HXp7qDSoNf_2P_Z9dbz2SEPHPHA3EXL8tpfQZy8bGwiwTIDDWMrn5iIajk7iSlMsBgq1slnIL8-rcjMTPapUMSJze1YhWVPR1xZ0x8)

  
  
  

## Cenário 5 - Ao receber um e-mail e uma senha válida, retorne um token de login

  

-   Arranjo: vamos gerar o body da requisição e o retorno da função findOne do model para simular o acesso ao banco. E tudo dará certo dessa vez.
    
-   Ação: fazer uma requisição POST /login enviando um objeto com um e-mail e uma senha que equivalham a uma pessoa usuária existente no banco.
    
-   Assertiva: é esperado que a resposta tenha o status HTTP  200 e que o objeto possua a chave token.
    

  

Adicione um objeto mock que possua os atributos email e password com valores válidos e que correspondam ao que está no banco.

![](https://lh6.googleusercontent.com/fUwXRtPjHOcEswuG14DThVAQ6SA-KYW0E24FwqxIBiW9znfO3932BrOMF97cZIY0Pt99pR9eUPd43Oa9pONMkhYjVxoy1bhh8DpIupKYK2J7s9ETBxqlKpdd8Nu7cDJNuyTQM_JvovLBR2Y-VgQCwMA)

  

O cenário de testes fica assim:

![](https://lh6.googleusercontent.com/K9WkRW6ClGnuirvD00Ys7SWBeWWivoFYX__7w4PUrgGZ7fiHzfqi80sRW5fpZ_3llIEMJw504MjSM_heb1x8YH36ErbOzRLYfB-cnzX28OYPYZQYQXdvEZlY2H37Ah40IGHsxvsy6HTHzTHrUA1ove4)

#   

  

# Aplicando BCrypt no login

  

Até o momento, a funcionalidade de login foi implementada de modo que a senha de cada pessoa seja salva no banco de dados exatamente como chega ao servidor. Isso torna a aplicação vulnerável, pois se o banco de dados for invadido, as senhas são expostas – e pessoas terão acesso a informações indevidas e que podem favorecer invasões em outras redes.

  

Para resolver esse problema, utilizaremos o módulo bcrypt para adicionar uma camada de segurança, fazendo com que as senhas sejam criptografadas antes de serem salvas.

  

-   Primeiro, instale o bcrypt:
    

  

![](https://lh4.googleusercontent.com/6nuI7rSi1zbfuwDQO1_bagiIZWsj1SlWngCjlaK6Ejyz6ZAaFbEZ54Bpy7gJ9M83UpOsvIkB0C-osZsWo46eddYmbMsqpWbpOVDLvt2pfPq7vXCCvefMT05dln3Skn3E1sA1u4NQjXnV7uEi1goc_sg)

-   Altere o seeder para que as senhas salvas no banco sejam geradas a partir da função bcrypt.hashSync(). O bcrypt funciona adicionando às senhas dados aleatórios para deixar sua criptografia mais poderosa.
    

  

A função que faz isso recebe dois parâmetros:

  

-   Uma string que será criptografada.
    
-   A quantidade de rodadas de adição de dados aleatórios a ocorrer para criptografar a senha.
    

  

### Seeder

![](https://lh6.googleusercontent.com/_CVeIYugNqEqoyEC-FUXOFnq7WXnhXI3IDMxdNxc5WfmRXi_bDrFQpLDklAtVIHJQ640QxIzB-dcmLzoWjiyt4TAp7roAoj6wid11RiawqEhqkThU7zolQZrrdhxiNpjDeKkYYjizYHZNGXSNvkqx9s)

  
  

Garanta que o Docker esteja rodando, bem como os containers da aplicação. Além disso, execute o comando para que o banco seja recriado com as senhas corretas:

![](https://lh6.googleusercontent.com/gYC4jOSccOeddA_RTxw1cJ08cFSpCmUzRUKTkOj1j83WOT2FfmVrHqXKMXJQU4SuV8_RKzHWBt81F7rDUvfF9Z8lxGj17MnYPSHaOLJqtFMalL_haMsriSs_zbmpHsxbeI3gMpa4XflTPAtk8TlG3ZI)

![](https://lh5.googleusercontent.com/el3VprnGVorvaTAcq8Z3RGTnx_pyPy4ztnV32pkjjikxWEpamqsRbVhE9jaToCqhNbClDac-_kTiZsCcIEpgzRVDViak4FVDt4YrpPX6tqT72HJ9XpOhMeHGDBGVESFq3JUivoYQhQo8tFiHNiv2mdI)

  

#### Teste com BCrypt

Vá ao arquivo de mocks e altere o objeto que representa um usuário existente no banco para que, assim, retorne a senha criptografada equivalente a string  ch4ng3m3.

![](https://lh4.googleusercontent.com/hgc5Gq-xDl4dAiVbjbrOrl2HCRy4thBMV1AXB8Q2u9t45wJ6OMTcsHLfoBgf153ICRGxAPTcTueiPXwi1y3wZBYOKK_v183pPOnAhtSOmveKH8iWhTl0lPI_jt7d2TocUfdy80jFaMkB8QYgNpTO9Jg)

  

#### Mudanças Service

![](https://lh6.googleusercontent.com/iMjtAHDeSHHqCwGVWuyQKYupUkzZpHRgS8Q7QgIXyfl1YLpnbpzksKH_3xFHVdAmRiN-HPLIZ1cDkQb2ifV7V5CQqzgIZu1-C1noXWw3bPEup3KaxOYxrkD51HHgxZXe5aiHLoggPGdiaYeYEd1JaWE)

  

-   Primeiramente, adicione a importação do bcrypt:
    

![](https://lh3.googleusercontent.com/HLzeg6RKN8qp7Z8OzKygDfYzxNuQ_vduDEfEd6Uf70xnlgypArLL3OhPGLsU8-kQMlCOu9w4jNDoIavNc0I-lsr9qRZUicP1Oa8vbaTuFTWgAr6w7ApqEoNWekPtTmfuCnROtwUDiqrWgJ1Bcvb_Aso)

-   Para que fique assim:
    

  

![](https://lh4.googleusercontent.com/EUrkWDt7oFT6GYJAUZJ6hHNwSwTqkTd16K8N1XReAq2pM13eFC9emEkxWsSETHPFBQRXdhmdPk5DT6wXXYab05z1aA5I3M0miy4rZfLRHwi8mN7abZerjPPU6XLpMV5INiZ3GRmXoRqLyAO2Ia1RZ2k)

![](https://lh5.googleusercontent.com/iQVljUOgwZQgEm-VQCsksDdKXe_1jqZ3jAtRxsN7VDbUOIzFTeqrC3uB3WQ6SzOlqX6OmjtwAUqZBfwYTjgjFsA_8MznXR4deblFZRNO4gIeX3Gdbp8nlbmok2DZ9Xd1wj_ThTgOMxFWa13e9l7Yezw)

  

A função bcrypt.compareSync() faz a seguinte comparação: se uma string, ao ser criptografada, tem o valor igual ao de uma string já criptografada. No nosso caso, a senha enviada na requisição com a senha salva no banco de dados. Internamente, ele garante que a lógica da encriptação e dessa comparação sejam as mesmas.

  

  

  

Para isso, essa função recebe dois parâmetros, nesta ordem:

-   Uma string não criptografada, como ch4ng3m3.
    
-   Uma string já criptografada, como $2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW.
    

  
  
  
  

# Teste unitário na camada service

  

É aqui que entram em cena os testes unitários. Eles focam o escopo em partes pequenas de um código, como funções de um componente específico.

  

Pensando nisso, vamos escrever um teste focado na função verifyLogin do service de login.

  

![](https://lh4.googleusercontent.com/AhCyXkve8PS9S68Ij0Ch1OH0GgoArVNMxWHoOFVY3BXpfrPXfqt0kbiwO4BDkQ-F22Src7Y_8sjI0HmquhbGnSglJ1VvIkpnT6PY6QNyRUK9zhp-IuiZx6H5ppN0N-KaDqj_d-xzQk-86bs4MP8Mowo)

  
  

## Setup

  

As importações desse arquivo vão ser similares ao teste de integração. As diferenças são:

  

-   Não é necessário importar ou configurar o chaiHTTP, visto que não simularemos requisições.
    
-   O objeto loginService deve ser importado, pois ele é o alvo deste teste.
    

  
  

Com base nisso, crie o arquivo abaixo com a seguinte estrutura inicial:

  

![](https://lh4.googleusercontent.com/VjajaMbtKtw2F7d5GplCUcvgivi972_1iQh6PLtcAZ4CFOLztrxVrh_z6jAfDvHocdDIeC0U0lrG42NaupCmjARb3Q8WeiMQsQ1o3es15RgwPGObyVAoVikDvdc_vwaUw2b_n1rn2tBwm0oheLOIh5Q)

  
  

## Cenário 1 – Ao não receber um e-mail, retorne um erro

  

-   Arranjo: não existe consulta ao banco de dados nesse cenário, portanto o arranjo consiste no preparo dos dados de entrada da função.
    
-   Ação: chamar a função loginService.verifyLogin enviando um objeto com o valor do atributo email sendo uma string vazia (loginMock.noEmailLoginBody).
    
-   Asserção: a resposta deve ser um objeto:
    

-   Com atributo status e valor INVALID_DATA.
    
-   Com o atributo data sendo o objeto { message: 'Dados inválidos' }.
    
-   Não deve conter o atributo token.
    

  
  

![](https://lh4.googleusercontent.com/fVTj0ZbwZL8qmZtKhIRtNM7GT7QxUAJJzqXfwigfhIYk2b04sr9Uie0t3_S-apl7LPS_0fKflCTpv8T8DNPQp5XhLSCtQ1FNpZSjlbQzdgQ59B0qMVFZ0JHhvgAuOwx7bQEQuh00Nk9Efv31Npuc_Ow)

  
  
  
  
  

## Cenário 2 – Ao receber um e-mail e uma senha válida, retorne um token de login

  

-   Arranjo: nesse cenário, devemos mockar a chamada da função UserModel.findOne para simular um acesso ao banco com retorno de um objeto que simula uma pessoa usuária que existe no banco de dados (existingUser). Além disso, vamos preparar os parâmetros da função a ser testada.
    
-   Ação: chamar a função loginService.verifyLogin() enviando um objeto com o valor dos atributo email sendo um exemplo de e-mail existente no banco de dados e com uma senha correspondente a que foi criptografada no banco de dados (validLoginBody).
    
-   Assertiva: a resposta deve ser um objeto:
    

-   Com o atributo status com o valor SUCCESSFUL.
    
-   Que contenha o atributo token.
    

  
  
  
  

![](https://lh6.googleusercontent.com/5ARNzHjQwCGpHO8SZg82ng20AVpNYwwvrnrWNKRocWycURHyAJC51J-O8u1JXgCdNvTMX3OGepFwYbAN2SxddFML0HucCY3L34EHgPY4NjeKvdmP6YRHX01VlyOIV1cCkedlu4hPuc6svkmNjRwjX7M)

  
  
  
  
  

# Teste unitário na camada controller

  
  

Controller

![](https://lh6.googleusercontent.com/HswoGBbTFSy1WNrvHG_ExktUlQ__ihpY427p-DMlSM0EHuWSnoTqquMadc0Tf41vco7zBBIT7Yjpos5ZJL32aH6uuqZidJj8VIg3vZPnoLUa5NmZtaoWX-Jj04vAfCHdLchNMSyyVt5XheanCaabe_E)

  
  
  

## Setup

  

Para escrever este teste unitário, inicie pela criação da estrutura básica do arquivo de testes.

  
  
  

![](https://lh6.googleusercontent.com/5pdY_7u-pOR_AaCEGMpDWIheTq1z5k69m0DLdyFTXzeFSsMVnDgPZKlUHNp4HzHf40z1ROtftRToiZ4ZcXyzwr4925yQrUdb1jCxYjeM4zB-tFEJqKRsdA8DdwcjBSWOLSoxDbUi8b0xyMl6l-xcWzE)

  

Os testes da camada controller possuem uma especificidade de lidar com os objetos req e res, que possuem tipos específicos. No caso do express, são os tipos Request e Response.

  
  

### Variáveis Globais

  

Já que os objetos req e res precisam ser acessíveis em todos os cenários de testes (its), eles serão variáveis globais.

  

Cada variável é definida como um objeto vazio, mas usando type assertion para definir que são objetos do tipo Request e Response

  
  

Além disso, devemos aproveitar e definir as variáveis messageEmailOrPasswordEmpty e messageEmailOrPasswordInvalid com mensagens de erros que se repitam entre os cinco cenários de teste pra evitar duplicação de código desnecessária.

  
  
  
  

![](https://lh5.googleusercontent.com/SAs58KGdBc4Xc8BZkDGzPRCEtiQ67Sp6msdSbjSRigRZrcPhFxHit6eECaPzTkd_qx9FInKawVWark46wBIEpXqBq_TgBhNLcUx7ricY4sRhulAd8ymb4EjIJ4pLvQAMGXfyWfvI0njftoaIpV5qQOc)

  
  
  

## Cenário 1 – Ao não receber um e-mail, retorne um erro

  
  
  

-   Arranjo:
    

-   req.body é um objeto com o valor do atributo email sendo uma string vazia (loginMock.noEmailLoginBody).
    
-   loginService.verifyLogin devolve um objeto do tipo ServiceResponse<Token> com:
    

-   status igual a INVALID_DATA.
    
-   data igual a { message: 'Dados inválidos' }.
    

-   Ação: chamar loginController.verifyLogin enviando os objetos req e res.
    
-   Asserção:
    

-   res.status é chamado com o valor 400
    
-   res.json é chamado com o objeto { message: 'Dados inválidos' }.
    

-   Coloque o trecho abaixo dentro do bloco describe('#login', function () { }
    

  
  
  
  

![](https://lh4.googleusercontent.com/aPZab-D1sw1wlKc2zXOQI-mfWYdXrSReGEc9mkDatko3xkAYgVbnItApPpG_5cboAKb127Jmc4LXNzqPBmouUVB7ljc5uFRade3JBHKNEax3Wg2Zp4Mu7bzLlm4bQ6t9gF9i9am88Q8TXwPpmY4NCXE)

  
  
  

## Cenário 5 – Ao receber um e-mail e uma senha válida, retorne um token de login

  
  
  
  

-   Arranjo:
    

-   req.body é um objeto com o valor do atributo email sendo um e-mail que existe no banco e o valor do atributo password seja correspondente a senha salva no banco (loginMock.validLoginBody).
    
-   loginService.verifyLogin devolve um objeto do tipo ServiceResponse<Token> com:
    

-   status igual a SUCCESSFUL.
    
-   data é um objeto com o atributo token com uma token de login qualquer.
    

-   Ação: chamar loginController.verifyLogin enviando os objetos req e res.
    
-   Assertiva:
    

-   res.status é chamada com o valor 200.
    
-   res.json é chamada com objeto com o atributo token com algum valor aleatório.
    

  

![](https://lh6.googleusercontent.com/qOVojT01Co-7weHVKJ0K6QhgVD2NnHsn3xiOr3IAXo2KIrRoDa2C6UBEI5d8QtMlHJoYV8akQzW5lPG3r-Ro5RbQM8s8jsFYJNjRZ-zLjpPXmKZVro_HkyrH-F6zal7yjJxlE8HQ-9Ykldrta8OTvKg)
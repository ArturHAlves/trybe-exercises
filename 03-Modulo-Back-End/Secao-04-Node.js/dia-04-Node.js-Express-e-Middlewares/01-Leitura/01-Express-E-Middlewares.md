# Node js: Express com Middlewares

  
  

# Middlewares

  

O express é um framework com um objetivo central de receber requisições e enviar respostas

  
  

Cada função terá uma responsabilidade única, se essa função capturar algum problema, vai ter uma resposta de erro e será retornado para o usuário

  
  

Exemplos:

-   Formato de e-mail não apropriado;
    
-   CPF com formato inválido;
    
-   Pessoa usuária não tem permissão de acesso.
    
-     
    

  
  
  

Caso a validação de uma função esteja tudo certo, irá para outra função de validação.. Até completar todas e dar uma resposta final para o usuário.

  

Esse é o estilo de composição de funções chamado middlewares.

  

-   No Express toda função passada para uma rota é um middleware.
    

  
  

Os middlewares recebem três parâmetros: req, res e next

  
  
  

## Refatorando um middleware

  
  

Refatorando o código do soccer teams

  

![](https://lh5.googleusercontent.com/TPlhxbK9JQ06cUWDjmZTJf67YsDL-A_2qLdRL5CBxxxaBB-y-CGMIEiXN-_pcQ2VO71cow-MRPVP372s84WP8I9rDj3_3067fmS_bDuZ2eo8HkNtJ8bBUoZAMgqbung3f4DUddsUYJylizF-a6WKKsw)

  
  

[Antes]

  
  
  

![](https://lh3.googleusercontent.com/NbFSXnwLkzQHi1GrCCYFAKaUMTIs950b-oMFczuHW4IOpGsMc-G4eIi0dNb7SsubWMCAhE42cRIyvD24xh67qIVJdx1c8bR31cSR3rBqTRuCZ9dSM3f1Svngyjob_ohkjHUN7VGWe65HiTwA5wtAc1w)

  

![](https://lh3.googleusercontent.com/YBcJF7wbJnTuRu8P388D1LqffA9ssj92-VUUbNVLaRabvJJaWIfYU-IYVQiFhNN9jwWCFuDkirdVR8B6E3L-_Esrs1Nl-thjNaj5cl3k3K31sX7fWwal0Xwotrk2-qVOCdPYSNc6-uHe1oIS28JeKUs)

  
  

DETALHE: Repare que precisou garantir as informações [nome e sigla] em duas requisições post e put

Em vez de repetir o código de validação é necessário criar um middleware

  
  

-   Um middleware deve fazer apenas o seu trabalho (por exemplo, conferir o cabeçalho), e então escolher entre responder (res) ou passar para o próximo middleware (next).
    

  

Assim, uma rota pode ser tratada por uma sequência de middlewares.

  
  
  
  
  
  

CRIANDO O MIDDLEWARE DE VALIDAÇÃO

  
  

![](https://lh5.googleusercontent.com/ePQ_Tbb4zhkZ5D8EcUMoN0xbv4F8aRboEujqWGEG8596cfJLQbKUpcUrwXBhcx5xdsFzzfNdE6qKKbkTkZRwTvjs0LiVcDl9n49oDl00oHuXK_d_fMfOqhyuA5qwH8CQEFIUB0DRmHOYQ9sTY1_LGpE)

  
  
  

REPARE QUE AGORA O CÓDIGO VAI DIMINUIR MUITO E DISTRIBUINDO RESPONSABILIDADE

  
  

![](https://lh3.googleusercontent.com/9o0Mc-dCxxefTtt1kdIfBfLls-HvmEAR_6Vk6GV6PeASIcfnmrjGeYuybmoTEPRe_OGn8BckJmO1xbRG6zR8SJ6p0MWWg6ZUF0F0ZN4YMX3pZHI7WQkOKgaRKNJFnMnFoFyQCHj2xofeChbNWIgbh8c)

  
  
  

## E o que o middleware validateTeam faz?

  

1️⃣ Faz uma validação básica que apenas confere se todas as propriedades esperadas estão presentes no req.body.

  

2️⃣ Se a validação aprovar, esse middleware endereça a requisição para o próximo middleware, que efetivamente cria o time.

  

3️⃣ Se a validação falhar, esse middleware retorna uma resposta com status 400 e nunca chama o próximo middleware. 400 é o código HTTP para Bad Request, indicando que existe algo errado na requisição.

  
  
  
  

![](https://lh6.googleusercontent.com/2plIe_k92718kIlKcY0TipUf8mfVvKt7Uu--G0O1yr_jE9L2wlgoFx1O9i2uP-LTalCbpAqIbUPe_2Y_ccH88xYK6Qy8-2ja2NmW5N8UpHsXwZnWzz2Da6VQnGSgZwg8B5OgOhp75ApHzWbQ8TggX6o)

  
  
  
  

# Middlewares Assíncronos

  
  

Image um middleware chamado apiCredentials.

  

-   A função confere se a requisição enviou um token para autorizar o uso da sua API.
    

  
  

A configuração app.use(apiCredentials) seria adicionada logo no começo do nosso arquivo

  

![](https://lh3.googleusercontent.com/lCCKZ5W0FIadebGuOFIIsAHh5KBL3G3EO4DrT4P859jugv0brAYzZ7z8hskifWRzjg9z5uqpwv4NItvA_fhMPKLjAdxl7jvyCSJOEzaD1DqIxNGXXlkNXBgYg4zkd2WQbg3eRoePOvWZt_p8WQqo9Wo)

  

[DETALHE] O app.use só afeta as rotas que estão abaixo. Ou seja, todas as rotas da API de times vão passar pelo middleware de autenticação..

  
  

Se você deseja deixar uma rota (não recebendo essa autenticação) e manter as outras rotas com autenticação.. É NECESSÁRIO MUDAR A ORDEM

  
  

![](https://lh5.googleusercontent.com/p4GIa3kSFt-YRndRLQFMTqqBGW8N8pO3EnSOUQEIY-OXLpOmEodBglpdNviHK9Zyut-DOr9AjYCV3_uQ62S54_Hb2wvo0YK09kmRPNeo7qRaSpsIyjfIzwxmq8JjF2PG7iniYnRWo0hKctP65F4F7q8)]

  
  
  

## Usando middlewares assíncronos

  
  

Ok, você já aprendeu como configurar um middleware global, ou seja, que intercepta todas ou quase todas as rotas.

  
  

Suponha que você tem um arquivo authdata.json com um objeto mapeando tokens com as informações dos apps que usam nossa API. Quando uma requisição chega, ela precisa ter um cabeçalho X-API-TOKEN com um token presente nesse arquivo. Se não tiver o cabeçalho ou se não tiver um token válido, vamos responder com o código http 401 Unauthorized.

  
  

O arquivo authdata.json ficaria fora do diretório src/ e seria assim:

![](https://lh5.googleusercontent.com/QIe8PhIaubCpqJ5TNEP1RBxpG9WQerndoE0J9JEmLCYOAtrQSSamw3q1KduCuF6-_tNZNxaxbtTPi61zdyFDvDNR5GQDfx6LsAB_sZLFqXcgn6F2RKTUrw1aRwz_v-xiRkwxH53t6kqf7IvIA033h1M)

  
  

Vamos escrever esse middleware em um arquivo separado em src/middlewares/apiCredentials.js:

  
  

![](https://lh5.googleusercontent.com/XLS5-p-2qEW9rQzT-z7-Cmxm4ukgHNpzlgFLO7gJE7a9tPk76xjIciHdGMJ3rOvJjPBBY74_Sm5E4En2Ju9ZMUnAXcz2S2SiaHJKiijKkNmTgMo-8BIjQYaeIRIyRGXtkWZiINIfOIKRTgXT3dIiIiw)

  
  

Repare que no uso do método req.header() para acessar um cabeçalho, estamos usando req.header('X-API-TOKEN') porque o cabeçalho (header) usado é o X-API-TOKEN. O protocolo HTTP tem cabeçalhos já estabelecidos, mas é costume prefixar cabeçalhos customizados com X-, como fizemos com X-API-TOKEN.

  
  
  
  
  
  

Agora vamos voltar e usar o middleware no nosso app:

  
  

![](https://lh3.googleusercontent.com/5hS-LYvGjef-z4GeKLISjNw_1i5MpCjXQYw_O9qYFcp2ARMshuo_jwxek8kUTKsHh5-fuz_lgyNd2S5VG9iV12v92Jd-qqH4NewRMFFQ-ST2FQHKPbRcemqxpr785EoHwZkS7AzBx16a2LnLfMRWwN4)

  
  
  

CASO DE SUCESSO -

Repare que no cabeçalho (Headers) coloquei X-API-TOKEN e o código do token e foi possível acessar os teams (Ou seja, foi autorizado)

![](https://lh4.googleusercontent.com/3YIgQo1s0C50Z5_tvVAU1MaBm_asIoPlOV1WsdmIaIovxkApz0pEyluBgEn0xIRdCTug6NexVwoR8kh9QNf0wEsFegVYnw5CJGpBlrIvKsFB192jHhLHwD5p7w32PCRKVmeYxMlZXm96HK8Gd3p8SGE)

  
  

CASO DE NÃO AUTORIZADO

  

![](https://lh6.googleusercontent.com/P5rLK0pgQGArcwok1OFu9aC-1UG1Loq-sBtNxLynOCv3OQ_TDolGoLnIe7mcxKnIcei7kfBLIMlo9HiCv5f-LNcLFAzYD4XZ0Pb1qbboDUa_jTag7V1c_rbyhMGXLfpfftGjqftSP3hmt4ML5E1Nsgo)

  

Repare que não possui um cabeçalho (headers) com o valor do código token, sendo assim não está autorizado

  
  

## Lidando com erros assíncronos

  

Por padrão, o Express vai encaminhar todos os erros lançados para serem tratados pelos middlewares de erros. No entanto, erros lançados em middlewares assíncronos não são tratados do mesmo jeito.

  

Por exemplo, se por acaso o arquivo authdata.json não estivesse disponível no momento da requisição, ou tivesse um JSON quebrado, você obteria um erro, mas não teria uma resposta HTTP.

  
  

Exemplo: Caso não tenha nenhum erro informando:

  

![](https://lh6.googleusercontent.com/xDzbfTOtn2Uby30uwnSW-m8LiF3a5sVCCyG-AvWqLqxFySFvEff3ZqPkNQDAL_yEAaQpzvizmbtrveRagbYB3UOWZ6CtxbNa47O7xxLQ8zs2PmL2OXcbCDIYW0QQl5s8LFvHLLaLsZPER_4dh9UtMwc)

  

O status vai vir como error e fechar o servidor. Sem constar qual seria o erro.

  
  

Existem algumas soluções para este problema, mas a mais simples está em um pacote chamado express-async-errors.

  

Basta instalar com npm install express-async-errors@3.1.1 --save-dev --save-exact, importar ele no arquivo app.js antes de criar o objeto app e esse pacote vai alterar o comportamento padrão do express. Ficaria assim:

  

![](https://lh5.googleusercontent.com/juX-8AN7O8pvJZs_iGV77EdFKfFknVFbVRV-MshQbPJP2tnNJvWppz4sc_ng8pUI1uopnlYBSAX2hb24lgmtU0N31-Le_9wAkUPZ_nuN-o7j_scq82TH8MKzh6Vy0fCTWzLFKxT_GPoWNYI86DK8ToM)

  

![](https://lh6.googleusercontent.com/GVGkU-fUb5dX_RP0jCdSEY4YWLrUspCGDyyu1sM5ZgBxi-6NCZLNh1YFqHAxZDs8X0nW8mi0PakCWtAMuS4ABWhOtD5I00GVeS9t2muwtcCF4Oo7Vwq85NoVphBE8-Uixy6OU6GE9F5lxflVBMCYTus)

  
  

A resposta do HTTP com error

  

![](https://lh4.googleusercontent.com/pc2-joSGxdzmZH9TnKEDIFY9vPxFA3IIhJ8kx1wve7nl91sk8HLUc_wTnY0RETsfMYAFRvLS5aeIddMzYNpmMrWzPVHM-FBq_y4sU4OSZC2yaNlzNV9vP_Rcb13p9fAbi6DpZF-mSDl2itKIx7SVtjY)

  

Error 500, então podemos deduzir que dentro da aplicaçáo

  
  
  
  
  

# Práticas comuns de middlewares

  

## Enviando mensagens de erros personalizadas na resposta

  
  

A aplicação realiza a validação dos inputs recebidos, e caso eles apresentem algum erro, a API responde com um código de erro.

  

Entretanto, estes códigos [HTTP Status](https://www.httpstatus.com.br/) definem o tipo de erro, mas não trazem nenhuma informação mais precisa do qual seria o erro. Para resolver isso, pode se enviar na responta um json com um objeto por exemplo { message: 'Mensagem de erro personalizada'}. Vamos utilizar como exemplo o middleware validateTeam.

  
  

ANTES

  

![](https://lh6.googleusercontent.com/Ufs8M_MP9iIvHonzKelKfLy3Q4syuOk19-2eK8A6xV32-MXZcnTtBWCzdDN5dwzeAOS5D22sl78KqI7kwJHPj4H82ST1YLr1deGe8nhyduiF5oV_0awFxTNDWaMUxgjyoMBiXxl9BHSZ6WmRivSUs4Y)

  

Vamos modificar a função para que cada campo possua uma mensagem específica caso os dados que chegam na requisição não sejam válidos. Ficando assim:

  
  

![](https://lh3.googleusercontent.com/LUPJVQxIjI0lBxeN-KqL4ZNYVPB1epX4_PzWlAVvbNFL85l8TnuHKXBOAq4GNZHDznnGkcT_93Gi7HHeZf4vnXXTdZ6L_ii-Jers7WOP15Jb8ayZ0NIytXd32wf0AgnS5shAOjQN_6R0047GjCn2ies)

  
  
  

ERRO NO THUNDER CLIENT

![](https://lh3.googleusercontent.com/0mjUgGaUSGu0OGDv7Ie8mA082dm-5Siz4wbrhF9-N5rlgEmUAOGD1RGFtNVN5bGSMpoYg046MedSJPSTN0d7vh_8zHbVxksyojJTMaMs3Aol4DWPGhGb7ZqrNG4-XDw6kqIBKHhzutiQN3SCMLD7xSY)

  
  

Desta forma, caso seja enviado na requisição um objeto que não possua propriedade “nome”, a aplicação retornar o status 400 e o objeto { message: 'O campo "nome" é obrigatório'}. Caso seja enviado um objeto que não possua propriedade “sigla”, o middleware retorna o status 400 e o objeto { message: 'O campo "sigla" é obrigatório'}.

  

-   Mas caso seja enviado um objeto com as propriedades “nome” e “sigla”, então será chamado o próximo middleware através do next().
    

  
  
  
  

## Passando valores entre middlewares com objeto req

  

Middlewares também podem modificar os objetos req e res. Essas modificações serão recebidas pelos próximos middlewares caso next seja chamado. Geralmente isso é utilizado para propagar informações de um middleware para o outro. Isso dá ainda mais flexibilidade para sua composição de middlewares.

  
  

Vamos rever o nosso arquivo authdata.json. Ele tem os dados organizados assim:

  

![](https://lh3.googleusercontent.com/Vstdan7f_Wk-C2dWiizkCohEVQBughCjK-CWwfseOZTlR44UdXEWH0_O1bStS6SJpbdNm-mp6C7bUryv-xE5OarIE7NAkvXgClq7kvChd83crMAZu-hcHZCv0gvXi3IFZ3UjOzeS3b9e35gVhmIZgMM)

Como você pode ver, cada app (representado por um appId) tem autoridade sobre alguns times. Quando a API recebe uma requisição para criar um time, ela vai conferir pelo token se aquele app pode criar aquele time.

Vamos carregar essa informação em nosso middleware apiCredentials e deixá-la disponível para que a rota POST /teams confira se o time pode ser criado por esse app.

  
  
  

Primeiro, adicionamos uma linha no nosso middleware para adicionar essa informação ao nosso objeto req:

  

![](https://lh3.googleusercontent.com/xdzbp_iLHuK2OcJdjoWWXgcN6FAAkXZyj_MaYwtoVAlU0r3LTNCtIpdzL6wgrFR7izzB8fdA2IQmUIW71mUGbUNjxFnznpet8j97CnCGMay99f8Ss6DuUxeMyFno1nh-KOU9ebP553hYacEV3BCNnbM)

  

Repare que estamos usando req.teams para guardar essa informação. Poderíamos criar qualquer propriedade, mas devemos ter cuidado para não sobrescrever as propriedades que req já tem. Na dúvida, você pode conferir os campos do req usando o debugger. Aqui vamos usar teams mesmo, que não tem conflito nenhum.

  
  
  

Agora, no middleware da rota POST /teams podemos usar essa informação para conferir se aquele cliente da nossa API tem a autoridade para criar o time que ele está querendo criar:

  
  
  
  
  
  

![](https://lh3.googleusercontent.com/8r6xY0kwZ70vAInh4xBSLxoNFj6_P5YIQy318T1KZO3zY6YYj8fi1XwGiiH4Q-r-aqWeyOGxOzik9YF7kNyEh8ABqHfon3-u_isnAiN_bQ8t4669qNHs-k4vHvVeQEasUJTogK3BBRfFiIbNADRabfw)

  
  
  

## Respondendo duas vezes acidentalmente

  

Problema que aconteceu comigo no projeto.

Pq acontece um erro quando fazemos a req de dois retornos

  

[DICA] Sempre colocar retorno, pois assim ele encerra a função.

  
  

ERROR EXTREMAMENTE COMUM NO BACK

  

![](https://lh4.googleusercontent.com/mCEKilN2XbHHveDljKGzd6LJUik_uUpv6XPomZV3CVVe2cRGHgV96mxz2XInrJ3JvRVlJsa-dr9XR6_7F-kSQewGcFSvs-NGTVMFCMbeLev5jcF3sFFg1CIslWQkPl142iWukFVnKfizde1Cx3YlaTI)

  

O que essa mensagem está tentando dizer é que você não pode enviar mais de uma resposta para uma requisição.

  
  
  
  
  

# Usando middlewares de terceiros

  
  
  
  

## Interpretando conteúdo JSON com express.json

  

Um middleware bastante utilizado é o express.json, ele é um middleware que lê o conteúdo da requisição HTTP, interpreta os conteúdos em JSON e cria no objeto req uma propriedade body com o valor encontrado no conteúdo.

  
  

A função express.json() utilizada na linha app.use(express.json()) cria um middleware que processa corpos de requisições em JSON.

  
  

VERIFICANDO REQUISIÇÃO COM EXPRESS.JSON E OUTRA SEM

  
  
  

USANDO O EXPRESS.JSON

  

![](https://lh5.googleusercontent.com/8p6TKBxixA9B4Qoa6r72gDZBMTrjsOWNU0c1mmGRp9PWeKYn-PT6l3IKdnxPsip3J7bdAke2hGxCqaXmtVT6S85hHN3f-_QQegkCDyTXAjOXWmuhTBn4j31UsOeDyW8ea-hYHdFPVZB0xPKUjX26RYQ)

  
  

NÃO USANDO EXPRESS.JSON

  

![](https://lh3.googleusercontent.com/8g580I_gPq2W6ecsrZgy5-HAEqjxrCfnuMT1Gp5yLbgKr7P4Qa1FhUGMDj9gAuBKGgpsbb_RcZGE_KkUwftJrVKN2dqcB9CB9dAnSJzswOyRgtgW3OG_b7ge09GDGfQAciMopRoc00omuDEn7bt44E0)

  

Fica como undefined

  
  
  
  

## Gerando logs da aplicação com morgan

  

Vai criar um registro de logs de ocorrências de um evento..

  

-   Fundamental para resolver bugs
    

  
  

Ele é um pacote é necessário instalar

  

-   npm install morgan@1.10.0 --save-exact
    

  
  

Basta fazer a configuração que ele vai emitir mensagem para cada requisição recebida.

  

![](https://lh5.googleusercontent.com/AtGcnVDA_rNikwY0ycY07_Wwz0Xi2c6pjWRWWJSDSRhJZTcQJr6uasx9qViQ0rdR1INc3ZCzNk_manchjqetuATJTSHT2n7BeMBBHYyb13kMch2554CBZ_MlChONPGraMb93SDBUBuZzzNeWOw0m6Zs)

  
  

![](https://lh3.googleusercontent.com/WbKOxjvR4DxLQVxm9hHfwAlrf0taXi3Tx9gEtwYpOJVeXoVyTdgrLKlCmTU42wb2LKsl5ASVfZ7f2ZA_PMHm_vzQdLQdgIIu_HAh0rH7fXljnevWMdpzY3m9SNQINlin2F1lG2SVMef7iLMP8Da5VyM)

  

## Middlewares de segurança

  
  

O Helmet pode ajudar a proteger seu aplicativo de algumas vulnerabilidade da Web conhecidas, definindo os cabeçalhos HTTP de forma adequada.

  

Exemplos de proteção são:

Ataques de script entre sites, impor conexões seguras (HTPPS) ao servidor, entre outras.

  
  

Para mais detalhes [leia a documentação](https://github.com/helmetjs/helmet).

  
  

O uso básico desse pacote de middlewares consiste em instalá-lo usando npm install helmet@6.0.1 --save-exact e em seguida adicionar as seguintes linhas no seu código:

  

![](https://lh6.googleusercontent.com/A4Co81bj5xIIuoLezoUNvX9EuyJRzZPtXh2XUbPp6cXzpYk95FC1rnquKeFmb6wj-wLZwj2U-3_ZvkUaO7dOIgZi2okrVJEMlvQdBa-gB4Iyon24VjwZ3fgemT6NA1iPfhWAWIqfSMSyG-PmKxUXZBI)

  
  
  

## Limite de taxa de requisições

  
  

Uma aplicação recebe diversas solicitações e de diferentes usuários e pode-se realizar um monitoramento do número de solicitações realizadas em um determinado período de tempo e/ou a quantidade de tempo de solicitações realizada por um mesmo consumidor da aplicação. Realizar uma limitação destas solicitações, denominado rate limit, tem objetivos como:

  

-   limitar o consumo de uma API para reduzir o uso de recursos do servidor necessários para que o código seja executado;
    
-   gerar serviços em que a quantidade de serviços que podem ser consumidos dependam do plano do usuário;
    
-   proteger a API contra um ataque de negação de serviço (DoS ou DDoS) que é uma tentativa maliciosa de sobrecarregar uma propriedade web com tráfego a fim de interromper seu funcionamento normal.
    

O [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) é um middleware para limitar solicitações repetidas a APIs e/ou endpoints públicos e pode ser instalado através do comando

  

npm install express-rate-limit@6.7.0 --save-exact.

  

Abaixo temos um exemplo de sua aplicação:

  

![](https://lh3.googleusercontent.com/jiOV_HVmtwsJiHp-tAzCboxcInM16C8laYjKkw79WyHciKS0djI-aKKLujOv9cl65UQuzqJqAL7pny5q-R7hzG6w_NuITW623-6U5RWtMW809a9SyCdLA5sjcIsWkfIsJmK93J7QPkB52DzjxGWlPS0)

  
  
  
  

# Middlewares de erro

  

Estamos acostumados com os middlewares comum, req, res, e agora o next()

  

Existe um outro tipo de middlewares: O de error

  
  

IMPORTANTE SABER:  
  

-   Middlewares de erro sempre deve vir depois de rotas e outros middlewares
    

  

-   MIddlewares de erro só recebe requisições se algum middleware lançar um erro ou chamar a função next() com algum parâmetro,
    

  

-   MIddlewares de erro sempre deve receber quatro parâmetros
    

(err, req, res, next)

  
  
  
  

CRIANDO UMA APLICAÇÃO COM MIDDLEWARE DE ERROR

  

App.js

![](https://lh6.googleusercontent.com/7n0AcDsOO-CvyvWdDGNkVax_luayWrU2oJC69TbR2PUJCgzaG-2Umm8tSQlXx8BrVMmIpBipvVPvwNiR_3YfDkcD6ssD73VPtbM-uJ8-Rv203-q8n4_yyK69GwkIxVEBhYJfZHTmpJ9Rg93MsiimT5Q)

  
  

2- Em um arquivo teams.json, teremos uma lista de objetos, contendo as seguintes informações:

  

![](https://lh4.googleusercontent.com/X7ZbiX0R5iOPVSD6PmYx0ili1zLz8vZ2DKvjVavl6J_GW_hOQ0pXIjTnBDpUvomCPObeastpO2-EG-2Bp9ODhYrE1E8iMF20G5RQis65BRq4DcgiVRllZGN9lSlr3cpUHgp6Nj9Z2n2FMddD-_jV_MA)

Para isso, comece definindo uma rota /teams, utilizando o método GET.

  

Nessa rota, utilizaremos o módulo fs para acessar as informações do nosso arquivo teams.json, convertendo para JSON e mandando como resposta para o usuário.

  

É importante ressaltar que essa lógica deve estar dentro do escopo de um try catch, pois caso aconteça algum erro, o catch irá passá-lo como parâmetro para nosso next.

  

![](https://lh6.googleusercontent.com/C176cQS1ue58IO9u-0KhS9fCk-LqhgxDRxmxk9Lg4sppRw-yUcbPm3TVihb-ZxBvasjxdVmClSQz1VPqD4P_u1WYPaEj8LPQEJ7Db7xrBWvYZISDURKPLG2FinIKTlEQfjx0dVPlc5TjdqqitAn_zfw)

  
  

Por fim, precisamos definir o middleware de erro, que será chamado sempre que tiver um next(error) em nosso código.

  

![](https://lh4.googleusercontent.com/q1ul6IA2yjZK0ev5nz2VfLs26SD-mrShyabcFpWFH1eQj5ZTDoQc0qS-IAlKW1bN3vWb-fHZe_jcmrkWVdcscw8l2UyCxLzmU4ijHMamle8fInHePDiKfNcxvbeaYqHWSY_uLtM8sE1gHhfMJU1HeJA)

  
  
  
  
  

REQUISIÇÃO SEM ERRO

![](https://lh5.googleusercontent.com/5hDW88uq3M8CgKzSLwAGdR6Z9P2Ut0xhNNTyfiNJFaJVPmgQgNpWCqbwiU7CgjD4VcWOPukZ3ymFDngQMA3AQnip47Sk-W1w0A49amXUoN0S_etQ8agSWEZc40-R4-nGu2GbyYWjVCME_B0mlCCQxS0)

  
  

AGORA, REQUISIÇÃO COM ERROR (EXCLUI O ARQUIVO JSON)

  

![](https://lh4.googleusercontent.com/PPg5dSCBNIwY_DSqTcb8p2f8KtTeFjgSRirIJ2DInXP166HQ2sHiHp1NejxZK2yb_mO_f-ai84Zw6q9xPz5B5vI9jwksX4eoXNP1OCs6a8OqiKaOiInRRmJ7ssnJ7vJQCrYRL_vLD_kiqHI40LkmO14)

  
  
  
  

Um exemplo desse fluxo pode ser visualizado na imagem abaixo:

  

![](https://lh3.googleusercontent.com/U3qOAJ2KbFZh7EURsFC1B7V3hor0BrDeMvG3iJUOZxv8Iw6h0kjXcRMhh2qdPLTB1vtMn5vEVP2tPZXYQvGAU-375uUPjwP2jYvx1iNTIKa463PbNmF65iI9o0Sa3likUCKSfE0nuJ73wbOEDkLmCqk)

  
  
  
  
  
  
  
  
  

# Router middleware

  

O Express tem uma solução bem interessante para organizar suas rotas e middlewares: o Router.

  
  
  

O Router é um middleware que agrupa várias rotas em um mesmo lugar

  
  
  
  

App.js

  

![](https://lh5.googleusercontent.com/6IBfyh3YpxVi-qB7dcqzBkGJnb1rvFKkCqkuuLx9ex6_T8P2WulEgkOYO1PUqcQnoWvOrMHFHptN_FbnuoMib_f7ZJ1K6W1SUc3aHJMLO5aJWdAxSff1cfPiPDU5V6hYzwGw-rx0Kt6qw3nBz60Dw3I)

  

![](https://lh5.googleusercontent.com/pBBfXxEB7_URLsnNkMSZbsF_jMtgYQn2bw6pn6SvhRLy-qZLn4uS0dsgcoT4jcHqtCeofDGFhr00rsI58Xvd1dfLEkUiLKUWemA13MM2NTWbZTpHq_aUwuHgM1cwgcNIi57Tu33WE_qpCuRjlsZmIh4)

Agora, crie um diretório routes e o arquivo teamsRouter.js. Veja abaixo como deve ficar:

  

![](https://lh4.googleusercontent.com/DGNJF4aJd3EtyHn-T5DCZHZvFIeUlm7DEZHXpMwIbcrifJdJcNoIa_iMVdpZ9xqQmDFdTtEFahV2tpCZJxBzllezVa0r6zxbUmP8CpMt-zdZWOwLjHBb_ZFHpcTqSzZsMHJombaNJqoKEKU-jbw3gcs)

  
![](https://lh3.googleusercontent.com/IHjavKqnBQ6kizveaLBeGbRswVpRIfYFeca7DaMsJ3klHG016fBuqgtXT_2sqvMW28YZ-wgbXk8gXquuJHFCKT_NVObenWDVoKCmlI8x_0vMRoDzvijB1PbsDo_J9FSMsHFV3ISI2jANK_9b7JFUTCI)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

![](https://lh4.googleusercontent.com/FFFYfjB4EWWbhfonQ6JgMHaRwWyBN34jki_d4elcd_36uZgh0lh6QSt0FhuwfZr2o-ODE2ylJ1h64eHZ6zfSNWndujtg7GZopXwMURx8g60eYbRdHqhlAgNwNnp9U8xCKvi213YnI7lwUv_IPPbqqkQ)

  
  

Nosso arquivo app.js ficou arrumado agora! Routers tem essa qualidade maravilhosa!

  

1.  No arquivo src/app.js, repare no uso de mais um parâmetro na chamada à função app.use. Isso diz ao Express que queremos que aquele middleware (no caso o router) seja executado para qualquer rota que comece com aquele caminho(no caso, '/teams').
    

  

![](https://lh6.googleusercontent.com/AT8nJEXrU095ywKLHyUUJhthiTsPMT0hXLSnbkKYcsSZlpIkOxbh79CL731cTiCJXcW5uo5MmscJYLDkvdjj7LS1BvJMsjJrIbM68B4tyho-JVZcPypJQCRwnN2PxCAEzXUQqiIbPw4RZ2QJBc8r7EM)

  

Já no src/routes/teamsRouter.js, repare que, ao registrar uma rota no router, não precisamos repetir a parte do caminho que já passamos para app.use. É por isso que a rota que definimos com router.get('/:id') na verdade se torna acessível por meio de /teams/:id
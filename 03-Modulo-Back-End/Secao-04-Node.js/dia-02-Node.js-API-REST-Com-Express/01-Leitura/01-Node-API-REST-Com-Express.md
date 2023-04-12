# Node.js: API REST com Express

  

APIs Web: São ferramentas definitivas para conectar o Front-End de uma aplicação aos dados que ela precisa salvar e receber.

  

O padrão REST, rotas e aplicações C.R.U.D são partes do conhecimento de como se fazer uma boa API.

  
  
  

# Meu primeiro servidor Node.js

  

## Servidores

  

Servidor ou Server, em inglês, como o próprio nome já diz, é quem ou aquele que serve

  

Eles dão às pessoas as aplicações recursos, informações e funcionalidades que elas precisam:

  

Temos vários tipos de servidores:

  

![](https://lh5.googleusercontent.com/3h_B0WvOtkjNEYKuUiZS5s3lXmtLaFtSpmJhHffCF6-wDCBr8W5CrxRZAYLxyOIATfjdro3560xJUhH3Y6YIu0dc1Jrm91YNccwJXlwdJGnRmfcTz5ExWMO2ZV9x7cUqt_ji769uSXj6840TmoeJVM0)

  
  

[IMPORTANTE]

  

Podemos dizer que servidores são programas de computador que entregam algum tipo de informação ou página a quem os solicita através da internet.

  

Exemplo: Você faz uma pesquisa no Google, é um servidor web da google que te “responde”, trazendo o resultado da sua busca.

  
  
  
  

Existem diversos servidores web:

  

![](https://lh3.googleusercontent.com/poqI6PYRpuv4JvUjzILG5NY3GDa4AYGMmI3S-5PIZ73O4-6lSdIx0I7tLPQjw1zPnp-FNMCNRB_rTTloXCRtmXMdpjtSuEvN-6PrVzxgHrvw1KBFCi1DF1zKmVylMkmXLlXjaVWs0nOgHbZPZnS6bjc)

  
  
  
  

## Criando sua aplicação do zero

  

![](https://lh3.googleusercontent.com/ADxxbIB-jvvWvU_Vf7o2CqxxTyvJHZyqJZ8JJkTObq0l2qnJG7agWdq_3UkLf2s5E5iLL6_94VzU6yNIj3S0UvM5d9PtrYNDGk2O22zaErVcyUz7j0Q_x7PKyJ5TxJbvcHESe5rhvplR5lcLXpLsZYQ)

  

![](https://lh3.googleusercontent.com/QIGX3NcAGc3erAAeK3BdBOGmXCSxra2ypXe55rnLyGxxBU_6lGHXrCMJ-h7qG5QymC1Dp7LC9Z-godVk1un7TYjEuDszGR7bM70uLjyEazN8yNTiFHW2hrd6FgOs9qHhehtnlNUsC9ZwaTCZhbkoEfc)

  
  

Agora, inicie um pacote Node.js com o comando:

  

![](https://lh3.googleusercontent.com/wjrAu7UCnW8ucFCRDbs3MSTtlWMUDKZuMDAeIBvy0DyaPQrbKEPA2mBOQ8BBNhOE88gIQtxfEl_FdAkrLF3h5Vu_AD-uDt-dpTWC8-v90sylt7Bk3wV3_jio__BB3i44G3_351C4cUbyCYOsgTJ6d1U)

  
  
  

# Express

  

Como construir uma API no Node.js?

  

-   Para isso surge o framework Express! Ele nos ajuda a organizar e construir APIs robustas e flexíveis, nos dando ferramentas que fazem as coisas acontecerem com poucas linhas de código.
    

  
  

[IMPORTANTE] Framework é um molde, como um conjunto de coisas prontas, funcionalidades etc.. Como se fosse um molde para fazer/criar outras coisas.

  
  
  

### INSTALANDO O EXPRESS

  

![](https://lh3.googleusercontent.com/-MgF97JHO3bg2XFp0sB277KiOwXpnNVJJ_J8eORM8BDrXucp0ebMCXVOpfLIry5gywKpB5P-WzifndlSl7RHDuEsrkrT095LdJIRaP1nZ4X1ygBfho9LuXR4QBbZfyDL4p7eYcXQvwJMiBxCIwR6tnU)

  

Ou npm i express@4.17.1 -E

  

![](https://lh3.googleusercontent.com/F9NSzj4KOIFKOObXmaN3BBfPZ_ZdWIXUnWkp_QrpOp7lKYqNMZFwUzqKkaiiMkOrq6kjYv5iMBX1A_Zj6od31B5EyAcQgXimLkNBE9VjgJwt_BqNx2fFEedOaULFzLg6OxSb2DhQzmraTzsUXUnEJy4)

  
  

Após executar o comando acima, um arquivo e um diretório serão criados automaticamente - o package-lock.json e o node_modules!

  

-   O arquivo package-lock.json serve para gerenciar as dependências de nossas dependências.
    

  

-   O diretório (node_modules) é onde todas as nossas dependências, e dependências de nossas dependências, serão instaladas.
    

  
  

Pense assim: nossa aplicação depende do pacote Express para funcionar… O pacote Express, por sua vez, depende de outros pacotes para funcionar!

  
  
  

## Linter e Git

  

Garantir a qualidade de escrita do nosso código. Vamos instalar o ESlint com regras da Trybe

  

![](https://lh3.googleusercontent.com/uM9OJhMlbaXstTeuJYOH7d_FuRQSpgAQg1fyt46OmK3jsjBt2Gkrr48uYZJJ6I8LEr_7WvYm7yxf9cMSW-U9n-BvdGraIGRPpas1zcmI469Y9kKY4VdDG5otfITEQcP-Ryxb9bgsQEJIc12n8EjZ4PE)

  

![](https://lh5.googleusercontent.com/9nRJZAQ9taIUd_tqfwRh9xDBndlzQhrFzZ70NMRvuoY8zeveebLSCEErsJ6hYxeaofIDms9ly5g6cd-K30aP5vLt7G5mW1gJRFJyWU9CbfOnxDQlm_JuI-ECaL2gwnHu09mY9N8-aAUR7fKt2_lizHw)

  

[DICA]

  

![](https://lh3.googleusercontent.com/U-d-Uy6WyrEI1FhhHtQXKVqyGcWBwfd9tWF4WEwcrhj5ZexJ4qxO0-hbSCkZeFIA62e6UAYQKGzqqsPwZSBsCWF9eW2ruxaeN8KbAY7J-RsGFAChIr83O-h5PltEGAPHEJoNoqoKarIeP3x8M-aZ0cE)

  
  
  

Sabendo disso, crie os arquivos referentes a configuração do ESLint na raiz:

  

![](https://lh4.googleusercontent.com/xUFGRBfb-tlvIL2jBpVGo8UrHx_-yDSTONkxTjlVQv2w2yKzcvBOC1LXBK4uX4wZ7WbgRZtyE9mgOe6AFvq27W_wSMj1FAfSGfH1IGeBQHPZTEswTyptFaCA6hWTzPy9fqoiTNiX4I9WSOPE6K12Sgc)

  

-   eslintignore: Usado para você dizer ao ESLint que ignore arquivos e diretórios especíifico;
    

  

-   .eslintrc.json; Usado para você sobrescrever regras do ESLint;
    

  

![](https://lh4.googleusercontent.com/NaKxS82epC5GvHTPngRURYtpnKPVVCJYhaY2HPQJusVGGNsC-IIuu36qmWh1u9lwd91BzIVL2IclcGQve-rFTIMuv7HpAtEOWoZWK0yI6GRY7n7vpTiPD7UGB2Q0QswKv0O7e1YvHCWHpehXYdSD6n4)

  
  
  

Arquivo .eslintignore

![](https://lh6.googleusercontent.com/Ke5wmkfG3dfZDZHtnyIeZmbwHdnr_iH1vvZN1m7bV3qWRXJMiS0tvQWpWKe_rL1HWw5WFicRg_C049mgBgji3m-OXBmLBIR8hfzoj5q7hE8vyF_AYcIG6yV0eLimqCtWgUfgkc8DbWJOTjP4VegyGpU)

  
  

E dentro do arquivo .eslintrc.json, você vai escrever o seguinte trecho de código:

  
![](https://lh3.googleusercontent.com/DkQZTc5-qqk2eLNOONtX9eMPeaE-rm-QLeePitr-u0jE8L3Hu7G1QXjfzHkVDU85syUnhHUORxoTB9pC5rs-j5CiiW4J3iwqw55oT8A9wiFvK05gI8b9xfiqKxTJSHi9h6nmejMtngDHh_UUfjBRu0k)  
  
  
  
  
  
  

CRIANDO .gitignore

  
  

![](https://lh5.googleusercontent.com/4PZ-_0AWPXQrL0SVncQVlQzkLcnp5BmSBXADaOSeI8BFQIwWv2VZNv4n-UUYAFunxaKRB6WrNuFVELWdbYOvfJn9xpEqextQWJUnQb_rerOkHLh8-tk44L0irXsMMBCnh6IYlAEiI8s2Ej6PYfomD8E)

  
  
  

## Criando o servidor

  

#### [DICA]

  

Guarde a referência desse conteúdo para consultar sempre que precisar, pois toda vez que você for configurar uma aplicação do zero há grandes chances de se esquecer de fazer alguma coisa.

  
  

-   COMEÇANDO
    

  

Para começar, vá ao diretório src e crie mais dois arquivos: um chamado app.js e o outro server.js.

  

![](https://lh3.googleusercontent.com/tloXaA8_x2Lwvs6J80pOuD8sphaXElwdjTvllwXW5hNZpSn8Dk88gMZVmERYUkP9JF3BNZsOeLVfwHDf4y6JuA65Wt-PuCx_7oE19G-Y_Kr6RcMR4nfyseYBa1_gqhYL8kR_DXfJOz0ABIQKbD6xKq8)

  
  

App.js;

  

![](https://lh4.googleusercontent.com/SeWNfqhTr7G0qTpTVMTCIsympPnonBdrnTg3wlJwXTFa_uSf5BlFdZCCi4N1qX2DIECG1T_PFR9bQkh0EvY0h7ek8vE8DGx4wHmjajSekmAM0RzM6bv3bCNcd63LJs90uBw4oKhesHvcCzCUbnONIFU)

Tudo que o Express nos dá está dentro dessa variável app, é como se ela fosse um “objeto grandão” cheio de funções e informações que serão utéis

Server.js

  

![](https://lh3.googleusercontent.com/2XxbTBPNdcToNWYt4-4vYv4ZEgHPRwyldgSzRCJAn0vLyOjWMXP2clHTUkK4EMl98ixpdFPV-qvKiEYhyFHZICxuq0AXjJkyQcKflgyO2c8Z6-gIS1A111HKYIaNGfIEIv2RWw8YxsdpeyairQHk9wE)

  
  

O start é provido pelo trecho app.listen… e dentro dele podemos passar até 2 parâmetros

  

-   1- É o port: Aqui passamos 3001, mas poderia ser qualquer número
    
-   2- É uma função: Aqui passamos apenas um console.log()
    

  
  

Finalizar:

  

O servidor é apenas isso: Uma importação do Express e um listen

  
  

Para ver o console.log na tela, vá no arquivo package.json e insira estes 3 scripts, dentro da chave "scripts":

  

![](https://lh3.googleusercontent.com/qhS7co9O6MC8Dr3NUEmkB2G5SJPHUVwjHddsf3OLQQ8jFShdTI34_NaRjlpKiKCq-PZiwKIxU0eqrfeZijRiyxBHYWFsCWaPocLnj53I2dUmcgHvDkiKovEarIdLnFWXXd9C6YSXIRL_oTgwRNgvpcc)

  

Executando o comando npm start

![](https://lh5.googleusercontent.com/Da6sCbykQtF-d2pc20Z3uZu5IVtloE0ifdIr8mRjkxxGx-EXOYkEDJlER6L_bjcga-S_1ZsPjZ7SxXlrR63k_MKQvi_JMuKBgao_OPh6OiuvllKCxjLeCCsJqzxM8Peuo7SYwU2lvphysj3YuVYJRhw)

  
  
  
  

## Ganhando produtividade com o Nodemon

  

Soluciona o problema de por exemplo você fizer uma alteração e não mudar pois o servidor deveria ter sido parado e iniciado novamente.

  

Usando o servidor com nodemon, toda vez que você salvar algum arquivo, ele reinicia sua aplicação

  
  

#### INSTALANDO nodemon

  

![](https://lh5.googleusercontent.com/fyHPAhFs-IazeW_aV82l7onBV4lbyKNHN6lr01uvWhiq4iX20cQoy8LlUPIjZJhNT5BYudvZj4R5CvZ_N15eYpLhaprlwWTGOx4kJla7VMC2x6lTlhycuIFsrRncItc52llZJUN8YsYR-jIGiLAY9hA)

![](https://lh6.googleusercontent.com/WSph5-UCl61Rc_FjjsUxMmg9_6cpAz2eUF8tj_SHFWBd0WTJgNMWdkkegVCTiSXUAFuO-bTo7338-LLXjgOMFYV1O5cPkKjVAx7zrqLd284kD0pb_agaw8HAvaBGJkAFaSBnwMrJ7T0CnQ1NLSKPRRQ)

  

Após a instalação, execute o comando npm run dev e observe que toda vez que salvar algum arquivo, o servidor irá reiniciar novamente.

  

![](https://lh4.googleusercontent.com/RM9xUzQmcBUOLg7N7V_Fgid4kfQsansNfZO49kKWBuvGVdpjlhbhR_uWfG48g8UuMqnk9gqOHoBc8v8sI8DrKfIi1xh8k2qiKu_05uBeOSjP1Snrd30Mhifxo_7ROIGvynpD7bxID8OxSkmxi13isGs)

Vai alterando automaticamente

  
  
  
  

# Abrindo nossa API pro mundo com Endpoints

  
  

Nossa aplicação é um clube de futebol.

  

-   Precisamos dar a possibilidade de cadastrar um novo clube, listar clubes, alterar um clube e deletar um clube. Famoso C.R.U.D
    

  
  

Queremos ligar o front-end com o banco de dados. Para isso, você irá criar API’s que vão receber requisições e devolver dados.

  

![](https://lh3.googleusercontent.com/b9IibRtz6dLNn0cdy3arjm2ENSHCEAoCANNguXbdE-jNKSFWBYp7BK2-rVxXaycUQf5gJUCHgaadxivPNTatnbvohNYeZkILmRhnLA9Vux8sEWO8PQF-wD85xJri3elaDiAgNT-y5nV0cy7lx2KJO5s)

  
  
  
  

ANALOGIA

  

Ainda na analogia da cozinha, uma API seria o quadro de pedidos, no qual os setores de “Cozinha” e “Salão” se comunicam em duas ocasiões:

  

-   Quando o client envia uma requisição para o back-end; (aqui a pessoa anota seu pedido e leva para cozinha);
    
-   Quando o server envia a resposta para o front-end; (aqui novamente a pessoa que anotou o pedido, agora devolve o prato pronto).
    

A imagem abaixo ilustra esse funcionamento:

  
  

![](https://lh5.googleusercontent.com/4Se6kyz0vgmyEDqA-0h8RzQwKgaknGnVJqG-r0-58EVt0xCGt9PizxqLsJhuKXmbRXd_FFvOrcbIzGf7z3Lw-dy5DqAA0d0r_ghyDw6o3BvnBsRKLbKhO9jwyf52eJxpfLon8az3k1jpA4KzI0SrHss)

## O que são rotas?

  
  

No contexto de Back-end, rotas representam as portas de entrada para a sua API

  
  

[DICA] Rotas podem ser chamadas de caminhos, paths e endpoints de uma API

  
  
  

Anatomia de uma URL

  

![](https://lh4.googleusercontent.com/z8llA183bSU2hISQ2tmEQBWB9_GBxagvpnvV5IwiRx936blG5YrIiCbuHbUF0rnM-mnyRY50xR1PHswgmIwXQAwl5kMCBLSvBeyXNXg3hXP0wKtNnFIio75hmLEeHj94p8WQzq9T6RL6Y6fvvSkcOSM)

  
  

E eis que temos a rota! No exemplo da URL acima, temos o caminho, do inglês path, /login para a qual queremos enviar ou pedir algo.

  

![](https://lh6.googleusercontent.com/y-G6kXBE4ohvpx7oOf1QCc1yWGMbYdYEX3qQ03WufdJ1lwANcdxDykoSCaOyXBuuW_fsKGfDG6VCLTQUbiPVcsRMDGrLl6BQOkULlIVaecuLUQ7fUfs_A26meW7P1DZUJFFdN96YVkKyT6YU8EYkXiE)

  
  

-   Uma rota é a parte de uma URL que usamos para acessar uma API e fazer uma requisição a ela.
    

  

Por meio da rota, na nossa aplicação, requisitamos acesso, criação, leitura ou remoção de informações da nossa API de gerenciamento de times.

  
  

EXEMPLO:

  

Quando você digita uma URL no navegador, por “trás dos panos” ele está fazendo uma requisição aquela rota. Quando uma aplicação Front-End faz uma requisição para uma URL, ela quer algo de alguma rota da API. Precisamos saber como as requisições chegam para podermos criar nossas próprias rotas e processá-las

  

# ‘Hello, world!’ na nossa API

  
  

Dentro do arquivo app.js

  

Com isso vai ser possível visualizar o body

![](https://lh4.googleusercontent.com/zOgY0cTal4H1JbY_PQ6us7tg9sGe5Rx1Ko2l9V8D8tdoccocqejUOJd1yjP7xIppSG7nnqujPqoa7yAZ5-5JWIEMgAzTe6He9A86vD-Waf-PZxKygYOHcLA4HCsUTce12upuOFhRBmH4V1NDqkG3eTc)

  

![](https://lh6.googleusercontent.com/QqB7KMuAX1722pkGHY2-8kBWW1Dvza3mjEcwuOs3MbN79SVpdpKeP-Z7wxvcE3DrR-ciHrmsHmNEUTnFezsZJx4tv7YckcrIqwNgiKec76GL-swfokYDtaw0QXbKDBkJdjAUAl3T4qdmG9mkvumRMRs)

  

Acessando o navegador

  

![](https://lh5.googleusercontent.com/mQ41MX1594pO8gcJVCbCn-cByiEwMcvgmSDLMb79RBuirQ0W-GBr7I-e3e-A58hIdZ4_Wh450NStdD4x5XxNl3UPzvW0KKlmXZuXiFX37M3q-uV78xQX3oUiVIs7HeVdJId2eLjWXOTf0lHbQkkYyTk)

  

Dentro da constante app, temos vários recursos, um deles é a função get.

  

-   Usamos essa função toda vez que queremos pedir algum dado
    

  
  
  

Observe que a função get recebe dois parâmetros

  
  

° parâmetro '/': Aqui é rota que tanto falamos. Podem ser /login, /produtos, /pessoas, ou qualquer outra coisa! Neste caso, colocamos apenas /.

  
  

![](https://lh6.googleusercontent.com/JV0BSNJP6oD5AMo7rtLwY1qO5sIsvxkb2DpmvTNLjs3ZN1y8jPZdFtYN8gsk9tKFossz86fQ2JXX3seRVvHYu67xpCyWwDmX9_QINXB3zTCibJMf2wuMIEocB9MZrzJwqW852RNGNxlKasO1rW0Uyvo)

  

-   2° parâmetro (req, res) => {}: Este espera uma função de callback. Esta função pode receber de 2 a 4 parâmetros, sendo eles:
    

-   req: Essa é a Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
    
-   res: Essa é a Response (ou resposta), é por meio dela que respondemos o que nos é solicitado;
    
-   next: Não vamos trabalhar com ele nesta aula;
    
-   err: Não vamos trabalhar com ele nesta aula.
    

  
  

Essa função é responsável por responder nossas requisições. Então, observe o trecho res.status(200).json({ message: 'Olá Mundo!' }) e reflita sobre o que cada coisa deve significar.

-   res como comentado, responde as requisições. Estas requisições podem ser respondidas de vários jeitos, tais como:
    

-   Formato text/JSON, como o caso do res.json({ message: 'Olá Mundo!' });
    
-   Formato text/HTML, como o caso do res.send('<h1>Olá Mundo!</h1>');
    
-   Redirecionamentos, como o caso do res.redirect('https://www.betrybe.com/');
    
-   Páginas completas ou partes dela, como o caso do res.render('index.html');
    
-   Finalizando, como o caso do res.end();
    

  
  
  
  
  

É de costume enviar um status code, como é demostrado no trecho res.status(200).... Estes status code são importantes para identificarmos o que está acontecendo com nossas requisições, mas não se preocupe em decorá-los, com o tempo você vai aprendendo a usá-los

  
  

Os status code mais conhecidos são:

  

-   200: Que quer dizer ‘ok’;
    
-   500: Que quer dizer erro no servidor;
    
-   404: Este muitas pessoas já viram, ele quer dizer que a página não foi encontrada;
    

  
  

![](https://lh5.googleusercontent.com/PZM2lByPDuMz5B4t8F9gXWmpZ05l2C5CGJjPzCULhQGsZrsV2wM7mWBCjKe0U2_1ICuDwYAHI1ru1IkeGuwVmlCrj5Q5mSaQS_W3YaNQN229LNzzZprDRdIbQWhTJOc-z67rxbIs9XnJTiRS9AM3I1E)

  
  
  

## Anatomia de requisições: o protocolo HTTP

  
  

Protocolo é uma convenção que padroniza algo. Neste caso, o protocolo HTTP é uma convenção que padroniza a conexão, comunicação e transferência de dados entre dois sistemas.

  
  

![](https://lh6.googleusercontent.com/qXH68WEFL7e6JWSE95oFhCoNufbm9QNRU3rF_CsFu3m_WhYJCLM6CCSWdaca5A2zqIDRL0FRLGq4sFiMgCUUlfaN8nBCf2cc9EGEUcGdNaTwHRpXNS5At_TUcWFw-K7x1Y24JxyM2Z3eo1--yntBxmM)

  

-   O método HTTP definido por um verbo em inglês. Nesse caso, utilizamos o GET, que normalmente é utilizado para “buscar” algo do servidor, e é também o método padrão executado por navegadores quando acessamos uma URL.
    

  
  

-   O caminho no servidor do recurso que estamos tentando acessar. Nesse caso, o caminho é /, pois estamos acessando a página inicial da aplicação;
    
-   A versão do protocolo (1.1 é a versão nesse exemplo);
    
-   O local (host, ou “hospedeiro”) onde está o recurso que se está tentando acessar, ou seja, a URL! Ou, se for mais direto, o endereço IP servidor.
    

  
  
  
  

-   Os headers, ou cabeçalhos, são informações adicionais a respeito de uma requisição ou de uma resposta. Eles podem ser enviados do cliente para o servidor, ou vice-versa. Na requisição do exemplo acima, temos o header Host, o qual informa o endereço do servidor e o header Accept, que informa o tipo de resposta a qual esperamos do servidor.
    

  
  
  
  
  

Note que tanto requisições quanto respostas podem ter headers e um body. No entanto, é importante não confundir uma coisa com a outra:

  

-   o body e os headers da requisição representam a informação que um cliente está enviando para o servidor;
    
-   o body e os headers da resposta representam a informação que o servidor está devolvendo para o cliente.
    

O nosso servidor, inclusive, poderá ser chamado de Servidor HTTP.

  

![](https://lh3.googleusercontent.com/_0RrDgwMJJTjFbplGYjQOx66UoQEFnxutITYqzgn16p8Qbj4UsK5AsMMDZmOYig1KMW52gmi8m43T-Xq3iACFmFEFLUVZPkxNODojifSFurxFfu9y8d3DunSddPGGb8xnV-yZMHR7nJ-6Kg5wOoQ0Y0)

  
  
  
  
  
  
  
  
  
  
  
  
  
  

### Envio por parâmetro ou req.params

  

Esse exemplo é mais visível em e-commerces ou sites que têm produtos cadastrados.

-   Construção: /rota/:variavelN
    
-   Explicação:
    

-   /rota é o caminho, por exemplo, /produto, /pessoa,, …;
    
-   /: é o indicador que vamos passar um dado para a rota;
    
-   variavelN é uma chave identificadora, por exemplo, id, …; (aqui geralmente passamos ids mas não se restringe a isso)
    

  
  

Um exemplo prático é quando usamos algum site de compras para ver as informações do produto, vamos usar o site da Kabum por exemplo: https://www.kabum.com.br/produto/117767/. Quando nós entramos para ver mais detalhes de um produto, a URL recebe a rota /produto e o parâmetro 117767 que é o id deste produto.

  
  
  

### Envio por corpo ou req.body

  

Este exemplo nós não vemos na barra de endereços, mas usamos muito!

Sabe quando preenchemos um formulário de pagamento após uma compra online ou entramos no course com nosso e-mail e senha? Aí está o envio de informações pelo corpo da requisição.

  

O envio de informações vai pelo corpo e não mais pela URL, onde podemos ver explicitamente… Isso se dá por duas questões:

  

-   A primeira é por segurança, que é a mais importante! Imagine sua senha ou código de segurança do seu cartão de crédito escritos na URL do seu computador e quem está perto de você podendo ler. 😱
    
-   O segundo motivo é pelo tamanho do que enviamos. Imagina que inviável enviar todo um cadastro de um formulário gigante pela URL! 😁
    

  
  

![](https://lh3.googleusercontent.com/C5EOBY-H9-m06_G7WuWITrM5nV1TmelHi6bp6HRSiNbl7q0hKlMMAf96_nA5kts9xgQL2S48Mb_JrNJisfelS8qfT1CbAbOhX8GRVTe3XQPM6Tabda3H588jYx12UoxbaUbNHjEgOz5GrDqMkHjTPI8)

  
  

Query String

  

![](https://lh6.googleusercontent.com/-vrXSIiI48zC668t0922rYxRhbj_C7xJ1G4i_vKU8uM5NbA0CJRi7AC97wIMDNIAvDjQTeapX7nTpR6txCs7dep9Tif8iglYS3Vpr7Vu72xKRUmxOZAVITkdHJ_NIhgCXEyhND6OpTT1LeLXhgyE_Ys)

  

![](https://lh6.googleusercontent.com/nSo9waMRiTE5vUSs3pUzhFVbsdsMbapu8lc-fuYh3E05vz3_iO_6vnnWR-F3KfwA0fpKAdArPebdxFMRr24Be1euzwCVp2RzrnVoiJN2aKClgjeFmvd8zZMyFmfDRH13kV8lnJyZgTa7L-v7XVHPrN8)

  
  
  

Parâmetros de rota

  

![](https://lh4.googleusercontent.com/RGwdF94g-binYxFyFM6Hj5APReUhlOw6RjEI4oAHtRRCkbDEdCBUKsur5M4jmX1xUS07Tg3EEinewGn6AzYn2amO1kd6wBQzmJy53JHW5WDb6OPmEAvSYkn0e2-zYFLKcjQq2kkfVlBjnxwb7WdDO-A)

  

![](https://lh6.googleusercontent.com/QnyLdXOWJozUemvnliVh8MVgLvSgMWzGUKb2jM9A0XhGCgbSW-GkwsvtjJGCAVX6TMF9jashmUyISiV8xNRXW2JRGGesmRljC7873CW9wIFIDFgcQ69-mCf-xi7pRZwqK5TvLsPbuDxfmSKZ-jQ4Jro)

GET - Solicita via Header(corpo vai vazio) e o servidor responde a solicitação.

  

POST E PUT - São utilizados para enviar dados para o servidor através do corpo

  
  
  
  

Corpo

  

![](https://lh6.googleusercontent.com/342iE88Ha3JpL2Gh-O6RtApW_aipXMcV6g5ujp-s-YRnm42dcH0W-kdDkzdrrUlEjpGClnjmEWg4VieN4JNXOLt9vP3zmt3F8KZzi1NOTy_sN3oyOGrWYp70GEJrmJZFkTm6xype6bMlrhWMYaooqfs)

  

Isso permite ler o corpo em formato de texto

  
  

![](https://lh4.googleusercontent.com/0YF8fDk3BMq7IAOywaV9lTvm0VEYcgn7MTJYeYs5TEIOk_82MHlJ7ipW6mAgHcoNAyekD5cquuFEVr-j-qsKqH7ZdonTvZaGU1d6IotPw3z8q67pzNk-BIFnAKCuiSY6I_cdVHqkLY2Jx8_j-NF-0hk)

  

![](https://lh3.googleusercontent.com/7SkMtx9v_Czb6w4ZF4aZIQenuKzOGK-SxirOVscNh68aPEar0KVK4VwwjXiq5C8BIDJCx69EPpx2gFZRXKJU-CsmDkfIFaIAVIqZKrniyHZQu4zRI4SAaalvmNmZM2nIdtGM8sX1dZ2IhiTsTPJSmso)

  

![](https://lh4.googleusercontent.com/ibWlPjOEo4FKerku4J56kLHFJLLHlwTz6wT1jDBsMvlEAySOyzNhzFf4-tnvFIsN3AFjtN-WCRXZ-KN6FA8JCghY5y9XOriOQ2IP7r4QIgZpjIbvBTEQq19SBrGdWkgQzBBQJhGWMjZEUfov-53ajA4)

  
  
  
  

Mandar por JSON

  

![](https://lh3.googleusercontent.com/dhvFOcs04dmnbqMB1Nqrr6C3OAfJi2oMDJsgGEG9fCoeKwAKPE0bHxlQ2iaTTNcbAQ9IhVdNsqcbvOrMvhiIHWERIj72hLpL1pgnQ67eSWnoAmx2lxtjgDRqgQpQH2PtjwEwf5SaPrLWa_KV7StIjR0)

  

![](https://lh6.googleusercontent.com/AJOOq3zZu6xEkzk1NEmLbCkIOJd6XAMv_EeNA3L1DBqDbD47eQ1iNoMlH1NxSal6i-9pvsw9KBAFV5IGZg_wVs8mospEMRkJ6nMubRE99IV1tNxG6k5kF8WOW6dKDVXtUkOvWyyCJ01x2wV48ZQf3gA)

  

![](https://lh4.googleusercontent.com/kwCQQMr9Fja27jk0m9x2G-MrRwopTOakNwKnGrpxg0wGbS-pLEl51O4aAD95UsxfdShOL3nb-Lq5P16BSHkr1sEW0RDGyua5DbD0IfsaRu3YO7W1aqIGjrpRBHXKzBYkTZYV5AE5v7gyERBep9SlSmA)

  
  
  
  
  

# Criando nossa primeira API

  

## Listando times por meio do método GET

  
  
  
  

Em nossa API, os dados serão armazenados em um array de objetos. Para isso, ainda dentro do arquivo app.js, crie um array contendo as informações abaixo:

  

![](https://lh5.googleusercontent.com/ykGL2LAKbOGEM8RyHr4FDKg39GOu5vM4QP5FhWDj8HwTaCx1RNU12zZLM38lB9EqBW3HVlD2jYvt1ps0utiKRuZchNpTUIHVOVr_KscidlMF4n-E4Nu7NQ75N5pwXO7XCuE76O_UubLtVN4Gep0oBrg)

  

Agora, você vai criar um endpoint do tipo GET com a rota /teams, como mostra o trecho de código abaixo:

  
  

![](https://lh6.googleusercontent.com/InrPdUCZ3Czg26maX6c34I5a8-f7DGGGNYw0WVEKDOSwtlrzE2C52ZlK5ZIqaC9Ld8F88dSOR1Vrd5_FLfzHtQF5SL1ZDhk5eg2P_z6XCtSGK4xIR5H-79EpF45xBwV82AUNSaoIp-cbOfEOBlGU3-E)

  

Aqui, a única diferença é que responderemos a requisição com o array de times. Salve o arquivo, o nodemon vai reiniciar o servidor para nós e você pode acessar a URL http://localhost:3001/teams em seu navegador.

  

![](https://lh5.googleusercontent.com/fAgga9LbpUKB0A75cPXzvMAxlXK3WV940dz8ZcRyNsoPMkv_vlId-Fgo8-WpIMSqNVGXEVt0ezTtS0LzgyTK9RYFVIG_MKBh61WBpopRd4zHaSeDyI_djepmEMuKL5WNsSG9Msn5LIeIMceVv4YY18U)

  
  
  

## Cadastrando times por meio do método POST

  
  

Para cadastrar um novo time é muito simples, porém agora queremos receber os dados no corpo da requisição. Para fazer isso, crie um endpoint do tipo POST com a rota /teams, como mostra o trecho de código abaixo:

  

![](https://lh5.googleusercontent.com/pqH6scU8J8mMjt_cibI-KIdhRzjh22pnJrjIQ9k5ETI6dhx0NBr5RivL9VWWO_YePt85Oo2i_eh7Uk93C20ipmqH0VVXTDfRHqddBCWzkEHgPjcpN_ixjtFRdVe9eowEkFW4iYHKg1CRYbpYyRIXF5s)

  
  
  

Os dados serão enviados pelo corpo da requisição e temos acesso a eles por meio do req.body. Criamos uma nova constante chamada newTeam e aplicamos a desestruturação no req.body. Após isso, armazenamos o dado em nosso array de times e respondemos a requisição, agora com o status 201.

  

Status 201 - CREATED

  
  
  
  

Preenchendo o campo no Thunder Client

  

![](https://lh3.googleusercontent.com/cp933cVFQy_4DpVQ03EnLmYqToxQ12c9pupICkusIxwqEEM3Y8Q0XB8Niy68lwfOEc-O5rGdBMJ-el-PKMVtKl1Pt4cShm_7Cxff9DNvg6y3x4tOfCTYTy_qyh94JbJs7jURs2yw-5vOKJkL4mo4abw)

  
  
  

Vou enviar informações

  

![](https://lh3.googleusercontent.com/Fq701cZyqBhRktddV-ywld42EyLCHY6-iF02L8XjCdw7xFVvlT0rY9lDZYpsFPThtACo7iM2Lw5Otm8D1cvXvGb3Ne3jbs3CCcfTkHoWtTpRrAZHocJM0ut4pUu50N3sK5HaztjU7ToIyC5s5vX0-Qc)

  

Quando atualizar o verbo get receberá essas informações

  

![](https://lh5.googleusercontent.com/Q3Glz5QoqyNheWvk2f5SXqMGgOQkf7SFXMbcePJ16gCxf8SoD_8s9g0B6haI1X-bEWZgY2oQN9Qr8y1-Qi0FAKFS0Md4pztMBu3rktjJ9EQ5Z4W80r5Kq5IelI_kE14KD0K_h0beKej9BpHn1FPIapA)

  
  
  
  

## Editando times por meio do método PUT

  

Para alterar algum time, você precisa do id deste time e dos novos dados

  

![](https://lh3.googleusercontent.com/vJLjDtsMdZkOz8VYKqJEUP-JpTjNjsfi8LGQs3_hC9uJibf9x6Bl9ebI2x_aikGZrBBhv0CrQNDcct4qiqiNB276tJaOQjp1pPiZt_xp76oKJY_f5O3LtmZ77U_fFQpIuEbBovYyO-ZDk-pjV0s6NpY)

  

Logo após isso, temos a rota /teams/:id. Essa rota mostra para nós que além de esperar os dados vindo pelo body da requisição, também esperamos um id vindo pela URL, por meio do req.params.

  
  

Quando o time é encontrado, alteramos as informações dele no array e o salvamos na variável updateTeam. Ao final, respondemos com o status 200 - ok e o time alterado.

  
  

⚠️

Aviso: Antes de realizarmos os testes no Thunder Client, você precisa saber disto: Todo dado que vem por params ou por query (ou seja dados enviados pela URL do navegador) são recebidos como string. Por isso, fizemos um “parser” desse valor para Number (dentro do if).

  

Preste bastante atenção nisso, sem esse parser, o if nunca vai encontrar o id, pois o id 1 é diferente do id ‘1’! Seria como comparar 1 === '1', o retorno seria false.

  
  
  

Vou alterar o id 1

![](https://lh3.googleusercontent.com/_VqFbKIA-AZ4pwdPsqP4BnIF7QsBmeCM9yuj8V4BQyAY2f5gbKycP3NBtwHPLLMTvKoEjXZ_UYSZBL2VF34at8aVkoS3rznAoGODfMJ96Bupjk3iJ2377QCRIdgqMrtDF96Ewm6EtrzFKFM5KAtNoaU)

  
  

Quando fizer uma query vai estar atualizada as informações

![](https://lh4.googleusercontent.com/v5dA_Q3XfdI-heBb1ru_I79KVFwnuw4CGtDYt-wafOM1E0jXMYz8VxBVUIljY_506onClLESeUvpznkYiNQMe0gao9d8bu9Qs429pj-X5o02FfRWxXRToB5QYrCV4YCt8y04gom07Mrxh727vlp0J-I)

  
  
  

## Deletando times por meio do método DELETE

  

Para finalizar nossa API, vamos deletar um clube por id. Assim como no endpoint da alteração, vamos receber este id por parâmetro, pesquisá-lo no array e deletá-lo. Crie um endpoint do tipo DELETE com a rota /teams/:id e escreva o trecho de código abaixo:

  

![](https://lh3.googleusercontent.com/jsCrgwhUJ_6Z0n5QpGL9LEBQnXLBCH5OvGrHKe2B6CyJjcgtKEIxW2R5OY-HAVUXBzYeoqtSWY-lSZZz32jqtCRWGyNfZ8jfw0J4W0emkO78HB1KwLNbVHNjNl92D-zDAk_4ymdBXVMkSxW61J0i_k8)

  
  

Novamente capturamos o id vindo da URL, encontramos o índice dele no array teams com a função findIndex, do JavaScript, e removemos o time do array com a função splice, também do JavaScript. Ao final, apenas retornamos um status code 200 dizendo que está tudo ok e encerramos a requisição.

  
  
  

Testando

  

![](https://lh5.googleusercontent.com/5PLg5-M_G8Wsk-S2G_mLCkTIKPUIBSfAM70AeKTSScPzG7B5J-AN6AdXjIAubjl1K9JhYYboFcDcg4NFSOC1TLJUSgFkicEKIcZ5gJekLRIfW5jTJsvRpJpys1heThraScCnDNTQcr4GW4tpzdHKQIE)

![](https://lh3.googleusercontent.com/9na4Uo16fctvsvGTJObwUAb_nZJ0Ao-nQkHj_PPKKldbsve9-GAlhF9csPX5YzrVAcOd6BELD-uHDWRvPCI5KQebhFn27qZpqHpdTnU5m7oiX7KsgFheJe2yGcwVkaxUkH4mxX9u3gahDvJaja0zifc)

![](https://lh6.googleusercontent.com/dwhVYYI3MTAEigjW4LdN4PkjQGqtLvb-L4V2DLvPMGj0oM-j8ThA6ICDjfEokY5xkyJHUDsO92bA2Rz3ohCHzNxrJIVCs60Rk-8uPrr_HeRsyrgIeuNNYuYUHWjjw-xsEwLA68gUlsKdFg5b2AvDuug)

# E essa tal arquitetura REST?

  
  

Para falarmos sobre arquitetura REST, precisamos antes entender o que é REST e RESTful:

-   REST é um conjunto de boas práticas utilizadas durante a construção de uma API;
    
-   RESTful é um serviço web (desenvolvido por nós ou não) que segue as regras definidas pelo REST;
    

  
  

## REST no Express

  

De modo geral, os princípios devem ser seguidos independente da tecnologia que utilizamos na implementação de nossa API. Ela pode ser escrita em Node.js, Python, Perl, Java, entre outras.

  

Uma das vantagens de se usar o Express para construção de APIs é a organização das rotas, podendo separar as rotas pelo método (ou verbo) HTTP da requisição. Além disso, torna-se mais simples retornar um formato específico solicitado pelo cliente e/ou retornar um status HTTP.

  

![](https://lh4.googleusercontent.com/D1gsvxUB8MxgdLUAzj8HpMuBK1LC_ThGNvh-iHXg6PD30K04em8hwTuOPobQ9ELsX65ErvoOInWm5iw1UvErqI64qpBXMoiEde4gC7iYZuyPd96G6rqLWdGxOU3hydBFvgkimClyqOr7p6ZbU9oYvD0)
# Introdução a Node.js

  

![](https://lh3.googleusercontent.com/3_AFUwHVvh7mSXz389NIT7WaQ_iMOzUE7fep8LNJuu3Z4y_TY5ePPcOE92BUzU5BGnpOsGvt26VetD5ESaPNkpOjt1eM79hhn6v6KDrIE37n5LfVcO52ore4xz9xzcTNqsAsNZgCEvQFAh0_UdLeAGo)

  
  
  
  

# Sistema de módulos

  

Dados mostram que atualmente o NPM, onde os pacotes Node.js são disponibilizados, está entre os repositórios com maior número de pacotes.

  

![](https://lh5.googleusercontent.com/qV5HrokElaocHQXb84zpjjb19KfDx3__o2Ud8_R9h_MajjArK4L7P19AVHXnWsbGxIFWv7q0j8HV_rvwCxQVN-JcvHNf9Xx5MnrCf8ZOyrO1ByaqfXpZNvVbFwIgn9F7z_uzF953q6vxdeE_Rcy8Jsk)

  
  
  
  
  
  

O que é um MÓDULO em Node.js?

  

![](https://lh5.googleusercontent.com/29C7fdFBfMP7NF4kugk1tzOP_wirn0nbUewvM0__-AVEPpSn7O3DCr__XBu9TI4MHUq6uB7SXIxB837msK6owyfEFTOlRcT1fhwje0G3ZawMSrwqYYfdlWUxdfFJkSQaxWDL0uD_Y3mOpjaw3IqtbS0)

  
  

É um “pedaço de código”, o qual pode ser organizado em um ou mais arquivos, que possui escopo próprio. Ou seja, suas variáveis, funções, classes e afins só estão disponíveis nos arquivos que fazem parte daquele módulo.

  
  

EM OUTRAS PALAVRAS, um módulo é uma funcionalidade, ou um conjunto de funcionalidades, que se encontram isoladas do restante do código.

  

O Node.js possui três tipos de módulos:

-   Internos
    
-   Locais
    
-   Terceiros ou externos
    

  
  
  

### Módulos internos

  

Os módulos internos (ou core modules) são inclusos no Node.js e instalados junto com ele quando baixamos o runtime.

  

Alguns exemplos de core modules são:

  
  

-   [fs](https://nodejs.org/api/fs.html): fornece uma API para interagir com o sistema de arquivos de forma geral;
    
-   [url](https://nodejs.org/api/url.html): provê utilitários para ler e manipular URLs;
    
-   [util](https://nodejs.org/api/util.html): oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.
    
-   [os](https://nodejs.org/api/os.html): oferece ferramentas e funcionalidades relacionadas ao sistema operacional.
    

  

  

  

Exemplo de módulo interno: path

  

![](https://lh4.googleusercontent.com/yNTiyvCa2VS-dL5I0K6_jcBSbp9Iw7KRjmwEnT-kbFLwpsltMXXYRhrYh3KxjiuCKid3r9zCMsOt4MxqYNdpXH5uhz1Gz6HUN9zyS2doZiMf-6j9B6puQNRJleBV7KfvGP5V2Zt41x4xVc5K41Sarlc)

  

![](https://lh4.googleusercontent.com/wQ3wL4uGv_lbny33sIwbjOqW4D2_yJErF5A5WL4kwUUjxvnEUcDgNdHFpPJsdUivxdCk-dzEYon1zcD2GdjydQ8m7YepNUmmHs_QxR5qzOPYQGz7WecwEzGhtw6AvWqBXSA4mV9suWss6oiQIeMUIds)

  

  

### Módulos locais

  
  

Os módulos locais são aqueles definidos juntamente com a nossa aplicação. Eles representam as funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes.

  

-   Que nos iremos escrever em nossas aplicações – O REQUIRE COMEÇA COM (./index.js)
    

  

### Módulos de terceiros /ou externos

  

Os módulos de terceiros são aqueles criados por outras pessoas desenvolvedoras e disponibilizados para uso por meio do npm.

  

![](https://lh4.googleusercontent.com/j_0ZAbHulUrvfDNJHiCVCXw-U8x3L5j4k1XfH6Mpc9fcj57-ZEyekYGdjVXvQOs6dibjLqFgHBuKRCzw5TKir8Ry8ZGNLblfkNhrH8aS8wsWGzPEJdR4F5Yl_oFrn0mlZC2Ix_pwfWfSLtgHGpCn05w)

  
  
  
  
  

## Maneiras de importar e exportar módulos

  

Quando queremos utilizar o conteúdo de um módulo ou pacote de outro arquivo no Node.js, precisamos importar esse módulo/pacote para o contexto atual no qual estamos.

  
  

Para isso, existem dois sistemas de módulos difundidos na comunidade JS:

  

-   Módulos ES6; Ecmascript 6
    
-   Módulos CommonJS.
    

  
  
  

## ES6

  

O nome ES6 vem de ECMAScript 6 (especificação seguida pelo JavaScript).

  

![](https://lh3.googleusercontent.com/4f4gxicLfhlFchHevWNoUMZn2WrAjlNFTrMPSfMo4guRwfam7H9yMRY3gxyO6zYbHpkXUZq9kH01oBdyuWAiYR9FZedxM7ygMsQtlEd-6tGVzQac9Au6k0OvAdzatWa-uYHtuyALfWSz62HYdtlo2Rg)

  

Soluções para resolver caso dê erro

![](https://lh5.googleusercontent.com/P1wU9q_tJ0OcW-wdiz4AS3vvBlMeIaUd8K_u8D5ahCCKrFvkxgZNYF0w4EdJszeP526_pG_jHM-1qcmfTb0hni8Pbz74xO4ihkXBsPeC4PIG5w2FpoOPpEGb9rIeaeDUYZdaUNvOWPVczUSDbBTDpGc)

  
  

## CommonJS

  

No CommonJS as palavras-chaves utilizadas para importação e exportação de módulos são:

  

-   IMPORTAÇÃO: require()
    

  

-   EXPORTAÇÃO: module.exports =
    

  
  

O CommonJS é o sistema de módulos padrão do Node.js, e portanto, o sistema que utilizaremos daqui pra frente.

  
  
  
  

# Exportando módulos

  
  

Para exportar algo no sistema CommonJS, utilizaremos a variável global module.exports, atribuindo ela o valor que desejamos exportar:

  

Podendo ser variáveis, entidades, funções, objetos, múltiplas entidades.

  

![](https://lh5.googleusercontent.com/NpAuM-sCVkjclMGBbRZE_5bIcJNtqBEAfu1lGHlt_dMoanOFR4OpY89-QHwfHF9EFy7Ts0xn6EY1mYf_jLHi1YHLdjlIqH5WnqxDjRUVT5IurKIRAyDxdSNadcuY1Ps2HpuV4pPwKGuGPYzBA0BK7nM)

  

Exemplo de exportando duas funções

![](https://lh6.googleusercontent.com/dtZypLiE1dagcJAXKeSRjEE28TzdmObQapfltuvSSkD4yyLqx5jSa2zRYGJjlkId3huAjEfBpSeyupA6f3_0b4EXR8oFo4e58shF6hc0RFxz2ZiRZrLrfPigtQ8TNL6uMZ7s8XjSEHiCxqWGPhbAwYY)

Exemplo: Atribuindo um valor de uma variável.

  

![](https://lh3.googleusercontent.com/zoKA5zltVFna8YePk9IqilZGWR9oTfg_JF855B3IRIypvvaIUypxhpV_zdQNy-3fombizzAwS-WSXAqLZdu83eGsmj3b7tu36RLiFPnZU_jH9HHpw4fCQt3DKGMQbpv4-Q7BTL5xmVexeZsKoFp7OJA)

  

O module.exports nos permite definir quais desses “objetos” internos ao módulo serão exportados, ou seja, estarão acessíveis para os arquivos que importarem aquele módulo.

  

Ele pode receber qualquer valor válido do JS, incluindo objetos, classes, funções e afins.

  
  

CRIANDO UMA FUNÇÃO:

  

![](https://lh5.googleusercontent.com/ISzYhzwP67cHxNwbI356yrNrnFQl9jg6EIY1UW4gkAA2LiaefiQP9Zy3SDHjyqCfSRwN04XBJ-ZUYTbb6D9rH47TUp5qCLqwU8KUNv_6RpMnIWJgX1BzxGlGXezyVKX4KWC5tT9N6PnhWlZ5a_O9_Gw)

  

-   Contexto: Estamos exportando uma função, de modo que podemos utilizá-la para converter um valor em dólares para outro valor, neste caso em reais.
    

  
  

O uso desse módulo se daria da seguinte forma:

  

![](https://lh4.googleusercontent.com/3Okw8nUQOgyC9EwehUA4TbMNeEjtudgrdE22B8_6KVfs6U7QMnACeUmhaIGJq5eCddVp-1WGrOsteC3T77SPivaO28aUKcQPOKRIRcNLIIehYUBy-aJh9ROcuQm0p2Lcrlb2wE9RdPYeu_1Lv697JlA)

  
  

OBS: Podemos dar o nome que quisermos para a função depois que a importamos

Exemplo 2

  

-   Suponha que agora desejamos exportar tanto a função de conversão quanto o valor do dólar (a variável brl). Podemos exportar um objeto contendo as duas constantes
    

  

![](https://lh6.googleusercontent.com/LM_GcgXSlKHLkdAODqF4-IHNia3kcNL40kzphzqHF2PmjKrCR9n9r-iKE8WwccmxiCcCNwqkZQjn1yDmyWj7sm7bOU_b_VYkYfX5UulPHBd_pfJHVO7jUbx0lO4F17_pF7nWMca0POCxnI6jOVOxcCo)

  
  

Desse modo, ao importamos o módulo receberemos o seguinte objeto como resposta:

  

![](https://lh4.googleusercontent.com/mpqJrD_2WvzNjGn0r8NXBbdcg9eV0AUAkBZD5DIAmjLC1Tpi37qrDKmfCohgNLn7eAgDnbIEF4G037GE4S90amXbFx-bsPeNHmLpuJyzy4y0HPGhothAEbsxa3b-zZn4_uTh7p1Ev9ILqmri2m8PUrc)

  
  
  

USANDO OBJECT DESTRUCTURING

  

![](https://lh4.googleusercontent.com/L-fWJ_hyP-0AKe8hoeHstTTsQ3uWYH_8liAkHrf3r3ejk5TLXhNH4rjROpP9IuSWBCWV9utmFSxffCVDCKg8Bp_fo_qV2l3N6moYj1qQWc0I5TE6OxLIpQf4iCAJdZFoEJwGAqMuI0KxOB27oVLLD60)

  
  
  
  
  

# Importando módulos

  
  

-   Utilizando o require para importar cada tipo de módulo
    

  
  
  

## Módulos locais

  
  

Quando queremos importar um módulo local, precisamos passar para o require o caminho do módulo

  

-   Por exemplo: require(‘./meuModulo’) Note que a extensão ( .js) não é necessária.
    

Por padrão, o Node já procura por arquivos terminados em .js ou .json e os considera como módulo.

  
  

Exemplo:

  

![](https://lh3.googleusercontent.com/34gww4Beq9yFrDZqxLXyUmupMu2hzSPa9cCUIqQrfEPMbYwSzKgnRARiE2nQUxe31hq2hV7sCRaDBS0N_MCuUxJX9OjDPm3SJndrOXEgMMtXdJgyfkWp8dPZzMfbtsEPVavmR7Qw2YTvy_cD8q563Oo)

  
  

![](https://lh3.googleusercontent.com/Yl3yFMEqm3FLMvVANyXTFinPEGQ1EASGgNHkfCj7DIOKESGE-AmCyFx-b7iUdBKUNNLW9nr0BLXnByh7UiCP8ziSKNhrmB_DYJwwW_Ycvg3YyMdsxye8JduGqOdgGln-UdV6Zls_mr9vsC3QueWC2QA)

  
  
  
  
  
  

## Módulos internos

  
  

Para utilizarmos um módulo interno, devemos passar o nome do pacote como parâmetro para a função require.

  

Por exemplo: require(‘fs’) importar o pacote fs, responsável pelo sistema de arquivos.

  
  

Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável da seguinte forma:

  

![](https://lh3.googleusercontent.com/3w0W_yUr7ywr1jJmOluA_yfIyV8o6HifncVDa-rCg29jFwogm5n988zGjK5MsvbVPZYdueM6nTP3jtbcpoBJp3XkKdgnKK1nX4TI5QOafKZtH3Q7bG_krsUbtbaTbyCvU9TMQYQgD-T2FHLc22r6Y1M)

  

OBS: Repare que o nome da variável pode ser qualquer um que escolhemos.

  
  
  

## Módulos de terceiros

  

Módulos de terceiros são importados da mesma forma que os módulos internos:

  

-   Passando seu nome como parâmetro para a função require. A diferença é que, como esses módulos não são nativos do Node.js, precisamos primeira instalá-los na pasta do projeto.
    

  

Exemplo:

  
  

Instalando o npm (Node package Manager)

![](https://lh6.googleusercontent.com/-azQfSdUD5aQ04vG6rp7HGJbB1HypNYd30bkV48Ltwd_HOOa-JT786CQWcyGQqrz-Mmepb7sokOigRcIMABMXub72H5jfzYPDu5Mrmv2Ufa0yIiK92NSSTvBrkv_U5JAW5pm-QbBo5hfVtxZXxmsY9I)

  
  

![](https://lh6.googleusercontent.com/V396zo7wAZHxoN6SDEUxApyH4WIOrDtT8ALgxo8pcMgmiH7BaZvstPIWjAZ-BA8miI9oT8tbKv8xkuY5MhA_H2vs7wyIyg79aTto1j2ZwAqT4GqP6gkkEh3U7fCIqF9h4iBbQzyB6NzC3ZACJ13x5As)

  
  
  

# NPM

  

NPM ou Node Package Manager é o repositório oficial para publicação de pacotes Node.js

  
  

## npm init

  

O comando npm init nos permite criar de forma rápida e simplificada um novo pacote Node.js na pasta onde é executado.

  

-   Ao ser executado, o comando pede para quem executou algumas informações sobre o pacote, tais como nome, versão, pessoas autorais.
    

  

Podemos utilizar o npm init -y (Virá as respostas padrões)

  

-   npm init cria um arquivo package.json
    

  
  

## npm run

  

O comando run faz com que o npm execute um determinado script configurado no package.json.

  

-   Scripts são “atalhos” que podemos definir para executar determinadas tarefas relacionadas ao pacote atual
    

  

O valor dessa chave Script deve ser o comando que desejamos que seja executado quando chamarmos aquele script

  
  

EXEMPLO:

  

Por exemplo, para ter um script chamado Lint que executa a ferramenta de linter que usamos na trybe, o ESLint, nossa chave scripts fica assim:

![](https://lh4.googleusercontent.com/3MVPl9N48XL6bnimzOr2_Q2zud0E6NzUfiX9QQrfRa6AYXXB8uuTJ4l5NiiI1FegfxDaKTwRn97ZxFzaHLautsmCJMz21mRwxyIeDVTO_LxakaChmV1HeiNo-ccEwibRmfpp4xtP3iZ6KNF_ILobMvo)

  

Agora com o script (atalho) criado, podemos utilizar o comando

-   npm run <nome do script> para executá-lo.
    

  

No nosso caso, o nome do script é Lint, então o comando:

  

![](https://lh5.googleusercontent.com/nMbQkWfgdXJR98DOf-PMCx66y9D2ibEDWqGmKudi-Ol2vA4t2k7g5vfhrcTDD6WNjHN7-MkjQor3B4tV-6unIfW1OzKgmw79ghwvwKELi3UBzxg2KT8DLOjiT57FbEGd-4hq1UrsgsqGQygcMD3tMmQ)

  
  

## npm start

  

O comando npm start age como um “atalho” para comando npm run start, uma vez que sua função é executar o script start definido no package.json

  

-   Responsável por executar a aplicação principal
    

  

Por exemplo, se tivermos um pacote que calcula o IMC (Índice de Massa Corporal) de uma pessoa cujo código está no arquivo Imc.js, é comum criarmos o seguinte script

  

![](https://lh3.googleusercontent.com/ICNSZxF55vKui-ZRwXMY4FWydaI8wQpLtIa8a77Vyrm4usCYPnDeKa4qPif99GZP32p6nkb26zfxDTn5gJhaaersB0qVBMQYPiHGb-ktMKLf4vme4I9kzzt4yk04BTmRRs1-gb81M-vPujbpTdBi9U8)

  

Dessa forma, qualquer pessoa que for utilizar o seu script (atalho) vai ter certeza de como inicializá-lo, pois só precisa executar npm start.

  

-   Muito comum utilizarmos o node index.js
    

  
  
  
  
  
  

## npm install

  
  

Responsável por baixar e instalar pacotes Node.js do NPM para o nosso pacote.

  
  

-   npm install <nome do pacote>: Baixa o pacote do registro do NPM e o adiciona ao objeto dependencies do package.json
    

  
  

-   npm install -D <nome do pacote>:
    

Baixa o pacote do registro do NPM, porém o adiciona ao objeto devDependencies do package.json, indicando que o pacote em questão não é necessário para executar a aplicação.

  

Ele é necessário para desenvolvimento, ou seja, para alterar o código daquela aplicação. Pacotes marcados como devDependencies podem ser ignorados, já que vamos apenas executar a aplicação, e não modificá-la

  

![](https://lh3.googleusercontent.com/nUhV4oe45tKAz3gAZJ4STwj6Se67EaOsJ7QyUnRRoBsI140baElSdE0A29Gnjzvpsk3g5WCzHfKcTsNsDj4GlDjhcoxsm3u0plg1OntIrdCURCve5UYeHq9Mgfsg7x2wfSiF3wBmUujehJ629OsPLno)

  
  

-   npm install -E <nome do pacote>
    

Baixa uma versão exata de um pacote do registro do NPM e o adiciona ao objeto dependencies

  

A DIFERENÇA é que quando instalamos as dependências da nossa aplicação, novas versões que corrigem bugs ou introduzem novos recursos podem ser instaladas também.

Usando a flag -E garantimos que a mesma versão do pacote sempre será instalada, independentemente se novas versões estão disponíveis ou não.

  
  

-   npm install
    

Baixa e instala todos os pacotes listados nos objetos de dependencies e devDependencies do package.json.

  

SEMPRE deve ser executado ao clonar o repositório de um pacote para garantir que todas as dependências deste pacote estão instaladas.

  
  
  

# Criando um script simples

  
  

## Criando o pacote Node.js

  

Criando uma pasta, chamada Hello-world

  

Uma vez dentro desta pasta, executa o comando npm init

  
  

## Criando o código do Hello, world!

  

Dentro da pasta hello-world, crie um arquivo chamado index.js.

  

-   Por padrão, esse é o arquivo principal de qualquer aplicação Node.js e é comum darmos esse nome ao arquivo que deve ser executado para iniciar nosso programa.
    

  
  

Dentro do index.js, adicione o seguinte código.

  

![](https://lh3.googleusercontent.com/0L_sMhYDJevxMJyIcpG_vr0m8h8B9gHU7OJSrZZUN1wFEyEhHv22U0No3BG5aiFNRS33Vg7pTa5Kwvj1VKYOU8UfzBiu6V4jHSWgsrXHJgL6znmgaIr1lhcT3be4VsO1mPjM7Wq4Zh6Kiwk6DsZdL-A)

  
  

## Criando o script start

  

Para criar um script precisamos alterar o package.json da nossa aplicação. Abra o package.json da pasta Hello-world e altere a linha destacada para criar o script start

  

![](https://lh4.googleusercontent.com/UqSsXPAXkciEfaB-_ckjBP4ulEPONvunp6Z88hTM6BCB84MIYYYesSLhaDqlb58D51teuMgHRBFOGy1qPx9CiPuSaa1BWK71BjMtX00BJOsBqd8gQwVFESTlgARFzGlXjidNGZpn0F_2GQ2O2r082z4)

  
  
  

## Executando o script

  

Para executar, navegue até a pasta Hello-world no terminal e execute npm start

  

![](https://lh5.googleusercontent.com/GjjNhNlTzdIL52bb8Vl1wnUrYPvC0prSbCDaHHHiDoESnMBFSND78kgG10M-MHNQ5Ca914rTCLWe-9Wso772VyT4q7Z49nTqdu4dynS3HwE5CnAk1C1Dgqz0oDfk7E7yYc-b6-cCha9op7fDkyPBm7g)

  
  

## Lendo input do terminal

  

Para podermos ler o nome e sobrenome da pessoa que executou o script, vamos utilizar um pacote de terceiros:

  

-   readline-sync
    

Documentação: [https://www.npmjs.com/package/readline-sync](https://www.npmjs.com/package/readline-sync)

  
  

Exemplo da documentação:

![](https://lh4.googleusercontent.com/ZtWLQ7KyqKqs_uv5sDZ2fUe99NETQJ_dUQwMAd_scu9PRvu-m6xvyWRxpogj3WTxm1oZovFWCbcpM11PAsTVeGkos2nVkpE9C_yIXn8qBgOvNYcUCIa34XOdW-EusP910uAcAHm3aY9rMOX5UHCKK5Y)

  

-   Por tratar-se de um módulo de terceiros, precisamos instalar o readline-sync pra podermos utilizá-lo no código.
    

  

![](https://lh5.googleusercontent.com/-SoUnScGWaaXGse4TGknL2G1E0WcpjSR6Mbh0tNEsZ3XEpaZRbALJT-G_w3kc_REek9eyV7Sa5TtWzt5ejdqDYPPs8RlBNlTgYf_Z97uY7aU08HMP2eS4yFrOkNLedOPfBOnhQJxaKgenznnUGcjIQ0)

![](https://lh5.googleusercontent.com/Qsg3wURd96rD0ZrqzPcQXwr0-00PtS7BoqC5To5_PU782ON0wzV1yryS1ynvlmB_uLY7U-nNhTAWupLk75yhz3K9L9hi5X30tjkW6J_u5O2FKe31-Oe0Y5pKHehWwXDAqOEvbrslzr7kxhWWpFSmTE0)

  

Uma vez instalado o pacote, podemos utilizá-lo em nosso script. Precisamos importá-lo

  

![](https://lh6.googleusercontent.com/6p6X03RNs19V9_QConIhmQZngHg3E7jACNnaZCzyaPVp0wxkcV-vvo3cgKL16aRKuKwdBYkRnv_fi9vWaqg52z6wF2NS9GwjsUVfWrlGy9suKytUsCNZFGC8TcnOTcgfG9XzQRINLm6TogReYdgzoa8)

  

Apesar do pacote chamar-se readline-sync, podemos dar qualquer nome para a const que usamos para importá-lo

  

-   Podemos utilizar as funções: question e questionInt disponibilizadas pelo pacote.
    

  

![](https://lh5.googleusercontent.com/7gSuOVFoXpvO3scvhDyFClDMyb9nM5PgrVTAD6-JEgXd2GLckSgFh2G1bNvAK5xWMkJVq959MNs8RJUMIk0cPSle9t98PG_L6Kl5g_VCbWt8fgvJefWnkNzfuzChPtXi8uL8qkOFwfehR4VjkfXbq9M)

  

Agora iniciando o npm start

![](https://lh3.googleusercontent.com/5Kk-OD2AqgPAl-bj23dyEtOvgUNFT3qBlVr1sKD5mQAHaEfoC2ywtofAeskpH_YrBAhyOtSSDjj36tgy_i8UIgMJED0iJVMYLdLVZTJyKWH_ENUI9x64gt-ZGsoYSIbPiJMmo_YkunHHAii9HFvXQ1Q)

  

![](https://lh5.googleusercontent.com/O8PDWZEADFrP_uak1D-OCQ5XNHcodGzgLP-wwNpvrOoeyunNxYTf1P69xFiABxnxyGk2gNAZIOlxB4ZqkERLWhlj6vFMQKJYmoDV-6mrdrPCUgT34VTTF570KDMpq1R7Dtj-KDdLga5VM3yQ-xjmsUg)

  
  
  

# Fluxo Assíncrono

  

Assim como no Front-end, as operações assíncronas são essenciais para as rotinas do back-end. Essas operações permitem que tarefas independentes sejam executadas em segundo plano, sem que o fluxo de execução aguarde pela finalização dessas tarefas.

  

-   Essa prática contribui, principalmente, para tarefas que demandam maior tempo de execução.
    

  
  
  
![](https://lh3.googleusercontent.com/Cfj60H4ajJf_XuOPV1qZEwhQY9S1XdxunhMi10QdnaOFX0jmePkfyAxg3Woq9pzIKKJwl8rnV9R1CMDGW1lzsbIM2LtVvc6nPvmGnvEPYuUxlpWNpXch9ESUeEtvE4tL6hZALt4_ecDBdnoT_Sg_SGY)  
  
  
  
  
  

Existem duas formas principais para implementarmos código assíncrono em JS, usando Callbacks e Promises

  
  

-   As Callbacks fornecem uma interface com a qual você pode dizer”: “e quando terminar de fazer isso, faça aquilo”
    

  

Além de evitar uma espera desnecessária, essa operação permite que outras operações bloqueantes também sejam executadas ao mesmo tempo.

  
  
  

-   Promises funcionam do mesmo jeito: Uma promessa/função é criada e, dentro dela, existe um código/ação a ser executado. Se o código é executado sem nenhum problema, a Promise é resolvida por meio da função resolve; se algo de errado acontecer durante a execução, a Promise é rejeitada por meio da função reject
    

  
  

Uma promise pode se tornar resolvida com um valor ou rejeitada por algum motivo. Caso um estado de erro ocorra, o método catch do Promise é chamado. Caso o then ocorra, ele chama o método resolved.

  
  
  

## Funções Async/Await

  

As funções async são, basicamente, uma abstração de Promises que facilitam ainda mais a nossa programação com operadores assíncronas.

  

-   Essas funções reduzem cláusulas repetitivas (boilerplates) em torno de Promises e, consequentemente, evitam a propagação de erros em promises encadeadas
    

  
  

Uma função async retorna uma promise como o exemplo abaixo:

  
![](https://lh5.googleusercontent.com/WKkcXY-0pqY5EOsfX-bNLlGmfpZ97Xn71A2Rr_R29zg1Ct_CRSe4wkU4hXU2Z41n-4LopGJGbbBtPH_zF6GGFDM4oDDjpJgQ0GPhDHqgmHyrux6KKEA--RbFgytn79Sgamicd-1tDbRGTc3R47CMcFU)  
  
  
  
  
  
  
  
  
  
  
  

Contudo, quando você chama a função dividirNumeros com o prefixo await, a execução irá ESPERAR até que a Promise seja resolvida ou rejeitada.

  
  

![](https://lh3.googleusercontent.com/4H1W5eEQZCKU3rQXeLN9pOdT7uVLOBwru6csrMmtskoDuq2T1uoZlom6wfASmVQADlqj8V9doEiQaIyjpU1Pw8t21iwGGLiWZrj4-t5lG0_XSS3Y-W0lIh8dELTsq65C8hmGMsW1VwiA8rWAN3xjzSY)

  

![](https://lh4.googleusercontent.com/I5Up95Poyn3N2XQy4Bb64DQQcO2NAfV67O3FhnDqSZhM1IFgHLGxvDMu-XTD7Zap49SeTI3ZhBQi_WbzEICpeuZQUCPTjmTbrZzRil9rRpI1dFM2_Tupw-2LdwUJo1U69UeaVn2jAV5VQcPTAf_N7hg)

  

-   Toda função na qual utilizamos async, passa automaticamente a retornar uma Promise, que será rejeitada em caso de erro, e resolvida em caso de sucesso.
    

  
  

As funções async podem ser encadeadas facilmente e, além disso, seu código será muito mais legível, se comparado ao uso de Promises.

  

![](https://lh5.googleusercontent.com/kzJ9nXonw6FT36GBHgACYW77rb-kZxRWmSGzea_k9UT1wbLkTvU3XaoxGc4Td5qL4yJdcaxF1o2bZQzqOrTXYRi4ae7ChNKAHBKaCVobeYFpuPbOf8sS8BHL0xUGMXeCQ8QV-KMbmhV4wbG9iRaGhdM)

A função setTimeout() está sendo utilizada apenas para simular uma operação que irá demorar, neste caso, dois segundos para ser concluída

# Leitura e Escrita de Arquivos

  

A leitura e escrita de arquivos é uma rotina muito realizada nas operações de back-end.

  

Por exemplo: Você pode

-   armazenar os logs da sua aplicação;
    
-   ler arquivos de configurações para ações específicas;
    
-   exportar dados em um arquivo CSV.
    

  
  
  

## Lendo arquivos com métodos síncronos

  

FS

  

Aprofundando no módulo fs do Node que permite a leitura e escrita de arquivos

  

![](https://lh6.googleusercontent.com/5VuFpeyiTr5iOyq-GadbDuj1nox0VhSWl0b9w5J64Y9FFdju9JSAOsowfkO5V_KZ3PoHfk4AL0COGjMSBDRD-IrIFrMUsCAg2IR_M5gk5Jl-0AVrwYVxGawvq_f1vJHATCR58txE2aYaIpOAj_uPXNA)

  
  

O método disponibilizado pelo módulo fs para leitura síncrona de arquivos é o fs.readFileSync

  

1.  Criar uma pasta chamada my-node-project
    
2.  Iniciar o nosso projeto Node.js usando o comando npm init
    
3.  Criar um arquivo chamado readFileSync.js
    
4.  Escrever o seguinte código dentro do arquivo:
    
5.  Importar o módulo fs e criar uma variável chamada nomeDoArquivo, contendo o nome (fixo) do arquivo que vamos ler
    
6.  Chamar o método fs.readFileSync.
    
7.  Rodar o script com node readFileSync.js.
    

  
  
  
  

![](https://lh4.googleusercontent.com/qcKHQUU4zrH37EnZfLE7FIKElYr99Q9TdE5GHbILJOYbIInkTEWZ9iMKEe_Y_4B3NV5znFo8ermLJ_i0pl3muZb3OIyy8PZV8ovgLa_nhMnbUNz0BZmI_JczXSCyGlVVzhb18uCJLwSy7gL3cdTxRSs)

  

Deu um erro ao tentar usar o node readFileSync

  

![](https://lh5.googleusercontent.com/cpHo3R6dTCQwhNe3jFtVoOckmKwqMe6kBLDLkIpQPGTfyFBvnKn-dcA0ZM__4El204vTH2MHozbtjxmTmJ_-A4f62jhIcZx_Nx_wl1crelH0WSidKsN2L175adnqYwUJLogqS1G2kKW5ngL6BncLEuk)

  

Isso acontece pq estamos tentando ler um arquivo que não existe.

  
  

-   O método readFileSync é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.
    

  

Por ser síncrono, ele espera a leitura do arquivo terminar para, só então, atribuir o resultado da constante Data

  
  

O método readFileSync recebe dois parâmetros:

  

-   O nome do arquivo;
    
-   Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.
    

  

![](https://lh6.googleusercontent.com/toTjYnqmNLRaW8hj44qtTI2bAXqW9EKR_vfpjBIFps2z4c5szREUh6Z9-61IDFrbX_PiBW9BMtIcaq7jk1eIfu0Tcw247JEAzwqrlNcj7kk16T2DQJfPLDU1igQNrGUaZOqC4_AXqzk3e3xlWGLiaJM)

  
  
  

No código, usamos um bloco try…catch para capturar quaisquer erros que possam acontecer durante a leitura do arquivo e imprimimos uma mensagem para o usuário no terminal.

  

![](https://lh6.googleusercontent.com/JgrB5V2MP0UAjZpYItNfNAKekDRvTDvOyx5txNbNDIryywKQww1Q35sZRhNVTYQStl6HpCeBjv8N4ymMtzHwobbwHJDzcZ4VkS_QZ7NDNvwzfC-FUVfKrnvbGpJkGTh9MPMUgE9XeWwbBFU7MG6Wkcc)

![](https://lh5.googleusercontent.com/fbGP431Cs0MJ4YQw2wEc3uhyb1whG5D4azhsYkCgQsq_yxPYTJAyKS42VXPFNk_TXhFW5T6mPz9tA5Az5gTCmANydhOvcdncx8PN8s3Gx6hVymYOYwsFa0gcfYXu2bl2efTNlNO0V-v-DLxyVJVm-co)

  

Visualizando o conteúdo escrito no arquivo txt.

  
  

## Lendo arquivos com métodos assíncronos

  

O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile

  

Esse método possui diferentes formas de retornar uma leitura de um arquivo. Neste caso, iremos utilizar o retorno de uma Promise que deve deixar nosso código mais legível.

  
  

![](https://lh6.googleusercontent.com/RbJf8b_b3gH3yR2z7vIb47hq9J9a2pQUOf3bFJYLoFPajznycKlYnIh7ierkdGUn2ouQGsjrHa1JGs64X7zdsMyD4LPaY67DjYR_MtXMVkBthj-BBQeuRYGZxXeqB7NlaMYfSMV0Ktr5W24XAieyljs)

  
  

Código agora de forma assíncrona com o uso de Promises e funções async

![](https://lh5.googleusercontent.com/NjCDEp3_7RJqZ_I-3W0ECwcX76yheF8mGcBuqicWShMB8yHw6LHyjf2AO80OqQWUTYbeiJAs0U-KhF0XslMohTSfI1o3BDs8XRr8Vyutw0B8op-nnzI6Nuqvx2d0sKj7kUWTGqSYGCgvnby7LeRKws8)Utilizar o async/await, precisamos criar uma função main e colocar nossa lógica dentro dela. Isso acontece porque o await só pode ser utilizado dentro de funções async.

![](https://lh3.googleusercontent.com/rQGmQ6CjOUbXmuuUVUHt5nZeXPN2G1mP9MP2vm3-5DmFFUMc_YEYd9ZP5DY4CkI5pwkZzL0P7Ie--t3WVCNttzm6QxtU8UHQRpJhE_9R8XbTQI1DQ-kzWgpuHc-D22fRTsb7Ls5JOQdp2iZIRYxAEr0)

  

## Escrevendo dados em arquivos

  
  

Escrever dados em arquivos é um processo bem parecido com a leitura de dados!

  

-   Assim como o módulo (‘fs’).promises disponibiliza o método readFile para a leitura, há também o método writeFile para a escrita
    

  

![](https://lh6.googleusercontent.com/3On4QepOlzoQykP_kz20XQqxqEE9YOKIMsm_H39ntQDqAqLipZMkCTHhQ6LdahVPABqT53lOcuihfBUIkt6x33DeGZ7go4_V_brglzLJIZ4ivJPW4x531HR3s3mAXF_VIQS1lYRjtsQGX99R_F7TQOc)

  

Rodando o comando node writeFile

![](https://lh6.googleusercontent.com/UNRSEdQXR5DYypuSj95y991EiF-ehTFRCrJzlGf7XYCuUphbgGDtkLgVsdTr2lAu1IpfUJ_tzRzQLqxgOICpOMm6uBqQIdM3N4Zt7_s2z11by0Hz14nPxT8KBzHUBn7PRvszrHIvpBmUW5nomllG_KU)

![](https://lh5.googleusercontent.com/1-VCM7X-giutgGS2sWJKPxGYQPTCm1MObk60GnxcLbxml402ANTju9VvdyA_b8uchdXSrUs_Uiec8KylSyS3YZQiA33kkdRxIwKPSNQzVEMKpKshEZ6SfV87w80mOlVZC43nMqN_83UUweml5N0VO98)

  
  

-   No writeFile, assim como ocorre no readFile, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro (flag) opcional em seus métodos
    

  

-   A opção flag específica como o arquivo deve ser aberto e manipulado. O padrão é 'w', que especifica que o arquivo deve ser aberto para escrita.
    

  

  

![](https://lh5.googleusercontent.com/XflJVIEv5pudp1C023Sa8R8oP51uX4ffArnv3gxPQU40G7QeRNBlb18n9GYjYc3SLt9Feqyf-vUNGpvEEHrtHfE-oIcK5VKnqDh6H_NhROhYVdmF9KMdMb6iNe6kEOJ2AxP3ZM3wd_p_G0DfnZPe7PM)
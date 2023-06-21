# TypeScript

  

O TypeScript, ou TS, é uma linguagem de programação de código aberto criada pela Microsoft e utilizada no desenvolvimento de um velho conhecido: o VSCode.

  

Como um superconjunto do JavaScript (em inglês, superset), o TypeScript foi desenvolvido para fornecer ao JavaScript funcionalidades que permitam às pessoas programadoras lidar melhor com diversas dores associadas ao desenvolvimento de software, especialmente em aplicações com milhares de linhas de código.

  
  

# TIpagem

  

Tipar um dado é dizer explicitamente qual tipo de valor ele contém. Seja um número, uma string ou tantos outros. É possível usar a definição de tipos em:

  

-   variáveis.
    
-   parâmetros de funções.
    
-   retorno de funções.
    

  

  

## Tipagem dinâmica e tipagem estática

  

Toda linguagem de programação atribui tipos aos seus valores, inclusive o JavaScript! Isso é essencial, não é mesmo? Se uma variável contém uma string, você pode realizar operações com ela que não podem ser realizadas com um número, e vice-versa.

  

![](https://lh3.googleusercontent.com/KJVmSF-SehcmSOOt5eTi2OG_PZVSGDSDPm9Dt0tzlA-a2Gc6KYxrmFbu-yyNePfL6FCjiOHf6K4gO7l6uJFNZsfT_uh6eRYYbVV4_UinioLJpf0qwpp7pj0MvpeKLZoOZx-bko7i4U4Pyw7OLcm_c6o)

  

Abra o console do seu navegador, copie as duas linhas acima e depois tente chamar meuNome.toLowerCase(). Esse método funcionará porque o valor de meuNome é uma string e o método toLowerCase() é específico para strings. Agora, tente o mesmo com minhaIdade e você perceberá que o JavaScript retornará um erro minhaIdade.toLowerCase is not a function.

  

  

  

  

Simplificadamente, o JavaScript roda seu código assumindo que tudo está correto e, em caso de erro, interrompe a execução do programa e exibe uma mensagem de erro. Em termos formais, o JavaScript associa um tipo ao valor de sua variável somente durante a execução do código, o que é conhecido como tipagem dinâmica nas linguagens de programação.

  

  

## O que o TypeScript faz de diferente?

  

No TypeScript, opta-se por outra abordagem na atribuição de valores. Nela, em vez de “ir na fé”, o TypeScript toma nota do tipo de valor que sua variável contém no momento de sua declaração e nunca mais te deixa mudar o tipo da variável - se quer uma variável de outro tipo, declare outra.

  

Antes mesmo de executar o código, durante a fase de compilação, o TypeScript analisa todo o código, verifica a consistência entre o tipo definido das variáveis com o tipo dos valores que elas recebem. Caso existam inconsistências, o código não é compilado e as atribuições erradas de valores são sinalizadas para serem realizadas as devidas correções. Isso é conhecido como tipagem estática.

  

  

## Inferência de tipo

  

Veja na prática como o TypeScript “saca”, isto é, infere o tipo de uma variável e não te deixa mudá-lo depois

  

![](https://lh5.googleusercontent.com/6gMWXzhoUkY0zEgmI6NckMvFiKMG1lWvPX3P4ECj_fBN29WQsM6shBSm1WPnSnKi8kTBHp9bQpV7R0GKIsEDoGLVNcfD-Q5dJ_3p7papBEEQ0mp1v8M3vFqf8z2J0I01R4vUWv0nFY7oQBRxrpILRd4)

![](https://lh3.googleusercontent.com/DQKUlTcim2utCqW-Kmla8T-Um_EEYxVJu90Vgc-I7M4Tq8Wrg6gDIG96EEzgGP3ViH8W2cGnq1eNNqD_xbBqA9JX0DtHlQ10mnuk1t4MPpT8j95VMzfWOXqO6vm5R_KtsakMb-2CQ3XmfR_ITNIcwzM)

  

Você verá que a saída da execução desse comando é “string”.

  

Passo 2:

![](https://lh4.googleusercontent.com/vnpfwEOyBbSzRua_dX3ToN3S90C1HQu8cVvtDXEgp7_c0ONMGNcD4pF6c1jP94CudnDxJOQzr9HSwT-bb6bA1wy09Q35Z1sjemf8OMsowP-jZGGxTqcbEe3-vjmKFQ-ydnS6SRqt4UQSZiD-DyHGlzw)

![](https://lh4.googleusercontent.com/VCrTq9iAl0ghr9iLpP5aJ8tHf3LpuWQLmOwFZSn580IRl9oK_M-i43j7UfeUb2dcQ3BvkfBRHegefyVf8f05xS5woJTFAmxH3Ib4oI8UawLr0FIKz2AR3l7lZ6NZMsLDaHWn1GAXX4GQVTaEHTIFpR0)

![](https://lh4.googleusercontent.com/TWZMaj1YEHs0vBYoJ26D9UptvjBEJk36yoG87D1raxX_dwrCnPYbfvTewZhdVEvBEV7k_ZtCAXzQkAdVMudGGgaI1d4SuVtjhNgcbU7S8JfDD098foFyqPZtV7KZHyGIsVoEhAqy9rdS4BCjNxQGKzU)

  

Ao tentar fazer a reatribuição da variável com um tipo diferente, vai aparecer o erro Type 'boolean' is not assignable to type 'string'.

  

Esse erro acontece porque o TS infere apenas o tipo inicial da variável. Depois disso, como a linguagem tem tipagem estática, não é possível alterar seu tipo.

  

  

  

# Compilador vs Transpilador

  

Quando falamos de TypeScript, os termos “compilador” e “transpilador” costumam aparecer com certa frequência.

  

  

Compilador é um programa que traduz o código escrito em uma linguagem de alto nível (ex: java, javascript) para um código equivalente escrito em uma linguagem de baixo nível (C, Assembly = mais próxima da máquina).

  

Depois dessa tradução o código pode ser executado.

  

![](https://lh4.googleusercontent.com/rWjO9Vrxc0aaKbXXvR_YuJwytSFSDI55zQHseUQJdX9yOrju5yOe5DtVuYv4oMztIb9Jod-dRftcJavCr6kX6nhegyYTxl5gUGMn8HK0Pj0H58npJjawPGZlfFAkSzjHdxJjj9n1Ibq9SCGJAfj7Uko)

O TypeScript é compilado antes de ser executado. Já o JavaScript pula essa etapa e é executado direto. Por isso, somente rodando que o JavaScript consegue encontrar seus erros.

  

![](https://lh5.googleusercontent.com/OQKZWDrYIIrs2iUh7ksmAEgNyyWUXsPral_iL3s4gHmVwOPmcpPIQBEkP2aS-EYqrMUUxHYc9pDlga7DSi3vVyr91O7iQGBHjA02LDSjxm6YA5aBQ04FNC4GobdZqmTz9aEWNdmDCnq93faGARA4eic)

  

Imagem mostra o fluxo de um código de alto nível sendo compilado em um de baixo nível

  

  

  

Transpilador - É um programa que traduz o código escrito em uma linguagem de alto nível para um código equivalente em outra linguagem de alto nível ou uma versão diferente da mesma.

  

![](https://lh5.googleusercontent.com/S3XA_y0Hhu8E01PxtUdKAmEqnwcS9e6AxEBGdhPw5g_Y51lN5wjebDYnMjpADiGfU8viGX-sfDsAz6UO0MrGbLf3neEW0Noi8tAP2F0WDx_VHLbCycpvKJSrgg7orcOA31zxRam78FtxDsGg7RyRW2g)

  

É possível ver referências ao TypeScript como uma linguagem transpilada por ela ser “traduzida” para JS, ambas linguagens de alto nível

  

  

-   Contudo, além da documentação da linguagem tratar esse processo como compilação, o TS tem um compilador, o TSC (TypeScript Compiler), e é essa abordagem adotada aqui.
    

  

  

  

## TSC - TypeScript Compiler

  

Resumindo o que você estudou até aqui, o TypeScript é uma linguagem estaticamente tipada e tem o TSC como responsável por compilar o código TS em JS, fazendo as verificações de tipo no meio tempo.

  

  

Agora, veja como isso funciona já em sua máquina! Primeiramente, em um diretório vazio, crie um arquivo hello.ts e adicione a ele apenas o seguinte código:

  

![](https://lh6.googleusercontent.com/qplfTec31Q-_m-8IkegI3wrklXRrNPCIRIXd6B_xtyQ9TRm_OhzwOnJOIarvhw7s-0MeGPUverDLHPqojzVUw-7E2Qpp4bR2puqXbL21GMf86o5dUBUXDkw36nDI54EpYr5YD7LlSQW7XIo_Dp4zgkI)

  

  

Para executá-lo, é necessário instalar o Typescript, seja globalmente, seja no projeto atual. Para instalar no projeto, basta inicializar o package.json e instalar o Typescript:

  

![](https://lh5.googleusercontent.com/aCgNSU1e9HneB-lQwHTQFAc5FxTAI_GBHvSgKpEqaTdFgQe_cwn4KzO9XVmFf79OZ9VFBhUJ7s8XiiD3Cvj-EKsR7-nVI1XihI8L95CmXNtReIzhCnuQ6TaKRQTm5DdMF4o8BQafNo8lJsJhWKZ_9KM)

![](https://lh4.googleusercontent.com/sL-4RfDEnuC9gWoZuE02e7P2keXsAA6xQFIg_RhMZ2tu0W4pR46JbasHoH1CDeqls9WkTTbjwh5Iv6WV7tjqV12WNhsloa8u0mk71Gl2Yx5CY68aKeGCL3yy2VwhtT7ei-v0iM8oc2vUmLQOOeip-s0)

O typescript precisa estar na dev

  

Com o Typescript instalado, podemos rodar seu executável chamado tsc:

  

![](https://lh6.googleusercontent.com/OTed4mMk0iNfZx5xq0o3pJvxsNwJUdglKIOMUo3IFsteh5X2f7gOyJbnJ1fUk6C2ieaCirkl7n3jSqX5COVPSyBKy9Zhe_9RehzMrURzaLfDf-5QgiJjFoT70tjKa9n2v1G03Sh55tATQlsA-ZHodoI)

  

Ao rodar esse comando, o conteúdo do arquivo hello.ts será verificado e, caso nenhum problema seja encontrado, um arquivo será criado com o nome hello.js, contendo o código compilado para JS.

  

![](https://lh5.googleusercontent.com/YRRmN0RHqHWhujwRJ4H0L5yv9YJed2ji2vFXZifhui0Ofr2PVayskb3IDH86B2uOkJnJTzwx2laiXgbTZGE08hPsvfY5junxQb-e2fOlWEkJgufdzahnUqbI62A5dresc15Il6x5EEjhfxCnjrrfehU)

  

![](https://lh6.googleusercontent.com/oK9WsX10zTiWNZ8ZSLZD2MorX_kWfZFOhBgmPwzNg1TL0xxpzviAn_bYH1iKjoACV8pbz-ZZQd9wPqSSINmqAShRAOU_4EOAztNX-93KBObBS7YgbHErWTdXfnWKUaAVkloJFTftscTQydFhkCbQGpA)

  

  

Para rodar o arquivo gerado utilizando o Node, basta executar node hello.js no terminal.

  

![](https://lh5.googleusercontent.com/WmgFzAMGLX2l2MJ7HgOZmp_MNJiF4NFidMhss0aDimDYvqJNuLAlRffbtWObDQuCtXEtsdxzkSRDw5IKd6S8JKeos2HTKtb4-sNZt5bWvYpPMFyiPwEReBuZMF9oKiQ1LtgAXlc8BS8Z8uToGFBVZSQ)

  

#### [OBSERVAÇÃO]

Também, é possível instalar o compilador TypeScript globalmente, mas é recomendável instalá-lo localmente em cada projeto, já com a versão adequada, para evitar possíveis conflitos de versão.

  

  

  

  

## ts-node

  

Uma opção para otimizar esse processo é usar o [ts-node](https://www.npmjs.com/package/ts-node), que, em linhas gerais, vai compilar seu código TypeScript em JavaScript e executá-lo usando o Node com um único comando.

  

Outra vantagem desse executável é que ele faz esse processo sem gerar um arquivo .js para cada arquivo .ts de sua aplicação.

  

  

Instale o ts-node como uma dependência de desenvolvimento para que ele fique registrado em seu package.json. Para isso, basta entrar no diretório com seu arquivo hello.ts e executar o comando:

  

  

![](https://lh3.googleusercontent.com/QHBk4X14oC-fdQDuCjK4jiWcZn47-oebZN8QxYzFNLOQFSY-leoloIlDuVEp93jx3jOABEBsks6rED_A2Cf6ZmxLaykJsBlrFm9klestjLVpgw1RXqyi7-f1ZB9bC5gPpSRr4FIyZhvlmGqB3_Ns-1k)

![](https://lh6.googleusercontent.com/mmLMz3_A0TQrL-RvYWl70KI9o4oh4VxSpQw_3S1jFTFfqOUqN_l_-G7gmwgIYyCHJuzSMF82lHgHFQ6rpP_Lk7P5u1xKnrnI3YCkLRUxw77kNYS1_OmcUu89PLYTBj7oR4JQWa3d_TyMtMyosY4BlCY)

  

Em seguida, você pode deletar o arquivo hello.js criado pelo tsc e utilizar o seguinte comando para executar seu código:

  

![](https://lh4.googleusercontent.com/9d8o417yfJDmGG50c8uj6i7IMVL-vZoRI5lBtYT22HBlSFk3ZzWS9ZnFcr0DYbty0c-Putq4HuD5icpYbQR54ta9KmPulHDVPqZlJoSAYbDp2Snp4OyKtGDC1FlIjchvVZzzZJZ0OdejPa2gK_r7Mxo)

  

  

  

# Introdução ao tsconfig

  

O arquivo tsconfig.json é o arquivo de configuração de um projeto em TypeScript. Nele, estão especificadas as opções de configuração que definirão como seu código será compilado.

  

Utilize o tsc para gerar o tsconfig.json. Para isso, a partir de um diretório vazio, execute o comando:

  

![](https://lh4.googleusercontent.com/iNOMseZD7TJTrd6imY_EWwjw0oP-jNvwJdwmMw6s_CchPwKg5z6wAkczMsZcxn9pPsmQEJSNLph_xPxi6-8LS0h2Z_9kjtDLCNkEGbWrfFPWD8TvhqhcYZGxvGmkMQvQty4QVTici25vLsaJa1qE35w)

  

![](https://lh6.googleusercontent.com/n3i3Ac4zvIkXws-BZCTIHSp7PpQqQpcNoNgBEjCMj5yUjTaaXEtgpNlCQ1uzZm-sARMob6M4KVCXoE5UXSqTY4ugsvKH4X8sXzStS6UfsWIz0IObjNF8WfB2OmYBJ1Mm3KLQGnR0cPkqEHZM3kL9VKE)

  

![](https://lh4.googleusercontent.com/VRgyNP_C89Lm1MUCYrOhrTEihlxJyl94TDoN1yB26QtJtVW_SlDJYHEmj3W7DQiirdzSmdooYdcBGfSADcsPOH77RHDzQBnc1uD15xkCNNqQp_yzfo4DB3QIqmhqlrj63QpoAk8MaoBXy8EMfuhUjhM)

  

Um arquivo tsconfig.json será gerado no diretório com o seguinte conteúdo:

  

![](https://lh3.googleusercontent.com/tymI6LRiq0MrTxQPT9RIjacfH3k1sb68JIMTLJrlO5WeMJz3T1uNoK_kLbc04u3hWLTvMq7ZNtJ3bCgDs3FtC38qjconNr7GWNZtO004He5zRMjfTAQXWZN7VQ7nl92cb6aPHf76ciUwOFQivPxeOjQ)

  

Além de fornecer as principais configurações (com comentários sobre o que fazem e quais são os valores aceitos), o arquivo gerado tem uma URL explicando mais sobre o arquivo tsconfig.json.

  

  

Vamos analisar o que já vem configurado no arquivo tsconfig.json e o que você precisa para criar o primeiro projeto em Typescript?

  

  

#### Configuração

  

-   module: especifica o “sistema de módulo” a ser utilizado no código JavaScript. Leia a documentação se quiser se aprofundar, mas aqui será requerido ‘CommonJS’ quase sempre.
    
-   target: define a versão do JavaScript para qual o código será compilado. Exemplo: ES6.
    
-   rootDir: define a raiz dos arquivos do projeto. É comum utilizar “./src” aqui, já que é onde os códigos-fonte costumam ficar.
    
-   outDir: define a pasta de saída do código compilado. Pode-se agrupar os arquivos .js gerados durante a compilação em um diretório nomeado a seu critério, mas é comum usar “./dist” ou “./build”.
    
-   esModuleInterop: permite a compilação de módulos ES6 para CommonJS. É isso que possibilita a você usar a sintaxe de importação padrão do TypeScript com módulos do ECMAScript, por exemplo.
    
-   strict: ativa a verificação estrita (mais rigorosa) de tipo.
    
-   include: inclui os arquivos ou diretórios mencionados na compilação, como “src/“.
    
-   exclude: exclui os arquivos ou diretórios mencionados na compilação, por exemplo “build” ou “node_modules”.
    

  

  

# Tipos primitivos

  

Em JavaScript, um valor que não é um objeto nem uma função é de um tipo primitivo. Os mais comuns em JavaScript são:

  

  

-   string: uma sequência de quaisquer caracteres que pertençam ao padrão UTF-16 Unicode.
    
-   number: recebe valores numéricos, sejam eles inteiros ou frações.
    
-   boolean: recebe verdadeiro (true) ou falso (false).
    
-   null: representa a ausência intencional de um valor. É como dizer “aqui não há valor e isso é proposital”.
    
-   undefined: representa a ausência de um valor cujo tipo não foi explicitado no código.
    

  

Todos esses tipos primitivos têm um valor correspondente em TypeScript (com os mesmos nomes). Contudo, o TypeScript tem um tipo adicional chamado any.

  

  

  

Criando os exemplos no TS

  

![](https://lh3.googleusercontent.com/8yrFWYxA-jGTxAFLglFnWPtipUYqeMsXaOdfZuM_oYzLlfIZuxesh3yqhy8XNbpaw0W5q6nusS0cBHmMOmve9bLtX9dG7ETAIfROygkmOtvZjGN_-4mmEt5zV_bK2ERQaNfSXjJM9_hin6MxHjU-0MQ)

  

  

![](https://lh4.googleusercontent.com/wwl7bqvNkcn3kPZOBC7HVVljUH3xNfQPma3eLf8yxHZsz5fE15OqkqHI0DSmGkCTsDX6XBdIGb6hINuOaIRLbtzz3qSTWALrkoYqOcN10oG_igpLm69nEU2ln60_eA2YxYUy4jgxrIsaMpeRZOPdP5c)

  

  

##   

## any

  

Esse tipo é um coringa. Ao utilizá-lo, você afirma “eu não sei qual é o tipo desse valor e não me importo com isso”. É uma forma de desabilitar as checagens de tipo e sinalizar para o TypeScript que você não quer que ele faça a verificação de tipagens para aquele valor.

  

![](https://lh4.googleusercontent.com/C1cuf8Ffryl_cxIJDIkhTjLVKKMPJ2-btOMStRXfZd5mEFzJQRJRwvnK09F6CQov1qk47JkACAnD5JyUiTVMXFcpLWo7c1AtfFEyi5rg7NqenhM_ECM7mAQO6TvbiY7eIhjVo2xXgW5NVGFMdLjlnko)

## No implict any

  

  

![](https://lh5.googleusercontent.com/JkfIY1--sJ84Fgbgv8NV_lKCf-E--3818qk5aG1Emvkl7gT5YepPkUmZRRejbl1z2xqzv2JUiU64UD0fDOUNp5N1pwmLHwcxx0NBez4GpyL9IPz7w5mqXBM7B744todkVdgXioz66XgCYDU6IULbn2c)

  

Quando o TypeScript, por alguma razão, não consegue identificar o tipo de um valor, o tipo any é inferido e atribuído a ele por padrão. No geral, não queremos que isso aconteça, e sim queremos garantir que as checagens de tipo sejam feitas e que todos os tipos sejam identificados.

  

Então, é comum que a regra noImplicitAny esteja habilitada nas configurações de projetos (arquivo tsconfig.json), pois isso faz com que o compilador sinalize qualquer any implícito como erro - quer dizer que ele não sabe qual é aquele tipo e precisa saber.

  

  

  

## unknown

  

Muitas vezes, ao consumir APIs externas, por exemplo, não se sabe qual tipo de valor será retornado. Nesses casos, usar o tipo any poderia parecer uma escolha natural, mas o TypeScript oferece uma alternativa mais segura: o unknown!

  

Ao contrário do any, aqui você está dizendo “eu não sei qual é o tipo desse valor, mas me importo bastante com isso”! Desse modo, o compilador obrigará você a determinar o tipo de qualquer valor unknown antes de usá-lo, o que garante tipagem mais segura para sua aplicação.

  

  

  

  

  

# Type Annotations

  

Durante sua compilação, o TypeScript infere qual é o tipo de seu dado (variável, parâmetro ou retorno de função). Contudo, você pode dizer explicitamente a ele qual o tipo daquele dado. Para isso, você pode adicionar uma anotação de tipo (type annotation).

  

  

## Variáveis

  

Para fazer anotações de tipo em variáveis, você precisa apenas colocar : após o nome da variável e, em seguida, escrever seu tipo. Por exemplo:

  

![](https://lh4.googleusercontent.com/9pSH-bZe5I3BsJl8AL16Yx76fjG8639H9SfBEIxrYQcXwcE8aMiwvw5waGjEnZLa8C_LxnRapNkURzl-SKhlxDrGQfdirigf1sphKFYUle3lu5j0N5mW9OryVNUzyQGcjht7TwbXU6F-3Vn0vgQGHtA)

  

  

## Funções

  

Quando se tratam de funções, há valores de entrada (parâmetros) e saída (retorno) para tipar! É importante explicitar, sobretudo, o tipo dos valores de entrada, pois uma função pode ser chamada com qualquer valor e, por isso, o TypeScript não consegue inferir seu tipo durante a compilação.

  

  

Exemplo de anotação de tipo em parâmetros:

  

![](https://lh3.googleusercontent.com/FpVEhpCEN33hrjGMoAMpgJRNKS85nbz1j5JS_U9k2D0uOjDq5I8XncM-3-n26NJfrDpAIjM_g0TZUDgTnxTVTc0-Fufm4uNrmRffmpA7yuYY2k9YGVU4RYrhfnF3MoUL5MB9_PSWGGatmbf_hhB0-ws)

  

No entanto, se você tentar passar um número, por exemplo, receberá o erro “Argument of type ‘number’ is not assignable to parameter of type ‘string’.”

  

  

Exemplo de anotação de tipo em retornos:

  

![](https://lh6.googleusercontent.com/b5SW0qBkHw4xbkvLOlbDxEmFTwrobnVuOGle-GfVGujojcXwln23WdCmVXJlqNecIVS0FTrmJn44eFatmMnr6HmsZSx-RvVaOiTlQDIg6pDiKGDvvUKTVI5KGalxSDlyqddhPfJeEh12uPFzgI4zR3E)

  

  

  

  

  

Exemplo de anotação onde a função não retorna nenhum valor

  

o tipo de retorno será void!

  

![](https://lh4.googleusercontent.com/QEkzVWc4SgRecVkH2LDb2KMl5ARUS_fLMGpm07oCBkxfH_sqtg0qMChe2bEn2X85YaOR8I3ajT24RFCSc2tk2j6lLyBW_XDm62dUuyUm1iRtbNG6fGRuDCYjIK6eMSmpXP4QFBpip73pFxxHFH7dzWw)

  

![](https://lh3.googleusercontent.com/GHM8p9HgYSczzwhVajzPETBSjcjzAgQoeqltWk4tFqXDbONTChE3AVqWn182pFMIshlpwMIwmUrtQCt3efBhCoPQ42Q7ohVDyoqP-e8heDuQeh5sP3IeDqqmMs5DJNwiWLG58IyRYntG0z9hwnPnRhU)

  

  

OBSERVAÇÃO:

Algumas bases de código vão preferir explicitar sempre todos os tipos, sejam de retorno ou outros valores, para fins de documentação, a fim de prevenir alterações acidentais ou mesmo por preferências pessoais. O princípio “Explícito é melhor que implícito” é adotado por muitas organizações.

  

  

### Que erros a tipagem previne?

  

Conforme mencionado anteriormente, a tipagem estática pode prevenir alguns erros de forma mais eficiente do que documentação ou testes automatizados. Para ilustrar esse ponto, considere o seguinte código em JavaScript:

  

![](https://lh4.googleusercontent.com/DjeFIPKe1gyloFIqObZwCHYT3FwhaZUEuxmYysS9gvP5w5p7zPSsg_HXTz_Yq28YcO5K4WgwywqMo_nn_t_a-GrpoaZVumRMj51y03YH3t8H2fMPoM2d5tkjGWO-YAFdtYOdGsrsSfG43-JH3lZzm08)

  

A tipagem estática impede o erro de acontecer. No JavaScript, a função acima retorna '12', e cabe a você descobrir, depois de algo explodir em algum lugar lá na frente, que o problema era aqui.

  

  

  

## Listas e objetos

  

  

Comumente, arrays (listas) e objetos são utilizados em códigos JavaScript. Em TypeScript, não será diferente.

  

### object type

  

Em TypeScript, o tipo objeto é basicamente qualquer valor que não seja um tipo primitivo (string, number, bigint, boolean, symbol, null, ou undefined) e que tenha propriedades.

  

Para tipar um objeto, é necessário apenas listar suas propriedades e seus tipos, como no exemplo a seguir.

  

![](https://lh4.googleusercontent.com/0xioRKmqg9CH4N7iVz4T5q3BhomN5QAMVoiDHJ6XMBttJP5yU8APGTpQOh0TnlS4LVOO8yshxwB-IlfV2x5Lh--ta-KlPv5Q1FpKGh62ERX2d1ZRpUXrImoZCc_EFKndgnwCq9AiPtECrsc31rEd0Gk)

  

![](https://lh4.googleusercontent.com/9a7Jnpk4AR72CLwNLP9-DNGMpI-JUxWjeytVJ7YWLfDM9B76Nwnn_C-jly_i6mVrwj_03WyROLjw-nSBPcq2oLsePYwo2K6D71Q2u8EF1mdtZLHSoASfxOAlI6C6Vckzqj9qFEkaECp1JGvvZLyJ288)

  

  

Também, é possível especificar o tipo dos elementos de um array, o que é tipar o array em si. Para isso, basta inserir os colchetes depois do tipo dos elementos do array:

  

![](https://lh4.googleusercontent.com/Q1t9B5eCaDgWVvjJnlUXEU199z1kxwBnc8V0StFFcFTYVMARYRR9uOztaaeM07CzBYPPotRB9QLMIQGe7hNwkYyVl33Cft5t5wx1RlsmBWkL8JUALL3FU3Z_ohBDGqC6huQgxeaaz1grHgrk03o9BL8)

  

Portanto, não é possível adicionar novos elementos a um array se eles não corresponderem aos tipos previamente determinados.

  

![](https://lh3.googleusercontent.com/D0ni_8GtGgGjt7thPKFa3yWSx4n6odq7hshBcj9mky7oun97Rw4HIc_Tq6kebtmSsbn9HWDr-xT6EWaWHxTvfdDMnzKCXOMWm4ALYKElzn1lFHdBp4NWP0ht6ULVrkq3Bf3Me-hHpkPEbqLB95g2VEU)

  

  

  

  

  

# Combinação de tipos

Lógicas onde as variaǘeis precisam receber tipos de valores diferentes.

  

  

## Union Types

  

Essa estrutura é formada por dois ou mais tipos que podem ser atribuídos àquele dado:

  

![](https://lh3.googleusercontent.com/WJRM-YLNn19WuNRpFoLlUi94TwM4IancgSX4VS_izuVr-uRKtF5lBoz65W7nE8_-bDnu1vtjzXEV1Xj597Xv_0v-ofBqv_EDTa4L77hviNPoy9gG4vbdzi8VaCPCe_J8bUxQZ_ojCik1getoCdNHCTU)

  

  

  

## Type Aliases

  

Type Alias é um modo de reunirmos alguns tipos específicos e chamá-los por um “apelido”. Para isso, utiliza-se a seguinte sintaxe:

  

![](https://lh6.googleusercontent.com/r7_KH5r2SOHjMlIYtogEjqlb8vOagVqI0tQGCJSMsuu9OhO4UZU_kVyfulrYmi3JNcMiBSzq7hg34e5Pah2e8PGA4xDb1PB924hNsIC3eZamRBD7q7r-ppha-cbQKGA0gm0sKLYnP7u65nQ8kC8LgVQ)

  

Agora, você pode utilizar o tipo criado para definir os parâmetros da função printPersonalInfo

  

![](https://lh3.googleusercontent.com/D14rOE0blnZQMj33Byw0mslmrilvEQ12NHYFnYIrfmAxlLv3j36oChefPG8an-pV0iIo4-b_kv3JU_EhADKTGXyQn2ajD2HCfiHvIXzPTy2czrGGSgty9iuelq9qWT8vTRTyVokIKPAZsLTHUXJBq9Y)

  

  

Você pode usar type aliases para dar “apelidos” a quaisquer tipos que você queira, utilizando inclusive união de tipos para isso. Por exemplo:

  

![](https://lh5.googleusercontent.com/oBD2FaPtxfap0sUpVn3vQqTGyIsRVfIkPA9T8g_mqfVYmjTVqzcH1bb5jIWLvaqk7zgmVo14LtSCTjlw0-NT9OSMWCGabQ-8KCApjXA7aKt_k9SA-zPA9LeFTawK1TsNrvjfOLSEwgGzLD91CitYKBo)

  

Outro exemplo:

  

![](https://lh4.googleusercontent.com/SptlmJU9o_pJbZe3fRoONty_o05p0o9ohkahdaPgjWfp9A9hQDWQ1jiibNa6XhywCAtHQSGzAOzrNaGEbJSRyshYYnzFcJrBUBMxwoFpCWI5eRDFE5etGaf1kY_qQ-HnJC1OMnRJ9nB6RMzBvNaLjA0)

  

  

  

## Type Annotation vs Inferência de tipos

  

Agora que você já sabe como fazer anotações de tipo e já viu que nem sempre é necessário explicitar essa informação, talvez tenha surgido a seguinte dúvida: “Afinal, quando usar type annotations e quando deixar o TypeScript inferir um tipo?”

  

#### [ATENÇÃO]

Em linhas gerais, é possível saber qual é o tipo simplesmente lendo a linha, sem precisar explicitá-lo. Isso só deixaria o código mais verboso e não melhoraria a legibilidade. Portanto, é desnecessário tipar variáveis e objetos simples, com valores inicializados como string, number ou boolean, por exemplo.

  

Por outro lado, quando trabalhar com valores complexos, como objetos e funções, faça anotações de tipos. Como já mencionado, retornos de funções são valores importantes de serem tipados, a fim de certificar-se de que ele será o que você determinou. Além disso, na construção de APIs públicas, tipar os valores de entrada e de saída de funções pode ajudar outras pessoas a entender como utilizar sua API corretamente.

  

  

  

  

  

  

O objeto abaixo contém um exemplo de valores facilmente inferidos pelo TypeScript e, portanto, é desnecessário fazer anotações.

![](https://lh5.googleusercontent.com/RN4ppjVvPDopi7orjvGfw_ZFVbnT4ZJk2Rh4We8iPDNddsHP8Nqn8ZhXh4arnSi4cwQw02qfIiYM8pj212J_WvlFASmzfoDNrJq530Df8EJqZTmvYN1lYvNhjP96XdAFStiToPjGKcH16vKmAVuWBsA)

  

Se você utilizar uma função, é necessário fazer as anotações. Execute o código abaixo no Playground do TypeScript:

  

![](https://lh6.googleusercontent.com/nvUMNRuwRhoy40JHvcAKhReKtrqNumrCa_jExzU3l3LNmHhSgQS2X3u0WXjK-Y8rU4egmbDgBqf9yrpj7ht6v1LbM0Ro6iuMN-hHt-bY_jBUYFVoierxwzBzitp0-6dtFA3500LEV7rL04kr8HEkR1o)
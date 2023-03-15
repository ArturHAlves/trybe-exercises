Ciclo de vidas dos Componentes

  

https://pt-br.reactjs.org/docs/react-component.html

  
  

Todo componente React tem um ciclo de vida (Lifecycle)

  

O conteúdo:

  

Cada componente possui muitos “métodos do ciclo de vida” que você pode sobrescrever para executar determinado código em momentos particulares do processo.

  
  

Os componentes React, assim como os seres vivos, possuem o ciclo de vida.

O ciclo de vida do React é divido em 3:

  

(Nasce - Vive - Morre) -> Forma mais mórbida

  
  

-   ### Montagem/ ComponentDidMouth
    

Componente está montado -

  
  

Montagem(nasce): Quando o componente é inicializado e inserido no DOM.

  

Ordem:

-   constructor( )
    
-   render( )
    
-   componentDidMouth
    

  
  

-   ### Atualizado / ComponentDidUpdate
    

Componente está atualizado

  

Atualizado(vive): Quando os props ou estados do componentes são alterados

  

Ordem:

-   constructor()
    
-   render()
    
-   componentDidUpdate
    

  
  
  

-   ### Desmontagem/ ComponentWillUnmount
    

Componente será desmontado

  

Desmontagem(morto): Quando o componente morre, sumindo do DOM

  
  

### Ciclo de vidas

![](https://lh5.googleusercontent.com/9O33uHb4urLlDsZjQ_UpWRnvZo_PgfoWmHSME6rn4CI6RyWaeqSHiIsUad4zxTLAl4XaB5aLSY0PluxgqTllEhh1Dtgh4LVGz9YDSSkx7W7HgK2E7wZFYVZbYU_9_BFvdmyaJnDG5t6ly9pFDYqRB8w)

  
  

#### Funciona da seguinte maneira

  

O ciclo de vida e os principais métodos funcionam da seguinte maneira:

  
  

MONTAGEM:

  

-   Constructor - recebe as props e define o estado;
    
-   render - renderiza o componente, inserindo-o no DOM
    
-   componentDidMount - Dispara uma ou mais ações após o componente ser inserido no DOM (Ideal para requisições)
    

  
  

ATUALIZAÇÃO:

  

-   shouldComponentUpdate - Possibilita autorizar ou não o componente a atualizar;
    
-   componentDidUpdate - DIspara uma ou mais ações após o componente ser atualizado;
    

  
  

DESMONTAGEM:

  

-   componentWillUnmount - Dispara uma ou mais ações antes de o componente ser desmontado
    

  

  
  

# Entendendo quando cada método é chamado

  

Exemplo de aplicação para entender:

  

![](https://lh3.googleusercontent.com/QNnCFBIokPSQbgM3jfLEJhIE8r9IQsTcP3-utQeDiS11-qbE2M0PwrPkL48fcFqsvivS35lJ9xOuqA2z6k44YwsNq1zUH9a-8FBCJW75JYFSbTVhcr0VLpwtMZ8q8VVhOKQEglVflEua7IH2boxLKDY)

![](https://lh5.googleusercontent.com/Yz4WGWKsGYIeHYfqC7_fgYFbk2wtmh92cdtX1rF9OAN-VjToFIYZJHgYsZA1b36ZNXbgkpjmMPx1_WeWyvqqLJgXX8ctvu250bLr86oLy7lkkZHUQtu66vgYHYOXMuLMdzLKj_RByT6hjpF5TJHYFaQ)

  

Essa aplicação tem um botão que está atrelado ao estado inicial counter: 0

  

E que cada vez que clicar vai iterar:

  
  

Ao executar o código acima, sem o clique do botão “SOMA”, aparecerão as seguintes mensagens no console

  

![](https://lh4.googleusercontent.com/TcQKNNKyoZt3-2TG3bHf5Vy4segqMfQzNye7gootyuOO4SY3wb6U8j54aG5YwgM1zsKBA6so7XyCWp6Qg8yBEqltgFghzHtZLgVzYsD1mzmM_rWHKN_fKT6O-35NaMxts48I2rozu0uQNG5zI4CiQG4)

  

Ordem de chamada dos métodos. As mensagens refletem a ordem de execução dos métodos de ciclo de vida do componente.

  
  
  

### [IMPORTANTE]

  

Os métodos shouldComponentUpdate e componentDidUpdate não apareceram no console, pois não houve atualização.

  
  
  

CASO O BOTÃO SOMA, SEJA CLICADO, TEREMOS MAIS MENSAGENS NO CONSOLE.

  

![](https://lh4.googleusercontent.com/l6Q-qZDO6VlK1eU3qUjYp741PxgfjkxFSEL6m3_JiGMb6XBVyhbo0R7xSEP3WS-pbbmerfH3fH5wP_zInJiJ1Yh4n6YJOhWvHUHK7bcM2uJafNBsEAnMCOvCF5Yle-8t7Wr_Qi6jMxz0ITWiAgbI8N0)

  

Note que o método é chamado novamente. Isso acontece porque, quando se atualiza uma props ou estado, o React “pede” que o componente seja renderizado no DOM.

  
  
  

Nos métodos shoutComponentUpdate e componentDidUpdate, podemos acessar os estados ou props anteriores e próximas.

  

-   shouldComponentUpdate = utilizamos os parâmetros nextProps e nextState
    
-   componentDidUpdate = Usamos o prevProps e prevState.
    

  

![](https://lh5.googleusercontent.com/WqCGQQtqyetL4PEe2hMeLmMTuZbHjsVVOnn4HhqXUd-5rPBSDjUD8u-XvNawHev8AMI15jVxJiHCpsWMWb1B6kroG1Q1iCs8Ss7qAyNn1Wnt2jzx8iy-WmwRKpKX31Ah9da7ZqcJZXXRnr805yHSne0)

  
  
  

# Requisições e componentDidMount

  

Sobre o método componentDidMount, que é um dos mais utilizados em componentes React de classe.

  
  

### componentDidMount

  

![](https://lh3.googleusercontent.com/y5EpHBPPRvDYHL_YUf4xrG1G9em23oJXQrT6-dXSkq3mYydJDuhA71fdadKwievibRnMFU0LyUTjfqsJP6xXtbnSjse9HrGfSzawy_oqVyJZ_Gtr71pSqwCZao63x01XAZiirSTQksnBr3xpkDVpwg8)

  

componentDidMount() É invocado imediatamente após um componente ser montado (inserido na árvore). Esse é um bom lugar para instanciar sua requisição

  
  

Você pode chamar o setState() diretamente dentro do componentDidMount(). Ele irá disparar uma renderização extra.

  
  

### Exemplo prático:

  

Operações assíncronas requerem uma atenção extra.

  

Usando o React, vamos consumir uma API de Rick and Morty, cujo o endpoint é https://rickandmortyapi.com/api/character , e exibir na tela os nomes dos personagens e suas respectivas fotos

  

![](https://lh3.googleusercontent.com/BCz8jrEbO_ODcDWMvVMurOBRQwnN8JwqkFANy_PAVFlhbaZAeHyF4S6QBmDyh-cJJdkSfId0MyNtzt7V8WPtolnJwjgTzX-yJML93I3QizdUk3xzhEwlSzCMPUjA7mmhHGs9aHLi74viKCEA4R1zkp8)

![](https://lh6.googleusercontent.com/CLbtvMRxnYSJzvVwzCceo1MoJKMiMkCacwB375GY0D8uhc23Zf_w8CtQhiWsj8ku4f7OmmLqiAmXjp7Pb08f4fonTLNFn1dzgs1bIFFz4EAhcZF7M03LPdsTOf1drwnJ8LonBURTIPIh95a-5hNK6ow)

  

[Análise] Note que a chave results é a que contém as informações que queremos, por isso é ela que estamos sentando no nosso estado.

  
  
  

Com o nosso estado já recebendo o resultado da API, poderíamos fazer uma desestruturação no estado e fazer apenas um map para iterar o array e renderizá-lo na tela.

  

-   Outro detalhe importante é o uso da key, que deve ser um identificador único (Ex: ID)
    

  
  
  

### Duas formas de usar o componentDidMount()

  

![](https://lh5.googleusercontent.com/oBTDP8ozdfca4VI3JHt8dk68pCNJf-dQLGo8DHGX97vyf9-Fn9lHw-84zzgjsthsdRPXgyKkcPAWm9z5kjRV05E2m9AjQG0F8A9zC53zu-4zu02Id1aZuSk0XlvfU_ua-K9L5GCOI5qpCHBkhDUksE4)

  
  

Feito isso. Nosso código estará pronto.

  

![](https://lh4.googleusercontent.com/vXaJaa0cLA0GH6j_DJOGOYyemUl8SBE_sQ7dFWzw54P4RcogBkeuSf-bZjHk6vb3ICh5OdmK4g-ghOTqz2y8BwhclX97YOtTY2L52LzWUf6BFJYlbMDh-BufOuO3FsyrnmrLM4YNS6anzliWm89MGtA)

  

![](https://lh5.googleusercontent.com/1DBLq6bYFSsnA4UD_hk3jo5imzXAHzeKv9pNvrXHMtXHh4Vn4wC-YJZ5gNX6B5GD3v8VH70oRt5k9mg_pubMO5Zz0wrPHjKf7lYlJHCPwj1o4__LYcqqX_xoWBDx2-lQ_HWixOFhgsEXtsJNJtnSnZU)

  

Exemplo da aplicação na prática

![](https://lh5.googleusercontent.com/fzTlb9ZkQgubmGNBhg_YrPtVMueH2wriPLS33MMeyjiZ3CmjMC8WYcWBxTFN3ZOrW96xjMURMTnfcqS_mnqqHDv_Lk8Ijm-2B7qJv6lcluTfVNrEfGms_LVx26VW2vp9CvZVMemvMWtPqevKCA7DjDo)

  
  
  
  
  
  
  

Quando a gnt quer atualizar uma array que é do estado anterior. Spread Operator é a melhor prática

![](https://lh3.googleusercontent.com/1ZpSAZgqhrvSv4S65H8xxsv-Y_aU-KENTjQTvlx9Uoq_Qnsb-FVFMHuuyP24GdBI-eOdGG2A1KEQDZKGJjoV2zoVXMu2wIVcE__uoF5Pd33x-C7ddiZmVorddayuTRwDeJ4Iq3ASKz7JPOJpRN15o3M)

  
  
  

# Renderização condicional e atualização de arrays no estado

  

### Exemplo prático

  

![](https://lh3.googleusercontent.com/1mpB7vI_BdCu8It3CcFs6JFAlqQ7jsDgTfOkJ0_COyGPjVH7mviqayF_ZwUpItvBvtkvi8ctvLOiIYU4OVVY7rqV-AdSdS6_L2kNqNV7EAN1Wf8j_t4Rj_k5Y0o482Txl3NbIZm6DlXR69lBD5RV6co)

  

Vamos importar o nosso componente Joke para renderizado através do DadJoke usando uma renderização condicional

  

![](https://lh3.googleusercontent.com/ulzfmjeR3SgvAzwuHGLe9ueMEBuD_36EErwYKMzVI7hGxYFDVFPVQAL1wPS4t5glGj45e013plJibEUEqgKTO7kOuJZiax1hPcyWY9PgNxvJ1l1rcatAotJaZLbfOzSXyyotUY2621R5lx-hil1iM-8)

![](https://lh6.googleusercontent.com/tdHR8XAUYFS9K2qRA3RvBRMO3iw5qRMAG3K_8pYCUNHKDJgBY30CCMGGBgwizwVH0Pl496douLGTfXcx-pHPKfwyaaSUltevYHwoCoiEuGmeAH5_9Y7cwRE4JSBbioP7WjwDIJkmqE2d6kPixG38Mcs)

![](https://lh6.googleusercontent.com/2QMkNudX_BdkXMzfGzjtvwck1rNHTrTvK9v56FBducV06CZSdSje60IficfoM0VDUfOhjy-Ci1JEltQF7nT1bDy9moULkDxqW4Q9990QSlJdBKy-2mz0rX_twCY4qqzlA-Pe9u61TLsAQhgI_FpdG_c)

![](https://lh5.googleusercontent.com/hZzBulqxX7Cxomv0ummYLidtvQMVCa1kWgveTRUHyWL2x_LdEtZIvDzdU-GrwIpkVwtVkiy5s18jW_zY4sCLiDLPQJIjndFUM3LhBko0gWBz-ud3PBIsdDC8UVmfm_vBvnsnT2x2jrfFR9-DZ17J-U8)

  
  

### [IMPORTANTE]

  

-   Para garantirmos que algo só rode depois do estado ser atualizado!
    

  

Passamos como segundo parâmetro da this.setState uma callback com a dita lógica

  

![](https://lh5.googleusercontent.com/fhpfM6Fe3tNSl5-YFtJUgt06mctc0wzZju5NWoWvDlc_0suZoev46y6kIcfwahSfWfcQzmLUxyjstpFW3LUEXV9krE9dJs3K00IM-BlxdmGVIqXiJeeWAkmuV-5fQzTYo4LW6a5_EPNldxiEayO9Xtw)

  
  

-   Atualizar o estado baseado no estado anterior e executar alguma lógica somente depois do estado atualizar ao mesmo tempo?
    

  

Nesse caso, tanto o primeiro parâmetro quanto o segundo são callbacks!

  

![](https://lh5.googleusercontent.com/R4KYsZp9-ZF-wwgPWvII--y2Hzf3iaPBnpPWrFlPErPskr6tnsWGws43F2Ol4wZEV7XUyS4ZeUsEvWvhiRUpu-OYAIkobYLWMVn6gtH_Wx9K3bm85FeTA8NEeEVXqQfPSamJVN-DZ70ZdFWfD6JylIQ)
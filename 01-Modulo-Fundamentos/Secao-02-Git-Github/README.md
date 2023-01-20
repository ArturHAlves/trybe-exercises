RTL - React Testing Library

  
  

Para desenvolver um bom teste, você precisa pensar em QUAIS CASOS DE USO deverão ser testados, e não quais funções testar.

  
  
  

### “O que são casos de uso?”

  

Uma situação específica em que um produto ou serviço pode, potencialmente, ser usado.

  

### Casos de uso Exemplo:

  

-   Em um To do List, adicionar uma tarefa nova é um caso de uso
    

  

-   Em um e-commerce, uma pessoa pode filtrar por uma categoria, adicionar um produto ao carrinho e finalizar a compra. Isso é um caso de uso
    

  

-   Deletar uma tarefa é um caso de uso.
    

  

-   Marcar uma tarefa é um caso de uso.
    

  

-   Desmarcar uma tarefa é um caso de uso.
    

  
  

###   

### Casos de uso x Cobertura de código

  

Exemplo:

  

-   Quais passos a pessoa usuária vai seguir para fazer um login e o que é esperado ao fim do login tanto no sucesso quanto na falha?
    

  

-   E se a pessoa não digitar o user? Ou a senha? E se a senha estiver incorreta?
    

  

Cada uma dessas situações é um caso de uso diferente.

  
  

IMPORTANTE: Para isto, é preciso criar testes automatizados que simulam uma pessoa acessando a página, fazendo sequências de ações que resulta naquele caso de uso.

  
  
  
  

## React Testing Library

  

Já no RTL o objetivo é testar o comportamento, como se algo aparece ou não na tela.

  
  

### Exemplos de testes

  

-   Podemos testar se a nossa página possui um título específico;
    
-   Em uma lista de tarefas, como o projeto To do list, precisamos verificar, por exemplo, se a funcionalidade de adicionar uma nova tarefa funciona. Para isso, devemos simular o comportamento de quem usa, que seria adicionar um texto no campo de texto alvo e clicar no botão que adiciona a nova tarefa. Para testar se funcionou, verificamos se o texto aparece em algum lugar da página. O RTL nos dá as ferramentas necessárias para realizar essa simulação!
    

  

  

Criando uma aplicação CRA - Create-react-app

  

No Arquivo App.js

![](https://lh3.googleusercontent.com/bMTKP6ClVJCvbQTVud-KzjQJcLZYPGcITA3Ej2faD7PQCBqUae0W_6ID2GwU32EMCHvU3JvN1ulRFfxegIZjRUhhTO6PMLM1QEBeEMTcs2JHHCk1HGjMIpDZf_lzUJYNS7rCRihPfsJrXWUNIjUTga7solE3ds_fUbd4MoNs6pFItRYOtg7jPUvNUE3yOg)

  

Arquivo App.test.js

![](https://lh3.googleusercontent.com/aBbVPYwFxF3Zlxsb-jZhugvI03r_6TPrEjniggqUjC7YqKggJUQWtI0ShH264IW26xDDE2s2j1nlFiVG7FoSN-7pJS8_6sWf6G_Jb12uOwsAjbeUFPz6IwG4oLfc-eC1E9wmdZ2rC70Us5CrhP6bd__G6jhufx0DcrLyEIfNnCZ2Vac3Sg1QYiBrWqpqGw)

Na linha 5 - Está renderizando o App

Na linha 16 - Está pegando o elemento que tenha o texto learn react -

Observação - regex(/learn-react/i) Ou seja, está em sentive case

Na linha 7 - Espera que o elemento esteja na tela – ToBeinTheDocument

  

Usando o npm test -

![](https://lh4.googleusercontent.com/iZnRz7EhKZ-p-K28aabflCfvWWV8U1tktDMdroSHycvF4SYvrkj7TXyCz-Qv_whOaoIf1pGYzyGC1CnKcQaHd2-tczh4cggJ9jSLTWm1H-xjPTRjjHnio7Y-2qf2uruTgZayMGgl1ylMEXmyWewhfxDS9QTQEeKUA9ht0jAqOU4f0A7UP7IkYEQFnxz1kg)

O nosso texto passou, ou seja, existe o texto “Learn React”

  

Documentação: https://testing-library.com/docs/react-testing-library/cheatsheet/

  

  

# Os Matchers mais usados

Os matchers mais usados nos exercícios, projetos e trabalhos:

  

toBeInTheDocument(): Verifica se o elemento está presente no documento.

toHaveTextContent(text): Verifica se o elemento tem o conteúdo de texto especificado.

toHaveClass(className): Verifica se o elemento tem a classe especificada.

toBeDisabled(): Verifica se o elemento está desativado.

toBeEnabled(): Verifica se o elemento está habilitado.

toBeChecked(): Verifica se o elemento está marcado.

toBeEmpty(): Verifica se o elemento está vazio.

toBeVisible(): Verifica se o elemento é visível.

toBeHidden(): Verifica se o elemento está escondido.

toHaveAttribute(attribute, value): Verifica se o elemento tem um atributo específico com um valor específico.

  

  

# RTL na prática

  

Conceitos importantes

  

![](https://lh3.googleusercontent.com/AvS75oqrxaHe4aI31ze0Cno0D5WWxOH33Ohv7jfWPxmTV9Wel_vZDnz55NjNZBIImJY99uDpemj7iLxqaDqo2sdPfOoff7lXTWoVjix1WP5YdLBsZ9nXUk3KywIVsJ1wefQTR41IxX3GgH8Cu6BHbhsllyQUg5jO0NTO9u_ghQdPUrQVnis90PORae3MCw)

  
  

# Renderização

  

Testar um componente significa, em poucas palavras, renderizá-los em um browser real ou em uma simulação de um Browser e testar nele o comportamento desejado.

  
  

A função render()

  

-   Faz a renderização de um componente em memória para que se possa simular as interações com esse componente
    

  

![](https://lh5.googleusercontent.com/O8l1N0d2wQd4O6KoxlUkSASQpSCc9yC3CFWh5peL2x6ur5wk0P5q3EK3jiOr-Mb2MqxudGG83cJY6t59PlgR5w4R1jWcTAe4nJ2mQHKGXSX6KJxuLTfxw4yyswGvpM0GPGPuXM4GywUvhFejRf47Q4_X4SyJ5v9euYssDmw5G2JfZdFOSycsVgCvuOtpDg)

  

Para usar o seletor/query getByText, precisamos usar o screen.getByText

  

Observe que ele é muito parecido com os seletores do DOM, como o document.getElementById() ou document.querySelector()

  
  
  

## Seletores

  

Seletores ou Queries são métodos que usamos para indicar ao RTLC algum elemento da nossa aplicação e assim podermos realizar nossos testes e comparações.

  
  

https://testing-library.com/docs/queries/about/

  

![](https://lh4.googleusercontent.com/YNNXr77K2SoGOhUffPfEBqSOrneq1dB4WYxiyMfFB7ys7f-qZ57OU5Ay9XJaOEgbkSOCit2mcP0L38QrWNlH9ixuvyTcINO4XJRGCIj1UKYasSvuqc4BRNjkvE1e4lY0vFDnJwgNM_Hx21HQPzoeBqYlBjlvJwKwy16seD79ZVtkVRNa2P55Ls4DkERQmw)

  
  

## Na prática

![](https://lh6.googleusercontent.com/9QoEwhpSK1L6bCxVWoAXnjAscts7GiPaLFCtJXCSxDMae3yeU_pEOPgD3tmAYSE0cMksjzhqqAuMn23tWpZ9fpV3I-6xJRHVy5C_H5NO16h5bialkHg-xfZNUEH7ybbvEcC4WdbzFopvs76YyUjt0tzcnJq7VOzWaVs4tsk4HYsukUGjrYA0Fc7AeegIJw)

  

Vamos testar se de fato, está aparecendo no Label o texto Email

  

No arquivo App.test.js

![](https://lh5.googleusercontent.com/kf-FCSjWAoSTaDCdAEGrpXyv9z64yhFzoZ6HwQBm5WepDP2387Pa4IxJSuRil-vI3JgjFGoAD_qf_lA3rseM8oEbe4EqwMMAjs9SBRZthxhwusN9U0zyz8Mmsi1YqpEKNqdWFo4zFrEBxP9LDoyYusNNMuOYFiLH3fsP2lRYitFh4PwyMpB4QHkHhlmxww)

  

getByLabelText, ele vai pegar o input de acordo com o texto da label que está associado a ele.

  

7 - Vai verificar se o inputEmail está renderizado na tela

8 - Vai verificar se o tipo do input é “email”

  
  

## Na prática parte 2

  

Adicionando o botão

![](https://lh5.googleusercontent.com/IkQN8-YDB9wbJfif3X6dHFAVlp9rXbCcZroBryqtwL_97_G_TTCnkZMDWMEPvQlne_E4Drdlo_Q4o2p--HpwkpkZKRBWyhgLND_u6dwMS8pzSgC4CAb35DlKVOsNikIWcpFWakfb4ibGF6r_jPftS6WlHq4zhQ4DsWn5gbLquMK348MvFiMgn61fG-jpAw)

  

Arquivo de test

![](https://lh4.googleusercontent.com/SCVZXkmmeHy-7b5WQSwdolkuRfCTAJ8QYqUOduZIcvlDtggSPWzRUQT3CtvblrdMgIocOqbresH2Ko715fI4KyExmMvblbKg4wgBlwMoMusZ5XxPXcLpOT0_svNmPidqNJXk6Ib0rgQFc2wguftU7-PMFZY9XGXZEbricO8qolu7eNdkHAmwwy9LQFZ_Yw)

Role serve, por exemplo, para buscar por um elemento:

<button>Enviar<button/> ou <input type=”button” value”Enviar” />

  
  

## Na prática parte 3

  

Adicionando outro Botão na aplicação

  

![](https://lh5.googleusercontent.com/W7IxXF4o0ykRqnrJt__Z78ysx5l12CJgwjXrIY4GnWPgHFKY9ANTvGfxnyDQfxOGtrJflwBsAKAn_SLiBg09a8q_zPOKMqMaj-RoHtrLHegGHI7M-1GKR2cPLY_l0187X249lSIq7nVBvpIg408OvHcbW6c3MoM7X8kri08CTCsROMtVPIMxSLD9EWLgWg)

  

No Arquivo Test

![](https://lh3.googleusercontent.com/joA9-tVYpzMem6yLo9f20z2cggdxR-kDEXHwLikyEZf_KjMiE4Z513vRQciIIV0R2vjh3Kou1Nehmxq65Ldn6CDCOiox1TI3rrvtCMIoVG_eyVtX9tqYnhFG_-NfBnIFlLMSybgLkDxqSpqSAczpNICDl1WZIzlffwkwID0xbHN-LgzPUR_fXAG1Q1fZMQ)

28 - Usou o getAllByRole - Ou seja, vai pegar todos os tipos button

31 - Vai verificar se existem dois botões

  

toHaveLength para verificar se foram encontrados dois botões.

  
  

## Na prática parte 4

  

Verificar se existe um botão para enviar. Para isso usaremos a query getByTestId (Use com moderação).

  

Para usá-la, devemos adicionar uma propriedade ao nosso botão Enviar, o data-testID, QUE É UM IDENTIFICADOR PARA A BIBLIOTECA DE TESTES

  

![](https://lh4.googleusercontent.com/YLNkVMRwla7sx5ieLY67AlZ0KpckXpRLeGbCQfRVKVIhD2R3IbWixJ8JRNVt7ESyFRhwyh80vvFNEM38zyVdbV_hfmda4OZwn7SSlimREKqq0IPLH2dR31s-sR7_FyKTMzEQSZIeYx5433RHZLvL1aFjIFq8Cc8IaopxhpH6iZi_YBwncBg3S6hTWb274g)

  

![](https://lh6.googleusercontent.com/6n90VWCTP2DFjoODafk34NN9FLwpYgRE1_-0ScduT5i7Vq84PKSczRisHJS134IVuREXXbBzAPNvJf3FeCxA09roYOcH0s7s49qajJ8jQ9ZRHcDZhywJWgVJ3U8bDCbIKmj2yoYpNy57f0YYzYgSgdKHVPcKiIxsExuJO0IyBEmw5YICD5q8UtoqRnxbYw)

  

39- Buscando o elemento que tenha o data-Testid=”id-send”

  

42 - Verifica se elemento possui o Value = Enviar

43 - Verifica se o elemento está na tela

44 - Verifica se o elemento possui as propriedades do tipo “Button”

  
  
  

# Testando Eventos

  

### userEvent

[https://testing-library.com/docs/ecosystem-user-event/](https://testing-library.com/docs/ecosystem-user-event/)

  
  

A user-event é uma biblioteca complementar a React Testing Library (RTL) que possibilita a simulação de várias interações com o navegador.

  
  

Essa biblioteca é baseada no método fireEvent da React Testing Library, mas seus métodos são mais aproximados da interação da pessoa usuária.

  
  

COMPARAÇÃO DO fireEvent e userEvent

  

-   fireEvent,change(input, { target: { value: ‘hello world’ } }
    
-   userEvent.type(input, ‘hello world’)
    

  

Portanto é uma boa prática, é altamente recomendado utilizar o userEvent ao invés de fireEvent, sempre que possível.

  
  
  
  

### userEvent.type

  

A maioria dos métodos do userEvent são síncronos, exceto quando utilizar o userEvent.Type, pois ele aguarda a informação que será testada.

  
  

O userEvent.type possui três parâmetros, sendo o terceiro parâmetro opcional

-   type(element, text, [options])
    

  
  

![](https://lh4.googleusercontent.com/goO8lefCov6pEGvZEZubN7Ky80WE6N84zfrLIyHpx_KoMweSBmTf3Xj7NrYHCyKQxf9YxokXPBquilrswfTg3ikls_54D_K7eGshkHzMNumQc41q14Buh_rlJlD9Y9vWiS87GnpKlgQN0rPCAOE0xBk-R2VScXlL_YV8Mdy0BU-zQW-iOD3rDxMz9cYcyQ)

O userEvent.type é um evento que retorna uma Promise

  
  

### Na prática

  

Quando o usuário digitar no input - Vai pegar o valor digitado

Quando o usuário clicar no botão - Vai mostrar o valor digitado na tela e o valor inicial do email é limpo

  

![](https://lh4.googleusercontent.com/9N2IyZpTDCTU6fRNy6NxmPzG78nmwlRnYScjOoC_DsHB04QmrEQKREkRn0BH-BUMTMLU_gOpqSLtLmHWmeuwbj13YWePDIbpOEgnGhP9igMj9rGHGZFqGNGyI1AcX9bUIaEjNsogYGUKdnd7DCXHyOtkgKcdxnoB0oJjeBstLfiCLXdwc0Xqzf8LjPP4kA)

  

Agora, iŕa automatizar cada passo que você fez no código usando o userEvent

  
  

-   Para utilizar o userEvent é necessário importar a biblioteca para o arquivo onde o teste será realizado..
    

  

![](https://lh5.googleusercontent.com/ZSNQGu6vuh6XsnRN2vvzRRMMgv2MXCDV8eHxkM_SoJyg2V90V_-Z3n_fIcxXKn_cs1byeLdEZ3vWKivVRKExWwbq7LWrj-BCfLo9a4UtV9hZ_5ejDEzulxvM7XdvxMxA-v_mxTFAgBTN1cr7mM4etymF8bwNjiN8eXgWun7zkCtEKjTmWda-hyzY9bG7YQ)

  
  

Testes

![](https://lh6.googleusercontent.com/3WFTF5mVwbRyQye9NfyCQ67EqkNWkTvrzKpZyAeJ8P4_qUEaxSDVZ3Ja7dQbc49G3qD3FT5o8lsU807SoVUdS98fgp5hID0rm_geA_LjU__OaG93uKbrjo2Odm8duTdY5JV7N9VnaoEztaaY2hzBwPy2KTqY9n9aCT6uuWaCUoo_dU2oDqhnoBg4oNHIag)

  

![](https://lh3.googleusercontent.com/TroTZ-3iNX9tsaGmQfoFosgOWoBLuSrMDKSwn-C0lSi02IVbA6dKqRtzLTzFewYzqHvl7klBymE9X6ZFjmZxHikuW4h-Md2wB0A_wyMi1KpvLWdkxLXt-sk4L-3zcPbI4qr6v4Syjs95fSjjJKxCRgSTMLZjyZRmOLloOmOUL6l9t-mWEN2aRij5ot_Jvw)

  
  

## [DICA 1 EXTENSÃO ]

  

Usando a extensão do “sapinho” Testing Playground, você consegue clicar e verificar o componente e recomendações do mesmo

  

![](https://lh3.googleusercontent.com/rZwykZBs9LSoNj0HGNOWAjfpAq1dgB74ysciw908Iih_gO1VwsS2yOByM6w_3cMi7Xx1c1pwjRpOouKamLteQw68OkcwDT_pNPFv_Ljjjg4_CR-3kU1CIMUTb_EF3Hed92yAeQMce7xysAqhLds3HqV-ygVRQWewTJBzesZVYzTC_PDN-OiRhrpq1LuONA)

  

E vai sugerir melhores seletores para aquele elemento

  

## [DICA 2 LOG TESTES]

  

No teste é possível usar o console.log para verificar os elementos

  

![](https://lh5.googleusercontent.com/wlqt7-BxlHmdkBJqCXXOtJMdk17WJJluCGcTrzbwIjRCRnPsfWVcnntYrzZB71bq7n_gTwTuJ5LiX_nMpN8jkzztG5-1LMvsDxX58jY9ohV9u_ivFmYFlU3ToAnn3hvprld-znXFi3JeUEfA2X3vnlmbCDMkbvQUgZeHnqJXhyjiWsRfwHQBy2lKFWqzUQ)

  

Colocando isso, no terminal vai aparecer um link de uma URL para acessar

  

![](https://lh3.googleusercontent.com/frn_7IsE1x2VhItn7ztoyDKlxVVXsEjcNNfOQLROHvgEV8UzaFKiw0WHhFnyYkphucwDD75AfiWMXABAsHLDezWSt5YY4zn23zrcgEo71fjcx-MYmiiEHChMqIz5v3T97TdivwgaNZrtcOB1j29urPGcPjOaYVr8JM89nAY1JOir9YukbNzwu7eW7dEhVw)

  
  

![](https://lh4.googleusercontent.com/TaG-p7mmu5P2QYx4J4kH8XVSdTxhIvmiIpvZd0LoahpYFwGU42_c2l5efN3QmMkr4jH5veopV4FgR4IQHZ3w7499AJkJkhm2k_GyBtzgTbBjicx7Oig1C1E9jBGebrj3LEwqHSptEER16X51Np7c9P6YPkkkN1dHkgoZ_2rwM-jNfJ8LSxDWXU3DTlRnOg)

  
  
  

# Testando apenas um Componente

  

Quando você precisa testar apenas um componente

  

## Na prática

  

Aplicação que mostra se o Email é válido ou não com Regex

Se for válido "E Mail Válido", senão “Email inválido”

  

![](https://lh4.googleusercontent.com/bmI5fPttJfMhTWIUe0GqL85wny4GyhtNUEEweRwbvF6vJTIDcsae3_0hSyMcSQ3N_tBoXmnJ0j2R61PXhQXROIdXZ9VfnnqtTRVvZ4nmaZRvNCNb9diNlrJDZ5xnV8H4SqayQSK0ovwq4igFky0xLsppsBdH7AY3k3UVtRTjF0mOKow_LYNbdwx1ModwZw)

  

Criando um arquivo de teste

  

Quando o email for válido

![](https://lh6.googleusercontent.com/Jpa6Ex8UOdXJ4fuuqqmpisLW_5OZga2U-W4TriyToi5jW3Nau2LfGRnxZHFUvkmtckqULeDcv-4jSKI5okDPEb4GJ6z1CiVeQy9N5uZMr1-DyRXxJlV1tcQqO_6XrSpqGAieVXucc2mVxYpPgNVgl0kcHEytDlIejzTBx2MKTfWLXuGKahnioCoRae5ytg)

  
  
  

-   Quando o email for invalido
    

  

![](https://lh3.googleusercontent.com/OQz95lA1GKQxspG8Te5W-Xs7DBb43MRVXCxUvJyTLnkgEznh4ho2i3nGLE3eUHc0oYkk4LvPJITxxb09EHyyoPqXCh1WbhTnaJr_KRTcgmcwHTgJZAgF4YiBrROPo57lbSxQT7Dk-0wzC49E2Sdz-822i3ZRcmfUAEC_MnOCIOHLUdsWU7aHnx74AhY10A)
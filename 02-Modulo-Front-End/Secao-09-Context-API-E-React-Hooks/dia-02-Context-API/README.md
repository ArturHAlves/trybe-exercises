# ![](https://lh6.googleusercontent.com/hIj-knznjSd8qBi_C_5YLEKFeuSbKXBla5FGA13C5eNJi_fR4gIpgJZEW_wMDIY--aCM34HmBfS5ODGoYuTCQtKqMoqLeRi62PZBljScea1xZrF0X3qBLBDoQ4lCZTdZpPMNqm4b4Fn7xzrEBGO-7-s)

Observação: Utilizei o conteúdo da documentação, trybe e vídeos no youtube

  
  
  
  

# Context API

### O que é?

  

Context - Disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

  
  

### [OBJETIVO]

- Evitar padrões não muito recomendados, chamados de prop drilling que é passar props de um componente pai para filho, irmão irmão, irmão..

  

Agora, usando a Context API, você irá aprender uma forma NATIVA do React para compartilhar informações entre componentes, sem precisar recorrer ao prop drilling e sem precisar instalar nenhum recurso externo

  
  
  

# Criando o Context

### [Aplicação] -

Vamos desenvolver uma aplicação com um botão de dark/light mode

  
  

### 1 - PASSO

Para utilizarmos o Context APi é necessário criar o context. Para isso, utilizamos a função createContext do React.

  

![](https://lh6.googleusercontent.com/kl_9Wk5ty1xn5ZQXOhEKlZi_UFL5lBDV7-Bux7OKeuTYcZmc24ZLGAp7Ya5P35_Ani3B9AAhZfP-QNp0O5m9NgX2Z_xkp2e8rRK9qSp-dNO6qOKZHI9ubxa6-bC6KFPbQU125gSvgfiznJZSqncCcN0)

  
  

Podemos criar o Context em qualquer lugar da aplicação. Mas para seguir uma convenção, vamos criar um diretório context e adicionar o arquivo ThemeContext.js

  

![](https://lh5.googleusercontent.com/zWOEAjhWCeZdfoKuyOYXb2UuXUeWtCzUKZRNV3kZ0XyKHKgVXXQ2-MXAAfwAc3YGe9jgOGDhkU2MgZrPw8FIxZxyWJNJlcovslIrVdwbCvbnGwepa_B14U10_TLGBYoItbyaDtFRpvmV4DHuOZhnEb8)

  

O createContext retorna um objeto que possui dois componentes como propriedades:

-   Provider
    
-   Consumer
    

  

#### Provider

- É responsável por “prover” os dados para os componentes que estão nos níveis abaixo dele na árvore de componentes.

  
  

#### Consumer

-É responsável por “consumir” os valores armazenados no Context.

  

[OBS] - Também é possível consumir os dados de um Context usando o Hook useContext, dessa forma não é obrigatório o uso do Consumer..

  

![](https://lh3.googleusercontent.com/P-fm3IH5n0QpoyNA7RAPRgohQ1YgBehzD7BNH1lphnvPBGzRtmIcV9XFqnqX_HMrp0Cg8uHyKxVUQLUJ3kxcX8vWq0_AsjKOi6ZKgt-zY8HeQESYiwExUy82V7Dtf013RGp20ilz3dunUV4C5dQn1mA)

  
  

### Context.Provider

![](https://lh6.googleusercontent.com/DjO_2GzJS0UqTSL0OBjS2tLUp7mqe1OSRTVbiCE1_-S6iOnbFSFydS-MBVAC3WVih4HwEL3siwt6kuqRoydUOg4jtPq9U_EBfAT5wVAY60MiWvMkRWnez-_nGkDdgUe4sfPlymPWkDyFIh5kfAAc6JA)

Cada objeto Context vem com um componente Provider que permite componentes consumidores a assinarem mudanças no contexto.

  

Aplicação tema:

![](https://lh4.googleusercontent.com/-4mpwQp-NeTOVnDIy-1Phm9CGnQJywNAEIDgTkmRwj4R0HBZiJmANO_YX7NPwjFXNeKCIg6Vm9GhH7gh55vUhK-8No-yEhwyjcpf7Wedpyf3KyumnAOBMsBu-gCwWbsKAV8tTn5kGIQxOaS7nJIPPmw)

  

Linha 3 - Está importando o componente ThemeContext src/context/ThemeContext

  

Linha 8 - 14 - Está encapsulando os componentes dentro do ThemeContext

-   Passando um valor inicial o objeto { color: ‘dark’ }
    
-   Todos os componentes encapsulados pelo ThemeContext.Provider (Header, Image e Footer), terão acesso a esses valores
    

  
  

# Lendo os dados do Context

  

Para consumirmos um valor que está armazenado no nosso Context, precisamos importá-lo no componente em que iremos utilizar o valor.

  

### useContext()

Para isso, utilizaremos o Hook useContext()

  

Aplicação Thema Mode

![](https://lh3.googleusercontent.com/HFLXun0xvzSkXfeu_P55nL7Me66n4gllo1uSe2Py38wIUNq1GL8NBOL4484HLwfMrhrJHguBxwK-c5DJrLKVwQy1vgLfNYtJeiTrBsX4pFVYNQC4CDgQ64ppzcZMqDRj5om44gJe8TXCY4-AUk4X4P4)

Linha 2 - Está acessando o useContext

Linha 3 - Importando o ThemeContext

  

Linha 6 - Estamos criando uma variável thema chamando a função useContext(), passando como parâmetro o nosso Context (ThemeContext)

  

-   A variável thema terá o mesmo valor que definimos na prop value do ThemeContext.Provider, ou seja, o objeto { color: ‘’dark }
    

  
  

# Escrevendo no Context

  

#### [Objetivo] -

Pronto! Agora que conseguimos consumir os valores do nosso Context, vamos

implementar um botão para alterar nosso tema, de dark para light e vice-versa.

  
  
  

Já adicionamos um objeto { color: ‘dark’ } ao nosso Context. No entanto, é um valor fixo.

  

Agora, precisamos transformar esse valor para que ele seja dinâmico, de forma que, quando a pessoa usuária clicar no botão, o valor da chave color alterne entre dark e light.

  
  

Aplicação Theme Mode

![](https://lh6.googleusercontent.com/JQJM4Z8B8Xt93WF_RkxhmjuFRBpROqgLqVQPEDFDlgXQMOhoAOjSugOVlN-f9HDmKVWdQcjxOVmerefytAvgCdHJedYNdMdUmLIdB__RELphTGp5CuHrQheh8JBrXkx-2VLisdOFyJ7r_fWsV2d_9Dk)

  

Linha 2 - Acessando a Hook useState

Linha 6 - Definindo no estado o valor inicial “dark”

  

![](https://lh4.googleusercontent.com/HG7r_EwXixXN_95_S8i4iaCgKqpIvByWJaM04aswndyzt3rfwbJXDFxycKn0963MudOqConyKvviOixJEuVIq7iWpFdycv16pCIRmjbfXGmpzUkYWQIJBOlnWHEM_SIlfsR2OM9eh2Vnzqc56d0FKS0)

  

Linha 8- Criou uma função que altere o valor do estado themeColor de dark para light e vice0versa,

  

Linha 13 - Adicionou a função no objeto value { toogleTheme }

  
  
  

## Finalizando a aplicação

  
  

Agora que adicionamos a chave color e a função (toogleTheme) ao Context, podemos finalizar a aplicação

  

![](https://lh5.googleusercontent.com/3SR-F9ilZc_hj_JnvyNEKIqpehQuBX8FnKkPtXgL8_OfJbfQbYvtXHJDDJCOS9gD7eROYWRGQfNArih-bM7u823Mpez0XflyAtGCmtTJ7GYWg498VPK0mMcSlYZMWvJAWwG9dP2juBCN7F39iGsO_c4)

  

No componente Header iremos criar um botão que, quando clicado, deverá acionar a função (toogleTheme) para alterar o valor da chave color

  
  

![](https://lh4.googleusercontent.com/ZTq56mrdhlHLwCY-uXuaF_mAOSIMH-KrBWZrNNpEr4BgqFe8tHV_9KArO3JWvZvdVdk5SI4Wv8qeekZ3WIO3dUoB8ovMUCeCIjajdu-uzsVEjgs-kdn7hhUSuGmJIgRsrVexMI3MAIjLwOxBbx8Sy10)

  

ou desestruturar assim:

![](https://lh6.googleusercontent.com/_xVnKThYxVtuYfqs267UIKNahUiatAu861lgWdCEMqn5HQOf0Lg23T0rtS8EKl_-xQ4_2jp9UJFblwoUIvZ1AAa-NJLxtVBDWD9rNFSNptZBvSxJyybQhSLElt4d0NHsSPoAoofykSgdz8TH72V6ww8)

  

Detalhes:

  

Linha 5 - Atribui a variável theme os valores do ThemeContext, utilizando o Hook useContext;

  

Linha 10 - Com o evento de click no botão, executa a função (toogleTheme) do Context - essa função irá alterar o valor de dark para light e vice-versa

  

Linha 11 - Adicionamos uma condicional para renderizar um emoji de sol e um emoji de lua

  
  

CSS - Aplicação

![](https://lh3.googleusercontent.com/xfjAY-M9zJDwiFf2WCXsybp2zulfvj9YB5HQl6WcgCpkuKiPy64Zy29Wm3sed-POw0fZPQtq6OJmuj6K4T9clRjIpRXpPf-Py7O2rT9ir1ZS1cVKBW3OrwDqd5QuctxGysQorP55SARITu7Cgm949Xo)

![](https://lh5.googleusercontent.com/gxuKIkpfwCayJ-d4dltPpHWti3DKaHfNmBdga0OkjKwg_j8N865Obu_gxRVk8-Mu4ycNBN9cixN0JMMactxgrutJzCQYojw0yZXDX5etskBZVZofuimrry7GYsdQCOFFOWvuUNTob-qxIB8uanyrV3g)

  
  
  

# Extraindo o Provider para um componente

  

Na aplicação que utilizamos anteriormente, todos os dados e lógicas estão declarados no componente App.

  

#### [CUIDADO]

Dependendo da aplicação vai crescer muito e talvez seja difícil gerenciar tudo nesse componente.

  
  

### [IMPORTANTE]

  

Para resolver esse problema, podemos utilizar um design pattern chamado Provider Pattern.

  

Esse padrão nada mais é que extrair o Provider, bem como os dados e a lógica, para um componente próprio.

  
  

PRIMEIRO PASSO:

  

O primeiro passo é criarmos nosso componente ThemeProvider.

  

-   Ele será o responsável por conter todos os dados e lógica referente ao tema da nossa aplicação. Criaremos ele dentro do diretório context que criamos anteriormente.
    

  

![](https://lh4.googleusercontent.com/Cac2QNZM8ewlZPfZZUlXCHDaSWZoDDnCsq_WqGisgmWU0hhDmc_dGh1pArQE_An9yJoq6yVyA0MCeYamfdT35ZXuVDfj9MgmB0EPlajkTQJvxixMjk-szesrVo2PtE-7WEOMVKR-quc-ARlF5LENPPc)

  

Linha 6 e 16 - Utilizamos a prop children de forma que o componente ThemeProvider encapsule todos os componentes-filho.

  

-   Isso significa que os componentes aninhados serão embrulhados pelo ThemeContext.Provider e poderão acessar os dados do Context.
    

  
  

App da aplicação ficando assim:

  

![](https://lh6.googleusercontent.com/UkqPMU-KhzdgMrhtuB3t5leiD7Ua1wjSa152_KUMYBmk8MvbPfSjIHggVhWIwqBMm4X-1sKb0N8bQcWIyILi6APPsgbaQLS5y_nJf952gbdlC0XZsD9gsh2kdyYCVmiZ6GjkB0Q-sxqiDPSxFraMXaI)

  

Antes estava acessando o ThemeContext com o value pegando as informações do dados e funções, agora coloca tudo isso dentro do componente ThemeProvider e encapsule todos os outros componentes.

  
  

Aplicação do TodoList

[https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/fa714305-88c4-48a2-bda4-ef82d53238e5/recording/5703a3d0-d91a-433e-af5d-30b520a2cda0](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/fa714305-88c4-48a2-bda4-ef82d53238e5/recording/5703a3d0-d91a-433e-af5d-30b520a2cda0)

  
  

# CRIAÇÃO do ToDoList

  

### 1- Passo

> Criar pastas e o arquivo Context

![](https://lh6.googleusercontent.com/sSgPxndZ7wmk4lzZmqPv3SCk3DxfgQ7dVxMBqRykdqcDPGtXWcoMGhOeryZIZfUWriAZHV8EWzNzYGrNPgsHIx9q79-XJKtQEuTduSDzvteJHRKlh7le19AI03a6_agsG6x6Ich5lf_I1X3dEidB5ac)

  

### 2- Passo

Criar um context

![](https://lh4.googleusercontent.com/6OXxrbKxrjCVpjNvrGn6e2KvEMV9VsJf_HRNCLw5ndZpLLIwbsiO64VmzygtlTCZ-xWwOdVN0F_7E1zCSmUtwrHGvQlt3i-pXrCTbAYy-ymiZqFEWJsfzGSgDP9y7WPIZXK4AeTuaNmESXF5dAd_8GE)

  

### 3- Passo

Criar um componente Provider (Provedor que vai passar as informações do estado global)

![](https://lh6.googleusercontent.com/6BNWivZIBMwvBZlOVkuE5QUzjhkq6fU76dBjl5d78PqkX-vk1OqLoQi0-61nP7vU2heIeQF4MRSwBtnfVjfICieYgKmyR_QOuA-xcmPGfFwyvD1jm7RKk0Rqhk4jgn_AaGS74UvC8RNYun8DE6JLY8Y)

  

linha 2 - Vai importar o context (Onde foi criado o context)

  

linha 5 - Vai setar o estado que é um objeto contendo toDo (uma string) e todoList que é array

  

linha 10 - Vai guardar o estado para passar como value

  

linha 14 - Vai encapsular os componentes dentro (passado pelo parâmetro children)

  

#### 4- Passo

![](https://lh4.googleusercontent.com/9k1J28MBdU1nUbaCXxVOzn4rD9u1ubOm6uh0rtMVhi5Lkm702RQPKqhRejiLAX3F_AqFwfh9M_pG_kDkajd_FEunnHwyuL8n1odERFNv_N5P_2-lyMpuTH7SfW34a9_Is_o0vwAyR4ruDz3d8gZW0Ek)

Linha 4- Importando o Provider

  

Linha 7 e 9 - Vai encapsular o App, ou seja, qualquer componente que esteja dentro do App vai receber as informações do Provider

  
  

#### 5- Passo

  

Aplicação App

![](https://lh6.googleusercontent.com/KhPx_5pVzvzup_h0emuyEbeevnZ_HHdjxL10hxAoDnPVNEANvAH9qOq3_KvBpjWBmATGm8Jp6GA8b7m-_Ts4MNPBeImuMWt4KF5jus-DGdWTZJq-JqA-OvTsLN_8CFhdZQLkaXPSRlNGreHGPyoR2B8)

![](https://lh6.googleusercontent.com/pfuofZsN395nbeDF8zL8obgcHLHQORVWRoZdqwj33Pam2ecDbXKDpWDmpsGXofcAX-fEXkMyrJg-cvjp-KwobddOCyhov4OVoq9lfiGuOr42J5yXuq4FfYXRm1m-xb3TnpBwlfQhVjIt0HEpagr2k-E)
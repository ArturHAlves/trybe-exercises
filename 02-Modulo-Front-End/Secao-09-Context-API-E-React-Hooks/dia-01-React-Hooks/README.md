# Hooks

  

Obs:

utilizei o material da Trybe e documentação

https://pt-br.reactjs.org/docs/hooks-intro.html

## O que são?

  

Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

  

-   De forma objetiva, Hooks são funções. Todo e qualquer Hook sempre deverá ser uma função.
    

Entretanto, os Hooks são funções especiais, uma vez que eles permitem enganchar funcionalidades aos componentes de função.

  
  

## Regras dos Hooks

  

### Nomenclatura

Como você deve ter notado, todos os Hooks começam com a palavra use. Isso é importante para diferenciar Hooks de funções comuns

  
  

### Como deverão ser invocadas

Você nunca poderá chamar um Hook dentro de um if. Também não poderá chamá-lo dentro de um loop ou uma função aninhada.

  

-   Os Hooks precisam ser chamados no top level(raiz) do componente funcional.
    

  
  

### Onde deverão ser invocados

Você apenas poderá chamar um Hook dentro de um componente funcional ou dentro de outros Hooks.

  
  
  

# useState

[https://pt-br.reactjs.org/docs/hooks-state.html](https://pt-br.reactjs.org/docs/hooks-state.html)

  

![](https://lh4.googleusercontent.com/tstX8--f2kVdh7AKu-crTuPUv9IWTvM8miDqg7iuHYIQIAJRIQoMcPuf2T5bH8MqgR9xUHOYyafdC6Krn4_KPqhfmC03Q99C3zoFpSnvhp4P9dAqUBq7XlCWU90qcmDRmBgGwCHF0OWJAujkOEBXCQg)

![](https://lh3.googleusercontent.com/_LSZtuc-oQQT7KMxkUbgm5QqEH6g-iMtlyb1JjdiqhdA_ZB0hVw02Lan_c11ANiz8B7n4o7tc_E4R4tjRute8S7A7_8Rq-rr8hTc7bOU7MFXeROnXhfZw0DdG8t6rwQvhlz_SW5SNKkT26OPQWh6Krk)

  

[useState] - É um Hook que te permite adicionar o state do React a um componente de função.

  

-   Linha 1 - Começa importando o useState Hook do React (nativo)
    

  

-   Linha 4 - Ele recebe um argumento, que será o estado inicial e retorna um array com dois, e apenas dois, itens:
    

  

-O primeiro item do array é o estado inicial = Que será o useState(0) que vai começar com 0

  

-O segundo item do array é uma função que serve para escrever e atualizar o estado: Que nem o setState

  
  

-   Linha 9 - Toda vez que clicar vai atualizar o estado antigo mais o novo.
    

  
  
  

### [DICA] Usando Múltiplas Variáveis State

  

Declarar variáveis de state como par de [something, setSomething] também é útil pq nos permite dar diferentes nomes para diferentes variáveis de state se quiséssemos usar mais de uma

  

![](https://lh5.googleusercontent.com/oleP1SvgfBcXmiKYF3y2-kXEvoMPJ2y4i_0-52SIYUn_VdRxL60bTYm65ZdITNuaCotSiC9Xxer7IJh9kRctHIXzPLY53-6WvZY8dA_TjQoORyraao3NPgEVsPDaL7vrXbIMTd5j9uoxB8lltsUYTrE)

  

No componente acima, temos age, fruit, e todos como variáveis locais e podemos atualizar individualmente.

  

![](https://lh4.googleusercontent.com/HX9PwmiEB2uJ1PA2Hk83gGozNiIjB7cC35EuonYSK3fpGw3ZYVy5X_-yAPkVRl0DUbrPpXPKbfrYLaRzPYXQA0E3GvrSLKT1sPiuSReR6IUj7dVtFfgRoEmYRfbi4gDJXILcLl88KERBCYXJ3aOaSi4)

  
  
  
  

### [Recomendado]

Recomendado é abrir uma callback da função com parâmetro do estado anterior

![](https://lh3.googleusercontent.com/Jj-mukSuLgq2CxJVvzJQFDNbJChrqJwEIPCNRoIny9qVYFHvux76p6omNrv-iyDqMCuegmZJxry_qhjUlXwvByOnLHZNOXWhhowIw7RJ9exAIcPTf9xIHv9UpH0nmcjCQZ_I3EsOuOIEpljALgyT0tw)

  

# useEffect

  

O Hook useEffect é uma função que pode ser utilizada para gerenciar os diferentes momentos do ciclo de vida, de forma semelhante aos três métodos..

  
  

-   componentDidMouth, componentDidUpdate e componentDIdUnmouth
    

  

Qualquer coisa que você queira alterar, use useEffect.

# Estrutura do useEffect

  

useEffect tem dois argumentos

  

-   O primeiro argumento deverá ser uma função (callback) useEffect( () => )
    

  

-   O segundo argumento, (opcional), deverá ser um array. Ele é chamado de array de dependência
    

  
  

## useEffect sem segundo argumento

  

![](https://lh5.googleusercontent.com/vTBInEipd6Kxn8O-h93TWbCdeykmQ506CpqrFbWab1OL-tIVbNqAkdYr0L-631wF6fr7nY_X0-_v9yDf1mKUwP0HWxiwuqwPzAhlUCDfX0IgV66qXW9Q_1F20DQkPkbC7VUYmlaSQag5ybbdKsYwNZM)

  

Toda vez que o componente sofrer qualquer tipo de alteração vai renderizar. Parecido com o componentDidUpdate()

  

[CUIDADO] - Evitar loops infinitos

  

Exemplo:

![](https://lh6.googleusercontent.com/3RGO2DbVEcOotryydFVNyrSZvsjoWDYIjYRaISd6mGBG-ohb09uOZm2AS9bw-oS9_aM1PMZR2dohV4GOZwBq-PtVzvWSPxghLOb5qAHVc2_SrJvwBcUVEMMr6lG-pEk2Ay_UDL3XZJLWEbq8sNSgpjM)

  

## useEffect com o segundo argumento sendo um array vazio

  

![](https://lh4.googleusercontent.com/-58x-FUBZPdAAOx6hX4R1sU-88dFQvMIBfx49sGIS7awp6bTTVaPxe7lXjF66a-p_TeVOmpI1NaS82hd4DeP5-OZTUZ3ryXzHC_bhEkk5NlV-ukepx9fkLV3N-2cT7uaRIilytcaGKwXj2B4hut2hWg)

  

Quando ocorrer uma alteração, vai renderizar apenas UMA VEZ

  

Exemplo:

![](https://lh5.googleusercontent.com/b4-nxQMHc4TG3TqfPUYr2ikGNUWqJNgRHMg7X_e4vT_ih4m6k9Sqpm3jvuHPr9nHmdLrVn7fyiX3vGzsGYsJl3tIAl3I04PODzGBZHAiaqu7UPA51qIzAwNNeGhY2M8quKCA06Ea1Whp0cgJdNRoosI)

  

Exemplo 2

![](https://lh4.googleusercontent.com/mQLU5uMSbYAr8WBglX7OwR6EbaAmQAr4pCpP7LYWqeuKUpFpSFicba_EPL2LX-RlSUbRxbCgYHcOZvcGZ4UTsTdjnFTl5V4aAQqYUjGL-0JY2D2wy6jpvyk6AbXk_AcBQE5IYw3I3hJxJN0alps1JmM)

  
  

## useEffect com o segundo argumento sendo um array com itens

  

![](https://lh4.googleusercontent.com/lt-temzQmN1IX_ozomTo3kuEVac1ATPn_IvNvrxmEnHVNgajTTvpGJ2figRPh_txm5z05Lz9coJJNQCBs_TYuidAaqnlVHnzCBUGMji2f0CMzRqOKuY4V3xajANK_wnHSbuMbnK28ySjg2lnrT8Iwpc)

  

Essa configuração executará a callback sempre que qualquer um dos itens do array sofrer alterações

  

Ou seja, qualquer estado que você for alterar ele será renderizado.

  

Exemplo:

![](https://lh3.googleusercontent.com/DDQJZ5X0qph0cDlFzJg_772M-sWBDIKoQUESDPyHOfRnkpYEIMowQaaVXqtB6tOw4kxYZ_g9yqPYiLMQLqbusomBdaUq8yFolVWPY09PNCbAmqayswXrQkyVyzKfalDjcl-EqCxBGBKMH-OwOxA7tpY)

  
  

## useEffect com callback retornando uma função

  

![](https://lh5.googleusercontent.com/M0QV2SzRaQtGRDt3tgSsBYiLW_N8giNItsXPYAPhB2X9pr2wh4HWb5XDx2EEpj9El9alqcbQwH5wt_qXlp1f04O60hZa1aWEiqNQxF-XhN_1gzr74qfiShIwHvGHhwFXIFtby0n-MiOtSFDIQEcH_D8)

  

useEffect está retornando uma nova função. Essa função também é chamada de função cleanup.

  

Ou seja, vai desmontar.

  

Você poderá utilizar a função clenup sempre que precisar limpar algo criado com efeito colateral (como um setInterval() ou setTimeout())

  

Exemplo:

![](https://lh4.googleusercontent.com/JYLduwkf-NyQzL95kO5vGaOZqxvs3LTOhIp_Ebqx94yViy4zJZfFhcQeIayNKqmxAEB6i4CkTYnbxsd0UjSGc728IjHNImubhBAMMARh7KjuBn62tjbfb2aw6cwI_gLfw7Aj7EDYQglIijLPsSU-Vfc)

  
  

### RESUMINDO

![](https://lh3.googleusercontent.com/p4XmTqcsdDTSar23qgt2E_CaqCgC9E2hosItvTX0LSNZvxv4agwY5H-iJhh-6awbdJ_4PJlP8bYk69PfLSiFLjIIsrjEAKk6QTixYDeCmHW6ORPpdDt7Fy7jkL7ARG1_RK-945RKSoWwXe0FdfIFJ0U)

  
  

# Os Hooks mais usados

  

## useMemo

  

useMemo = memória

  

Permite que você memorize valores calculados em um componente. Isso ajuda a evitar cálculos desnecessários e pode melhorar o desempenho do componente.

  

![](https://lh3.googleusercontent.com/zL8vy08KFWOxpBaZkqlSJWypWS2zZJN63FMq8nDBwjYkkYehEAXBCuTMVyQYe4em1UJewRhY-R25BVNCMAmdvZHtx6YOgKHrLhJykdA__jq9I_iqB5DngV-KC__Yxh5vlnDTvx-mSxs75HevO7QR984)

  

Nesse exemplo, estamos utilizando o hook useMemo para monitorar as alterações dos estados value1 e value2, isso evita novos cálculos desnecessários da soma dos valores a cada atualização do estado e melhora a performance da aplicação

  

Assim, o useMemo mantém o valor calculado anterior até que algum dos estados sejam atualizados, evitando a necessidade de recalculá-lo a cada renderização.

  
  

O useMemo Hook só é executado quando uma de suas dependências é atualizada. Isso pode melhorar o depempenho

  

### [DICA]

Se tiver uma função que está bem lenta, pode pensar no useMemo

  
  

## useCallback

  

Permite que você memorize funções em uma componente. Isso ajuda a evitar a criação de funções desnecessárias e pode melhorar o desempenho do componente

  

![](https://lh6.googleusercontent.com/rvz-hUZIW7E9ALU3idls7Y6BS8t8MXqs2VhSEt8N18Om2hyaNz7YOubcgLJuY9exMRiUYyNF28fTUAR6kfnLlEGyqx5Vu7OhSjFJ-yZhxZxbX3lY9nyYsRGRmgy-YSJiiFtCMvsozlGwtcIbr1qlqA4)

  

O useCallback e o useMemo são dois hooks do React que podem ser usados para otimizar o desempenho de componentes.

  

A principal diferença entre os dois hooks é o tipo de valor que eles retornam.

O useMemo retorna um valor memorizado, enquanto o useCallback retorna uma função memorizada.

  

Nesse exemplo estamos memorizando a função incrementCount para evitar que uma nova função seja criada a cada renderização do componente.
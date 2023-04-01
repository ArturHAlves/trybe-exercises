# Manipulação de strings

  

Uma das responsabilidade das pessoas que lidam com o registro de informações em um banco de dados é se certificar de que esses dados estão correntes, normalizados e cadastrados no formato correto.

  

-   O MySQL possui algumas funções de manipulação de texto que facilitam essas tarefas.
    

  

![](https://lh3.googleusercontent.com/-JQoXy0RXPbMwjbRMjvFrWyLu0vASx9Xh7rJTKxCpk6uwB854y1zZuvJcop0BmDT9wCH8urBwBYwUQ_gcY51vPuk2Vd0RpjG9IP6jJ5MAnycYmRvxqF5ab3KJHSaInqPP4NudG7hn13hdpHYJdVtTbc)

![](https://lh4.googleusercontent.com/Baj2dbt9x6BeGlBYA9jYGuI6VFtu7Hi0wwShquJx_Y6KIRc463VaowlYjHfV43vCZA_WOQyemSiUkmaoU_fteZG9UqOD7m3AXWqlDFLuLTd4xjqf186_2ovB6cBqq4zddCK1wIvKbw0WjkGYoWoyXjo)![](https://lh5.googleusercontent.com/-Fhrqkl6ggT0rfS6yjA9jYPEVAQhzRlixKr2HfqY4Og5AxiSfp9ZoqJTDTimSTXngHDxZwfrL0zX_DWmyVK6-0LgoDdxm_amWYot52RuD0WzY3n0SvixgrwJUGafO1i2EqqwKLY1Gp6W2NElhStbRKI)

  

![](https://lh6.googleusercontent.com/pHwGyHbmbBDLFV2SQJeYcCdoEu2sdmrl3VftGyajyH_IHvijtlzOP_349EiAAWDqdI2o1EuDZAC-6K9KRgEtpAG7MhtejRZV6GuAmuSt2hMUq17Q4KackoPuWM2cUa4rUhr1Qh45t3vjhneiFKbYEIc)

![](https://lh6.googleusercontent.com/t7l-vT_bR6Qo5dA6bKimus9X0DQv5sjAXnwSCHbEdRgZvvw4NPM2OkLv5MFgAqZL9o19gnJxbpG5HtokfA8dSur_ZyEDYe_0Km6C28t_9IUsWDsnsho60VJRQUs1_a7bBTiLX_dhrUbIBFWgx28Hyo0)

  

![](https://lh4.googleusercontent.com/HToRelI_BlqfPn6rSKSb4YgK2G8AJ19tl6fbbBYDHqbvHdZsj-48nJ1PYKJKQ4pJ1Gu45sbXyN8b2Yz1Z_Y0hcXsdG7zQSwfl1q7G2gehtU1rr9TVkU3AKZad04sQiYy7KfE50hCJi-cR3hOxAI09Jo)

  

![](https://lh4.googleusercontent.com/nnbvgrTSQoXSzBkT90WI5SzgMgfhPScBgRfwDQPLgZKYIoa_sJIMyIEriw8O5koTJEvp1gdeX4elFN0wVga45qbWw406zjDUE9JvuJl-B86or57F8RHWs1nRh1fKgJrV6WuuOod4B97SgwLdfIEnXrA)

  
  
  

![](https://lh6.googleusercontent.com/M4IkDQtqmyK1WJXvBn1iNHWdvSzCtaH1sXS80Mj-zCMJ2UhV5F9getiJ63fni0YHx8CM5zBVD43jj3He_eWIErlkAj2iXyDrQIqJMDxObED0Y_gZiZ0oQWjxz-XYcXtRtPt00ej4flXuwLIMarZsdjg)

![](https://lh6.googleusercontent.com/OjdlB7JniHV5eqn4o5ePPUr1yYzxVFtSrWzLwHORBxD4IMEpJp58f_5uuUKSUKG2cvAsGEFgS-Td1iIBsS-ZPbthTZPKHU4lplc0UfqD5A79AiKZmgUv57kUTxlok8Pj0mYF6I9DkOtxZs3HE5xpK0s)

  

![](https://lh5.googleusercontent.com/dtoJLhL1rlijqHBZIgUYTsIf1utrQPlcBceKGmQNbkk4yNz6GSx2qgbGOLxD_pEv_zYp2K3I_X7NoKYCAtC58B2_ooTX-D4mflCe6q4nP4_VBWHFBoqTYTA4Z1LgYPVvjtctd3M75kQLmQ32TLpk0z4)

![](https://lh6.googleusercontent.com/-0nCyK5OGK7u9PeenSGb5GbegsHkT90PtjDq-S0Owd23-mILSiU-2M83NMLGlYAIj0gElxSlnIXIuZy-zgauI85nIaYQJd5qNoLtHkuiF4Ayp63FIlQ_Tc968g_gZZ21V4-0lDtd42gom1zyBywW45w)

  

![](https://lh6.googleusercontent.com/SwgsH3Olt0zsCYJhRFAZ1AeRLVQslJgcSJuGGRjZ1Ympx8Au4ipBACqEejGhAu1WO1GGu3shlqPBY00qyeH_vn7eCj0maI6Md81yPsesUhCw4A_PJxh8o1GV6q3e_cSkbrfbhY4gVFXvIGY4RrtQPdM)

![](https://lh4.googleusercontent.com/9dsiPkhDYFmmKI8yOqcchxNg-eYxgKzjG6xeD8hSrDBLTSPABJqKw4eOSvLAMc3Pch1dLEdPsOa4lBKxJAKxEpaOBTIkIrmQ8YuRkUzvxhULfQAse_EHsWdBz_rplzLrphbzmp4juFDaxXG9ZMUqylw)

  
  

-   É possível fazer essas operações diretamente nas colunas de uma tabela
    

  

![](https://lh3.googleusercontent.com/TrYXA-65J2nkKiOtjECCYp8QyaxKC1PGkuFs0YhVKUpm24Xrc6n2bTLf1PfzTkwo5F0QUPBBaIvRgFcFTchwR75e_bAo8Mr1iq4jY2m5_opC-M5wRWPynWRYVamf4hYMq8sbsGQfDJWtBRSZBnGKY5Q)

  
  
  
  
  
  
  
  

# Condicionais

  

Podemos usar os comandos IF/ELSE e CASE

  

### Sintaxe

  

-   IF( EXPRESSÃO, VERDADEIRO, FALSO )
    

  
  

![](https://lh3.googleusercontent.com/v8O_K2TbQwdtLxVfSZlEuAi4iKp85r3eoVeHWHZ4Th5isQwSZZr2VTrQ9-3WfWM2YippVVkEIXWJ8IuecDyqDj8MqcDI0PmuRtUuEJRGDPJWa3W7oXMv7rza8CYrh3JTk0xYumEuGdpqiPKFVBXrQkI)

  
  
  

#### Exemplos prático

  

-   Verificar se o preço for maior que 0.99 vai ser caro, se não, barato.
    

  

![](https://lh5.googleusercontent.com/ff6YKkLTFDUCZY5f1QzHqtqH4wcT1OB7WpQDuLuDNVpTIHTJf9RU7oK9iLEuoGBfsW0QufYWnNuE3SYVXVRcNOtGVdc7zWaPIyKHSejsFl1g6qsEX4O-Gem_bHpq5IZDZeIw9S-w9vglPni9SrZQ54Q)

![](https://lh5.googleusercontent.com/ONjvRMMRaVBCS2Sdz0bNq4USM6_e8GwdzC0_Jj1lpm-hA3Rg9HWXnxVeB69icxduhPQLnbipLIxWVjXntPoR5gtNlyH3t85OtMZuCLUo6QFlCo-CqonXoe9kKr7Ft8B32EsDNf7fYwzu_Zxo7wVTRcU)

  
  
  
  

Exemplo 2 -

  
  

-   Verificar se caso -
    

enquanto rental_rate = 0.99 ENTÃO vai ser “Barato”

enquanto rental_rate = 2.99 ENTÃO vai ser “Médio”

enquanto rental_rate = 4.99 Então vai ser “CARO”

Se não for essas opções vai ser “NÃO CLASSIFICADO

![](https://lh4.googleusercontent.com/ErJm2LPFpAsApacfMXKKh7vVCPgpTQO3M2J19RWgM7GwL3PqNzkBYTDansqNT4aEFnNOo-YA_1lSJnsbqKMCLVtrVReJB1ZZ5rMLdcEZCq87Xm0n0OIo3VzMI9iOd-qeU8jK3uAs0vXVTMYzsmVbIBg)

![](https://lh4.googleusercontent.com/hWLO1SKa6sq0fA11SFQTBJu1sZXGQNQOKlKOeEzn2V-WiL1V4pfw1JNMpTTdEsp_Vfne4YzYQ8Rg6boemMHuAG_bFZFFi2f2Y6F1Ynx8fmtcC1C0oSfwUIxnKX1vJALoNEJPgLo3Fim8rpwKUc_4SCE)

  
  

Exemplo 3 -

![](https://lh4.googleusercontent.com/xYd8r4uCMls_BRm2WTUwB_bae3Bk2sJceofDRovIFkEbyD6zSYLAc5sFdPYjM-V1wGpDJ2anAZTgPLBvDdoRYTNTU1ejsF61g8JTEL4Wl7-U_bOJ9NN2oyk6TBmFVUKhj4taqMCxlBCav7le6ANIJa4)

![](https://lh3.googleusercontent.com/XTi3L1HZK_x-FPHdICquSkIUTCTf_AAEEaAMwVfAr9rpw7zICGmLK1t9tAak3hhdA3GgbL2ghhusiVP7Q8akvh-GGRo7AqiSth-qXUWhZSd5nqzWYotWr3Ff4L1tTLFkg04NGUfrmBAf_MpMKrwuqBE)

  
  
  

[ATENÇÃO] Em casos onde é preciso mais de uma condição, use o CASE

  

SINTAXE

  

![](https://lh4.googleusercontent.com/Z63S-979idC8NxsTWyHPrj3OIlUQDeeZ6loBvmhVMcIIwzVk5pdE4BgSL0BLmqoNRCc-8sB3oGspQ_FepEedtn4r1-Abz-mzc9NdxiANVmfn0ij1iv0E3_Y1jygLFBScoJV-1mGmE9eJW-RPM-t2R0Q)

  
  
  

Exemplo 4

![](https://lh5.googleusercontent.com/d5Y_G0re4ZzWZvxCmvBCCQbcciszR-W8E2Cx698vic9V_JZWRbkH6MIE1MJKaqTsfyBx6yLPyHbVsfS2807lB-TfaygMwAebYwdI4yAlBDSJ16UN9AkKTImWlOa7zPLzqGkpePNYflOvRvdtZ09yirs)

  
  

Exemplo 5 -

![](https://lh6.googleusercontent.com/2HK7bt9CtD7ZdIKZGqngCstYBz0JwZXh3k1l3-JWVcMUYkJP97gykoFy-np0cLUOL4BoYQS6KDxu7yO-yvuoVTJeVqJlfLbRE1xEJWh6DjgHuxTAO2qHJxj9w5f_U0T3D45GzOeMDIsZLHPnZuCobIo)

  

![](https://lh6.googleusercontent.com/nKG_huaTR2paTk3IpdjsIIDFVYcK5iEJQ-wtQw15vgI-v-uRzj2rmA1vUX9Gkjxe5rayPT8pUkyuplMau4ov1QfgVrExNqfN6ajk1BT0qepFJuvymLmDGpbzecFDxmG4qno-Qj7TUhfyyOGs0hckLYQ)

  
  

# Funções Matemáticas do MySQL

  
  

## Adição, subtração, multiplicação e divisão

  
  

Para as operações matemáticas mais comuns, podemos empregar os operadores matemáticos usuais.

  
  

Alguns comandos

  

![](https://lh6.googleusercontent.com/ZhM3E5iEOJjyOF80mfAGAzaSuYiZ0ljTtMp_mZQ0A1wJ3L7vaPe0jTF7qkhkzfZS9aLhjuC1Ad92FpRQHMnIqI6U2Fp_sZrEV_gJaAV6xV2Fk15oBXtdZtbg29Q7OLppIgEFe0xqj2b20vDFnfCejtg)

  

-   Podemos usar as colunas diretamente como base para os cálculos
    

  

![](https://lh5.googleusercontent.com/ZMlPLlqfXNZmp0vVxnXoWe3f4wPOLu1sU0xRLhpwovupeu_Euk_MF2DyqhcANp-1enX-XTvn9S_nRhcYwlVec7u4eQ2hkxqSntGfJHFToVT9tjR17kg9fpV3MU80eVfyFF0ZTDA12NPrWbegjChUn9M)

  
  
  
  

## Divisão de inteiros com DIV e como encontrar seus restos com o MOD

  

![](https://lh5.googleusercontent.com/Z6TKBEjfWtV0l0guM2FQalNeTg90dGIj5h9SyOiSkwErCkCpgMgjOw3bxMOQQSU5vIXMk5lRBbi8ogCb0N9EOON5xXbDFJH6kKHl_V91QwTdYbbIvcmcnjRFHS6QoBIos2yjctYS2NAOum00XA3Syww)

  
  

Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:

  

![](https://lh4.googleusercontent.com/RwKHq_cm2cuLBEQacYYXbHnMpp1qIYR0A8vC8IMwOGmcAylWxynfSdBFiUnEt7jgV1CT6WOaAaZd5NryoasRBbEPJD_IzJ-cvwn_RvOoToe8mBuer3z315orZKAx85SBO6n7uqhoQk4ysY1zXY6JorU)

![](https://lh5.googleusercontent.com/FgEx03SnxHFxpzZcdKZVOeMhSomAX4JJZWIhpQNhXpjCqpr1pNIN84Z4r8es1OlDPe_okG9o0VY9hqGHZnvDeNJU589GZdazisTBJAIcatz8OGLO1dyOegBUeKr7C6J9vibzAkKuT_75ZkPD9tdlS8A)

## Arredondando valores

  
  

Ter a capacidade de encontrar aproximações de valores é algo extremamente valioso na criação de relatórios e gráficos

  
  

#### ROUND

O Round arredonda os números de acordo com sua parte decimal.

  

-   Se for maior ou igual a 0.5 o resultado é um arredondamento para cima. Caso contrário, arredondamento para baixo
    

  

![](https://lh4.googleusercontent.com/a-8HgzdWWlvBu_mclh6t5Zenfxkpi1mWbIW5sYdonxGLdgbfDOSAnFXfmBDJUwak_d_IH-07bLKIkdL-pcqcZIdr32O_KZfoEIGHCwBTc-Nn4l2i4qtmw8ygtmCFRwo8e2_Nbo2aJZBcqBBvzpUkyH0)

  
  
  

CEIL

O arredondamento sempre para cima pode ser feito com o CEIL

![](https://lh6.googleusercontent.com/Bc4k2MYmV9vFdIDsvao9UlxHWRTsj3Zyc9iKKFm0BjqU6eWxBd63IC5vrYl_mFRDXkT76lAeS9LLddTBQn8jjM4iw8p5ksQ50GTtOUpd_gYAVmz3aJRGQBvNaCvEIdpaB6Qw9h72MXs3uqOrgVxp4Us)

  
  
  

FLOOR

O arredondamento sempre para baixo pode ser feito com o FLOOR:

![](https://lh4.googleusercontent.com/gmklrXnKyd3UTREA-5Qya1v-sqUF3ZP_RjjhhyOmewBVvluGb04Rucp3Gsh7v79YZyc61e0nshEl7I0dogMITjb7RndIjQnJMQ7YFX1J9GWfY9v7Xgdw5XluCQsCsueYLsKS5bVuJ1vz9KyAEyTZwZY)

  
  
  
  
  
  

## Exponenciação e raiz quadrada

  
  

Para cálculos de exponenciação e raiz quadradas, podemos utilizar as funções POW e SQRT respectivamente

  

-   Elevando um número X a potência Y usando a função POW
    

  

![](https://lh5.googleusercontent.com/b7kE-_lrz-pe3WRh8x1j7EgAH1TjxsAJ-Dtld72ea5sLl-2u2F20I1x8I2u35fP3Uyc4Wc4335DIrlvur8s105BucGlbPnnev_LwXBWTgqltIj3_JASJZN2_byT21tW4O0hxVJQQNGeNBTywgy5AECE)

  
  

-   Encontrando a raiz quadrada de um valor usando SQRT
    

  

![](https://lh3.googleusercontent.com/dPjDsnVJiYPUlbkgs8uUzqglgNI1HeVCdfr4ptc9CcCJ6FxQNLt5hKTGshdIpuWsm9_TeEU7hjavVnz4dMjfBWhIYNkmho8HKEfbuefsbUtNchOTusxFPXIyELKlIoJAYtEBieaHvCdEBnfg0ZlyRfA)

![](https://lh4.googleusercontent.com/aC8pmYAMH1vQAojK5-byH-gO4ILHU_G7AkbAZR5lwrBlGgfiUOSVt9V6Ehtlv9xGPCQBCMI-0dx0opZ29bveWvbPfk4nJwTH8x01ewQBemcHMT0OawM0c8OK84E6aAj8ZakOPD75iobjfCum4hX8PBI)

  
  
  
  
  

## Gerando valores aleatórios

  

Para situações em que se faz necessário gerar valores aleatórios, podemos usar a função RAND, em conjunto com as funções anteriores.

  

![](https://lh3.googleusercontent.com/oL4jtLIZplr5pAP9mleP2zIJ9xTOPr0whtA7387fsssxfon5wnbDNuf0CqRtlUi2F7mOgJ8hvpnx9ptkkQAaTwM4WnxxrVlulq4-X6tiwYKNgnRFLDPJnAuJHgthQQE02YNi5EbRQikbidIMC8xUN1s)

  
  
  
  

# Trabalhando com datas

  
  

Consultar data e hora usando as seguintes funções

  

![](https://lh3.googleusercontent.com/Yeq9oFUX-NoMlhF4WmqsU_Bz5KzU2y2JjioaxNXrsCzkl1QxGh3z0T9wOSlD9wPKWDTD2RByUcsN-Yt0-89BaQXe_TyTyrFVnWXy-oAb0b6ShCyLmStEKpVvZDlhrdN8uUDEhXE3RZePvKLd1rx54D0)

  
  

Também podemos calcular a diferença em dias entre duas datas usando DATEDIFF e a diferença de tempo entre dois horário usando o TIMEDIFF

  

-   Em ambos os casos, o segundo valor é subtraído do primeiro para calcular o resultado.
    

  
  
  
  

PODEMOS Usar CURRENT_DATE() e NOW() em conjunto com os comandos de manipulação de datas e tempo para encontrar resultados dinâmicos

  

![](https://lh3.googleusercontent.com/MPOUA7Jkpb1Lrv4Ydla4yW-NerdHrfj9hV9X_wfF2yg9lIgTeVJPj7uaUGX8-3kQsuPWB9R-d6fz5ANTKw7XCsumOTHnmSYr5U6xFcRiMVaqUgpSNKnBDXAnOe1P60bQcjRrUPDx8he9CP_feV8D-Fg)

  
  
  
  

# Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT

  

Existem certos tipos de cálculos que são usados muito frequentemente e não precisam ser feitos manualmente toda vez.

  
  
  

Temos as seguintes funções que analisam todos os registros de uma determinada coluna e retornam um valor depois de comparar e avaliar todos os registros

  
  

![](https://lh3.googleusercontent.com/XGZRd6zPiEFa9916hXI6fBkWIS5aqWakQxr1AadF9-w2-QTaMmhnwCJIWEwX49cICEiKLYMozoHbhECCxZlR8zurBMv0FE4zEIxGXOgPHID4U2unuZTtOv1U4SpHWeSFgT10cN3W-27Cy6IQicucb-U)

  
  
  
  
  

# Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING

  

Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY, o que faz com que todos os registros que têm o mesmo valor para as colunas sejam exibidos juntos

  
  

-   GROUP BY também pode ser usado em conjunto com as funções de agregação que vimos
    

  
  

RESUMINDO: GROUP BY define grupos

  
  

#### SINTAXE

  

![](https://lh5.googleusercontent.com/82-kHDv7an1kgw_j50r-Ll-I7qlroVuxszGbOZjIVCOvcoN6_RD2TDtnOtB_YShXdaOpVfIUh1DJzIp7HURHyLL7BScZD1gZ41y0TVrpoqq3AA6k_Ju_mi4vkNqtIF6cc8bIlf03Jzp4-GYNOE60cA)

  
  
  

#### ANALOGIA DO GROUP BY

  

Cada filme existe um diretor, e cada diretor pode ter mais de um filme. Sendo assim é possível dividir grupos de diretores com seus filmes.

![](https://lh4.googleusercontent.com/6_ZgzyWx8thJX5TX-CEjADY_qhtEHP_reLQARL61T1iXf2szdlLltkxOOWTvs2V8Q0BxTcb8dl0LiHDTUQ3Zf1dk66bKhhlmkTksO_FfmDiGqPDD4IMQKiJLg3mULBGY1AuwARcmkgn0GTxGbQ3ngg)

![](https://lh5.googleusercontent.com/vIavJ-nE9WMm8IwPHv-Xrua1cpUyJUHxGaDvrlItJhRFRZdlw9fcXfwvwqdnDYSH9DWgp973Dg5L3iYUt_61GyzkbVYySDUTuAoDIwdJgogTlREMgjsO03cr-cE5mqjOTIW1rxozzvcbT08ksik9ZA)

Verificando a quantidade de filmes que cada diretor tem

  
  
  
  

[OBSERVAÇÕES]

  

-   GROUP BY removerá duplicações, retornando apenas o valor da coluna usado no agrupamento
    

  

-   É mais comum utilizar o GROUP BY em conjunto com o AVG, MAX, MIN, COUNT.
    

  
  
  

Exemplo:

  

Exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT()

  

![](https://lh3.googleusercontent.com/0jj_L9-YblZ1zPg3TgrNqafVi5ea5S-srR8pMbbnFcR11BGXB3CpfCtKKY1n5lwYRiojKiEoIHRBGdL6V8MerV8K32OlmhRdRzyWepwxQRpP-WEYIVQ0iKOOeAQl5oB2PG1wgQ6A-_wtC0Z2BwNCVg)

  

![](https://lh3.googleusercontent.com/clH_tJ1GBJp72ieF6wiQMhTeDXlXoJmf1U_nlpYHZVmB4KQ-t1mh-GQU3V-2sxau6cehbIw8M6_Tb0qKGZOn78COLLCwJcj4d3p1Am3VwJFbSwutzsB88y9DIFuvnVRclW1fQghd7v71tdqgvT3FUA)

  
  
  
  

Também podemos utilizar o GROUP BY para agrupar os registros pelos valores de mais de uma coluna

  

![](https://lh4.googleusercontent.com/xE-t61hwJTaZiEXHTZ1_Lh8BSnjfH3EV-oblVnlVc0gTT-pR5KiWd09Y0Yz9S6rfEl-qzRvIGBD69a7wxhklRf2OvQTm3Dh8EdumSUn2482iIWopl8SFcxBLub0qKoYkNnCmq6b3td2JvosLzfqACw)

![](https://lh5.googleusercontent.com/EjlpznRSX7x5nPV2KIOXYAhoTnVtOc6MRS2r6WdIaV15bUMnKeIPQT7Pvxff0AjErQJSGxFMUThE0xODAQcGGPq5tZ06VBqLCT3U6LiO4JiJyVVBKj6uTFeX7QElGi65iHPFLhJEGd6KMM3W85Jd5g)

  
  
  
  
  

UTILIZAR O GROUP BY EM CONJUNTO COM AS DIVERSAS FUNÇÕES DE AGREGAÇÃO

![](https://lh6.googleusercontent.com/YopQZ-5W5U6C9tW8M0iO5O6GuG7mjhUeO8dRx7fAwr5AVIzos8aKpI0yARIN59lShpZdSMtH5EmZ-X39m8DfelE8H-Iahq7clRgG_nlzymYt-tjzNAqUw_bOTHX9XlXEPhEhMU9jLDAfPO55afVbjw)

![](https://lh6.googleusercontent.com/lLTOMlD5LLuqXybqrOqn2p8JpBlYQVBNlsgI5iWzDclA191kUHJPCTTLW4jYxkIV9TEbsIG7y1j2BRUc0ZQWEc8EAH-SMFTRnJmBrq2jwCE_0ywYgPvuKgPFQHmvSGn3MA1zeaJBePqmCHAgdP16tA)

  
  
  

![](https://lh3.googleusercontent.com/yXM1j-0bHI1L_JvJoO1KZ_a5-b_jGdqU28t-uFSF6KPQfVoCShOlJLxESwqDHDHIwrcONCxlK45DilVZBobiD6y3gHEZFkNfMsGkRJEvoCBbEVWK1RtZrFn-QmMWBMXUoyECmNWwN_eIn5LmzF9iJg)

![](https://lh4.googleusercontent.com/Q9byRFv77VZwMXyss7vnwdBalBY9yYYpphmX9j6suZ4YvzY7sup2AOipJ-Z0GD6HQlUl2Opt9TnsG7pv32YdiYpHyfMLzMiQJfsZHxbUaswfusI1P3xd5prVOEkWsfVISTZMa_VAwepGz2wcWFckOQ)

  
  

![](https://lh4.googleusercontent.com/lUYVH78izL4Yy1zSt9mWDKyl6mwzxUgDMV8lbVlRCzB2aRbPnZQguuIew26Bc0rdRg_xtpAkICVQYWkMM5zTlbpUvnJCiqlhQooNTBnCyQkf2TTbUdMnD8AqwoZiIYCPeQ9im9M9Vt7SWjCnF-RivA)

![](https://lh6.googleusercontent.com/ZEqVIbQ7hmh6OS9NVa3cxGVhrEHLJ0pEYfeBDttiIK_dMtOEPTis1rx0asIKc--DYqBfg7S-h1HMinXw55fGFd3miuIf5RHEjULeB6ruUn0u88K8ipyd5T-TjQSH_3LkHTb9JbCD4gR3N7hEZQKmKg)

![](https://lh4.googleusercontent.com/xMWgSq193XooLIEh0zMY4XNLDPj_XcXntaaMjv9M12RG18RJPmw4sK_4ownkR4CK1UHKW_qx9ozWJcyNVI2gY7UengnTdN-WCqS9g_k37_vsNREBPO79MfE0QXhFDgE1BRaG_p9Pyu_BvJ8xFamdCA)

![](https://lh6.googleusercontent.com/wi9d5EgypXoQvmEOCInIPPIO7kHddKD6cuf1xcTBL0R1Cly0cnDF7IPbxf6B3_Nuq4GLHcNseAepB6xQpqtRdU5zBjow4o9lva-VZpmIvR2jE1_OJaloKiMJsygC0Qcggo-FevO5Etw2DE3FJTQl2w)

  
  
  
  

## Filtrando Resultados do GROUP BY com HAVING

  
  

Trazer a quantidade de district (sem repetição)

![](https://lh4.googleusercontent.com/-1ajVjMyEi6ojJlqnwxd4ydCeTmEbiYKOdydl8Iv-g5lNC-R4FHauDz49ThjHJQdXbIa72pVXPXNuIC9C8xefAPtAuatgjA_NiIO8B5A4uNhobWEWnptVNjPG5SOxMd5HOH9BygOHP87hf8TB3oT_dM)

![](https://lh4.googleusercontent.com/LWLRec7TZO6aDy26mCsw0o8kteVfG8jYtXCI6PKZCDzvlagyBetp49xovtqCdMc4WGXj9Nz-R4TjPUiDmSlzoJ4LZAnohZnAIm_sKYLf0XlDfKsXKu090O7tAF6u1-BW-SQPeiTct5qn4GKo0HXg6Ug)

  
  

Agr Eu quero a quantidade dos distritos TENDO a quantidade maior que 5

![](https://lh4.googleusercontent.com/Hv-YRWmTWD6qUO9VqwDYpgoSYHA1xRd6oDBrpXFAY2YTE8vZMx0PL9pCZanDsMqh--RCP8pADKs7x2sLXWQrJFKRrn6KVW_f5Sh3BGab3iRi47-a9Ns5KPPCKEq8eGlSYrfLjkAL5fRPC1QHvouBeMc)

![](https://lh3.googleusercontent.com/uVtckZ-TNHWWoV-0bl4ycidDxIzDny0K7dh9Mpr4iTNPIYPX6oJlwBXGC-XfytkD8Ox-Y1BYopnnyPP3ZmqTLDfjRHxiicWnro7Q0qYzqYbddJytU-V5yAz3q0PZDl44J54MU11Hb0G3w_vtMxyMBgA)

Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT…WHERE para filtrar resultados individuais

  

-   Ou seja, o HAVING é o WHERE
    

  
  

#### Exemplo:

  

A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade.

  

-   Filtrando os resultados agrupados usando o HAVING, para que somente os nomes que estão cadastrados mais de duas vezes sejam exibidos.
    

  
  

O HAVING acontece por último na execução da consulta, de modo que primeiro são calculados os agrupamentos, e apenas depois disso são filtrados os que não satisfazem as condições da cláusula HAVING

  

![](https://lh6.googleusercontent.com/bfgWwEJyqFHMkTeoY9EhKoAph366I9_Zm2CzuPS9N2ozD3EnpK1-w8LOZPu1Fytf05rOstpUQga6wbDss_mjjoxYygt2wPR96bPoQQ32xUxrg0jqYgonZjdllfpRjAjhU6eaOXPndMg78cQXwZLCVNs)

  

![](https://lh3.googleusercontent.com/0k_npcpOQfyS2p18NgrnRi1I0_aPX3lUNQ-CGI29vFFt8Gfsiqph15iY7mnnHY3Z3s-HJQygGmAREuHSxj3NFILv1iWF0wAs8EgOsGNto68XrPQ-dK3weor_itArUxEVCbtUhXke9kWhj8TdeVWLFxY)

  

Exemplo 2

  

Aqui estamos buscando todos os filmes de acordo com a classificação por idade, coluna rating, e que possuam o mesmo preço de aluguel, coluna rental_rate. E ainda exista um total de filmes nesse agrupamento, que seja menor que 70.

  
  

![](https://lh3.googleusercontent.com/SC5O8EQrtcX7JJfdKyZrul4Gz5Pgm242_T6r6Kq3VC3x5aVEoo4NMFZxF7ILLmwRKZc80xeIOL9ci5JtAeFSz6htiGJ8Lz3IpqXfQjWNrmODMxmQLy6U4fKlanZqFFxb3Z9UHuqej2rwj4iPkugOkJM)

![](https://lh3.googleusercontent.com/FmL69i5OpprL4t1jx2RH_RKQt_3fJ3XMGWvf_93ewpx4GiBd31JERpvs6CfwIKXC39Sn3INWPB8BKxgxAGmEq__W27LIjO3iiRlEZLm32ysxgk2OUIkz8kPxDloeEPI8quAPCorG2SuKSeQdiKyDGzE)
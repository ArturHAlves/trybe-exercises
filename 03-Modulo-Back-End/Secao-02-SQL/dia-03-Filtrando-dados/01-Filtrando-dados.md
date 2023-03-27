# Filtrando dados de forma específica

  
  

# WHERE - especificando resultados

  
  

O Where em SQL permite filtrar registros em uma consulta, de modo a exibir somente os registros que interessam ao usuário

  

![](https://lh6.googleusercontent.com/wdE_BV8RVxLXW4quw8wW7TWpU-FOkHo4Badk-PGKQELlIGRi355iAtv9MjFh1hQaFoCJkYVBNZLuW7cXjLcTiiwZAhmhrER3MaKY2CQHsoEOaqAPk5YcfTUlKRbjim4Gm1K62ASntv_MVj1-sfJOX84)

  

Exemplo:

  

1 - Retornando o nome do livro e a data de publicação somente do livro cujo autor tem o ID igual a 1

  

![](https://lh4.googleusercontent.com/8kszIwi1VaN5s4gDHbtTsETQnptfXbqU3zZmScr_KaZSiNlxUmJ6GPAb3M73yoI6Ot89ipK-AfOdhf6zuDkImxsamQSpRYxiW62uIkqtaqjn45t6trLE6YxXgrNz9ofX6clKkG7p7D-DQuPm1iVF8Ro)

  
  

2 - Retornar o ID e o nome do autor cujo sobrenome é “Stanek”

  

![](https://lh5.googleusercontent.com/Qn9pUtWylSyBpkE7ehEhRV0wAbvCc30idHzvY1ZzLvVz_ODW3DsMvMSem-0_n8YfhIKbhrghpPVP8Q-2y8Colb9UMwSWd0KUckY5rA4yj3UPAEoPrpN6QGyYuhK_U8UtKRoyh0l8zaXOcvBbw3AYx0M)

  
  

Exemplos:

  
  

Exemplo: Filtros de classificação para filmes para menores de idade

  

![](https://lh4.googleusercontent.com/hnkjnW7CE1c-IfSnoXNpzHDTmWKf_PDGv_6LfLpxiJ_HZU7Smv4l4eU3cYZBTu4Ieq0UM36hmmg4UbUzhPnQ_2Jt5Isk-2X3F9h8ls_WwqEh7wjwe6LyF70T2uylaqVf5aZFHcjUYTX6N8qdJyvUgZQ)

  
  

Exemplo2 :

  

Busque nomes de cidades que não aparecem um valor de classificação:

  

![](https://lh3.googleusercontent.com/sAR-M01spcZDfI_O1DCnMrjaSqVyHgHh71niNf0kcwcBeMJAxcOv9RTW7VQDvLZfKU4YaxWWzjlpYZVVBabOs2T4kOwv3tJJC8jmKkNp-y1MpBOVdmQAbGY5sdK47cUzf581OcZeS_ZzvgMKUQD8q9A)

  
  
  
  

### Precedências dos operadores

  

Ordem dos operadores

  

Parênteses > Multiplicação, Divisão > Subtração, Adição > NOT > AND > OR

  

[OBSERVAÇÃO] Colocar parênteses faz diferença na consulta

  
  
  

# Operadores booleanos e relacionais

  

Os seguintes operadores:

  

![](https://lh6.googleusercontent.com/zwjFnDHSH6WNT7kW3HPeZc7J9wQjXBAwaLW1YlamVyvLdQMWIvBAUbN4KX-VTK_d5u-1zzT7DEqCbIvaukVEQI81Ndr8-4qP-ofn03_mFI4RrwTUSjBJmSajGXXt-4yDa6gSej_61XDda3ZsoWZnkRI)

  

[DICA] Sempre se atende a essa ordem de precedência para que consiga montar suas queries de acordo com o que precisa. Na dúvida, use parênteses.

  
  
  

# LIKE - criando pesquisas mais dinâmicas

  

SITUAÇÃO: Está tentando lembrar um nome de um filme, mas só se lembra de que ele terminava com don no nome.

  

COM O LIKE é possível:

  

![](https://lh5.googleusercontent.com/ai-xbDvvBmX900u5mJgeOb3RO6k6TdM5eb5QsLPpXLVuJQ2GmmhhyyvEtsGn-U4MhCTWYVrxLG8jaTU2tjmTqiZWAKjDQTiAUysh3_-c4J-z3lbeUEpxeaXZ_4FgR8PVnsI_8jeHWoOO2CTxcyxvgYw)

  

Resultado da pesquisa

  

![](https://lh4.googleusercontent.com/gPbnv0XR4KibEpfffSkDrbGxOU8f7mk76O8-JIiaf_YPpjfDTUwjN0fSJYgSk8_eQzAc-ueEK3EUPrjZaTU0OrN7tFMv6oFQS-0kPJFgjjmcJbL-p9DPEGLsT1fBLxzqwUNoIRjjnl7MkDqBRxFyI1A)

  

-   O LIKE é usado para buscar por meio de uma sequências específica de caracteres;
    

  

DOIS MODIFICADORES, são usados com o LIKE

  

-   % - O sinal de percentual, que pode representar zero, um ou múltiplos caracteres
    

  

-   _ - Representa um único caractere
    

  
  

A ordem do % interfe por exemplo: Temos a palavra Artur

Ar% - Vai completar o Artur — %ur - Vai completar o Artur

  
  

![](https://lh5.googleusercontent.com/nK72p44DXFenR-F1DJ41c7Q4SQpOzckxHbKsNAAvdp1C9mMguQnHUbVEb99bEciq0j11ORWvlA7mVsSp5s8ub24z2cNhPzsovVb6lCfFvo6QDgP1vnWVqhR-1_tC5JZBvP6FCN-M87Ol3EWsR8LbLNI)

  

![](https://lh5.googleusercontent.com/FW_b-AUxAJq8H78Wqq8ttofV9w_TkCqdvw02-6xs657us6X-vlE1vk_7qzb6Jm2OTSSActR_sowlDRuV2TDLOZGuoSrLyaAdCIf_ilw3_P1ZAkjdbnbxH_jUky0WK8TkuREl4-OLLugaNVEozt-czWQ)

  
  
  

Utilizando dois modificadores de porcentagem %

  

![](https://lh6.googleusercontent.com/EWJbQ5-hgXY5KzK_GuX9f_cbHaHtIADvRT9FcmBS6wzH8XzfJlAxsXTBxNp6sfLcPtwBKeyoOmNMsATlM4HwFGuJnSuwxbyqJ17LmyoQjqz7G_fwVlMQRYcDvuhqBj3tFXEENbWj0h21yvhi4mHJ7w0)

  

![](https://lh3.googleusercontent.com/zm39zB3yaEoNNWpyoNHcjPhXqG81u2kfaF0xgvdrsZlFh_SPYqX3ohpB_QC2WpaEze5Oyg1hqT9wvIe1F5fTLuNZpunLsKduURaq1PmszUz6gIAk4bgC1tmkoqq9sed0htUfaq2rP6mZ8mYvxTaMESs)

  
  
  
  
  

Filtra onde a palavra inicia com P e termina com R

  
  

![](https://lh6.googleusercontent.com/avf1R-b1JXfUvrEomjDI_KSWi4BXKm_dFXML5UTxixugM2FrRw8QVqZVNAnfz1VjrwK2i5DDZ2JdT6i_DXbtuqfBJjf0pKmCMR3KalRrekS9kTxKIEx9-jRragcQBPa6qKWO3R2cO0-m0GcJrSnXtUM)

  

![](https://lh4.googleusercontent.com/IcqS9e7uIwMxVHTCxWw2WYZZAlqmm3mD8FaLhSqOpPKhzn_WCtAeDbfxTm4E7mN005Uurkhpxh9EtrF_Ubvm9oQBpZ58aNaBuiHDKTqiwWDbOyltkz0XwW1vV6d-RErNKFhPkpu_ls5qADZMkUUZ62Q)

  
  
  

Filtra onde a segunda letra deverá ser C

  

_ - significa caractere

![](https://lh6.googleusercontent.com/DOh980-r84Iw9ojjhylgK2NzScwlVgZdw9bp23vkApxiyqowaRs9_cuK31M16SyYS2C7syswqBWXcqPzVIBLANqgLHqe2sKEzyH8l1e5SXnQUQiwOUu1-zVBYIfuM6ozFboa2wixe0VcZuxNtJcE324)

  

![](https://lh3.googleusercontent.com/xtHoFjRMiEh4VxtdKqTa0cF5AzUDig0ZKm_pysILJSXqilh2QHcnovIaYGs-Zcca-J62qCSXwc_ntGibCKhYK4TXYJcKLsTQdF1fKbwHQSWZkeWXqp8fb7GpVxyESnps0aqLXQ9G7OuaJkJQv3JU86c)

  
  
  
  

Filtra onde encontra o número de caracteres que sejam 8

  

![](https://lh5.googleusercontent.com/GsgDQmevzdqEdFUG4Q2ZXwSddkUGvs01jUvr1YOyvtKME0HSLyzILBhQDjH-VBLN1OmRvybUp90FSBtZE5exVBLlSK3UT2RYfHVABIqzXPA_pJ-eLDtxffgpu5UG-1ZRHyICdJfHkKIJrwCGvHVPVTM)

  

![](https://lh3.googleusercontent.com/x9N0mUyFX4iKzmJY4mN7-m4I3S2kBWPjcRnbqZEJiCMvOE8GddCi2doazJKRlUloTFFkKl7EFBjgYVudb-SniZvR1fGm3PfVOBETRx6v68GMz-qiMTmpnD3QMiXbToix5qbPIKvckpQuSxUjiWVyBhk)

  
  
  
  
  
  

# IN e BETWEEN - englobando uma faixa de resultados

  

É possível juntar várias condições nas suas queries usando os operadores AND e OR.

  

Exemplo: Podemos usar OR

  

![](https://lh3.googleusercontent.com/T-9WU6Ip9NqC0WSfaiAN2HQXxWTyAyyANOJ0c6kzXkDoUTlLMnJTKdsPoeIchUS59LHDZN54IJAVqSANHd-xRMd74-E_aMvB_y2OO905ITJhCb_or8U6381kxxydWLnubfNyfg3Bh0QAhQG0mF0T1z8)

  

-   Uma forma melhor de fazer essa mesma pesquisa é usando o IN;
    

  

![](https://lh4.googleusercontent.com/t6LZF0RQ8YmDcC6W5Ms1DV08gTsxl-XUPKxSPm-tmwcJLVtwolOnVNu__x015nX6AJP_6_KZNa7CTw_jcVWyv17zk4la2W_H8vDbACpSPk6Oet3hHZ14S80cvNpruh0fHZ34hnckXwyw_J2czrs8XcE)

![](https://lh3.googleusercontent.com/nGQ4ONQj5Bo_HZK6vyeOlda-N1PM3Fw_AUCTAAI88RmHLZRLlsUqH2iYIx27je-4DotWiXwYYZqdYBSI1QYhCYtliLmvjAGg1Gvu5TSJ5KBW5gbTrVr5zvkLlupF4E_UL08kc-75CPUs8IshQONfE6k)

  
  
  

Você poderia fazer o mesmo processo para números também:

  

![](https://lh4.googleusercontent.com/7aDslMuy77YVaHbshThpwXJdnwQOhdKDn-l4oIlb6e4ER9P2sRV7wi-AJIoPBZbZHPWJQGjQWC8fwVkzrItNGPa_0X9PQiJ53SvI_Spo4WNSJ78mEMmS9OHBVEEg-bDd2srgWhQW1XcvF_aeoMiqriw)

  

![](https://lh4.googleusercontent.com/VBKOkWzsVdHglaZgYROjzXB3Lt8JkwuAm7t4UoE9_BustB_DVlBAv2PyPRzBkAaV7SNejXtng7sdFhrebGeAqGHUWFn-LyMmb0E-GEXr3QBRHUVka-DLwpekpNwlW3S7cBbTFeU4PrX7KGPKBbOCKCU)

  
  

#### SINTAXE IN:

  

![](https://lh4.googleusercontent.com/Q6akRk_a7Zgy3yCTu17NlSatinMGm3dxwfgWj_opp0AHsR9FJroU08xWehLFLnGo_4rdyxEzQUE7H_SuMXehbb82XUXeK-MTeYetU0SyxZdawNmM9PAYpTk-EZjRqaDuN859j7Vqt7uHbgtFYC5iRdw)

  

## OPERADOR BETWEEN

  

Uma outra opção quando queremos trabalhar com faixas de resultados é o BETWEEN (ENTRE), que torna possível fazer pesquisas dentro de uma faixa inicial e final

  

![](https://lh3.googleusercontent.com/8QJgqmThbCEyn0AbKZgHLeeIywLi1XQQordrihjyJE5KKSTWo6o_Ea-FsnKTeIuEJC8thu7f-AP47aW1rw4pdm6d8IPppSQwCzww2gyJhasUzjn6CaP_kbpDeJuosId6RhH8gFBYoVliSArbC8KVXRU)

  

Então, quando você faz uma query como essa, você terá o resultado da imagem a seguir

  

![](https://lh6.googleusercontent.com/EpFMfjyPpZsIav9PYCxoiXZFkMyfanG3g_7fNhs5k_xKMgt9lLRF9csqmKiBHCZ1BEiB0DUZeWO45LqRW_Fe_yfNTc0r3sRH1Yuvs6tjrlTGLiXZxtlMZwv7ev9O843Wxk-G7w023N8pPuLLJdhhc9M)

  

![](https://lh3.googleusercontent.com/3i3PKX9cAmTy6wHbYBYJDcDqVcSDJhYYp3w26euR2torhZzzlHpGfMhAOD54UfodGD359sfsxC51Qrkm1Uo8LWrGaNmYhSBlW66tYZT7Pjx0VuUdvGmqFLUG651n_c5UFX1GYyvdyVLeiXZcza2g0vk)

  

RESULTADO: Eu quero title, length e que o comprimento seja entre 50 e 120

  
  
  
  

## Usando o BETWEEN com strings

  

Para encontrar uma faixa de valores em que os valores são strings, podemos digitar a palavra por completo para encontrar os valores.

  
  

![](https://lh4.googleusercontent.com/GClCvTIpyWchSE15Ka4YW8KjnHf1RwYQAJ_p88EhZPkhfY-LHLCGvHfrFRT-cRMqoTmf-rjFXITl2v-04HdCtqQpDgN5Pf1zhchRTOqfESg__TZbD2Yassb-epQ9pucEyCE7_jSY_HYHP478lu04ALU)

  

![](https://lh6.googleusercontent.com/I9yBq_k1AaSvweRfMxkrocQtYZbysBuC9qJH_DKyUCDaoHrDRc2ReZUHbiKoKW1F3KN8aUz7MjkrmTnSUrNS3TNZJWjNRheRGimdxvU6YaWYVqv611yVMuRqxprTPqc_HDLzEvIOc6lFsDBSHiZDGts)

  

Ou seja, quer que o nome da linguagem esteja entre italiano e mandarim

  
  
  

## Usando o BETWEEN com datas

  

Para usar o BETWEEN com datas, basta que você digite o valor no formato padrão da data, que é YYYY-MM-DD HH:MM:SS. Os minutos e segundos são opcionais.

  

-   Filtrando os resultados para exibir o rental_id e rental_date apenas entre o mês 5 e o mês 7
    

![](https://lh6.googleusercontent.com/-dTJf96xVOHM4P78np8Y8DEYR50yl6QzVeizGkkxkfq9ng6GVWKjH6qwuw1MsR0YIx3JfrR9-xRSRzYDmFR8-mcp1-JGvljVlzIVNbQRllLTVFVJ9DnK8ZDg99Kv4W1U-UUdMWC3-nT43ZyrB_xs27o)

  

![](https://lh3.googleusercontent.com/C9IEq6isccUPtkbGQs7nBRdfF8JYDuEzQOt7rNn8Fj7qw2cc1pUC5StdsGth8rZU9xz8ncJnrdN4tmpc89ihKK2WfkQwYTQG276UhEhq79izHUBAt0Z4_ej9t1TAwTgj1wqZe_z0KQ7V7_3aYFz2sgc)

  

## Qual tem a melhor performance?

  
  

A melhor forma de responder essa pergunta é: depende.

  
  

MELHOR FORMA DE VER ISSO é clicar no botão Execution Plan no MySQL Workbench e verificar o tempo de execução para tomar a decisão de qual tem o menor custo de execução

  
  

Fazendo um pequeno teste, temos seguintes resultados:

  

![](https://lh5.googleusercontent.com/HhKErf__bEYoymr-TPFSZ1ivkVT3m7sUco1ZIEcbmrrZ6rVvo4XSAKzCXheQosa4C9-y0JH-uGuj0tueBLujFDHv64GHsXli2Tv5KlqdUXd1q58HpOBjCMOypKFzpHPpe5FiH-p1GB7omendxiGrHLk)

  

![](https://lh3.googleusercontent.com/i15ugAwyM3yNCR77aLM540t_FmSCEaOOAMfAtMl-QDmRpvSW9qYlXNi3SJ9-ZfS0LEIS6Y2c85bASUZEOtzh1XbFPT-jAI6CylO1LWPU2lbX9t8t8UY9UAPYYx0LZs8eTRSDAFpe9iYc20rpy6qN57A)

  
  
  
  

# Data e tempo - lidando com resultados temporais
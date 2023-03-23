# Exercício

  

Observe a tabela a seguir:

  

![](https://lh5.googleusercontent.com/2aeMpr8EIeA9YdLQbsCVLLN2Bj-9zhAyCTVyDxox1P9nOGV0wZhVOem4JHMOPA1v5zoouCGrHCX4GQjWvN-a8ECSJrGzRsSBT06GIF2TgTfpFnBTooKJKmiZBgoZGZEDA8xhrZ0qT-a2tHE192fTmDE)

  

Responda as perguntas-

  

1 - Quais constraints a coluna address_id poderia ter? Por quê?

  

Resposta: A coluna address_id poderia ter a (PK) PRIMARY KEY porque deve ser o identificador único da tabela

  

2 - Qual constraint a coluna city_id tem? Qual é o motivo de a coluna city_id não possuir nomes das cidades?

  

Resposta: A coluna city_id tem a (FK) FOREIGN KEY. Ela é apenas uma referência para a sua tabela original. Os nomes estão em outra tabela

  

3 - A coluna address (endereço) possui uma constraint. Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?

  

Resposta: Para que sempre exista um valor na coluna, op constraint deverá ser o NOT NULL

  
  

## Outra tabela

  

![](https://lh4.googleusercontent.com/RDn8vXAddMrSt8IRuJEXk8o72778BnfcUo8d99pqVi7wsUvclLEh9IUMM_mmJ2pv7-eqKx7uZEST-LLBBXbePQSjzGFikZ9Alm2owd7xtFCCVqheXEJqJfJIXv0rZfnn0nz9EcqSFKEDBPLJlpzhlYw)

  

1 -Que tipo de constraint a coluna city_id possui?

  

Resposta: Possui PRIMARY KEY (PK) por ser um identificador único e incremental

  

2 - Qual é o motivo de a coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?

  

Resposta: O motivo para não possui nomes de country (país) é que é apenas uma referência para a sua tabela original. É é uma chave estrangeira FK (Foreign Key

  
  
  

## Na tabela a seguir:

  

![](https://lh6.googleusercontent.com/vQx610FKfghuOBRAUu0uJRplgMA5H49CmBSgpGk8I4QrbxQ0jqXl05Jpxgd1sdcdZU2euxhDkL01nAxA5g-g__UyBMnwLkuAqttP25AzXCDNejoym6hwTbqMT_u8JYYK5Mzjnfm2VB0DNDr83aLjRIY)

  

1 - Qual coluna possui uma primary key?

  

Resposta: film_id

  

2 - Qual coluna possui uma foreign key?

Resposta: category_id

![](https://lh4.googleusercontent.com/TxSQB-g2rEp9dkez360BUAI8rhqENUQL3OW0THopX51zmKTdIamm4R3tW8mV6NWGKi4B2tCeegbQT1iMmjsOqQ87mLWPa4iu7L3cEzSxd-klexhDI9-d0_c-6_9ExngwsDvnzWWGtZwuCFEh21ZdzQ)

  

  

  

# Como os dados são ligados?

  

Para não precisarmos duplicar dados em tabelas diferentes, podemos estabelecer relacionamentos entre as tabelas

  

![](https://lh5.googleusercontent.com/hc3npF8qivSNbXIooJ04nuUv50gFxWjQNamQ5k7Bv6g7pwRuEHr0Ye57Skq6wNPP64YfIQl1leU2kffhEoW0JsDmgbNXZNiQUrBTnAzvlBWRDywpMnQ5u6jnKwGxyUlZOccpExx1XvSXRP9JYzvlgA)

  

  

Em um banco de dados existem quatro tiṕos de relacionamentos

  

## Um para Um

  

  
![](https://lh6.googleusercontent.com/It-DbpoX4vV5vzWci0rUT9kDsNDpM3WAuP1-AaP0hY072WKkT_zQNV3l8tBuZF_9ZzqYgtoFbOy8UnSrvg0FNa4MtOtBtW-9LAQHvzmhyQJC2090734V0NZW2jb0ZHThoj31PGbyDewnkSTy5DkKPQ)

  

  

  

  

  

  

  

  

  

  

## Um para Muitos

![](https://lh4.googleusercontent.com/Eez9AymXSFuNxlBDfcxs_zznwK1gV64Rw5-Ae7o_ayLhWP-rRtk0-UzNGnY-y1NvbNeiT1-p6QynQgHDqryBw36wprxkzPh0m4Pm3h4IvAqGlYylq5yW9cHq1aTaiizjhg2RQKjfUdibyQ1RQYovP5Q)

  

  

## ou Muitos para Um

  

![](https://lh3.googleusercontent.com/pEtX9DCqHzVUlhne1OiesP0BXRo9i3UwRLmx_V_jHY9RGb4a-6a1UabugPEMgzObk4c96vgIA-2PC92rCS_ettblhulH7B-PQtKLfmjpTdCNpw1xR7lwqQod7tVB0baHJve3JLxi8_uXGaZxHjPbjKs)

  

  

  

## Muitos para Muitos![](https://lh4.googleusercontent.com/JTx2IgdiOYh_NaMqZ6Bo6iUnbM_8hRzckmGcXyx8uTwlAKeIVJceQELFy8W6EZZ7R8TUp792n49077tGTrGNtvN9QIoiN3muec1txA1xp3TCWt9PiG1qC9Ex-8KhTHM7ABR2mtWTOASNzFDwCCjyht8)
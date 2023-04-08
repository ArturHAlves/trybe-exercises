# JOIN

  

A ideia do JOIN é permitir combinar registros de duas ou mais tabelas, através de relacionamento que uma tabela tem com a outra.

  
  

# O que é um JOIN?

  

Em alguns casos, uma tabela pode não possuir toda a informação necessária.

  

-   Em função disso existe a opção de usar os diversos tipos de JOIN(juntar) para combinar em um mesmo resultado de registros de duas ou mais tabelas
    

  

Esses tipos são:

  

-   INNER JOIN
    
-   LEFT JOIN
    
-   RIGHT JOIN
    

Para combinar duas ou mais tabelas

  

-   SELF JOIN
    

Quando uma tabela precisa ser combinada consigo mesmo..

  
  
  

# Como utilizar o INNER JOIN

  

O INNER JOIN permite retornar todos os resultados em que a condição da cláusula ON for satisfeita.

  
  

![](https://lh6.googleusercontent.com/AVBKPVZFdeRcg8siDd3akFUXkmAI0S4pp1aovvjBBM6ExT9gnYz-u1sH2JsxwIH3OaTsdA2tns0Uben1SO8-satR1UdnqvQBcwiYGRF6o0mhSwdJaQJg6qkmUsn2NgFJNXuOo6fAa8wdfv93Oz_cwKY)

### Sintaxe

  

![](https://lh4.googleusercontent.com/2ol97A9haZfLL5ysNV01sVgG27WFfLaE-gR-RtT-P-s7l2nz6AFHdHWp0Jf6NppmbCrOJUV9Rz8x0O7igdl2VtNupHwpMja-OFKB8z6NcW7V3UnEqM_RvxvPfgXVPbSt1WeuInEaG9OiWqkRS_u80xY)

  
  

Exemplo:

  

Quero ter informações das cidades e dos pais

  
  

Tabela city

![](https://lh6.googleusercontent.com/dux926Sr6By4REVSDZCYtbXKhKyhmhRb96rSqQkkK-gbZgQ5QWiihRXAoYw_JEzv2ACNWuZs6ALQExpeE1alVaLbj4ps6h7K413511cVAa_CDr8q3ctd5_bYa-XG5X3QuCiVzBfxT3edAUENxCUZQnc)

![](https://lh6.googleusercontent.com/Vez3qMJuA80UvAjiPvuMd23mX9z7nWS4uPCDcS1zFHXjulUUp5esbym3ZJ7Hihc6KnPEnDus6XBbhcfi5yy7v0JEtSYS9pMlufMdPPEgy6WLWJOaYjTj0kZ2DBoY6rtfqRH4PRRXrC3doMGlYkJp2gQ)

  
  

Tabela Country

![](https://lh5.googleusercontent.com/l0hEZ3QXfuA68MOpxD-Nm_RNgp2Dpmk5nPdXKfhLsLcaAjAnARj5WenVxM0rtwb5fTRvMrJIeBF0moi0MrqV7zfRmRVKOd2T02lwR3xLVrJ3OTgv4i04J3SfyyFt4pNe95rdDSYth4C1S8JQm1tDe1I)

![](https://lh4.googleusercontent.com/dP8hN5S3ysv68bcOCs5hT2Osa-3qMvF5NsIForH04UjAoERbNakNM_ugPxR4OEQoVC73IqQVlHtmpbPE8zOyiOSU1QLk3WxqExywIGiJ8q31gxgTDUoF0p8AGjq8V9R7jd-bZBCbsyjH8T5o7Kv1loA)

  
  

![](https://lh3.googleusercontent.com/2SpMsyHSH7rr1ASHclpCgwrw2G3UnWIAa3nGCa5f9hiOSdBuITeZHibQVHx3meUQeVR9ySRNkLvO5gW262H2AKwovXhW25mDkqjMwrYWhUOCpS7_k_Lw7LvtjEf90HNk_C-PnoxHFhItKqV9PfLYrXc)

![](https://lh4.googleusercontent.com/Jy11fL5K9uqyAE6_rg1xlR730VrwN8oaondrura172TJMEstXleIbIAh7Q5B1hbwP1k0KwaNLPh9_DyHzDtt3F8yBiknVnuSiDwAToDjrhmNrNXYvoZy2iOutkmCol20GlX4-_BUvWVjfk34WEaxZR8)

## Por que usamos o alias (AS)?

  

O alias (apelido) AS é usado para apelidar qualquer parte da sua query. Isso ajuda o sistema do banco de dados a identificar a qual coluna estamos nos referindo, evitando erros

  
  
  

Código com alias

  

Podemos tornar a query mais legível com um alias, além de evitar o erro da ambiguidade de coluna

  

![](https://lh4.googleusercontent.com/3k5zdaNdmxiN-dM0T_eGLt5sRUni0hdbbBml2534aR_u7-JvzNynA0PoUrdkt8TzODydZIZElfsu5uVnSinyVVatA3rO-2rDwCYwsvX7KLEmRLf39ySlTK_qTYKjhmLiFYxJleSFH4Rnpzcnh4uUUXI)

  
  
  

## Dicas sobre como escolher o tamanho do alias

  

Sua query é composta de poucas linhas? Então use apenas letras ou a primeira sílaba para representar a coluna. Por exemplo, “actor” se tornaria “A” ou “act”.

  
  
  
  

# Como utilizar o LEFT JOIN e o RIGHT JOIN

  
  

LEFT JOIN - Com referência a tabela da esquerda

  

![](https://lh5.googleusercontent.com/dTg8ibCRsCA65w9BuElDx0woXb3ujNObHH3x82rUDPZuvpViJu0fZOlgFtU4ako93rH8_bj9xcfasTRTqZhoC3oVuTnwTdvjeZI9lGOzHC_CszI8Ua64ZGM8-NAgu7fp2U-c7LstIuOSfv0uG8NQfjA)

  

![](https://lh3.googleusercontent.com/lDCzAy_Y64p7yCwu_NnfvSqmkHcy97oWWSFrtbc97_L7rBvPLCT8PpEkEXOmSAx6hKrjFOtA908y07bmnb6y-pALMFlqvB1pCWhA3NEwoBuY5zjtEaufrD3r5nKiZaF9rL8-axNs0Xk95jAcHvuE5JE)

  
  

RIGHT JOIN - Com referência a tabela da direita

  

![](https://lh6.googleusercontent.com/G2hKVDtNnTiA5Xz-BGTaO7P9DRRWqIUtL9WzHv-S_25jPufpbjjbk0wL8cDVHebEyPx_VpLZsiNqid2Hu_-4My5ZffLjbm8FPsBfzxYv7nd-Eg79EBaTFPHF_MvfH2C5f5zuel7laUxH6VfUpSMTzyE)

![](https://lh6.googleusercontent.com/YcdRAy1cpouB5YUqHmojEaPZRV1WzBtAwW-wvZY338TmwmmYWsy-LaHTEgScE2sgGHdjQqn_n0o90UI1vfiKoaupJKBzwVxej45Rz8jfCC8x8OQWFhWQYcTtXwY9yIFuU9dhSthJdLKNff4mASylRs0)

  
  
  
  

## Três queries e uma pergunta

  

VIsualizar a diferença entre os três joins

  
  
  

LEFT JOIN

  

-   Verificando se nas duas tabelas possuem o mesmo sobrenome com referencia a tabela da esquerda (c)
    

  

![](https://lh5.googleusercontent.com/Z1MvMq0FWz1tN8XnU7CACn0UHOysSaBIDK0gTMbmAfS7FKZGX4AZmHSmOoh9FiInysZfE8BBZOAHVf1W4Imhi0aAdPHEEUhW_gOyjxWBBWvoTOeZ_-3fgT0wZmthXJfSuyjk6t0IKBaaaKIQYUnb49w)

  

![](https://lh3.googleusercontent.com/mQWw3GNuLJOMwfbNPYL7b9AiD3heXuVRJsjJwRkHihSBGfVe44lxTcgzFCe2fNB22Km2LteA1FPoeKKIYQjVBDoabp-DjATNTKkTtXZvz0vAiASY4WD3fuBNameN2tP8EycLI6yJAdcyak_A-TwQjmA)

  
  
  

RIGHT JOIN

  

-   Verificando se nas duas tabelas possuem o mesmo sobrenome com referência a tabela da direita (a)
    

  
  

![](https://lh6.googleusercontent.com/d41X-i0upZjCwDg0DinG9vCviGWLdhpzW1Lj2d8rGpN0S5cY0f9btQ44-3tUD7D6982EBINhptr3GzHBQWVoaVLlgQl8ECGeD43_DaG3ZpzPDZSCtBrjtODHghvD9gnPcIIuaylGFKSlaCzM1YL7F-w)

![](https://lh5.googleusercontent.com/-pzkKOBusQPpkktrXvdAL5_L0jfEUHbQ9pgSqubUMDpPfy95A5gnctXrY_ShlXicTooeXmGEFbEDAZJsCYJW2KXVXolCGcUDsVTasojrrDwNT8p5roV3EYJtbzyE4lNmCVfWcHt1BM7A6Q4Q5dd1oAo)

  

INNER JOIN

  

-   Verificando se nas duas tabelas possuem o mesmo sobrenome com referência, SE SIM JUNTA OS VALORES (a)
    

  
  

![](https://lh6.googleusercontent.com/nC3TQa2CAwEEjL1LMp9L-Y41PIMtw67NKP9SWekGwZnknt5wMQCEwpRFojN6R4wGvex_Knj3n4yiwRubrJi0XrcXg9vun0bZOi6OtvPf_bUxnc2s6Q3Oh-GfkN98myv4klOJ_Ts0LxmJewTlCjsr4Jw)

  

![](https://lh5.googleusercontent.com/KFQNQWYPqoMiTFsoko2Cjbir0tctz7yedBUe9PBT0KjCzPuoOMqq64hR2leXXiX41Pq-VmBXpN0kspgeIl-Zytdnk3QRo_wCJwUI-NMKZTXIw1Cac9fF5Sz40vuuEPeS5Hgwqh9gP6bWAJsLrqfJQ0A)

  
  
  

## Notando as diferenças

  

A única diferença entre os três joins é a questão do foco.

  
  

#### LEFT JOIN:

Quando utilizamos o LEFT JOIN, focamos na tabela da esquerda. São retornados todos os registros da tabela da esquerda e valores correspondentes da tabela da direita, caso existam.

  

-   Valores que não possuem correspondentes são exibidos como NULL
    

  
  
![](https://lh4.googleusercontent.com/bfVlS5uWpbJXHrHzg13ErxPHqSmE5ZZ8YrYr3qS-mW1R5yDwBolsGTI23hC7g3lriduU8R23njXu1PU6jSq0iCjZTs9lipBQJdr_U4lbvltK4vK5HHW4Q5rMJ20070yq5Po5DroafNXyQXbPodOPjfQ)  
  
  
  
  

#### RIGHT JOIN

  

Quando utilizamos o RIGHT JOIN, focamos na tabela da direita. São retornados todos os registros da tabela da direita e valores correspondentes da tabela da esquerda, caso existam.

  

-   Valores que não possuem correspondentes são exibidos como NULL
    

  

![](https://lh4.googleusercontent.com/CLnwxeF9VzITeuIvxbc0zqD0TXSBwtfmGW-Duv0We4gBGMpJKNplMXEzsyD4AQ_KcTVcuv8TPrDU070_Z5g-1340VWYF_i3YaNAj0dv4EBreiVOpqhgS35laP601Dngk64mCWp7pXiExsM2i5sYjTsA)

  
  
  

### INNER JOIN

  

INNER JOIN, foca em trazer somente os registros que possuem valores correspondentes EM AMBAS AS TABELAS

  

![](https://lh3.googleusercontent.com/v2XXLKuVXOcMO-fEX5YxDYW3OD1W1UhV1NC6huvtbgyD84PqPK9bo7K99lj3PHXCQpmha4o5LNAq-bIbPEJlpr6qeg2DU6LaKOqa-Pmoh9_QvDwSvRrOcSMtYl5xUcErpj_gIE78HwGaZP9uCUWDtMM)

  
  
  

# O que é auto relacionamento (self join) e quando utilizá-lo

  

### SELF JOIN

  

O SELF JOIN no SQL, como o próprio nome indica, é usado para unir uma tabela a ela mesmo.

  

![](https://lh6.googleusercontent.com/HESKBgw6LKuafaZ9CfCYh7v0XVFLaeshORGyliVl5WR14eox4Tne8s75fLsoLTeM4PV6bmCB9x4cZibMQNxENf51lN0p-8RY-81DVPZWEw0BXxHoGiWADG8NOUQLm8LQbE8T6J6xLgh5220Zg1HjBeI)

  

É possível fazer pesquisas e comprações dentro da própria tabela através do self join.

  

[DICA] Lembre-se dessa opção sempre que a informação que você precisa filtrar ou comparar para encontrar algo estiver em uma única tabela.

  
  

CONCEITO de self join que une uma tabela a si mesma é aplicado através do uso de INNER JOIN ou o LEFT JOIN na query

  
  

-   O auto relacionamento geralmente é usado para consultar dados hierárquicos ou para comparar uma linha com outras linhas na mesma tabela.
    

  
  
  
  

Um exemplo simples:

Considere o seguinte cenário: Temos a tabela alunos da Tabela 1 e desejamos listar os alunos que são da mesma turma que outro aluno na mesma tabela.

  

![](https://lh6.googleusercontent.com/IAf1mnHGKM_tHkDt5PTWhpBGfGunJHVSrDsABP6IBYGFlj6G0XvI-uQCQ64xG_snnjvZHA4z-BM2EuL72IXE21PPFlFDGqE2T6FvslYGo-W3h3tF56-F3LWqW7Twd2ahka2ZfztwTI4B6HBcJBeCbGI)

  

![](https://lh4.googleusercontent.com/yMoKLvtlWWydIWIbigRHrzRj-Obmv6w21Y21AoUjWy93jASdH-aXYg60fDsDeRa4qv-RimWwLwJZrIsvrnrEzF2Mb_rcF-aZCp0qW8_lCRFu2NeL8iFKMf8si40y6cPNYUzRhYIet1oHuCuTV5_e5XM)

  
  

Acima fizemos um INNER JOIN na mesma tabela onde o idaluno é diferente do outro idaluno. Em seguida definimos as condições da consulta pelo WHERE, onde somente virão resultados que tenham a turma igual.

  
  
![](https://lh4.googleusercontent.com/6A9xDZGI4gIY0uN3b2Lfh6JnKtP_6J6BpbySJ1cSFnjTbu99EZYCcHANKGcvWiV93r8rvV-X6ndJpvS7GFJA2pt8J1nnTu-OPPvGH4OZAOiECZd_GAgVI7F-c-kkrOhCRCJ2O1dQ1wB_MdV0HpQ55zk)  

OBS: As turmas 2,3 NÃO APARECEM POR NÃO TER SEMELHANÇA

  
  
  
  
  
  
  

#### Exemplo 2

  

Precisamos trazer todos os funcionários da tabela “funcionario” da tabela 3 que tenha o mesmo salário que outro funcionário

  

![](https://lh5.googleusercontent.com/WJwoOIv6Dt7P3f8xE7iU8He9GsktqeSydtUwacfC-lJZuEnUyZm3empLyWiFB9yH8xJqE5ubJp7ChtI8mLyLWJ5FSxZfoaHSxtBZ7eXp32MkV2cDDb8HgCoHOnyFCN4Z0T6BWWiCCdq4n9a3CYHeM88)

  

Para esta consulta, temos o seguinte trecho de código abaixo:

![](https://lh5.googleusercontent.com/XYdn0jiCkVWwIOUEwScJ4vUGLEXJ74ee29Slu3ClQgvyIeNnGPMesC17kjgz_I-s0ZkvIEkwOD47FkATXGLL4F5_H1VhUA_LJmi8Mzpa4vkAvokQU9_LAUZzX_ZQmFoCjg5Xw620K_pG1ZLGuUBoIRs)

  

Observe que fizemos um INNER JOIN na mesma tabela (SELF JOIN) e pedimos todos os funcionários que tenham o mesmo salário. Temos como resultado a Tabela 4.

![](https://lh4.googleusercontent.com/r_giRlyfYhRK02SVH_X-098P8a9-df27C0bJ-EWBAZ5miP8MVo_zfQw2v-PdR6uvkMvZkUwDnCmlisIjBwJSHD2bK1LpqRGL6ha08bhUEMI_ghZMvpVqubLR7nxBVrZUbkeHb8auoObRu4g6yVvtrKY)
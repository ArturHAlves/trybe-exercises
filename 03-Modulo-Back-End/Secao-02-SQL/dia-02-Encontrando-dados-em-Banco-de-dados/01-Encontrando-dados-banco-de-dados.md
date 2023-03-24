-   Encontrando dados em um banco de dados
    
-     
    

  

# O que são queries

  

Query (consulta)

  

-   No mundo de banco de dados, você pode tanto trazer dados quanto alterá-los, atribuir permissões de acesso e manipulação e muito mais.
    

  

### PRINCIPAIS TIPOS DE QUERY

  
  

DDL: Data Definition Language:

  

Todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:

-   CREATE: Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers;
    

  

-   ALTER: Para alterar a estrutura de qualquer objeto
    

  

-   DROP: Permite deletar objetos;
    

  

-   TRUNCATE: Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados.
    

  

  

  

  

DML - Data Manipulation Language - : Comandos para manipular dados.

São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados

  

Os comandos mais comum são:

  

-   SELECT: Usado para buscar dados em um banco de dados;
    

  

-   INSERT: Insere dados em uma tabela;
    

  

-   UPDATE: Altera dados dentro de uma tabela;
    

  

-   DELETE: Exclui dados de uma tabela.
    

  

DCL - Data Control Language: - Mais focado nos comandos que concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados

-   GRANT: Concede acesso a um usuário;
    

  

-   REVOKE: Remove acessos concedidos através do comando GRANT
    

  

TCL: Transition Control Language: - Lida com transições dentro de suas pesquisas

  

-   COMMIT: Muda suas alterações de temporárias para permanentes no seu banco de dados;
    

  

-   ROLLBACK: Desfaz todo o impacto realizado por um comando;
    

  

-   SAVEPOINT: Define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query;
    

  

-   TRANSACTION: Comandos que definem onde, como e em que escopo suas transações são executadas.
    

  

# SELECT, o primeiro passo

  

Conceitos importantes: Usar SELECT para gerar valores e usar o AS para dar nome as colunas

![](https://lh6.googleusercontent.com/fxl3Nse2u2Tnnd6gqO_nfahOmicFCM67JOT4ib8pr1_HH0c5xzX2EOeiWhSQYu4KL7YDDDRtLJoL9MYJmL54YlGT_EKEFXLfV4-CWB41m21snhTLJ2mZWOSQ8rWc4sMU3elqdG8kYoQhgx81BoKrlo8)

![](https://lh3.googleusercontent.com/GiwH5XQjkKI15GiRVfJ6VW0--uxn432oZxTFkQ0qAUwRcI3PF1pYcBbLKKdfaXeHZ_EGBWi5bF7M-3eGv-JOFmfoRGh7NstBAvMZNffUsu1mJ1t-r5Jg662t0j13vN3Vf8eNK_hSfqosaLYLvswPvls)

  

-   A função do SELECT é consultar/buscar os dados de uma tabela em um banco de dados
    

  

### SELECT SIMPLES

A sintaxe básica do comando é:

![](https://lh6.googleusercontent.com/RH0JnnErApz-c-D6RJMGt3yTLL-aWxkw6ILWAqd0c3vQ_ym9j8XgSGd50yDu7Gek9VwexRTWXxVS49HwfTmtthirBkFJddXIbcX-7EUTtUVZ-ztEMj5K11ihj-MDLkPO7ZGYlfZ_kTbIvXDzYh21KSE)

  

Exemplo:

![](https://lh4.googleusercontent.com/BmhbEPrBaFWf-lonDlcMvKu1j7McX3qUTCm2khbssLoY2h9H3Untrw-pz_7QPejZCNo7GuFphgQOO-4CUfUC_iKik2FDuZ3O0QBPQLUWJvsSeJJ7MZ3aihuASF2aVOdEJ8Yo38dgrdG9270ZP0vy4dQ)

  

  
![](https://lh4.googleusercontent.com/8Ve6JGqx2A2R9bpSGKm2RFEuTgHUCjcWLCs3tCKW6XHiFq6t1MMvMdZETxthZuX3MceX4AS04yPMNu4xiyIgIqhI7ssuvgxY9PXEAFBTucX0PpzfTF4gkT_s977RuunSBpdfjssPp57Pmte6Y-ISAzs)

  

Podemos fazer de duas formas:

  

-   Trazendo todos os campos
    

![](https://lh5.googleusercontent.com/qVS2e2EZ_IU05L-teQhGj7I0ZJeJUDSpHKqFRptZjnxuiKjEH5dx1rVs9yOJXLj0XYpPIXI9hbfXM7kBWEmqAXk_bK82OfPoa2TE2rTNjaWpg6p7YXTmjk2LsItfFirJDuAmqX3Yanhy7JDUYDPDFvk)

![](https://lh6.googleusercontent.com/aqKTtXAagEKsvIxrF13AzhXtcx4aFtjN4Uw1l2kAgLxmbCQIdJO-D5JxhG0avsEnFY3Xu0Ypa53mTNDPzIjJVMj0OIsZUVDtG0-aSIU-7ou6Oj7g921-AnoGOExBaeK9qK0G5X-Td2mXhhBxy4OVoGo)

  

-   Trazendo alguns campos
    

![](https://lh6.googleusercontent.com/4B9VR02EJR7JXQrf98vSxe8M727wa__raJMwiQkgI6gt5cPsCxSICeUyatw0Mcb1vUZUMlTWWAESYASwovxGug_lbQQ846LX-Ri1uPCcOmJz3gdRE-3x-OjWJVzun3mKzxu-zgf-DvWJxrxwfZOr2lg)

![](https://lh4.googleusercontent.com/bQ8X-_SviRaSQtMMUyVrI1snz3KGbz7tmXKqczHrfd48iJ3SJLdBAjeBydPR_z_areSLnAr1fL4g2Fs06assy3KDLnjsIWe_SHG2yk--chk7GrhaaKDtF8QcPehVv4jQ0UgTISn6gSFMI9LZWmL585A)

  

[OBSERVAÇÃO] : Usar o * para trazer todos os campos, pode causar uma demora no retorno da consulta

  

SELECT COM WHERE

O WHERE é utilizado para passar condições/regras de filtragem.

Vamos supor que queremos ver um unicamente o nome de uma pessoa “JENNIFER”, então utilizamos o WHERE para realizar essa filtragem

  

![](https://lh4.googleusercontent.com/Lsg0scDFhwHLPVZQjSyk-GJxQ0RlcVFYh7Mo9myS0COX6WSRPEtpkorwVeva39A0s0blExHIYxi6jKWcl9IjQ73CVKRT-4qgNapIFeoGNT33BQxMOdtqeIBERgextGDrnCe7XZLTPLNZPBrr6oTkE-E)

![](https://lh5.googleusercontent.com/umKB5w1NTHDEyytq_v3znrDomanyHnPvynS4WgD3_SjPKmSruiJQnr9zVGbW40asSSMpgdLgUOz8_jMmF2zLj48NwvoeTsuMzTupdVIcGLvVufg3hGtr3sLR54GyIiWxdrfca-JbEUQXE90qgxXUMFc)

https://www.alura.com.br/artigos/sql-consultas-com-select?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaVSzkv3FjqMOZfbsCROoXxFRCEKcpb6GfDFo4EI1QoHOrLQp7AJfzEaAqQdEALw_wcB

  

  

  

# CONCAT - juntando duas ou mais colunas

  

Exemplo: Dando o comando SELECT * FROM sakila.actor, temos uma columa chamada first_name e outra chamada last_name.

  

-   Queremos criar um relatório com o nome completo de um ator. Basta usar CONCAT
    

  

![](https://lh6.googleusercontent.com/_EWiB9q_H9woDrbVKyVLZ1i3UsxpbplNg-l3F5bKpOlJzEhMJxj47Lb21a2KDmBdgpSPZvJei_hybYDiRAiSGuYSSZs5AUZKj6zBDRCd-lhFMJACsy5n_nKXtKowsNsoloPXbbNZAf8wZgeU5M2DOlw)

![](https://lh3.googleusercontent.com/18cy41c1UaHw7bVBAlMyHT03rgS21CHV28DMtXN-DxuELddbwYJVrHsDTJgXFxnKl30DKb1NH14u962Pc5IYa3hQL_Y-Neeh_OAQAaALqj5KaoAoHVnNrkFbWP1X7uX8VNgIIaRRo8CgofzDT89A1AI)

  

  

Nomeando a coluna para “Nome Completo”

![](https://lh6.googleusercontent.com/qkzuCUBFj2vhUqVeURVifWDeJc_SuACLxEF9NfAmZXAPodrnX8TfF_HbJQMi6ppSRv5ikqXGzG5unB-ZlbosIQuIT8gCi-TSjwJbSU4BHbuAlXs7-HnvejRhx76FWwD8vmA0zBrGODN-diJElAToBvE)

![](https://lh5.googleusercontent.com/VVqjDCBdN5cnERriFh2BH_RTwGvDAkKiag7_m4RIzhBJfFOmN5DRPEk5Fwld4Yqy2ZRo44-spO7-WfFh02QXBQYKTO8SDLkBQ9qCBa3U_t-DO8mrlg7x3J7MQ2J2UpU3RXY_3-OfewlRV-Ns-nSKGWY)

  

CONCAT, cria novos dados e informações a partir dos dados já existentes em uma tabela

  

  

# DISTINCT - evitando dados repetidos

Ao consultar dados de uma tabela, você pode obter linhas duplicadas. Para remover essas linhas duplicadas, você usa o DISTINCT cláusula na SELECT instrução.

  

Exemplo:

![](https://lh3.googleusercontent.com/a9ck64kOT4fYzKbqEI0YxSAMjHiBa-l4yC9XWHNqxOgWXP8iT301ufoONFJ52DM0WisD2aaQBpjIqv6anVBRYkevOJN1Q51CJ_UPMsJ3pGIQJvzxZfRgktU8EXXcmLVzg6zvWfrHrVRByvbty21xd9c)

Foram encontrados 200 linhas

![](https://lh3.googleusercontent.com/VvFcH_xXY7wGx94k9vxyASleNdnlPbyIYKjb7k017HmR91QiM5hHgkgPdkvscvnH_k918wr2o8HrKW7WEXpRMAQ7OrpFm2sIrJtajfF8PA0xk3r9gC9VNjlT7apc7evutOXszt2Mm925JhddDuzQYjI)

  

Verificar se existe um nome duplicado. Distinguir os valores retornados

![](https://lh3.googleusercontent.com/r0YqRVl-8YvfnpFe2mLepUC-6eOx9_zJIoO2Ot0DVHlLbdY0Lir2v9_nz217wJdzyPUuHGdIkZGdTIYwwfa4-xiX75VWKDhq2XZMe6OVHlTJZUxSK57R9cHUYBFID2kqo7f9Ilv7MvzmEIHjZq5ALl8)

FORAM RETORNADAS 128 LINHAS. OU SEJA, TIRA OS NOMES REPETIDOS

# COUNT - contando resultados

  

A função COUNT() conta o número total de linhas presentes no banco de dados

  

-   Sintaxe
    

![](https://lh5.googleusercontent.com/KbC0uDQ53DbFLyskPM7nTf2QLwQjXMMrmcLucE4e6pHPteuitlMkZVa3u-3YUgXZiXDxGqZGs4SaaoaDMT0DxYa9-41sgPK729tWhRDRO5h_Z-GIHkxh6FKhMQaz8bynL_MblCWtgyYQRbugg-7VQhw)

  

-   Exemplo:
    

![](https://lh3.googleusercontent.com/b3jQltzrQrPb1W6qGAKn4kMiAeMxDhkCPrS8g0ox5g3YINgPSKLf6wGiEq4wkxn6bCTT3SUhe5OJeOOIQEhfKAGfLGS0ff08VKAZHo3LR_4qwCHWLs0Pbg1n9Ae0MHb0NsD9xNmaqbwXIYnW1eZ_-i8)

![](https://lh5.googleusercontent.com/3UPIS9fY5zcZgj7NdcT6GRxW9uoXr_5GuNPpN5GI7PAvGeqcF44qlpPlTE7ITrDv_YZHirpYBrLvb8cjHd4L1G1Sv6VupjKRuZhy-KTZaOhLfif-Taz_FPRaScIkqy63Q5xi4nDsjbxarP4vU5EFk4I)

  

O COUNT retorna o número de resultados da sua query;

  

Exemplo: Quero verificar quantas “Alberta” existe na minha coluna district da tabela address

![](https://lh5.googleusercontent.com/jdXW7OpUOkEQmRoV2pACWUiJaNmMDqUKIgCFz03wYRu1ckcgGGJRLfKNLRQIiua2n04z-VhJP9EJOFl-jUALq1ocW6fe9m7iSCihdD6LTDc-ypvnJbc6V0yC15O8UZlUNPCG31lOLu-0zQiMYehwGEE)

  

![](https://lh4.googleusercontent.com/WG-WK0v-nXE2HKzlCA5pqOsImYf4KezKw514Q6x5TUVy7fbsBCemmePJHMkiXnFzj00DhBfmDP2FbU-KqqzpgVIYoG7_3_bFXZo1-UtadK6Q-G56DVL8uooRT_QvPW_z9BGTcqCEedw39mZOsgRq4AY)

  

  

  

# LIMIT - especificando a quantidade de resultados

  

Se você for no banco de dados sakila e executar a query, verá o resultado de 16044, linhas

![](https://lh5.googleusercontent.com/IF2xU3h12EJVC6AFPqb0YLBNy3SFcHV93ghYd428IeJtmf3xLVgBRXj4lHGzB6gTQm4BJ65jO1ExGLfoIXmK_8Yb5W8-5FzK_S1MunYnD73ktX0q75ecxM56yR1_fkamEixp-jeQcSyzdtWiAy_9_Vk)

![](https://lh6.googleusercontent.com/ztMGta9ggW5FrEbpPMq986SdXqPUyuFOPnobxCsZGGNzPVDvJ_zTtwUmTK2n2toEGgAKmJhne6w81CUcbtVqBtOnacqpMy1G_ScIvVI1xmDkOPeOnOWe1yyT-bkbQHjHEREEHfHdj54diwBkzAx1yJY)

  

PARA LIMITAR O RESULTADO USE-SE LIMIT

![](https://lh6.googleusercontent.com/E998ivIH6QKZIALEv6ZlVIZkVoQDcnzSPLqGMlcrA3af1i90EUIetrQ8b8XeXu9G447N_ZKlJgQkKhO0U4BWgy43p6N3gDu83v9VfvePHcDgR3VphsAtEYOZiO9gbgERUkpOIkETPrXYFW42jKBo1WE)

![](https://lh4.googleusercontent.com/buvYSymLevNuLGgOWRmsRuji8xKXUAo7sW4Rvvqd9se4fH3WxQ8wsSLdjenFrAklZWBoka5Zs68vV2k5IFj7niUTJw-fIfAOdFDDccNeXXz1_16unuCsz1VbQtCXhCCDayi-CavS2DVCeth-JwG43oo)

  

  

# LIMIT OFFSET - Pulando linhas desnecessárias

  

Para pular uma certa quantidade de linhas do seu resultado, você pode usar o comando OFFSET

  

![](https://lh6.googleusercontent.com/I7MePbU-7fxxrglIcY4zRiULeUuDINS3bDErJRFaAo8XhQUUni3pg6LJ6BEIbufm7HTugg6ug-DXG0iw9pkJ4dwCeDNTXaM7BdTqXaoc98yeg3jpsw8Khq2pEidaOcU4sgbUpHyWA-XqR-5ywIdIUC0)

![](https://lh6.googleusercontent.com/F8VldrFvKyxFDbR2aJCjQGu6aGCz4lBRqABf1zYaua_LBXzHlEXsP3w0BYPaZ14LisS8ZpvwJqvpUAS_J2YxLE6sIhXXRxADehyxybB3HVXgekF9YCVigZs1-RyGiqhyN_vgesVWlt6ZpJHLMSOr-UQ)

![](https://lh3.googleusercontent.com/taZeWfLoSHIC1k2d30CCSwKYkqp8k1_y5vmtP5xMUV6VkhmErLBjBMcirnRdzaucbwukrAEozv3j6lMLMkdIdOBsANcuhxqI7z78Owe8fe04r5EYDwrC_Ps-Ek8czYx7IfFBG9_89aCbYehDnOvZSqQ)

  

[OBSERVAÇÃO] É possível fazer essa alteração no própria ferramenta Workbench

![](https://lh4.googleusercontent.com/hmhlRZaUKNFn6Ll60h5KWo3qvOfhfYQgIz0ZaR0TcEMeFoNfS23Ut6LycaXN8kLbV0ljb0AmfrM3WBP4pIFBqwvZdwT_dHdXuo7IksJusC1V4vwBkqC7OGpDReELD6TRRCvisbQkZqpm5kmbR-a36UU)

  

Limit to 10 rows

  

  

  

# ORDER BY - ordenando resultados

  

ORDER BY POR DESC - Decrescente - Maior para o menor

![](https://lh5.googleusercontent.com/PE0vLaqjkzFAavd2khB5E7RWOOm347ke8xsas6pLvEeyoZRqeXuiy68lSjqRFUIYEWh37L_vOC-dgs0NHFkyxfGRTcTNaaWIpJ_TdO3JnpE40PUrZ7KFoK7ivxJ7-AneI1U2npQDxK432FdDoERPotA)

![](https://lh6.googleusercontent.com/MAFrazXj95kaq3dlA1nqr7SV6JI9pPqAAzN_wO825SwOgmgJIZiF9TQgp959DSRnerjvFtNw6HUnrm2m0hd7khFovloJj57fVIAXuDTfnYrl3soGMagvTO2E991MzhxD6yPiKaJ8NuVzv8WPt0pjqxE)

  

  

ORDER BY POR ASC - Crescente - Menor para o maior

![](https://lh5.googleusercontent.com/mt7xmAY8ZslXBDTeZs3dBOmV95mGRT2E59utwTDu7wPTr5h2czMC5jc2W1Gvtd4p8S2ro5GY_2M1h2TRasXPpiVR96PdbdMK6zblkmabOH4qfrC63g7e_c3ntx3oMwrX2j83ge3QkMHXJ6xYHQEzbrE)

Por padrão o ORDER BY é ASC

![](https://lh3.googleusercontent.com/DJNUrcdtBuwqclgo5xoA9GTO4z0koYuOlbOZxbH4V1Jgc3XU8YUUeZqY_9qet5mJqjN4E_McmyM05bndiGGSiJ4Johx5_DL9tSuR7WtuJjcFNKpBl8MrrG8hz-1A1jgB4ERtqEdajUh3Yj6K_Pe3DV0)

  

Exemplo:

![](https://lh5.googleusercontent.com/lWTxg-w10gbZyP5jdb13iE_bbADar5SQV7CtJ6WAce1GhJPiDLvZhgqzBvT7czJPwJHnMMQKneRihd8oXGeCk68kDZv6Q9eg_GCDedbv9bKWI1dgC3uDKyUHvi86ZbIyDyDEYlYyThfS7uYQgaa12Ck)

  

Também é possível ordenar por mais de uma coluna

  

  

### RESUMO

  

-   Para fazer pesquisas e retornar dados do banco, utilizamos o SELECT.
    
-   Para juntar (concatenar) duas ou mais colunas, utilizamos o CONCAT.
    
-   Para evitar dados repetidos em nossas queries, utilizamos o DISTINCT.
    
-   Para contar todos os dados retornados, usamos o COUNT.
    
-   Com o LIMIT e o OFFSET, podemos especificar quantos e quais serão os valores retornados.
    
-   E para ordenar nossos dados de maneira crescente ou decrescente, utilizamos o comando ORDER BY.
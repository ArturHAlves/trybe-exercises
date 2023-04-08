# Primeiros passos

  

Ao modelar e criar um banco de dados você precisa analisar qual é a forma mais eficaz de armazenar e RELACIONAR essas informações.

  

OU SEJA, você pode criar uma tabela que possui as informações do artista e RELACIONAR ela com a tabela álbum.

  

PQ? Caso, o nome do artista seja modificado, vocẽ realiza essa alteração apenas na tabela do artista.

  
  

# Database Design - Como modelar um banco de dados

  

1 - Identificar as entidades, atributos e relacionamentos com base na descrição do problema:  
1.1 Por exemplo, a entidade álbum possui os atributos título e preço e se relaciona com a entidade artista.

  

  

2 - Construir um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1:

2.1 O diagrama serve como um guia para que você possa visualizar as entidades (tabelas) que irão se relacionar.

  

  

3 -Criar um banco de dados para conter suas tabelas:  
3.1 Após analisar e criar um diagrama de como o seu banco de dados vai ser estruturado, você pode dar início a criação dele.

  

  

4 Criar e relacionar tabelas tendo o diagrama do passo 2 como base:  
4.1 Após criar seu banco de dados, você pode começar a criar e relacionar as tabelas de acordo com o diagrama.

  

  

  

##   

## 1) Identificando entidades, atributos e relacionamentos

  

Primeiramente você deve identificar as entidades, atributos e relacionamentos com base na descrição do problema, que é criar um catálogo de álbuns musicais.

  

  

### Entidades

  

São representações de algo do mundo real dentro do banco de dados e que normalmente englobam toda uma ideia. São armazenadas em formato de tabelas em um banco de dados

  

  

-   Entidades no catálogo de álbuns musicais.
    

![](https://lh3.googleusercontent.com/OJVMJ25hIAX0SGsbhzfHFvqj-IdkNkZxhUqzARi_Cj37QBCOheXC1dtvXeQ86KOHBJHe6gFhq_ok6i6L-q53YejKu_kO1mYZ0ykezdbsk2D9bccBCFV8mrNVOvo7oqtM13PTVyoLD3jDPl7sX_WbB64)

  

  

### Atributos

  

Um atributo é tudo aquilo que pode ser usado para descrever algo. Suas características.

  

Exemplo: Uma entidade PESSOA, pode ter nome, altura, peso e idade como atributos

  

-   Propriedades descrevem cada uma das entidades encontradas.
    

![](https://lh4.googleusercontent.com/-_sPpKzxO6F998r8vF2le1VJGmsbfV2nIMVpW_L_A09wF3DvKwZeKo5cL_zerJaC5Cb--8CU5r-GQuCZ8RccVhxytlk-YF0FWTsDXeEH8-rujWnjsVNSmXRTxTS18Q0AMSKwN4FJq0wouM97gbCv12I)

  

  

### Relacionamentos

  

Os relacionamentos servem para representar como uma entidade deve estar ligada com outros no banco de dados.

  

-   Há três tipos de relacionamentos possíveis em um banco de dados, são eles:
    

![](https://lh5.googleusercontent.com/GoWJKRJx5FEIVExC8ZzVUZhujjvovSdMICHJIfO6YtMGWdmtWS6u7XrFT73X69gVbJ2NGeC5ykb_s1x93JSmkZEc9wxoGhd2Z_DNsHLAowzIG0n7sFImBvi1f-1IxQNkNi3wO6QKoj0lECMdBIK0zUQ)

  

-   Quais tipos de relacionamento existem entre as tabelas.
    

  

![](https://lh6.googleusercontent.com/_zPEHM-8Zo0Gb1j7ewUNxOrc5gK5KB9HVcrHYg9Njqu-sm0DSoG0vD96R38uSkK7kdft4qA4oBIEPLpkrMBeAjX9fylODamnr1MhPYeYkTA7t0ARn3lZi2Sn70znFDCvQOHZ1vodwb9cKSx8x3N9Na8)

  

  

### 2) Construindo um diagrama entidade-relacionamento

  

No segundo passo, será construído um diagrama entidade-relacionamento (ER) para representar as entidades encontradas no passo 1

  

[OBSERVAÇÃO] Existem diversas ferramentas para modelar os relacionamentos em um banco de dados. Draw.io

  

  

Agora é preciso montar um diagrama de relacionamento básico que demonstra como uma entidade é relacionado com a outra, usando o modelo

-   EntidadeA + Verbo + EntidadeB
    

  

  

Considerando as entidades Álbum, Artista, Estilo Musical e Canção, foi construído o seguinte diagrama:

  

![](https://lh5.googleusercontent.com/2A00Rbj9gPIMITDGzacgNoey5z2_NcgOzvD-g5b-JRqE2oUZanhJA9nxzJk1BDYEITdFyjHdkKPXekiDJqAtg4EWygUsrmMqFiOI8iqdp61qy2bEn_-GGkLruCiN9EYo5YZetXSFZTb-QJVRPXVf59w)

  

  

O que você deve fazer quando estiver construindo seu próprio banco de dados é entender quantas vezes uma entidade pode se relacionar com uma outra, para, a partir disso, você poder criar esse primeiro diagrama, como o do exemplo acima, que mostra como as entidades estão relacionadas entre si.

  

### Montando um diagrama mais detalhado

  

  

Para diagramas ER (ENTIDADE-RELACIONAMENTO) mais detalhados, deve-se incluir o nome das tabelas, suas chaves primárias e estrangeiras, suas colunas e seus relacionamentos

  

  

[DICA] Por questão de boas práticas na criação de tabelas, não são usados acentos ou espaços entre os nomes das tabelas.

  

![](https://lh5.googleusercontent.com/YueUQfbz-X4ZaTwt2oet6hMAC4oYHNck1Q9jIHu_FHyscq_oBXnh8ce7NEtyxpVRyEa-pjPfXns95hv7NlQ7i_eGBP53Y0F9JCt4mMNus1Jbtro_prPhHjWChH1g_drL_M6to0YDXdQpe3SWW2Lk2lM)

  

  

Relacionamentos presentes entre as tabelas acima:

  

  

-   Tabelas Artista e Album:  
    As tabelas Artista e Album possuem um relacionamento de um para muitos (1..N), em que um artista pode possuir um ou mais álbuns.
    

  

  
![](https://lh4.googleusercontent.com/0jeRw-Mvmi8qJOdQDLWoUduND5rpCE7j_B7wWIsI9VIo77G72Gar2HECVlfwjJ_Zn6_mVdstFFBu32k4qniw4IPIdQfgSoTn1QlgvnAy21xbkIqoQlevlI0aBp4STZcw6V8rdjN628jftniukEmoeoA)

  

  

  

  

  

  

  

  

-   Tabelas Album e Cancao:  
    A tabela Album possui um relacionamento de um para muitos (1..N) com a tabela Cancao, uma vez que um álbum pode conter várias canções.
    

  

![](https://lh5.googleusercontent.com/p0VviZIUVsJi7k8KpTiXt3pLw1ZCBlawM3q1IWi4jtq0foulas6TpP0ZeepeK5o40x9ZlD4mejXAXWPBn-fsrMd3KOF1EklGwYoM9Y7KLLRLlRhr_sOde8cNpEX4pUdILE505EpJK-emykUgHyuxsg0)

  

  

  

  

Tabelas Album e EstiloMusical:

A tabela EstiloMusical também possui um relacionamento de um para muitos (1..N) com a tabela Album, uma vez que um estilo musical pode estar contido em vários álbuns

  

![](https://lh6.googleusercontent.com/awDGOv3tPNeIl1SivQN7_Y5wVUCl1BpGjTynRAlDfDL58KOYrX24Hfcr7qtQ7pilsgl6i5E81NzVeiADQQBSE4Yly2kLUf_eXIUV_AasX3xcZ5izUsXEP_dW_Q1HWoCwcJNZeN7ncibvKhsiIbvzaOg)

  

![](https://lh5.googleusercontent.com/PAE2Wn-pHkpx3blCssaCCdFpbU9H0MqmE9al4F5_HIHH_e8RBhgasO7zQ4OMweWtlizqjlZLIkrT-AhxRZnQ1tCdf1Skk-F9wQneWCdrBAa6JPE60rX9pXgpX7kEJtUAKP-6oZ6-caETIDHu83OaAmg)

  

  

### 3) Criando um banco de dados para conter suas tabelas

  

Agora que você já tem um diagrama que representa as tabelas que precisam ser criadas, já pode botar a mão no código. 💻

  

  

  

#### [IMPORTANTE]

  

Ao lidar com a criação e gerenciamento de um banco de dados, você precisará conhecer os seguintes comandos:

  

![](https://lh4.googleusercontent.com/P3BI2tGbfR0oqKVzi44KHSIrQlz3-_pTDx5BKgn2H0D1bUDT-221vrNFVpmg4DwP0W23jhxb5BkUEkxyIMAfIXldPg_jXJ4JB3mA8rCi_cWKlKD7yoEoP0BhLaYyQlfE5SW3g5cE3D6lFXxWinNWpw)

  

  

  

Considerando o problema que precisa ser resolvido, hora de criar um banco de dados chamado albuns.

  

![](https://lh6.googleusercontent.com/ue-nRCAmrNkhj4NCsbT3YcrRhZqFmXovL4-gTOMYI08gJOTE-IzufBAf10k_v8pYAxpglKVBP2-I5USBchS1yUMxnZpIgDwMY5B4qCl4s06bc6scwp7wLcd_up9cwA2_iX-SJKTLrbEWSJ2VHHM8tw)

  

![](https://lh4.googleusercontent.com/MPYuC2PGIBrctcFYElkW-qbEqo-X7oq5S06R4G3VHKIqwtjn4K-wZOXMXsZt_QuwYdrcr0Ub3lCqQAASRijy6agsyZwUVbq3gbN7pq2JDBUmtbIPwzrLx3toVTr0WiDvBjqoU2Zzk5qLyt-LUdCyVA)

  

  

  

### 4) Criando e modelando tabelas de acordo com um diagrama ER

  

O objetivo para essa seção é criar as seguintes tabelas:

  

  

![](https://lh3.googleusercontent.com/Xr4pVkF18VgJzu8N-6fLRqRw41JNo9U4ywVAU4OhFPglwJdyYB-mxEupvn41jSSz1Ycbom7nCp6WjHIAfoO_A-h4AqsMJETcNd8FeDV5JeaqSY1_e4H-mlaqKtYW7-CHQXac9b73bxfBcdMxEqP1Mg)

-   ### Quais são os principais tipos de dados no MySQL
    

  

Booleanos

![](https://lh6.googleusercontent.com/TKDtfdGYOyku1F38UCpMIn3xWwgDgbX3f_SUfeJFu9evDnrb5cIjAlWOEim8bjeL3G7lxELMwZo0sG9iDLAJihs8DxOBmXI88rrhCvufw2EMxHUcMeievPMlB_f2KEknTIZTwMZ4SYTOMZBX3_H_Y6Y)

  

  

- Baseados em Caracteres:

CHAR(n) – Trata-se de um datatype que aceita como valor qualquer dígito, sendo que o espaço ocupado no disco é de um dígito por caractere. É possível utilizar até 8 mil dígitos.

  

  

  

  

VARCHAR(n) – Também aceita como valor qualquer dígito e o espaço ocupado em disco é de um dígito por caractere. Permite usar também no máximo 8 mil dígitos. A diferença pro Char, é que o Varchar geralmente é usado quando não sei o tamanho fixo de um campo.

  
![](https://lh5.googleusercontent.com/mT-tnhDAfYVr1McQXQEaCYNLbObwWqktRHT0u2A8LaPJfpzfu-hxg-KBtkatTV-y6SD4p1gjDaHBBbSqdsCzJLRiXHo-YUd3rdn-JYh4SBGfF8rNMlbOfCWV9eR2PwKfCltcNw4__lg8YsA_GUvxMrM)

  

  

  

  

  

  

  

  

  

  

  

  

Baseado em números

  

![](https://lh4.googleusercontent.com/NVUDA7idjrDv-KjKv6fCYEcP79R-s9aMESs3ELLuupl7wKPc-7vnG_4JZbVx6tmZuS7FbMABjIaCfcfwqzPHZFHDKW1lKAWfsE0lzxn6hC9m7zBuna-uliVtY06QLS5MTbgKRO84HM5V95t7AsxQ09E)

  

  

![](https://lh4.googleusercontent.com/rdWe_hqH6_x4IiF8bFsFTr0782heDKRAUhZLqGpU1Y6GCDFrmYJJcaOrEIUSHtjHd_Kzn4VQn2ObrjVB883Hn5q5gnUN916FE9Bo_QLHv1im_oqNJAECyrKJBYUk2XBW8QDN3uqy5mofIlIMIfDxkU0)

  

![](https://lh6.googleusercontent.com/xqzkEbLlSM65D8JEm9nXbN009yXTabtBYH0_b9VHu-9so47DTMCQZniUlcI3ty65YIzW0o-XXn9VtwTv71Q2Ns6f-8SBQnBiC2yjfp_a1d39am1bDdonH1zuHGb7lMO8NLgRvZJhrP3Y723ICZLXY3U)

![](https://lh6.googleusercontent.com/XSlbtqvjS4HQjSBGeR34u5AZ_FBDrDOK_3xZ352HxWdeJTRjEYhdBX4MmWhXsxqV5u4gfNyFRwPOx7YlSwNpOxVViUAo5Hf43YNY5af5owMvYC1DtWLvdBd89h0HmgE0ykJnBKj9sV1COLeOu3KqSwM)

  

  

http://www.openbase.com.br/openbdoc/html-pb/tsql/sql1p12.htm

### O que é uma primary key e foreign key

  

  

PRIMARY KEY

  

A chave primária é uma restrição, ou constraint que serve para identificar uma linha e garantir que não haverá dados redundantes em uma tabela.

  

-   Uma chave primária pode ser formada por uma ou mais colunas de uma tabela.
    

  

-   Ou seja, por mais que só possamos ter uma única chave primária por tabela, essa chave pode ser simples (apenas uma coluna) ou composta (conjunto de colunas)
    

  

Exemplo:

![](https://lh6.googleusercontent.com/5HU5edryKeE5Uh-9mWoTxmuKLUwwziFCkF7umysX7LsX9psWD0BGYom2Bcib7LoKmFOHYgpI_PxFdrfpCarH03JnSfVYSQ8cThBCINjK-ehqb5Db_H28DwZL6twKZPGnwW57unSiuXgq4Kk-aNX0_AE)

  

  

  

  

  

  

  

  

  

  

  

  

Chave primária composta

  

De qualquer forma, a aplicação de chaves compostas pode ser vantajosa em outras situações, como na criação de tabelas N:N, ou tabelas de junção.

  

-   Pois, os campos que contêm as chaves estrangeiras de outras tabelas, são utilizados para formar a chave primária composta, garantindo o bloqueio de registros com associações iguais. Veja no exemplo abaixo, a tabela de junção film_actor.
    

  

![](https://lh6.googleusercontent.com/_T2AnN2pBgUNM7Al4gJMd2Mfp8RFILkS8sLs4u-HDfIMk7opBzxsclbHFj6DgBUekD6Lq3_FHw-ZrWBD1VGyz7Gs6TxPhAGRFpfROuNom0x4IyIMHt4vQWjfpIsLbmiN5AvR5gKleoyHqjXfdXga44w)

  

  

SINTAXE

![](https://lh3.googleusercontent.com/27sISiluiyz3Rg9XJm3gZz-o81iwjTyGWifvz5zmIOeYvLIw1wDg3SsvIheAehRAq3OHABUzAq1U31x8lt1632B7_33TVeaV7FCMBTyX6UhZqnILGpSfyai55cqR9bJ6bSyjIdsJD6ARWaPS5NFDOfw)

  

  

  

  

Neste caso, o recomendado é utilizar os campos actor_id e film_id já existentes para formar uma chave composta, desta maneira conseguimos manter a identificação única e a integridade da tabela sem precisar criar um campo id único para usar como chave primária.

  

  

  

  

Há muitas formas de grafia existentes, mas para manter uma padronização e seguirmos a boa prática adotaremos a notação em "snake_case"

2-- para construirmos nossos bancos de dados e tabelas.

Exemplo: De como ficaria

![](https://lh3.googleusercontent.com/O0DkL6OPyPz4c7hU7WNkTUbO772s3KBrB-2oCazuWI4sRFOB9_EbNIKAmj9YW_tivnZFigvGEJgH3iDLVjgeUZbKBef8fIgU1AaZZvKXFahc4yGF-lRW5dA8eUWQfKfmgxdjlTqJAvmeRZ7xVh5PlxM)

  

  

  

  

  

  

FOREIGN KEY

  

Através da FOREIGN KEY é possível criar os relacionamentos entre outras tabelas

  

![](https://lh6.googleusercontent.com/104cqdZaYWKQf2gsv92dZhqJ3BP5BSEEi9CmYWOl10G5Rm2J00WvXWuq_7BEXvCBHkQRsAjrzYEGSRoAAC33ed4cyoxND0pMPwEHJvQVtKzQlvexTYT6KoJeVd4OJ-8kaFDc6n8SQAElLpHkHzV7WLQ)

  

[OBS] Ela é uma referência e não trás todos os dados

  

  

Exemplo:

![](https://lh6.googleusercontent.com/Ep1dXM3aWcTDou1W2nq7m5GxlxW9V2-ElUaLvkwiEzk8e8r9f5pg_xy9VZ_46_j3tpIpR76hS39P88KQJgUovoToHp_08yZxyhMwbPU3gXGhnrbdzHSMQq21IAo8aM0C-MYkTo9Mt77V2h9luJEf5aQ)

  

A tabela customer têm relacionamentos com store e address

  

  

  

  

### Como criar uma tabela no MySQL?

  

Sintaxe:

  

![](https://lh6.googleusercontent.com/G9_Paj7gwG0fKgKk1B6w5RxCQRKD0zmAPLhYgO6WBVRQPanvMyptiRBj1Enuip8Hh_ZPjZNj2DoI2pMI2PacpIVgp1vsftCoW6cH9dkUgPv8jK0KE6foL3WDHGfLmerIl8oFBFjDVkLtRyvusiWBYCs)

  

  

Criando banco álbuns e criando uma tabela artista

  

  

![](https://lh4.googleusercontent.com/nlUeUm9EUZVSzHF3sboIITwJIWEfvuRktAvXSjSC_1JmLJqPEjCbEOJZ058yFCe532Sx8Bg6coGvbcFJwHYyxI6f2K3kOXscjN1mrj0-MTfOs1e9OsnZJ45pj1DLbIEUzmR9U4-dVVcw1Xc9sLecsuA)

1 - Cria um banco se não existir álbuns

  

  

![](https://lh5.googleusercontent.com/9qDUmuCLyyFtg0PgyRLdqaFMxPLFLWDB-0RWDmhnT95OQJQgdf1iXko6ek5ubuoDm6p_RovDXNYt0YZu1QTZPV9EEloRbaDz9-da5I7lxSCmDnKSklQM1bthLplW9YwUFyU1w44TBkv_ji3AnquP0_Y)

  

  

  

2 - Criando mais tabelas

É preciso criar na ordem

  

![](https://lh6.googleusercontent.com/vp3YKqBQh2-nbIztUz0DL0IIRh96swDh0pYddkYvK4OgrfAxi4ZR0ih3_ZVHur0Itt6Lwhr05cTTCJhZd3myu4rG8arTWIFRzZO1GeRscgL6Ub4jbJjL-qlbDKzVmI8RNADl7bEc2uU_dTw4mzmFJlY)

  

  

  

  

  

  

# O que é a Normalização?

  

  

Os conceitos de normalização permitem que você aprofunde seus conhecimentos nas estruturas relacionais fundamentais, o que colabora nas tomadas de decisões mais assertivas e seguras.

  

![](https://lh4.googleusercontent.com/oGi2zGuzJWDGA3ghnURP5Np8pQxIN6xw8gQ-9TtAYdo0Borp9yf3h7e1EfBHVF9xEhuP75mUtqDXHa-hM8DpEXtkYuzrTR8Rr_dy2Sz6_-LGBD_ZrRsud40SMrDEVY_APxrU7w-GND7sYZR-nz0cEnw)

  

  

COMO NORMALIZAR?

  

![](https://lh6.googleusercontent.com/8NCAK11MiFcw0Y8duVSm12zuJ83p4pRru1b0DSBLTT60Cy3caR2bGLETkWVH2YX7FGQXe04djONveYK4HB8RMcaDeF2Pej5QqTVkoKqaOEza4EHM76Zn7BUOsjgg3vekL3g78gDGkjfLDcrC2nOcsg)

  

![](https://lh6.googleusercontent.com/JG9m0-kW3WbQii7w2BQdhE20hyM1GuLb8TAE9_2cHVmayRGsgHYzOTkiso6xt-ai2429xcn9sCs88Ww_iZZOylhbbElc1qbTPCgTQzdtF1XBy4K3vW-Mfbjqs4ayMjpas6vD_8KkG7yeMoc2IcTBiw)

  

  

  

  

# 1ª Forma Normal

  

Para iniciar a organização de um banco de dados, devemos nos atentar para a Primeira Forma Normal

  

-   Colunas devem possuir apenas um valor;
    
-   Valores em uma coluna devem ser do mesmo tipo de dados;
    
-   Cada coluna deve possuir um nome único;
    
-   A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados.
    

  

  

1a FORMA NORMAL

  

![](https://lh4.googleusercontent.com/hEBC7WaG2Cr7Npt8Pr5xUjOZLsaUJVgdlVsIXpDEbTGkfNerGdvoBK4gRIkOWa5EflPJ7P2ve5DFNz435T1AuMcmBy-NUGAXmc5EnohUJR4XzQQox6FdtD_cBlb274Ao8v-bestGSJ6nZ9vVp1wJ7w)

  

  

  

Exemplo de tabela 1a forma normal

  

![](https://lh4.googleusercontent.com/qrHyb8uhe6giAi3HV4_EGINCb0EE-RS9pSxkbFB8mlB0KgbGGhG_7Eb1Decj-1DtOh6SooG0qGfO4M28_lcOgW3aRGiexKVXDMSdCkDtBB2fnTDbuJcfY46SLfGS1wB5IxqXAkUUYA74DrbBIn9K5w)

  

  

  

  

  

  

# 2ª Forma Normal

  

Para a Segunda Forma Normal, devemos atentar para o seguinte:

  

  

-   A tabela deve estar na 1 Forma Normal;
    
-   A tabela não deve possuir dependências parciais
    

  

  

Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir. Por exemplo, considere uma tabela Pessoa Estudantes que possui as seguintes colunas:

  

![](https://lh4.googleusercontent.com/NcN1rqYUb-Gjx-v8hieLSFxnkEnCPDvu0ZxuNFbeaK3ca6wxdVU9oqgsx9CjXMY7ceVpVd0Qccz5sqgyT-j20uwxkWC5Nuq16qk7p3--RoLkzsWzPgnqFDTVsHh22K5eFWGKpSjZzOsXf1RPotAEZQ)

  

  
![](https://lh5.googleusercontent.com/UEivhxUTeKV9JG1kMKg9xU2BXmhxRKzjzIqUZavZXNc8QTgjnmUzDtVIkMiiU0cxoq1OMJCA_LmDM_kCAzDcVO5UCWh36C-e6ssbxu3SvSWFgDMaHRC6BFSTEhDaXizQfvwth3JONX2PaaSXp0Pu_A)

  

  

  

  

  

  

  

  

  

  

  

  

  

  

RESOLVER O PROBLEMA DE CRIAÇÃO DE DEPENDÊNCIA PARCIAL

  

  

![](https://lh5.googleusercontent.com/LD0kh79456EBujVB-Ir-QqjoaPnaRpyFkXddujXWGXz5YrwHiZLSi3_nXOX5QdvTl79I96tBkPH6-kIBdtRoo5wVqw8YQbLV2mjQXPFHgecXvd1oNqWRcpS-mByRKIiDX31488jfzYHLEE-dfi4Mgg)

  

Outra forma de fazer:

N:N

  

![](https://lh3.googleusercontent.com/J-226B5nmLAmrNXI6qoyvrND-V0cLxT2_jO2UjmNSkhDfrDORW45DtdSXLSG0alP3OXuCx36X_Ky3GELaxidCU-qw26ObyNfAIEJFvvceU2t41QCPabk4p0Muo9O_FRZcsCgnAWemG3KPY3nQ1Kdqw)

  

  

  

  

# 3ª Forma Normal

A Terceira Forma Normal estabelece que:

  

-   A tabela deve estar na 1ª e 2ª Formas Normais;
    
-   A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária).
    

  

  

Exemplo:

  

![](https://lh5.googleusercontent.com/stCl8Tn7Qi7485yp9QIvBQmqp55m0wjMkFy4fJ9yaHOa9MnnWpL3ydLEter80sJ9UoPOoLnVMPT-ZqDo4E1NnmYft-hm7kveRhszGH8W2PpLdiz8I4Bz0dzkeMKYr_6cPob9brxFOSrHCMPqdDcywQ)

  

Observando a tabela acima, podemos notar que a coluna categoria depende da coluna categoria_id, que não é a PK da tabela.

  

Quando um atributo (coluna) for dependente de outra coluna que não seja PK ou que não seja dependente unicamente da PK, como é o caso do exemplo acima, sua adequação à Terceira Forma Normal poderá se dar separando esse atributo em uma outra tabela. Dessa forma, ficaríamos com as tabelas assim:

  

  

RESOLVENDO:

![](https://lh6.googleusercontent.com/k0zy6brdB3dQ3oGNVuKhdgYSIyJd3rvWYFc6rLKUc6AAy0hdUxYiPxZSTx4eko9uItuZALVOQVZdYEblUkiFcKC5R5BpxH83XkbbnYS-ooPIeV2W6J3-MvKdLI7FIou2lwnKyw23gvFUS79iBD1zhg)
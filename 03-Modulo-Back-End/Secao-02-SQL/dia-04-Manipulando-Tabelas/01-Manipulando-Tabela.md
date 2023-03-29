Todo desenvolvedor deve saber CRUD(Create, Read, Update, Delete)

  
  

# Apagando e recriando um banco de dados

  

Para apagar um banco de dados e recriá-lo do zero:

  

1.  Abra o MySQL Workbench e se conecte a ele.
    
2.  Selecione o banco sakila na lista de bancos de dados com o botão direito e clique em “Drop Schema“.
    
3.  Selecione “Drop Now”.
    

  

![](https://lh5.googleusercontent.com/zWGq5QjVntZiXG2LyMRZmpDrg3PKvAUc8nXGQ1jb0Fzor78uNHzrmRviY7xMYHHKaVb0pajQczCZqzetKGxSP17ukmRvY4iQ1nBc8vnwd3MJ02vNpzHeqVLotZJqP1n2AJpf8YwcspXtSnhjBXKKfw)

  
  
  

4.  Retorne para o MySQL Workbench, selecione Abrir Script SQL… e selecione o arquivo sakila.sql.
    
5.  Clique em executar para restaurar o banco de dados.
    
6.  Caso necessário, clique no botão de “atualizar schemas”.
    

  

![](https://lh4.googleusercontent.com/pAfJ-ojXM_n07y0dVnOq908Zy7MZD_ecBxessnWtisIncJINFj2L_xvBFNfFgDKTMNvNyTpnIQKZF8gCUwJBVetGvdmIBNuZOkgOgMZ6m91ZhBF4Izx2R6MBU7o83Gou78US3kjh2XLkFEiqEQxxsA)

  
  

# INSERT - adicionando dados em tabelas

  
  
  

Observando a tabela (sakila.staff) nos informa que a empresa possui apenas dois funcionários

  

![](https://lh5.googleusercontent.com/7f6lKThl3jZZjrGr5G9COpbzxILyid0aJsoTEjzMgHnItIkhRHVHi6_pPKtjJXNdGntQJbmXB03BkujMcm22sM3vkDPhF0vTaoT5Obsz-FUd09XqK594BxnzXMnINjNQ4wUq4www2DYShoGT1x7m5g)

![](https://lh4.googleusercontent.com/VUaRlLPNHePKy2S-qWN08suLLupCNC0Om2wSIjOeBD1a4sEucpo8skreuf44dx_mceC9yVhLr8S53zgSU6JMBdGuahqZDWWID91uOPAHJhtfVOOICUpBymhin7UFg1uokZ55fL_m9esb6ZBjO5RB-g)

  

### SINTAXE

  

Sintaxe para inserir dados em uma tabela é a seguinte

  

![](https://lh6.googleusercontent.com/lcNCakQoe9199-gziVnI20dNeQ7QKWf5X4JdapxStiQYOOx1o8cRljV-QB-8ZVqC_fNeSpZWJA-xlGCh9Ql4OeSrlgPW5-vdTaNz3t7kS_pH72ivCMtkdvmbQkmwTzSfhgcvffxNCvZFzWUDzX0xdg)

  

A query acima vai inserir uma linha na tabela (nome_da_tabela) com os valores em suas colunas correspondentes.

  

1.  Caso a estrutura da tabela tenha mudado enquanto se escreve a query, você será alertado.
    
2.  Melhora a compreensão para quem estiver lendo sua query futuramente.
    

  
  
  
  
  
  

#### Exemplo:

  

Considere a tabela produtos da Tabela 1, onde precisamos inserir dois novos produtos

![](https://lh3.googleusercontent.com/6EBUAIoH3axsxl3HqoBiBtOnrp-T4O2H-KyKzsLCR20favhQzpElGZq5ao41pIXvtLZhBJLzAuc5woO8xcJnTYnyPxZ2uvfTcSt_z3AaMZ_CwJEvw9lYWdMSMed_npdRN9SgATzH2nqjhtqsMtGOnw)

  

Para inserir os dados como solicitado podemos executar uma query:

  

![](https://lh4.googleusercontent.com/bJDbks39yWsSHa77MzXF_JdtTqhXvHO12Eef3a6_TGevf57VRE3733f7NCFaO1ojEeUS9TrOKutNVKs5I0oCXdPMO5PiG8Tvd67aiTBu2wqqDijnWDtOkTG4u1gCXbSE47rT8ksZziV8wyUeC3xBHw)

  
  

-   Nas linhas 1 e 2 utilizamos o comando INSERT INTO e em seguida o nome da tabela que receberá a ação, no caso a tabela ṕŕodutos
    

  

-   Na linha 3 informamos a ordem das colunas que serão informadas
    

  

-   Na linha 4 utilizamos a palavra reservada VALUES para que nas linhas 5 e 6 informemos entre parênteses os valores que serão inseridos, respeitando o formato do valor (varchar,int, etc..)
    

  
  

-   Linha 5 a 6 - Inserindo várias linhas
    

  

## Inserindo várias linhas de uma vez

  

É possível inserir múltiplas linhas em uma tabela com uma única query

![](https://lh6.googleusercontent.com/yVYRD9Vdb8IBT9wyGl-kmiRf2KpDyS9Uo-P75ixs-_HhpNQ424kxuVFpQ6tdi5oMQnHnpiZQjeBcxD0J9HyJ5QdTQi-rrMrkALGsm0lfX1A8D8vMXqvd5H_Gmxw3TQ-qhEmA0MOS2aAd633NcRh7pw)

  
  
  
  

## Inserindo valores em colunas com auto_increment

  

#### O auto_increment

  

O auto_increment é uma funcionalidade que todos os bancos de dados possuem. Ela permite que valores sejam gerados automaticamente cada vez que uma nova linha é inserida em uma tabela que tem essa restrição ativa.

  
  

Exemplo:

  

Ao inserir um novo ator na tabela sakila.actor, caso outros atores ainda não tenham sido inseridos desde que o banco foi restaurado, o próximo valor que será gerado para actor_id

será o valor do último id registrado acrescido em 1.

  

Ou seja, se o último id registrado foi 200, o próximo valor gerado será 200 + 1

  

![](https://lh6.googleusercontent.com/6ewtk_1cK_hNHPU6-XVyycPs7MGw6fahp0j15H2f2AeW6j72FqPHUmvHKAIBYka2HSnoytQrrIhVYcGci99B_YRdooquq-YRAaX4cMuehF_g2qxPkk4ylQVbJyQoO5nWyzPMiA_2EglC3k0uGFT9PRw)

  

[IMPORTANTE] A coluna que possui auto_increment é omitida no INSERT, uma vez que o valor já é gerado automaticamente:

  

![](https://lh6.googleusercontent.com/4hd7eXlp__-Wt5FOThcMrbUac6hRfOItl5UNlbsq3pu-cvIVZaYdV9HjDNx0gFDsh-RsDckawIRR5kVkeZFKuPQhaGRP7cGDNvlqOdfnZFIVMS7v_bNpIOYXUn3gResLp3pFBO5iTmp_p4vKRnDXm8M)

  

![](https://lh5.googleusercontent.com/oT9jTbhBAxXXTqj0Ks0lRowIC4CjQu_U1AIYO02t04bUKwPc6VsUshRK2AcSi6U-fmrGS55tLVsHaSh5lnEny9j331tvuglbWIjTIZqLXSrNasS1_Jl-Y2_HrdCSLe7KKXqIoVKDMuAox8gAL6gXA_E)

  

## INSERT SELECT (Inserindo dados de uma outra tabela)

  
  

É possível inserir dados a partir de outra tabela usando INSERT INTO SELECT:

  

Na prática, é como se disséssemos para o banco de dados, seleciona determinados campos da segunda tabela e insira esses valores na primeira.

  
  

#### SINTAXE

  

![](https://lh5.googleusercontent.com/DIbu3P3SRi74sEzs7EYM3e-LLRui1RxTfmRadYtM_5DefHCczo2VDc8v8v3WbQHmvU3ZVrlQUVrJbK7BHOq4v-87hFFigmXKWkyTXXgdBmRja58PXtJvgCc_FSNGulvWjtJjdTLN0huJe7eMxCo7KEM)

  

-   nome_tabela_destino:
    

Corresponde a tabela em que os dados selecionados serão inseridos:

  

-   coluna1, coluna2,..., colunaN:
    

Indicam os campos selecionados da tabela de origem que serão inseridos na tabela de destino:

  

-   nome_tabela_origem:
    

Indica a tabela que contém os campos selecionados

  

-   condição
    

Caso exista algum critério de seleção dos dados

  
  
  

Exemplo:

  

![](https://lh6.googleusercontent.com/BaczllwrtdYdeFiFBDgyfvaRBnU7zLkykzkFa8dL-TVXG7Om6cdx4RpaOTkgptpa4Ge0QtzoZHmb95NCDeKxP7y_zCISazaAj57dkoM7fdvPbDW3tMgXc_lkHgVgtE_DTSrWnXZn-CKurNsCAPYh6uk)

  

Assim, estaríamos extraindo a coluna1 e a coluna2 da tabelaB e as inserindo na tabelaA, de acordo com a condição que for passada no WHERE.

Com essa funcionalidade, é fácil criar tabelas temporárias para testes ou por necessidade.

  
  

##### Exemplo:

  

Podemos trazer os dados da tabela sakila.staff para a tabela sakila.actor

  

![](https://lh6.googleusercontent.com/gSE1SHOJBnzApTV3rnz9woPcSwT1XErzb2682npiyPsl0tpaLSoqqNlBZWa_x-jYiqCvBuNOT3wAaSKTybCazhGuaYYyPnPg7xv75GCT5kyQ88jxntQx_9I_qKyDy2mA5o6I1VXJAoCr7FFJtKtmy3w)

  

![](https://lh6.googleusercontent.com/Lujyz7S941anywnGjkmQsQ2ciBLcmgfScaExbRQkcKWiNE6eeKnKwohivFdIQV49txgF26v4jXDwQ_MqzdwsIBNTRI0LEsfFD-H064-CSaNi2VU-vCSj_e-ZMj6bvvaFJwYGNUKwp3MaYqJQGUnjMI4)

  
  
  
  

# UPDATE - alterando dados

  

Comando para atualizar dados - UPDATE

  
  

##### SINTAXE

  

![](https://lh3.googleusercontent.com/K3mz9c9blRo3QvyLedQObIxWNdBK6990PZFnvP9OTdn4ygNhb1khf64qIerCubeekbMhACUdhPa6jWO1yorphiK_zzxFZuL5qfxhIcmFAee-yD4QCTipaKW0358FvnreqgYWS3VDc8_qpKDgpXFbe-c)

  
  

Situação: Você se chama Rannveig e colocam seu nome com Ravein, com update é possível alterar os valores de uma tabela

![](https://lh3.googleusercontent.com/3PS0csf2_YQ4K2VySyO0CH8QokhuVHCzA4zJKxG_b61hxike88Z7OuMDeZ6gv6CTHQimDQmnRtpSRxqdzpM89S_RoAcbw-w8mCrShATo3u3bDsr8yjhOVHNcLSbTfENZ2Kz0QU1QZpoL3qKsICqwxIg)

![](https://lh5.googleusercontent.com/R69AEproAwYGbnjJC6K-tgFW1HByRN_8JRzlp0kKb3h0C1_2wFEn6JkGduma8QUnS8Plkk8JXBkXk_FF_Pz0u2oVTmhkT4ac2EDPnn9SR4XlN0MGkXIDG1-Z2KAgFy9bOvl8nrYo6M0dXZKk5-xPPpA)

  
  

Corrigindo ficará assim:

![](https://lh6.googleusercontent.com/AKlodKkpvWDBys6LXxqiiFcZ8RkqGhPuOEBC_m8vn1LSr7PTrehJ4rCpfoNpZlw640T7DuKzMkxA6H204igfJurCG-t4h5s8mV9tYLiR09z2BxTVNIiBg_A8IQ_FsKehjIzqN1__3Ms6B7E615Cm19U)

  
  
  

#### [DETALHE]

UPDATE e o DELETE no MySQL por padrão, existe uma configuração chamada safe updates mode que só vai te permitir executá-los caso eles incluam quais ID’s devem ser modificados

  

Para EVITAR ESSA RESTRIÇÃO, rode o seguinte comando nem uma janela de query dentro do MySQL, usar antes de executar seus comandos UPDATE ou DELETE

  

![](https://lh4.googleusercontent.com/qymTgLedqf6Fz1aKpj0IUL03o3kZSLOJ1Nrrus_EQyaWs0TYgdwaLtcCbjhkVuoq61v6GluTisFnsvgVe9AJ3moWNRHlpunJ0y8qvyIVTYjOJQgNjshKsXMTmjeld1NWPO0kIFDQgAA_Vkj3FXw9khs)

  
  
  
  

## Alterando mais de uma coluna ao mesmo tempo

  

Cadastrou um nome e sobrenome errado? 😦 Não se preocupe! Com o UPDATE resolvemos isso de um jeito bem simples! Basta inserir o nome da coluna que deseja alterar, em seguida definir o id do usuário e voilà, nome e sobrenome alterados.

  
  

![](https://lh4.googleusercontent.com/FdZP_dARAovYnZN5Xca71mVUVhsFG-OeXEeNBNHgiuLz8VNdh42LYNC-VA3Z-7R0Eq_aEcV35OQ3fLLPTINlWm0_UI_Octur7qXs8UWX7Exh1N7M1KC4lyamqlmMs9FnKRqkq5tYssYw-I2ooaWt7gg)

  
  
  

### UPDATE em massa

  

Por questões de performance, para que apenas uma solicitação de query seja enviada ao servidor, podemos fazer uma atualização em massa.

  

Exemplo 1

![](https://lh5.googleusercontent.com/iwSH4BXLyVsCiUGrgkCj1-ttpyPMfM_hPaPUlUjjZIM7OCClbbDnX6NgkJ07LViWLzU9ZXM9NYJy9zIOMcJBTH_mTD8wCE3bi6RkOSRTuk6H_tQsC4n_eMSSpcVSxqi10FL2uDxjVCXZxLFmtKzShUM)

  

![](https://lh5.googleusercontent.com/bGmiKVNTAzYvppT9ej8Iu0Q6xu4dYzbwwc7ucLFE17cxauA6elWGpbInTWRIEqIUE0P_d3i_-aJLxpJ3I0Od7AfPYhtQgYXaCxUBQxtgGMvX6uDGn0aris1OIw6Nl0Fs6teaRMv3YV3sEhKKXAruuWM)

  
  

Exemplo 2:

  

![](https://lh3.googleusercontent.com/-JGoQIUVV46-RRjgscePbgA6P3aZ_LHotDQmNjldaHxtJatWglIkzkli12eWXbQjxIZtqiq3sNCClPtaHz79EcW6pwPg994OUoI5PO6hptD78pVhSOwIn4qBCE3n1UxvvXc5sYavEOXNKW45cXua69A)

  
  
  
  

### Fazendo um UPDATE de forma sequencial

  

Se o comando ORDER BY for usado juntamente com o UPDATE, os resultados serão alterados na ordem que forem encontrados.

  
  

Se o comando LIMIT for usado em conjunto com o UPDATE, um limite será imposto na quantidade de resultados que podem ser alterados.

  
  

Veja a sintaxe abaixo. Lembre-se de que os valores entre colchetes ([]) são opcionais:

  

![](https://lh4.googleusercontent.com/Gn3QZmfaVO8dWqdmjCo34CCa-y69EG2O5H7mlHxWRo664NIrDzo_EfmzTlMckLYk0fS7OR7u9bW5Wfz5dCyX10lKNy7zf1EzAtM8JWnbGAlydpxtznOM7ul-yCGd6jr3XQyI_kUqRaCcEGkPBIby29o)

  

![](https://lh5.googleusercontent.com/ojT6GVTTV2ufDYxOZJUYDRQjp659b56DGJaKpXH0n6l8izlY78FidWGzNNC4HUco2Z8UFnEjbgTroEujUdJYgGiztNGVGrM5prhSp2SIn6eTas_ogWsLHiSOQjJW-8Pz7JaE76Wds6D6WHburmc9-P0)

  
  
  
  

# Bônus - --safe-updates

  

É uma configuração segura para utilizar operadores de alterações de dados. DML -(Data Manipulation Language)

  

##### [IMPORTANTE]

-   Ele é útil para casos nos quais você tenha emitido um comando UPDATE ou DELETE, mas esquecendo de incluir WHERE para indicar quais linhas devem ser modificadas, evitando que a query atualize ou exclua todas as linhas da tabela.
    

  

O –safe-updates exige que você inclua um valor chave (key value), por exemplo os ids (lembrando que os valores da coluna id de uma tabela são do tipo KEY) dos itens selecionados, para executar o UPDATE ou o DELETE

  

-   Essa camada de segurança é importante em bancos reais executando em ambientes de produção e ajuda a prevenir acidentes.
    

  
  
  

A opção --safe-updates exige que o mysql execute a seguinte instrução ao se conectar ao servidor:

  

![](https://lh3.googleusercontent.com/KZ3ce5LstmwXx3mAK86V2vFD0fnInNpRWqIRjfj1W0_uzwUdYmuB5NRP4uAp7i24T0zx-qrQ1bssGcWAHyEdfSO5mASCzeLG_I8TCjCrSEcTqNOzZifucf-G2EFk4Jox16zJKAcAz2T_ikcvnqK1mcM)

  
  

-   sql_select_limit=1000: limita o conjunto de resultados SELECT a 1.000 linhas, a menos que a instrução inclua LIMIT.
    
-   max_join_size=1.000.000: faz com que as instruções SELECT de várias tabelas produzam um erro se o servidor estimar que deve examinar mais de 1.000.000 combinações de linhas.
    

  
  
  
  

Você pode desabilitar o --safe-updates utilizando o comando SET:

  

![](https://lh5.googleusercontent.com/pPZBIfxU8rn7-pH4NzqcuvOIsboTIxBS6dUy1O9iyYXEqBbs0RaNn3loN3kvEsK6nFFqXe8CAaCgA6EYvOiAeFqcfs3hAazZRH7nLyXiHUy7tu4e9LoyfoQjuoeOUK-8d0TOs9PN9qwE9k-yB8-m7zI)

  

Ou configurar para um modo mais conveniente para você, alterando os valores das variáveis:

  
  

![](https://lh5.googleusercontent.com/qovWtuLw-mng9Boto6xAljQjWteFZBM4TZkzi5Xh0tOm4JjEpnd9Rqm9Vh-xfODjjK2eKkSjxDDJQVW3c2NY2l2n-gym9J4lMAVln3heZR29tea-XxZC6RCj0Qkyq7kCMrvj8BIdrVR01qRoOKzJ9G8)

  
  
  

![](https://lh4.googleusercontent.com/gbHfRtd7_c97UKT0ief1Y8BFfUZnhnsqunMER5Kolp1_x_wcgp5yvnOfYqpT8wRFYLzHRZ5P_d1AWOLtKCixB9gt_FMkUNE1KmJCh0EjNQHWzjnIYHMRttYSCnZrLan6i3DHdjIBbNruH7dg00SzXVY)

  
  

Este erro ocorreu devido ao Safe Update Mode estar habilitado.

  
  
  

#   

# DELETE - removendo dados de uma tabela

  
  

Antes de aprender a excluir dados de uma tabela, é importante entender que nem sempre que você clicar em excluir, dentro de um sistema ou site, a informação terá sido de fato excluída do banco de dados

  
  
  

## Excluindo dados de uma tabela

  

Para excluir dados de forma básica, temos a seguinte sintaxe:

  

![](https://lh6.googleusercontent.com/5-it8vQbtV5WO-BcP12OySYNJBXNM5Lb2Yth1m9NIStSWNKnYLTGNxrNFqFNV05t2IFbPfZLKI6QpR10BNVztc1o3aqRfYbb_3QdLBHS6gF4HXcu44awhf2ahMBlBIEkhxqR0X6sBSb60fIoutfq2Go)

  
  
  
  

Exemplo no banco sakila

  

![](https://lh6.googleusercontent.com/_n84CjLtjA5D1QTqTTtVCg66EsTGqHEIHXf1Z-XLssemoWVP7iKI7CF8_oFxBPYQL__8OkjIBPmrVENND6DtPb99xHxogt5fCl0ib3I623AXqLjghJf3bQVNgRbgoiOPVUawJabNNGfWPi2QTor1MGc)

  
  
  
  
  

⚠️ Importante: Novamente, caso o modo --safe-updates esteja habilitado, o comando DELETE só funcionaria se os IDs fossem incluídos em suas queries. Para fins de prática, vamos desabilitá-lo.

  

Novamente, para desabilitar o modo --safe-updates, rode o seguinte comando em uma janela de query dentro do MySQL Workbench, sempre que abri-lo, antes de executar seus comandos DELETE:

  

![](https://lh4.googleusercontent.com/7tCJJXT7NWRzvwSV5JoFBO-zBMLMy6S7oBqP4Z-Id2QpjrP1lPs9HVAPIwKkOMqateWZX-lbuxm6YkDcURtoeu9qvTDsUQyqH6bjHQoJkCIGSsoZB3dZZRlnWP_E6myYuD6d9f8m3J3qc2SyFUvtSP8)

  
  
  

## Meu DELETE não foi permitido…

  

Caso haja relações entre as tabelas (primary key e foreign keys) e existam restrições aplicadas a elas, ao executar o DELETE ocorrerá uma ação de acordo com a restrição que tiver sido imposta na criação da foreign key. Essas restrições podem ser as seguintes:

  

![](https://lh5.googleusercontent.com/Evl6ylKmBIK1VZClF9daffFaIUbCNG0jnu9DLGtjsSZaSqvFm_WkjC4Txte5mfS25wg6sDWMb3aQG-I2FFlUwaupJQcDxM-ocDYMKEpyGIKlMzRDVYGA8x_fLQ4pysgCGuEMS--C3VPfqHmZnf25JNA)

  
  

Exemplo prático

  

![](https://lh4.googleusercontent.com/naKqufVssYsvEzP7A9i-QZ5uO4lFwryhzq-derJyxnSMkez_-b_nggwCq4UIjceDVjHdy3Hl6EAVswEX1Hx6FztLieOGVctpDDIyLDXFBbG9sy9kovmZk1YjfKlCDFgM53Eq4MigMfQtjsh3z_6szYw)

  
  

Se tentar rodar essa query, vocẽ vai deparar com o erro exibido na imagem abaixo:

  

![](https://lh3.googleusercontent.com/eM7XMOu4yW-oKJ9Lh5FBextJ6J6wG2weqNHqwOMlLapzJMx0RRGnFo2zd-jfcr9rpf-FZF1rqKow_yD1bwj6VyRl8-MTD89js4OA9-fVDg2mrwHw3G-WoA1BREGn_S9vWQNkQhxp06LNjSnX7lHPWMU)

  
  
  

Erro ON DELETE RESTRICT

  

  

Rejeita o comando DELETE

  
  

O banco de dados não vai permitir que você delete o ator chamado “GRACE”. Isso acontece porque a coluna actor_id da tabela film_actor é uma chave estrangeira (FK) que aponta para a coluna actor_id , e essa chave estrangeira possui a restrição ON DELETE RESTRICT

  

-   Se essa restrição não existisse, o ator seria deletado, deixando nosso banco de dados um estado inconsistente, pois haveria linhas na tabela film_actor com um actor_id que não mais existiria!
    

  
  
  
  

Para conseguir excluir este ator em actors, precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor:

  

![](https://lh6.googleusercontent.com/OdGKIe294puNQQKQXhK2PHRIiXyS4xslPU8mf8hdsWBQJyubgHDmCqqYv1AEJNcrWHUuVYKuXoIbvaHcc8fN-MAEzgCncxxRvffrKNZqBABA4nd7GWd4nEOv8hFoiefaN3FlzT2ziJL5wvfveQOQXPQ)

  
  

Após excluir as referências, podemos excluir o ator com o nome “GRACE”:

  

![](https://lh5.googleusercontent.com/ijb9HfNkbXlvxqQbpK37l0d7jSn5WXr-MY77No11UZMGxuY04joaQEZYDSmr7iPmBUOKPpvfw_Av9hA9a6FJ3eWVSqbzNm2mfbtuB_4-KHU8Ff64mkHYTPaRTrH84HbWua0fHfVe4ngCoU-n-iXsO1w)

  

Antes de excluir dados que possuem restrições de chave estrangeira, como o exemplo que acabamos de ver, analise se você realmente deve excluir essa informação do banco de dados e depois, caso precise, faça de acordo com as restrições que foram impostas durante a criação da tabela.

  
  
  

## DELETE VS TRUNCATE

  

Se tem certeza absoluta de que quer excluir os registros de uma tabela de uma maneira mais rápida, para efeitos de testes ou necessidade, o TRUNCATE é mais rápido que o DELETE. A função principal e única do TRUNCATE é de limpar (excluir todos os registros) de uma tabela, não sendo possível especificar o WHERE. Por isso, o TRUNCATE só pode ser usado nesse cenário.

  
  

![](https://lh4.googleusercontent.com/io7xWK_z282X9j9jyNF9JpD9CfmvpkqrT_L05rdUxNetXc2MNpowjvdZObreg9vE7ZR4IveI6W4zGNZJwamoX2C_fX7R9jsABLPgvccc-ctSsYiZ8mZRh5lW27jQseCKQ6Un5K7JyB5Bs4TwD56ZCPc)

  
  

#### [IMPORTANTE]

  

Caso precise excluir condicionalmente, usando regras e especificações, use sempre o comando DELETE juntamente com o WHERE.

  
  

# RESUMINDO:

  

Todos os conceitos apresentados para se operar as informações em um banco de dados podem ser resumidos pelo conceito de [CRUD](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD).

  

-   Adicionar novas informações ao banco de dados, utilizamos o conceito CREATE com o comando:  
    INSERT INTO banco.tabela (coluna1, coluna2) VALUES (‘valor_A’, ‘valor_B’);
    

  

  

-   Obter as informações armazenadas no bando de dados, utilizamos o conceito READ, com o comando:  
    SELECT colunaA, colunaB FROM banco.tabela;
    
-   Atualizar informações existentes no banco de dados, utilizamos o conceito UPDATE com o comando:  
    UPDATE banco.tabela SET coluna1='valor' WHERE alguma_condicao;
    

  

-   Remover informações existentes no banco de dados, utilizamos o conceito DELETE com o comando:  
    DELETE FROM banco.tabela WHERE alguma_condicao;
    

  

  

  

![](https://lh5.googleusercontent.com/DP43NhI60Ojz4A_oH8HHeGa-ot08bn0drHzQPx1twRtsMYuK2Wy0Maju_P2QduOqqi5KKXn_cr9pu0FaVKyPGBn9SGgpfxpovFOfZL6kZk9IcCK9mTdz_QrUZxOZcTmYJMsQJAbpijg8QXyVENgiy_o)

  
  
  

### INSERT

  

![](https://lh3.googleusercontent.com/IGCQp6qjOqzPc6jVpJyaqY2tFdNGBCNkDSY-cZgnRuzCCEKVhplW_YTPPIY6vx6SG14a8sdmTXb6sKQkFXOfT2cKzh-QHX6vh7Fc76CCXyJNz4cRnDh-CVK2O0elWu_eVfiByIQANO0YwUncacqRMwk)

![](https://lh5.googleusercontent.com/CKb-XUQbRtzni7XpGjb3wvaJzarTXYUrnuqqt59sSodgAw7tmdmP2bKRNTq_dLeODsejmYwoB-3EvYmUYK4IIOSZaSKrX3vZzyQsQrLNu1PFiAt7pt4Qxl_iXLb2rkjNJd9P_Wvq_kowQ4ep3WRgSHw)

  
  
  
  

### UPDATE

  

![](https://lh3.googleusercontent.com/nbwJvKmEFUt41IrEH3Xt9_Snez-nPnD7Ce_mKDsYnufHVKT34WtdSQ9li1nl5jzpRawCwwqDJms4QX-fO1uIXJ78bUvxI1ndCktlD0RLzUKiBdEmdE6N5dsBCiSAX0LqtkntlHGlvgPwppwl_uD0ygc)

  
  

![](https://lh6.googleusercontent.com/qqWnbJIyMEpB8qQux2bYtbkl7ebD_Zsdx-GOMIpQ5V5N6omM-N3KSqItEijAUxrbY0Qt2DPCSscI-WmVZ9vzR6bflhJd7N58OrTV-Po4Pq9SjqvyKZTKuGxg045Uvtn5qMgpmbIH6F1ZtD0neXn2hj4)

  

![](https://lh4.googleusercontent.com/HVdTpEbQ09fA_OQanp4c1e4AF_v97Nsm2FsCRPa4KmaUvQ-OGDzuYkEVylX7TWeceBq0bsfkOe-OwPnlabPYI26spn-akHzfpLmtXPU2MSxp7W79-mrywOiaUcmjCpBAir5366BRrFCkc-kVMIaZLzI)

  
  
  
  

### DELETE

  

![](https://lh5.googleusercontent.com/xyyjRuhc_TBR4J32le7wm6iM5bLNjgNerB_LT6T2HT1HdOidmchneEIe_0PkjVZ18w1K0NF0pNspBjgXaqFG-SsxkHL4NYVjTqrdKP63mtuQ_eMV6fM_ppxqaybkQNmMC1fGF0YubawIWDEscs8qUSw)

  

![](https://lh3.googleusercontent.com/w3hA8qv_QkjY-gfPjBmgCQ1DFchFHTdJ02iV1xftiT0iVD6HvXNhV-enaE-qkW3kW7WLFqXdBj1s-uDYRGgowNGbYSq9s4JOs0x7BNg8Lr7_wCfQWr_I9RcQCEhPRpgw8vnrYupg_LoSbcLPstzKhcw)
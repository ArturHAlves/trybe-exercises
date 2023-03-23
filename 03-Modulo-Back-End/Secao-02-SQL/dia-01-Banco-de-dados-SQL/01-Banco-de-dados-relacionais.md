# Introdução - Bancos de dados relacionais

  
  

Feita uma análise inicial dos dados, seus resultados serão transformados em informações que, depois de estudadas, podem vir a gerar conhecimentos que, por sua vez, se tornam uma vantagem competitiva para as empresas.

  

![](https://lh3.googleusercontent.com/X2vJo461maEjVxIS88XrYU3FpYyJn0XTKFoj0IkmBNmajuCTLf3pNrx5trdBLwug3s6nCj_962GdCTKSnu0Ov_u4uYKpaeqsV99_IH-p2ZFHQTfTw6dLIuUNpB3QYFj6mfZNt3lNcXmDwJuOqjxVpA)

  

![](https://lh3.googleusercontent.com/SST_4daXbeWHAaCQXSv83mnh0zPkAT5GKhug6ITIp5ssi0ZITzVyUJ8MID71G4pUmwnLrQIyN0_tOU_iLnna71NWar3v3nd3Fi6aeqdV11v9rbJbs7hsl-bV7ghQ918yCriNXRnYIGP9nM4xuwALDQ)

  

ENTENDER:

O front-end faz a requisição para o back-end, o back-end faz uma consulta no banco de dados.

-   Então o banco de dados retorna alguma informação para o back-end, e é aqui que a API (Aplication Programming interface) trabalha.
    

  

-   O back-end será responsável por processar essas informações, recebendo requisições, enviando respostas, e, por sua vez, alimentando o front-end
    

  
  
  

# O que é SQL?

  

SQL (Structured Query Language) é a linguagem mais usada para criar, pesquisar, extrair e também manipular dados dentro de um banco de dados relacional.

  

-   Para que seja possível, existem comandos como o SELECT, UPDATE, DELETE, INSERT e WHERE
    

  
  
  

# Como essas informações (tabelas) são armazenadas?

  

Todas as pesquisas realizadas dentro de um banco de dados são feitas em tabelas.

  

-   Tabelas possuem linhas e colunas.
    

  

Exemplo: Tabela que apresenta dados sobre pessoas.

-   Cada linha na tabela representa uma pessoa específica.
    
-   As colunas descrevem uma características que queremos armazenar sobre as pessoas, nesse caso, são nomes, sobrenome e email
    

  

![](https://lh6.googleusercontent.com/wyfjfI8xmZH0RlkXrvFP6EsRoMLbvLCWcEv1WFJwvWxoSptdlYgpswW485UywdAyn43Zo2X1H1QGOspv3oUVEikyoFDDZwUxFaPnrkxI-jPiML4o5eq6YYvn5eW2ZpCIZMftPO0n-EFsYF5wmYxTiA)

  
  

# Instalando MySQL Server com Docker 🐋

  

Instalar o MySQL Server com o auxílio do Docker e o MySQL Workbench

  
  

## Executando um container com MySQL

  
  

Agora vamos criar e iniciar um container MySQL

  

docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:5.7

  

![](https://lh3.googleusercontent.com/jCm-ALor1hlGh1dVq4YKGuzhaTEx8gSVjfPZWw1ZShJVWOWG7mZOgLb9IQp94-ml5qs9Ty7z-FdOtslugdqyQEMLvj9_fPJ_RLjKzOmd99PUBtOxSjlm3OqsZ_MHQPMoK8RNCW-vBwxrZUCMrmsJLw)

  

#### PASSO-PASSO DE CADA COMANDO:

  

-   –name: Nomeia o container, assim facilitando a identificação do mesmo.
    

  

-   -e: Utilizada para informar nossas variáveis de ambiente (Aqui vamos manter o usuário padrão rootMYSQL_ROOT_PASSWORD=senha-mysql para poder usar dentro do container)
    

  

-   -d: Faz com que o container rode em segundo plano
    

  

-   -p: Indica qual porta do nosso sistema, que receberá o container e a porta 3300 lado direito é a porta do container.
    

OBSERVAÇÃO: Lembrando que 3306 é a porta padrão do MySQL;

  

-   run: Responsável por criar e iniciar o container
    

  
  

![](https://lh3.googleusercontent.com/xiCB28z2HvLa2BfhChHHFA-LirRHpaNDnsaN4JqwdwaQklDTP708CYtfqbVRylWQ_XQegEzc8ij6uC8mGxfIFCOaTCrkFAUZ2UfFsCnfvCpsoE5fdtEBs3EK4U-ILVAFSl6YZ44mrDzWhABnwqboPA)

  
  

## Parando container

  

Para parar o container, você utiliza o comando:

  

-   docker container stop container-mysql
    

  

![](https://lh4.googleusercontent.com/yE9tniKr6mnf0SF18YYCXamUW3WAbAoUSlnYTf_URNd2Esjv5Aa0bnLt-VED_PWtPhYXYzafULHpOM_yojEpnb_lCrCAmcewii8A1KGSgPYPJPsD1gR799WFhz2YG3kWJ2m3llWOPbh6CFBc_UyG0w)

  
  

## Iniciando container

  

Para voltar a execução do contaimer, use o comando

  

-   docker container start container-mysql
    

  

![](https://lh4.googleusercontent.com/q_LVkzuQTFKrLNOVp15f8tXp0KlfUHEA6ROVCLDFYNwUW_7rBbUAUX3Q8IZV3AsbTTI_PHWt-1gsevzf4iYKArRMLLvOIhwCrZaPWR2vFUu6yHCICd2jMNdf3RiZSChAlagxppXECJzWtmu5kr8INw)

  
  

## Removendo container

  

Para excluir o container, você usa o comando

  

-   docker container rm -f container-mysql
    

  

![](https://lh4.googleusercontent.com/5pEgaHYb6a8DwdbAckDziffaXznkaih8kcfCXSjzPnqzdE6UNQMqnGHT-Zi72ALwh_V_h6ZCrbzUkMgJXYUhHSkF9K1OgptRkfHKoRkVJRlOyJK0hyKl6wum1GPzp-ZVMBt0BwENVvjaZUvkgyjj9Q)

  
  
  

# Bônus: MySQL na linha de comando

  

Após seguir os passos anteriores, você poderá acessar seu servidor pela linha comando

  

Para visualizar quais bancos de dados estão disponíveis, através do modo interativo do docker, você deve acessar o terminal do container-mysql

  

![](https://lh6.googleusercontent.com/H4N0W-6_CVDjl56xU4h6FrZfPGN7JIh4ZkntHeo8TvRoheBN29Rhmih2n8FWX6kOfLEDKlMycMxe8O4_-nvs2WOMuzH4_MHul7cuqK0-s_hKOfv8ZUc1hJx_oBD9BYqPNizddHhiMhs6PfAt4ehbaw)

  

Em seguida, acessar o mySQL dentro do container. Vamos utilizar o usuário root, pois é o padrão da imagem do MySQL e lembre-se de usar a mesma senha usada na criação do container

  

=senha-mysql

  
  

VER BANCO DE DADOS

  

É possível ver todos os bancos de dados que estão instalados atualmente digitando o seguinte comando.

  

-   SHOW DATABASES
    

  

![](https://lh4.googleusercontent.com/qS6wf5M4jaIUoHcCJ70h7A4yigHJcjL1xDqv7GpFHAw5VsNKH44sbfcU7YxTNuMgT70sxCdse6Q3T9RNL6HXPo4l5bPuIiW6JhLunUXzxc6oDNxWMEPEjmdKwPfyi0odVJNEjnjWVv_ddqvaiSgH1w)

  

![](https://lh3.googleusercontent.com/SEv9fnvEOrBBSTTMBMCHmm4_AZO8AFU9GXU8L-rv6hE4A3yGr_hDRJBbeASRMVBTha52wfAwc-shNh-ThY-yE6b3Lo4m1S9W9JCpFvyEtxTTu4AdyuRz36JJ45SEA38E-KcdeiVkSHm4QE7XaEh5uQ)

  
  

## Comandos mais comuns

  

[DICA] Utilizamos as palavras chaves do SQL em caixa alta e é fundamental o ponto e virgula

  
  

1.  O comando USE serve para definir a referência do banco de dados que será utilizado na query:
    

  

![](https://lh5.googleusercontent.com/un104p9vBGWyLFM48qcDXychwl_lyWP_Xp_Wd0b6YzH68L63SW3gFc2IOpeVCzgBo0NRHz2IAnHMpkZv52yhKvkxbvH3XIojW6V0jIuzhqJ3QdWjcWQgX5JsLSRJzzOqc8RmODEphM1VEHUfcn96hA)

  
  

1.1 Uma outra forma de fazer referência ao banco, sem ter que rodar o USE é no formato banco_de_dados.tabela:

  
  
  
  

-   Para retornar todas as tabelas inicializadas no seu server
    

SHOW TABLES:

  

![](https://lh4.googleusercontent.com/kC7YeEM9Doz_BkcnDpYWg9CoM5L1UA0-UPm27HbOhVZPo8ZPMA_xjQQBoZZW6Xfb-lTShJ5wr-Gc3K5YccaUKSgawLe4_jCMn0FROW9tQPMQBZ732xa0SMvdTlsN_2BusBqpOv8-Qv8kLC8uki0CFg)

  
  
  

-   Visualizar estrutura de uma tabela
    

DESCRIBE nome_da_tabela;

  

![](https://lh4.googleusercontent.com/ap_zhJMixSK5GXT6EV4avufIJV2X5r4gz5pcV_gIYr0C2Vjl5oMxwlsc6si7oJZA4iM9GDTV2rQILCkQwI6aOvtoroIkuswt1VllP231K70w_ZpdIDufztQBPWnTnHyxPdUX2y8B-YCxg2HVXjh_ow)

  
  

-   Criar um banco de dados
    

CREATE DATABASE nome_do_banco_de_dados;

  

![](https://lh5.googleusercontent.com/QplQWe_C1hXxIUZUn-VLypG6JUoKY40FGH10n5mY9IQvhtOE6p1OJTxxs5FgcS6GIzQmGrClxu2doGr3kJr3QQtJb3raLkbv2-vPyWuofFCgRq4-ulwR1YyZ6u4qCHVQyVIIqFkQwkbBPePLGqrzeg)
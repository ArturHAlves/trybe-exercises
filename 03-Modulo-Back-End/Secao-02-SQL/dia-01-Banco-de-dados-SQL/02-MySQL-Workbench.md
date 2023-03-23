# Instalando uma interface gráfica (MySQL Workbench)

  

Fazer instalação do MySQL Workbench, a interface gráfica mais utilizada para o MySQL

  
  

1.  Por exemplo, para fazer essa instalação no Ubuntu 22.04 LTS, basta ir até [este link](https://dev.mysql.com/downloads/workbench/) e selecionar a opção “Ubuntu Linux”.
    

  

Em seguida, selecionando a versão correspondente da distribuição, no caso, a 20.04 e, na lista a seguir, clicar em “Download”.

  

![](https://lh3.googleusercontent.com/rajwrMbjXk7VuNmu2sg_xWRldjuE8aJRV5AQhQJztfqVB-YAuTkczVxPQhLKxKiXKkz5XKysBxddc0itQHRsKSSSIs3kdd2mmZH87cbCEztWleo_lWzQ9CRE520n58IRCm9nOtMnv6R9oKUZcrG7zL8)

  
  
  

## Inicialização do aplicativo

  

![](https://lh5.googleusercontent.com/r6j08O3DEiyjkI7pAjg58nlXC6huJr3kgwMeExUmAqx_n1-XVIpuWLs3TgZz8cHqwL9FEVjne4dRHOwabdH7NWwdzfwVBWsBA5AsuL90lkf2ICXN7YS2LywhbRRjHLh15x4rpr7whCCoHxTywH2tQm8)

  

Em geral, o workbench identifica seu server instalado, retornando um “Local instance” na porta padrão 3306

  

![](https://lh3.googleusercontent.com/arA64GbKVe1ExHDtCcciQKaHnIcvdduwBtWHEOFr7ORq5rs62pY1av-KImcFqkGvFz0A-swaAty2uT9-h_Fm1GJQzuonNnCqbEEvxESEyNEF6AOExvBTbl8kUNGrCgbzK2tiYDjZXiy0B44Fz6_Y_gg)

  
  
  

# Constraints (restrições), chaves primárias e chaves estrangeiras

#   

Uma das grandes vantagens de armazenar seus dados em um banco de dados é possibilitar a criação de restrições ou regras (constraints).

  

-   Essas restrições limitam os tipos de dados de uma coluna em uma determinada tabela, o que fornece assertividade e confiabilidade em seu banco de dados.
    

  

OU SEJA, se você tentar executar alguma ação que viole as regras do constraint, a ação não será concluída.

  
  
  

[IMPORTANTE]

  

Como as constraints são aplicadas às colunas das tabelas, é possível assegurar que os dados inseridos nelas serão consistentes CONFORME AS REGRAS DEFINIDAS

  
  

### Alguns tipos de constraints

  

-   NOT NULL - Garante que aquele campo NÃO PODE CONTER VALORES NULOS, ou seja. se não houver um valor padrão (DEFAULT) definido, será sempre necessário passar um valor para esse campo durante a inserção ou alteração de dados.
    

  

-   UNIQUE - Garante que o valor inserido na coluna da tabela é único, isto é, não pode haver outro valor igual para esta coluna registrada nesta tabela.
    

  

-   PRIMARY KEY - Garante que o valor seja a chave primária da tabela, ou seja, que a coluna que possui essa constraint aplicada seja o identificador único da tabela. Ela também é, por definição NÃO NULA
    

  

-   FOREIGN KEY - Garante que o valor seja uma chave estrangeira da tabela, ou seja, faça referência a chave primária (valor em uma coluna com a constraint PRIMARY KEY) de outra tabela, permitindo um relacionamento entre tabelas.
    

  

-   DEFAULT - Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a constraint colocará o valor padrão passada por ela
    

  
  
  

EXEMPLO:

  

Durante a criação de uma tabela, ao se pensar em suas colunas, podemos avaliar quais constraints podemos aplicar aquela informação.

  

Por exemplo, imagine uma tabela que liste os sabores de uma sorveteria. Nessa tabela, temos três colunas: um código identificador, o nome do sabor do sorvete e o código identificador de quem fornece.

  

COMO PODEMOS ADICIONAR OS CONSTRAINTS

  
  

-   Código identificador (id) - Para o id do sorvete, precisamos que ele identifique e represente o sabor do sorvete da tabela, então podemos adicionar como constraint a PRIMARY KEY
    

  

-   Nome - Aqui, queremos que os valores sejam únicos, afinal, não temos a necessidade de cadastrar um novo sabor de sorvete que já conste na tabela.
    

  

Além disso, não queremos que, ao cadastrar, o valor não seja nulo. Então, podemos adicionar o NOT NULL and UNIQUE

  

-   Código identificador de quem fornece (id) - Suponha que já possuímos uma tabela onde listamos todas as empresas fornecedoras, e que nessa tabela, os valores estão sendo representados por uma primary Key
    

  

Então, podemos atribuir como constraint a FOREIGN KEY

  
  
  
  
  

# O que é uma entidade?

  

Quando se fala de entidades de um banco de dados, estamos falando de uma tabela que representa algum conceito do mundo real.

  

Por exemplo (pessoas, eventos, acontecimentos)

e suas propriedades: (altura, horário do evento, nome do acontecimento)

  

-   A entidade pessoa , pode ter as propriedades de altura, peso e idade.
    

-   Uma entidade festa pode possuir propriedades horário do evento, público-alvo
    

-   Uma entidade vendas, pode possuir as propriedades valor da venda, dia da venda, produto vendido etc..
    

  
  

Entidade: Pessoa Propriedades: Altura, peso, idade

  
  

A entidade é nossa tabela dentro de um banco de dados e as propriedades fazem parte dessa tabela.
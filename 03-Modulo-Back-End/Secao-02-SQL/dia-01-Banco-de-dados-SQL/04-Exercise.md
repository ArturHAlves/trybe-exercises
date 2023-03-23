Exercício


Exercício 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.

Basta clicar com botão direito na tabela e clicar em “select rows - limit 200” O limite vai depender da configuração do workbench.








Exercício 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.

Na barra lateral esquerda, clicar em tables com o botão direito e em seguida clicar em Create Table




Exercício 3: Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela: filme
Colunas:
filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
descricao - não permite nulos, tipo texto (varchar(100));
ano_lancamento - não permite nulos, tipo int;
nota - permite nulos, tipo int;


Após clicar em Create Table:
preencha o nome da tabela;
adicione os campos solicitados com suas devidas restrições;
clique em Apply




Exercício 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

Ela faz referência à tabela country.




Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?


Reposta - N:1 
Muitas cidades para um pais 


Exercício 6: Qual tipo de relacionamento a tabela country faz com a tabela city?

1:N

Um pais tem muitas cidades 



Exercício 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

store -> staff
country -> city
film -> language




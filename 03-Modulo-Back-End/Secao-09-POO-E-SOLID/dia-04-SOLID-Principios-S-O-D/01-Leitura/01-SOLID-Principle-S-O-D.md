# SOLID

  

Você sabe quando um código é considerado bonito? Para isso, ele precisa ser simples e funcional, ou seja, faz o que precisa e pode-se entender tudo facilmente.

  

A arquitetura SOLID existe para que as partes do seu código sejam o máximo possível independentes umas das outras, para facilitar sua evolução no futuro.

  
  
  

# Os princípios SOLID

  

Nas definições originais, SOLID significa o seguinte:

  

-   Single responsibility principle (Princípio da responsabilidade única): uma entidade (classe, método, função, etc) deve ter apenas uma única responsabilidade;
    
-   Open/Closed principle (Princípio aberto/fechado): entidades de software devem ser abertas para extensão, mas fechadas para modificação;
    
-   Liskov substitution principle (Princípio de substituição de Liskov): objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa; (Ah, não se assuste com esse nome, ele faz apenas uma referência à autora do paper que o descreveu pela primeira vez em 1994, Barbara Liskov)
    
-   Interface segregation principle (Princípio da segregação da interface): interfaces específicas são melhores do que uma única interface para todos os propósitos;
    
-   Dependency inversion principle (Princípio da inversão da dependência): entidades de alto nível não devem depender de entidades de baixo nível. Ambos devem depender de abstrações.
    

  

  

⚠️Aviso: Uma palavra muito importante e que deve ser ressaltada é “Princípio”, ou seja, nada do que está aqui deve ser considerado obrigatório ou proibido, mas sim como recomendado ou não recomendado. Existem situações em que pode fazer sentido ignorar um desses princípios. Por isso, não seja radical! Sempre reflita sobre o porquê de estar usando/fazendo algo.

  

  

  

![](https://lh6.googleusercontent.com/r1pWgOQjh6KFJbT3PSr3xQMWKb-wuJCCcMZuhT7zdErA9ZTzmdoZEQSaVlAI6WwO63JqhFaqdPQ97nCS1NoNeClpJlhFoN8307_TZQpL-QVY9qlJK1Zg1N6gtrpYn9D46zl9O6ZuBoDDRnk8oOnqgkc)

  

![](https://lh4.googleusercontent.com/_EaOJ2qTGmmZ5S155SxpyqqL9QhhrfE-ABNPrphePs5NsYXuj_kGD_PR8LVKYL31__SbNxwUaTFyvV-OKc0WZgexit_YcuFayhmT0KVDI6sCwgU9tnJNSbraVbA1lrtU9Y_TH2-jIsK2-2j-gmobtAA)

  

  

  

# Single Responsibility Principle

  

Há uma regra do ESLint (provida pelo plugin [sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)) que assombra várias pessoas desenvolvedoras em algum momento: a regra de [Complexidade Cognitiva](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md)  (sonarjs/cognitive-complexity).

  

Em poucas palavras, essa regra, como outras, por exemplo de ([Complexidade Ciclomática](https://eslint.org/docs/rules/complexity), [Número máximo de linhas por função](https://eslint.org/docs/rules/max-lines-per-function), [Número máximo de caracteres por linha](https://eslint.org/docs/rules/max-len)), garante que nenhuma de suas funções é complicada demais.

  

  

  

Uma forma de deixar não deixar confuso o seu código: Usando o S - Single Responsibility Principle (Princípio de responsabilidade única)

  

  

  

  

  

![](https://lh4.googleusercontent.com/3FMIZkubZmCUL5c2A0ZEsRxtxNi7knzZU6vYcTh-z532l8GzjP-akT1aOxTQMH5S8SFDqz5EltzsGMC3CJBLOND5aMSovqIEH4XqOn4PRYGOuO0SsxyoJXHUiCwvlEO_MwkrlDU0s8JZqiRkYWxspeU)

  

#### Exemplo:

São 3 classes diferentes, com apenas um ator. Separando as responsabilidades

![](https://lh5.googleusercontent.com/1a-98DNYjO8A6SbWR4SmzSzk_SdoHvRRhn6RDh9CPKJ1q2whcIvDnvhWaJTHgh8SzHmMIWNrQfde95Unn7Da_bjgXGwNEs3p3DWtQAs9GY_Hap-dcIe6qPCiMhygBAhlrvOJV76dVfxMOKI-l8bVCmk)

  

O princípio da responsabilidade única diz que Um módulo deve ser responsável por um, e apenas um, atore

  

  

  

  

COMO SERIA EM UM CÓDIGO TYPESCRIPT

![](https://lh5.googleusercontent.com/8wmUV_ZIFIP4mCZl_qNwlffjEem2vvTocH1ZX9qBI0UD5f25ySeCYnUNEW46qGK70NylnVpPZO51CcuuiseDmDMAclDucK2g7qOPP3_pww2VF5NUU6YGxALTiMqxUbGvfDfAXZfPQqBMLp-i-8PrNqU)

  

  

#### Exemplo de responsabilidade única na prática

  

Classe Book

  

![](https://lh5.googleusercontent.com/aQVCqqHh9BsqxpxipoLCT46oRaEuXzN1IIwNhlTspGLk7jz_Un2ZZthhvrYgdppZEAVZP4pwVJazGxwGsYXUaBhF-DjiEiFz9-o0RHKw6lr2jG2-geoiOr5iJYiv5EumoTpFAkU2ooT_FuOPy6TRlpY)

  

Observe que o save não deveria estar ali, pois não faz sentido a Classe livro ser responsável pelo salvamento de Livro

  

![](https://lh5.googleusercontent.com/Ys8Ayv-5ETi9E7_vjfsy85kgu8KZ7WF9oYUaURoB3jbGLmOVXW_Ok1bKYmmgmasipbI57zElZKuCvlPfE7pBAp_psI0NUcQKLvWgxs3elKXh25obydSL8mgyJ3ADFRBOkUbnQoCTNepFZN9I2srJ76M)

  

FORMA CORRETA

  

-   Retirar o Save da Classe Book
    

![](https://lh4.googleusercontent.com/cFGxFkk5ZrlAQSUc3Z86VjE8ojZPhXEZQ0jls80eTfzaRjXxxI0wuo9ClM5trczcd5DcefCiqVO88f_rSmzKDu9UFGY8coeS167-yP2qVZCXe6TMmT2W7q8e64anEGVg-k5CdJBeBWTZNnwu25_-lgw)

  

-   Criar uma interface de Database
    

![](https://lh4.googleusercontent.com/x4ccSGyZVGba7wqy8dTQZ6sh1V8bim2-LyI3XXGfhj7WtdwbIFpTKxha_mVlVJGk6kcoAx1_LbQEchBhoesLMJJTjSITngm_uh2DNacbSGVk5bWaWUfGl-DvW7EGI8Rai43J2LiaNVB9iu2jBWmG2co)

  

-   Criar uma classe que será responsável por manter os livros salvos
    

![](https://lh5.googleusercontent.com/6yzZaACISGSlCGeXjFKFjnKbxAMku4792GlxPQI7DYhts7KsdBvxGZfqHVy4nkLJ2xlO62q2PBzGXJfny9pXnAp0nyZA4u67zxMuFDwn9kPnwpNp66untGvguyooMtdGLRmB067uwu488-jCIuTfKIU)

  

-   Vai criar o livro com (Autor e Título) e adicionando ao repositório de livros
    

![](https://lh5.googleusercontent.com/_oZshw4cpwwHunmlptnSYxj8C8ou3IBSuXzsknjSVOkci3TqeRcyNWMsIoibv6SCnFXLQwbO9Kw2spgqfbnVFEpJUeNHZd-941j8RpH6N4NZyeJbK6TQ76Zg_SNJ76VAmnmAM3JSY2cMxNJygsMLiIk)

  

## SRP: iniciando o exemplo

  

  

#### SETUP:

  

-   Em uma nova pasta, inicie uma aplicação utilizando o comando npm init -y;
    
-   Configure os scripts de teste e linter no arquivo package.json (se a tag scripts já existir, basta substituir os valores pelos descritos abaixo):
    

  

![](https://lh6.googleusercontent.com/_HSPAf0_TGVO_wFsE75_rOa9s40eh43x8r8wjdOLeJMgyb0RspP9n1y8aa1xJDIVYR6s1Pp7inZQO9wkd6mzIN4_Q5YixiQ8Ovq2WSz3W0plNOnISBsgoKkSg51Qv210BHc_sFsMdnAfKtBjANwoE90)

  

-   Coloque as dependências que vamos utilizar em desenvolvimento no arquivo package.json:
    

  

![](https://lh4.googleusercontent.com/UhWYZ7ar5mEeqeV-uL0Im3Ms8S8KPagixAJEGazSvNjbF-Ge31M7n5afCLNJrS2V8f0DiTsM4QJJ09bHN08mR38mwOUuNIKoI2OLuRzCyD3bUvIXu4WKjNKPH3B56lc6MBBmu4Db9kecbXOsP88nc0Y)

  

  

-   Instale as dependências com o comando npm i
    
-   Crie o arquivo de configuração do TypeScript com o comando npx tsc --init
    
-   Adicione um arquivo .eslintrc.json na raiz do projeto, com o seguinte conteúdo:
    

  

![](https://lh4.googleusercontent.com/8u_pJvk9xB7OU6-Bbnx4XXy0ylSKlvbGZV1xk6i2c5DGgZQG5tjjuIiUACYh__r90yNJAMVJ7qjEL-5FJQ9saJiZZQJzKIcX3jqG0xB9AEWoZaNX69kdUn1Iw-FQynr6JH0l7LxU22f6iySlOpcO3BE)

  

-   Crie duas pastas, tests e src, para nossos exemplos. Crie um arquivo index.ts na pasta src;
    

  

  

  

## SRP: o que devemos evitar

  

-   Suponha que você deve construir uma aplicação para gerenciar a situação de pessoas estudantes em uma escola. A sua primeira tarefa é criar uma função que, ao ser chamada, determina a aprovação ou não de uma pessoa estudante e atualiza seu status no banco de dados como Aprovada ou Reprovada. Além disso, as notas marcadas de 0% a 100% (0.0 a 1.0) devem ser convertidas para os conceitos de A a F.
    

![](https://lh4.googleusercontent.com/wrUZdkBD1UPgn5jsdztZGlNvRAkHMmsn1zy7AjkxgAcUD0A6Zg-Ut1jtcFbZLlzeRGZD335f0zVXUxl_uq4GxztEcI0Ha6sPfzTUKvdrcH4sl5ZTqgFipBgyRv_s8TWixmx1iupynvS5ZwfPIJQa-rY)

  
![](https://lh5.googleusercontent.com/LQCekcUqULXhHtliqmxMvx3oiUoyszaFIqUtYsCSlGGs1fLL22yj7e25vRBtb_3F2CnTPdZwLtT9RokyqvUSruG3vmW2QeM3APiABild-orbw0fREFZWWFKvEfOVMrrwo_kPrO4IvZ6D6j4JRyklwQg)

  

  

  

  

  

  

  

  

  

  

  

  

  

  

Observe: nossas variáveis e funções têm nomes bons, o código faz o que se pede pois usa Higher Order Functions e outros recursos do Typescript, mas ele está bem difícil de entender

  

Não por acaso, no Back-end, esse código dispara vários erros no ESLint, além de alertar a alta complexidade cognitiva!

  

  

## SRP: vamos deixar nosso código “menos pior”

  

➡️ O primeiro passo para acionar o princípio é ler atentamente o que foi pedido. No nosso caso, foi isso: “A sua primeira tarefa é criar uma função que, ao ser chamada, determina a aprovação ou não de uma pessoa estudante e atualiza seu status no banco de dados como Aprovada ou Reprovada. Além disso, as notas marcadas de 0% a 100% (0.0 a 1.0) devem ser convertidas para os conceitos de A a F“.

  

Observe com atenção os termos destacados: a especificação pede que nosso código determine a aprovação, atualize seu status e converta as notas para conceitos de A a F. Fizemos tudo o que foi pedido, mas repare que a especificação descreve o que deve ser feito com três verbos: determinar, atualizar e converter. Daí já temos um code smell, uma pista. Devemos fazer três coisas diferentes!

  

  
![](https://lh6.googleusercontent.com/t1qPJg4FU2X4j2nziI8JalqKGqOdWdbmC80Tij-kP86LcNazAisrPxTq3HsUcUVOBG-XVpSqGEnz1bUTJI5ay2YflP4eYnOTv46vjA_XIUw8zsGDx_ZWp8gH8J7EIftiE9uWK4GfmXgeZttIzwejFgk)

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

ERRO DE COMPLEXIDADE

  

![](https://lh3.googleusercontent.com/69JyCIxlCYltMVOPmTiBtlM41-A6vzITyINC-w6RM-QxZQap5C9mTvz8vParxyA5Z0tG0In1qpX3deBb6iLvPx5-0aQSHU1rrbLhWfJUV05VfNWz4icLTt01EG0srL_NlhKLRqCdDHoDzT923dGx7y8)

  

Tudo que fizemos aqui foi jogar cada parte da lógica para uma função diferente.

  

Agora, não precisamos ler todo o código para saber exatamente o que a função faz! Além disso, nosso código está mais testável, podemos escrever testes unitários para cada função muito mais facilmente.

  

  

Podemos, por exemplo, testar unitariamente se a função approvedStudents está se comportando conforme esperado, para isso vamos criar o arquivo ./tests/approvedStudents.spec.ts com o seguinte código:

  

  

  

  

  

![](https://lh3.googleusercontent.com/KdkUUxA9iLmCKiQn4wfNRZ_xnzHUikYbLXXqhhkBEx4nfl65XQbaphNZRTl9TxeoIyGsN8-bGJZplzHt-VKKHSDNJJ_1p-XbyNwG_CS-gZQTKDhoSomkuuxJKW8yCA7sc3u9Fz84YuFQo0laWuxnUOM)

  

Pronto! Deixamos o nosso código muito melhor de ser lido e testado, o que é ótimo! Mas, ainda não acabou, pois ainda assim o ESLint levanta o alerta para a complexidade cognitiva. Agora, ele acusa a função percentageGradesIntoLetters de ser complexa demais. Então vamos dividi-la em partes ainda menores!

  

  

## SRP: agora sim um bom exemplo de uso

  

Para dividir a função percentageGradesIntoLetters, descreva textualmente o que a função faz e observe os verbos. Por exemplo: “A função itera sobre cada pessoa estudante e a cada iteração, itera sobre todas as disciplinas delas.  Para cada disciplina ela faz a conversão de porcentagem para letra e ao final monta e retorna o objeto com o nome da pessoa estudante e com suas disciplinas”.

  

![](https://lh5.googleusercontent.com/kXJCjW9OIqWh3Lnf8YgN6npVQUrud3FoJk8u61tLeBukWJHMMwYEI-eCtvi_5B2th0c0Ukg15FnvSgRhHlG3HPiGn79pJ254FnnNhCjnM-qYOJryWiKpbulLRvRj2tGeCQI3U82iSfmjfkcClgeZT3M)

![](https://lh5.googleusercontent.com/EKfUjutCupxJPzaQuRj32t9n6TJUCPV_uwZsBzxyUWEzia3R9fSMhAOzrmqpJpTs8KzCQcyxnX2LW8Joz2ZUCLOZI1f5p5xo5EmLpnxYNlj1wgVQvBrcdl-RLyMJWGYxBV7c1CqTg8UnoSTaHh8Tsds)

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

TESTES

![](https://lh6.googleusercontent.com/gB4a9dkwcFiOsUIJWRgMu_Jl5fgJ1XOid3r77K4MnF6v52Vu6b9fntWgrtagdqQZ9l5BR3qcsYlU5_mYGSue1l8sgmfB7pBmI27V6YUykFkaFoWQI09ecCxAF4-8hYfVjSiXulbMABNlIpnadBRFE34)

  

## SRP: conclusão

  

A mesma ideia utilizada aqui para as funções se aplica às classes: cada classe deve possuir somente uma finalidade. Isso também se aplica, em certo nível, à organização dos arquivos que contém nosso código.

  

  

Use o princípio para que ele te ajude a melhorar seu código, mas não se torne refém dele. Pense que um código com várias funções pequenas demais também fica confuso e dispara o alerta de complexidade cognitiva.

  

  

  

  

  

  

  

# Open/Closed Principle (OCP)

  

  

O princípio aberto/fechado diz que:

  

Você deve ser capaz de estender um comportamento de uma entidade sem modificar seus comportamentos já existentes.

  

  

  

![](https://lh5.googleusercontent.com/XwxiG6zduWK4G7E-IO7SKR4qYR-Ik-OqwaN1SICGDiIYmlSSjtwPYhOpoEQgs0ikzgi-J-E1_HqApSwgVfz7BGlSEHLmWUjXS_txFTUyYobbqCCXh8SfWYqHD8VjUiDOF5-wzP1bkfyBFrCeZrTyHlg)

  

Um exemplo de OCP - É o VS Code, onde não precisamos mudar nada do código fonte para fazer o uso de implementações (extensões)

  

EXCEÇÃO - Quando tem um bug na entidade, ela deve ser aberta e modificada para consertar.

  

  

  

  

  

  

  

  

  

EXEMPLO DE CÓDIGO RUIM

![](https://lh4.googleusercontent.com/JkJteWz9Kg2YoyneCKE1NagufXH0mpT12z-l3lVit-SzHQi3GTZAh07Gr0DQ8eO2_HsVn6huUw2DHG-4cJbZj9Mjg9SkYN9GgroZTwrPdZZy6IDyWkd-i_SJzhahlsQA5mqC5NFCryA7VDQKi2M-_kw)

-   Observe que para colocar um novo desconto, precisaria modificar o case e acrescentar mais um. O que tem grandes chances de gerar um bug.
    

  

  

EXEMPLO DE CÓDIGO BOM

![](https://lh5.googleusercontent.com/-qaxXNhquhZK0eJBCU9KCWDXqCXbPafxQtGUL_6Up3u_BfoPbfvx--l3Jhh-voFiDV5se6dB9ecTs-DY6_RaFN-YbJr5CsHMFfJrLVl9_HU0E_vGksX8hFwyxCSBPX-nizr3JvAreKoccTz7YBXl0Qg)

-   Observe que criaria um nova classe com implementação da interface e adicionaria. Sendo assim, seria fechada para modificação da classe Order, mas aberta para implementação
    

## OCP: o que devemos evitar

  

Imagine para o nosso exemplo anterior o seguinte cenário: somos uma empresa que administra notas de escolas. Cada escola tem seu corte de aprovação (no nosso caso, 0.7). Ótimo, fizemos nosso produto, ele funcionou e agora uma segunda escola quer ser nossa cliente! Mas o corte de aprovação dela é 0.8. Precisamos que nosso sistema contemple essa nova realidade. Aí alteramos as funções approvedStudents e a deixamos assim:

  

![](https://lh6.googleusercontent.com/cHOtbqSY-i4QqITmEGcpUf6hY594MmBDODVNLXWCyn24YdDfwVCQbayXmrWyr16Wf0h7jifZZIEX4T-5wd0RFlNN1ZmkXE5OExpEQ6lgj_qre6iyFD0olU590RyAA9JxqqZOAdAo12hCMgbQMKWR8qE)

  

Essa solução funciona, mas não está boa! Nós tivemos que mudar nossa função para acrescentar o novo comportamento a ela! O que acontecerá quando surgir uma terceira escola? Talvez uma quarta, quinta, etc? 🤔

  

Pois bem, conforme estabelecemos no início, o que o princípio aberto/fechado nos diz é que devemos ser capazes de estender um comportamento de uma função sem modificar seus comportamentos já existentes.

  

Beleza, mas o que isso significa? Significa que você não deve precisar alterar trechos de código existentes para acrescentar um novo comportamento. Veja bem: quando um código funciona e está em produção numa aplicação enorme, queremos evitar mudar aquilo que já existe e funciona.

  

  

  

  

  

  

## OCP: um bom exemplo de uso

  

No nosso caso, respeitar o OCP é ser capaz de obter o corte de aprovação e os nomes dos conceitos de quaisquer escolas sem alterar a lógica da nossa aplicação! Isso requer que refatoremos o nosso código para deixá-lo aberto para extensões, mantendo-o fechado para modificações.

  

-   Para isso, vamos criar um novo tipo para uma escola e remodelar nossa função approvedStudents:
    

  

  

  

![](https://lh3.googleusercontent.com/KuwkGoXA3uju-jGO2GAPAZU0i1jo-sjxwktiVTd4XD9PEdbKTHDYE4ikBGwWHvMrtzAmGXzWyfuNkeBq3q86-ZMs2xiAeY1r1_OkKsbCdu64iex5ngvPKyaKbUo0UgaYND5aQLhE8TECi5EQuiwHjkM)

![](https://lh4.googleusercontent.com/g8rMylAhx_zVHzz1ctUqLSdVrdIebZQvsS-iiFzUqyDSjpcOc8uPTjWogI8Tz03_WqryXe_moS6TzNayjwXaXcdaQuDzgflA0mPoJ2HQBLQzT_3Sfzv4asK2N26lzLlykhqAw79c__9RqcKro8bpN8s)

  

Observe que, agora, a nossa função approvedStudents está totalmente genérica. Quando quisermos acrescentar mais uma escola, duas ou até cem, basta adicionar os dados dela à nossa “base”.

  

Com isso, conseguiremos estender o nosso comportamento sem modificar a função, pois agora ela respeita o Open/Closed!

  

  

  

  

#### TESTES

  

-   Nossos testes também ficarão muito mais legíveis e genéricos quanto ao critério de aprovação:
    

  

  

![](https://lh5.googleusercontent.com/Ubc_jnM8OPemrv_sQYLAHFHFGlaYfHjLI-ncr_3q9qyiF7nsDT8ANU0N-WlTlSksy21T1WsYIUPVbthGONTmsX6dQfUMdObB4yuumNdbfg--EO8bxiPSWeMR7DFYgoSCQnVJQppd6YbOq9C3E5cTEAA)

  

  

  

  

  

TESTES 2 -

  

  

![](https://lh6.googleusercontent.com/AzXESPecEBWHdh1a4tfLVCZaSYeW3fJulFZ4eafAW-r-QOmRXJHtdofM872057DmnpWNp_wTHQDvGa67SVurpPpWumUGQB2B8dnFlrYN19hjDk3OxeFnkfas7lLQRXlVa24MH6AWabTZISRCpEm4X2A)![](https://lh4.googleusercontent.com/W3l32XIay6CC7-ffRh2EdUX66R6kRS3v6-LfDzF_RFWJcqC8VMwTjlT_BWFt8YErRDznWlEl8P8pm37TRrzTsV0K2RXsQ03x2RZlJzBmaY3cs_kDo43GSLT4ETa8tluQG89Dwc6rwrHpKCUauUsTTZs)

  

  

# Dependency Inversion Principle

  

Vimos que o Princípio de Inversão de Dependência diz o seguinte:

  

Entidades de alto nível não devem depender de entidades de baixo nível. Ambos devem depender de abstrações.

  

Para entender melhor esse princípio, vamos começar compreendendo o que é uma dependência e em seguida um padrão de projeto chamado Injeção de Dependência.

  

  

![](https://lh3.googleusercontent.com/thwv2k4Drj5NKefYXlfg7qot56MmHu7nAy2M1E3gNpTCdEDjRD1N8DkXrd-sSzje8MgBTpAl2VpUx7RLrgYhLy6mb4pKETlIKhwRcO3LNITn3cmmIh0q7w4vyVRLgpN747LEDbD3m9bW3xhL34oXBOY)

  

  

1.  Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações
    

  

2.  Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
    

  

  

  

  

![](https://lh5.googleusercontent.com/7kaLOai3o3vWLSm0dr4pkvmQIxNs9a-aKsejrn62VmUuhQ5fRADcf_8MXt198RO_SMr6D4Og6_lKXHcuiQqyl6vBJvjJ7JnwFydTBkjvV9VOmJ4oZ1HAeXIY-dBSp-a1E3x_Z3twoFdjaHDho5UAMLI)

  

![](https://lh3.googleusercontent.com/NyI485SViywa5OSsz6YEAuIaNIrdb_4X4f-cgr3zirkBl0xHMTAXTTv6JgblrCGyzUMQ8ntJjnz428EYr4xrI-4nPGRzyhUY_936DoZoK7ATeZbrZzNHSGBcOk5LoqGXbjhj5xUjl_jZdWjPbTJVltI)

  

  

## Dependência

  

A dependência ocorre quando uma entidade de software (geralmente uma classe ou função) utiliza outra entidade em seu interior. Por exemplo, se temos uma pessoa que toca uma flauta, teremos uma classe Musician a qual depende de uma classe Flute. Isto acontece pois dentro de Musician precisaremos de um objeto da classe Flute para ser tocado.

  

  

## Injeção de Dependência

  

Pensando no exemplo de Musician e Flute, é natural que pensemos em instanciar uma nova Flute dentro de Musician

  

Se uma função ou classe de alto nível (vamos chamar de H) utiliza outra função ou classe de mais baixo nível (vamos chamar de L) em seu interior, L deve ser passada para H por quem chama/usa H

  

-   Um objeto da classe Flute deve ser passado no construtor da classe Musician da seguinte forma:
    

  

![](https://lh6.googleusercontent.com/w24YTbP9QYSI1ANpETsv6PLmtmd754PE_AJECqzQVyYgodQwPMJh9nwFKRbGnEOUOaX3A-5owAyaNrj23iMrgt_kHDoUN04Q3QzWRKIGcOx7O3n6TxvFT4LaEX4Tj_AMriIJU4pe6j9b1goPC-TFe5E)

  

![](https://lh5.googleusercontent.com/I7SlbLTzWyytH1idwmNYg_pcpj6gTRcdSqyGwFpeOZ0nRAdZBkXuTl2OhuY7okVKAlM7beRGRjtpSvV6EtS17sPsCd7UY-MBHHPJ_fX847Jy_yv88Hqkhmy_ScGapUkQbgOc2w087ETW8wzPUDvblSY)

-   Com isso, podemos passar uma flauta “fake”, mockada, para Musician, e assim testar unitariamente o método Musician.play(). Se quisermos, podemos deixar um valor padrão, fazendo com que seja possível não passar uma flauta criada externamente e ainda assim o código funcione:
    

  

![](https://lh3.googleusercontent.com/_p9QywkLwV1rCKU3ZJnX9K9ieO_VyQ6PO3OjahHr7oVRWxYR6V42JMDxZRgflzKNIg3RnslF3d1a0BdqPBRpCbvNLJVEyOIXonLJp8YEISEB7gjtSGtxcClQq85Q5d-Ib0kS3OZDhM2WFldkziE39Aw)

  

## Inversão de Dependência

  

Entidades de alto nível não devem depender de entidades de baixo nível. Ambos devem depender de abstrações.

  

E que

  

Se uma função ou classe de alto nível (vamos chamar de H) utiliza outra função ou classe de mais baixo nível (vamos chamar de L) em seu interior, L deve ser passada para H por quem chama/usa H, e não estar explicitamente instanciada dentro de H.

  

  

Complementando com a Inversão de Dependência:  H não deve esperar especificamente L, mas sim uma abstração qualquer (vamos chamar de A), que geralmente é uma interface, que L deve respeitar. Isso faz com que, caso queiramos passar algo diferente de L para H (vamos chamar de L2), desde que L2 também implemente A, não haverá problemas.

#### Exemplo prático

  

Imagine que uma pessoa precisa tocar não só flauta, mas também bateria e violão, bem como alguns outros instrumentos que podem ser criados no futuro.

![](https://lh3.googleusercontent.com/I4xKHmY494eBJEFZLVFlM8DGUHn5wqlObClE0ofrkNoWzT6t_Od0YaghTbCoSK2TNHC-nKedb5eH_ekEeNlxXVGA2Mce2ztkLj9dIC7SO4zKiUD7jK1Xj0nCni1teZnNt8dsopaje-GgtdRVcfInNjk)

![](https://lh3.googleusercontent.com/PmWmhRyLYaN_uhY-8ICURy1Z0gPeD6-r3oMdXzcmMwWNW-m2QktDS5NWWfztsCOkJQCCfC2ys_w35PRdVkLFzH78ytUzamoA_fTxtK_n6Xu7VUA4p9mAga_2PprRC0oZqIWJamMOC8c6OS_bv9wZfY8)
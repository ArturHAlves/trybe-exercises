Herança e composição facilitam bastante a reutilização em diversas ocasiões

  
  

# Problematização

  

Você precisa, de forma eficiente, criar entidades que representem pessoas físicas e pessoas jurídicas, compartilhando alguns elementos em comum, tais como nome e endereço, mas com elementos específicos de cada uma delas, como CPF e CNPJ.

  

Além disso, você precisa criar uma interface para contratos, que devem possuir cláusulas e devem poder ser assinados por pessoas diversas.

  
  

# Relembrando

  

-   Classe representa algo genérico, uma estrutura.
    
-   Objeto é um elemento gerado nos moldes de uma classe.
    
-   Atributo é uma variável no contexto de uma classe.
    
-   Método é uma função no contexto de uma classe.
    
-   Abstração é a não exibição do funcionamento interno da classe, de forma a simplificar a sua utilização.
    
-   Encapsulamento é a disponibilização apenas dos atributos e métodos que são necessários para o bom uso da classe.
    

  
  

Hoje, aprenderemos herança que é a capacidade de especializar classes, de forma a atender objetivos mais específicos, e composição que é o uso de outras classes, delegando a elas atribuições específicas delas.

  
  
  

## Analogia

  

O pilar herança permite que classes herdeiras de outras sejam criadas, de forma a herdar também seus métodos e atributos. Pense na classe Pessoa, com os atributos nome e altura e com o método sonhar. A partir dessa classe Pessoa, é possível criar uma classe herdeira dela, chamada PessoaCantora, que por herdar de Pessoa, terá automaticamente os atributos nome e altura e o método sonhar, mas poderá ter um método somente dela: cantar.

  

# Herança

  
  

### [IMPORTANTE]

Antes de tudo, é importante salientar que herança é uma característica da classe e não do objeto. Ou seja, criamos uma classe que herda de outra e não um objeto que herda de outro.

  
  

A herança permite que classes mais específicas sejam criadas a partir de classes mais genéricas. Com isso podemos criar uma classe com o comportamento base, e estender os comportamentos de uma classe existente sem precisar modificá-la.

  

A classe base é denominada classe mãe ou superclasse, e a classe que estende dela é denominada classe filha ou subclasse.

  

Algo muito interessante é que, em todo lugar onde um objeto da superclasse é esperado, um objeto da subclasse pode ser passado, pois ele apresenta todos os atributos e métodos de um objeto da superclasse.

  
  
  
![](https://lh3.googleusercontent.com/K_8OXHNkfuQDARWa2OoX2RJH-cMLUcN-dUA9CwWA1L2T9TPa05RA8wbe8xOdKwe9wWbBbk3IxLROS9DENvo7mGardbiJPsh8_8AP0MwEMvYP-biZzRpz8R_hkEVQEj0z1S760YXokq-Bz4lOcmuBTR4)

  

  

Note que o metodoA da classe Mae é acessível tanto na classe Filha quanto na classe Neta.

  

Isso ocorre, pois a classe Neta herda o metodoA da classe Filha que por sua vez, herda o metodoA da classe Mae;

  
  
  
  
  
  
  
  
  
  
  

# Sintaxe geral

  

Vamos começar criando uma classe Animal e uma classe Mamífero, que herda de animal

![](https://lh4.googleusercontent.com/BWOXsQB0Uu_Hyqj2iihuiYH9SqXJtHhXA63LM0SNBsDQpaU1bqgCj5qrINsy_3SeePdbNXkFV2oPX93vkLn6ZaK7ZNQX49CMuODT_XHPn_As7A6mihq6BhwlHoIk5PrqJ-HD6DTYHnFOYuHl4Gzed5s)

![](https://lh4.googleusercontent.com/idhbbwVtVP_MO8TGy0YPxtDIK7XmlybSDQ-GTt5CeG7ERWjTmc-9eKidr_KkXEHQYpVSOXRn9IksDLP-aKp-E7Ybbry2oCNO9YfXWGdkLGHsM34kdZyZRE3XxmN6YYUaQu13zSjsVf3G_d7pYnOo95s)

A sintaxe para criar uma classe que herda outra é bem simples, basta utilizar a palavra reservada extends.

  

Observe que a função main espera receber um parâmetro do tipo Animal. Porém, o objeto passado para a função é o objeto tiger, que é do tipo Mammal. Isso ocorre pois todo Mammal é também um Animal, então qualquer parâmetro do tipo Animal pode receber um objeto de classes filhas. Essa é a grande vantagem do polimorfismo por subtipagem (ou herança).

  
  

#### SubClasse Ave

Nada nos impede de criar uma nova classe Ave (Bird) que também herda de Animal e utilizá-la de forma similar, mas com suas especificidades (neste caso o método fly, voar):

  

![](https://lh6.googleusercontent.com/Ml_IE5rAtnf2rOp8bj68coCSOOJxh09xxtvDYYcKpgFEbEmMAwh6tptWqMGWdqBWoaHyQ3s_KQXFgNpJ7zI6LD3JdLyE3SZwsReAhLqv1JTmIW7y_DvMtfAKrSyEZHCd4TDOpvhLj2Vf3hs53QKU7Yw)

  
  
  
  
  

## Atributos protegidos

  

Observe que temos, na classe Animal, um atributo privado birthDate (data de nascimento). Você não pode acessar ou alterar este atributo fora da classe Animal.

  

![](https://lh6.googleusercontent.com/kJXa4MXZOynMzmsj-d-DOYvdhLZygzSWBvn6L44kdGt4ryV5pIbmvGlgtiJ2be69DXZZggQKsI1-uTfns3LcLqgskGQ0kVFcpoDxbf9EvW6GpJ8ASie1Xtk676PPbB-Qo-5IBgV0QFRLLLO5JJf_uPY)

  

##### protected

  

Entretanto, às vezes precisamos manter alguns atributos e métodos privados do mundo externo, mas possíveis de serem modificados dentro de subclasses. É aí que entra o protected.

  

![](https://lh4.googleusercontent.com/oqeeV4T7Uz1IrgqOX7koN15woHN_VnvsDVM1vBl4EJ_MM6L2idkeShz8EL9ytZhjTeBiSxQ7HFlm6LVubm_3JPlZzj9EUH_ycGZYIN3c6_rZ39DCAyyuhMmR2kLLXGLHRXywYdcM_bu04NttS7cB80M)

  
  

## Super

  

Sempre que você, na subclasse, queira referenciar a superclasse, poderá utilizar a palavra reservada super

![](https://lh3.googleusercontent.com/gKmcmDucsworJDFF-Se27oEeRtT99XTKpdqF_1FiwLYT-uk_6CCYeQGe34MdXvOY5VRBD65RKD8RzaeGEgDW-f1wUtqoEwBiTHLTBcdUbCNZiCN4R5VieepVa7B54mk1xxCIyw89YbupBb8ZX-G0aLw)

  

Em TypeScript, o método construtor de uma subclasse deve ser o mesmo da superclasse (os exemplos anteriores funcionaram pois não tinham o construtor), ou deve chamar o da superclasse.

  

![](https://lh3.googleusercontent.com/iysoc2LEnWmM5BinxY8JmmuHILyxQwhNDtRaSdpTwUbcP6mw0hfVJvPYvZhr9vJVN5WSpRIXzpWzirRsTYqqOfHXa3HsOARe1KIvBgE71zWewib9sEt9oiz0iMEqdAaqG4_d4E7ClwtDsnFxgNbey4k)

  

O super é basicamente uma referência à superclasse. Ao ser invocado como uma função, está invocando o construtor da superclasse.

  
  
  

# Implementando interfaces

  

## Definição de Interface

  

Interface é um molde de uma Classe, em outras palavras, uma declaração de atributos e/ou métodos que uma Classe deve possuir. Ela serve para nomear e parametrizar atributos e métodos de uma Classe, porém não define seus valores ou implementações. Interfaces são uma forma eficiente de definir um “contrato de código”, ou seja, aquilo que você espera que seja implementado dentro do seu código.

  
  

Uma Interface não inicializa nem implementa as propriedades declaradas dentro dela, porque o único trabalho de uma Interface é descrever o objeto. Ela define o que o contrato de código exige, enquanto quem implementa a Interface deve atender ao contrato fornecendo os detalhes de implementação necessários.

  

Uma Interface pode ser implementada por uma Classe através do método implements ou também estendida por outra Interface através do método extends, você verá um exemplo logo abaixo.

  
  

## Como implementar uma Interface

  

Herança é utilizada quando queremos codificar um comportamento padrão na superclasse, a fim de que as subclasses sigam esse comportamento, e também quando queremos mais reutilização de código.

  

Atualmente, quando falamos de orientação a objetos, falamos também de Orientação a Interfaces. Na herança, temos a ideia de que subclasses vão herdar métodos e atributos das superclasses. Quando estamos usando Interfaces, porém, temos uma class que vai implementar métodos definidos em uma interface. O objetivo é desacoplar a implementação do contrato.

  

Na interface, nós determinamos quais as assinaturas dos métodos e quais atributos o contrato deve respeitar. A interface por si só não pode ser instanciada, ou seja, não podemos usar ela junto com o new para criar um objeto novo. Ela é apenas o contrato que será implementado por uma classe.

  

Na interface não implementamos nenhum código, apenas definimos o contrato (atributos e assinatura dos métodos). A classe que implementar essa interface, deve, obrigatoriamente, implementar todos os métodos e ter todos os atributos que a interface declara.

  

![](https://lh5.googleusercontent.com/a6YN_c_EkkSjLZqEsSdIVdG8iNExGbrUvdS4K5ChEw0ja8B1EhiaLh4hWrPWlmO9xL418SLhBEfl2x7urUPIcQyjR7OUprA3GUU1LLayUR3wEPxUJ7ejgD_Zr8n98dHYZQsFF-70Akw3OUFK2TDl7eQ)

  

Observe que a interface é implementada por uma classe por meio da sintaxe class Classe implements Interface.

  
  

Importante salientar que a interface é um contrato de tudo que a classe deve possuir de forma pública.

  
  
  
  
  

# Interfaces versus Classes

  
  
  

Interfaces e (super)classes podem servir para especificar o comportamento de classes, mas de formas e em níveis distintos.

  

Quando utilizamos interfaces, queremos garantir que alguns atributos e métodos existam, sem se importar com o que fazem. É mais um “me arranja alguma entidade que tenha o método x, pois eu vou precisar chamar x, e se ele não existir vai dar erro”.

  

Já quando utilizamos a herança, disponibilizamos não só um contrato, mas uma base já implementada de código que funciona, de forma que apenas vamos especializar esta base de código adicionando novas funcionalidades.

  

Resumindo, quando a classe A implementa a interface I, ela deve implementar todos os métodos declarados em I e possuir todos os atributos de I. Quando a classe A herda da classe B, ela já herda todos os métodos e atributos públicos ou protegidos implementados na classe B.

  
  
  

Na imagem abaixo, perceba a diferença entre interfaces e classes, quando a classe Student implementa a interface IPerson, ela deve implementar e possuir todos os métodos e atributos dessa interface. Quando as classes Teacher e Player herdam da classe Person, elas já herdam todos os métodos e atributos públicos ou protegidos implementados na classe Person.

  

![](https://lh6.googleusercontent.com/f9DBVFYWK1QzM0ITjvCDTO7qMPMpec7cFtCNUeLgI1ixzpLVN9ftCVsIwleb73X80g4XdMbomd7zqZhBYLVqV2CFNO9FLo3hoUA0M6Z2SuXu-YEiQZMMl2PrGjMbwpCYx3VZPYmS_wQ3RVYw24TXl3Q)

# Type Aliases versus Interfaces no Typescript: Entenda as diferenças

  
  

## Type Aliases: facilitando a referência a tipos complexos

  

### Exemplo

  

Imagine que você está criando um jogo de RPG e precisa definir um tipo para os personagens. Para isso, você pode usar o Type Alias. Por exemplo:

  

![](https://lh3.googleusercontent.com/Rb5EvEdW8DMlrUbCcf1ehTsMn5TM6YeHBfk1S669Uc7PzAb7aCvT4s3hpmEW4x7pWBfwxGwiqckhBlqBNp8El0UNwrco622sIBvM_7w2-O5j_m4P5PVzQxN--53UFUcf3PF2_Tsznu254jh5Pah0NE8)

  

Nesse exemplo, criamos um tipo chamado Personagem que possui três propriedades: nome (do tipo string), nivel (do tipo number) e classe (também do tipo string).

  

Com esse Type Alias, você pode tipar variáveis ou parâmetros de função do tipo Personagem de forma mais simples, sem precisar digitar toda a definição do tipo sempre que for usá-lo.

  

![](https://lh4.googleusercontent.com/ULgiNidaXf6P4yaZHZQ80edjcMiawqAUF8NcoCOIrp9l1JfkE5WwFzLkXhz8dJNeCS9Wl8mlvB0KxBjLZiDOgS7DQmG7NPYcDymCLlVwaENXLBpS_vrRk0oyUBeGMxT78EQdL8QBA_lI5rzUvR0fMzg)

Nesse exemplo, criamos uma função chamada mostrarPersonagem que recebe um parâmetro do tipo Personagem. Em seguida, criamos uma variável meuPersonagem do tipo Personagem com algumas propriedades.

  

Ao chamar a função mostrarPersonagem passando a variável meuPersonagem como parâmetro, a função imprime na tela as informações do personagem de forma organizada.

  

Com o uso do Type Alias, é possível simplificar a definição de tipos complexos e tornar o código mais legível e fácil de entender.

  
  

INTERFACE

  

Mas e se quisermos adicionar um método para o nosso personagem, como atacar? Não dá para adicionar esse tipo de definição em um Type Alias.

  

Aí é que entra a interface! Através dela, podemos definir não só propriedades, mas também métodos que o personagem deve possuir.

  

As Interfaces são como contratos que os objetos e classes devem seguir. Com elas, você pode definir métodos e propriedades que precisam ser implementados obrigatoriamente. É como se você estivesse dizendo: “Ei, objeto ou classe, você precisa ter isso aqui, senão não vai rolar”

  

Exemplo:

  

![](https://lh6.googleusercontent.com/pP2Jl6PSR2aJNQyB2FaftEuhD8czbjqBQ3olgVmNryaOq6SoP8zvVwbZ3tS9YYa__bz44py7aDreuaTiG3QOL5ifd_w3JcJA05kNuXxEd99KNbwxeCVskuhSNcVKEeJ55xMUC0TJh8jy95D3OI0eOok)

  

Nesse exemplo, definimos uma interface chamada Personagem com algumas propriedades e métodos que um personagem deve ter.

  

métodos: atacar e defender.

  
  

Agora, vamos supor que queremos criar uma classe Guerreiro que implemente essa interface. Para isso, basta fazer o seguinte:

  

![](https://lh5.googleusercontent.com/zDf8o9qhO0o9j2GgkAP2nRX8pv53cCRuDnOFxEXC5yzG-PRzQr5wrslaMwQrHDjogK-NwEb9y1C7qjRSpsRi53ZfDXfh6YkyFPrAkuNoOYhUgqodx_USFMR-AmJWnwRIyiU5mtMsNyTYNyU6HCC-Is8)

  

Nessa classe, implementamos todos os métodos e propriedades da interface Personagem. Ou seja, ela segue o contrato definido pela interface.

  

Agora, podemos criar um objeto do tipo Guerreiro e utilizar os métodos definidos na interface:

  

![](https://lh3.googleusercontent.com/SebyDEt9Eq9lyfLRZM2zQQiJelflR79I71oYkxf2yT7zFUWRSnTFdhQB7KrF6GZpn2C2__Nr13wQ3E7a2LndhQlHTkMkCvAMMMvGXz6AOIsk7cnCVy-m7TZanmuc0WQKGD3M_dvHas-8KnK6yclWcDo)

  
  

## Mais diferenças entre Type Aliases e Interfaces

  

Os Type Aliases são mais indicados para tipos simples e diretos, enquanto as Interfaces são ideais para contratos mais complexos e com várias propriedades.

  
  
  
  
  
  
  

# Composição e Agregação

  
  
  

## Composição

  

Para compreender a composição precisamos pensar no relacionamento entre objetos/classes. Por exemplo, na rede social uma conta tem perfil, tem foto e tem texto. Veja abaixo como ficaria em um diagrama.

  
  

![](https://lh5.googleusercontent.com/0ugEmZtg0H5Xc9SRLPzExJCx9JeeKcqMH5ulQArYdd9ooZnOjLkHBD1CU4PUhnt1A45aaVzTcoQXjhzYYIH9OGGCdMT7sYrOF_bK54PUaMfzIF4r02zndkxjOUJmJ52t08Q6z6nLZvsoY6u6pR-CsjQ)

  
  

Na imagem acima, é possível notar que perfil, foto e texto estão contidos em conta da rede social, ou seja, estabelece-se uma relação de dependência que se você remover a classe principal (conta) a classe secundária (perfil) deixará de fazer sentido, pois é necessário que seu perfil esteja vinculado a uma conta.

  
  

A composição de objetos/classes é uma forma de combinar objetos ou tipos de dados para construir sua estrutura.

  
  

A composição permite que você realize alterações na classe principal sem afetar as demais envolvidas ou correr o risco de comprometer algum comportamento.

![](https://lh6.googleusercontent.com/XC4Xr8QGJIpW1rakNPa0iegbz4Ecgr3nCsnwnnWLzgIsjvh-CWGp_-0Bs45wXLRvqphNSkh7g67EWj6oH4bNQBiRI_dnWigYAC4mWr_xWpQP634cX-Ee_XbbAJXycgDcPFVCmYO1-geN2xbHJDZIy8k)

  

No código acima, você possui a classe Profile que possui os métodos responsáveis por atualizar o nome e email do perfil.

  

Em seguida, temos uma classe SocialMediaAccount que vai instanciar a classe Profile e ser utilizada no método editProfile para você editar o nome e email na respectiva conta da rede social.

  

A ação de utilizarmos a classe do perfil (Profile) para compor a classe de conta da rede social (SocialMediaAccount) é conhecida por composição.

  

Dessa forma, você tem a liberdade de realizar as alterações necessárias na classe principal(SocialMediaAccount) que não vai afetar diretamente a classe secundária (Profile).

  

E não é possível remover o SocialMediaAccount pois está atrelado ao Profile

## Agregação

  

Na agregação precisamos pensar no relacionamento entre objetos/classes, assim como na composição. No entanto é um relacionamento que fará parte e não obrigatoriamente dependerá de outro objeto/classe para continuar existindo.

  

![](https://lh4.googleusercontent.com/kis72_H2vIcbaI6a-GILjraXEe3odc2G7ULETPmUYEGyqgtC9F90gK3ObQ0L5SQgdBvD63sXBjqFFJktYlAmoeKbee6jkdmiNK68XDBKAswY8LeG7O-BSKPYLhtOuE4Dt-y6y5K6U7N45aOUQ0m8mgw)

  

No código acima, você possui a classe Friend que possui os métodos responsáveis por atualizar o nickname de uma pessoa amiga.

  

Em seguida, você tem uma classe SocialMediaAccount que possui um array de pessoas amigas e possui o método addFriend para adicionar novas pessoas amigas na respectiva conta da rede social.

  
  

Agora, note que se você remover a classe SocialMediaAccount a classe Friend vai continuar fazendo sentido, pois se você deletar uma conta da pessoa usuária ainda será possível atualizar pessoas amigas ou essas pessoas amigas serem adicionadas em contas de outras pessoas usuárias.

  

Portanto, na agregação os objetos podem existir sem depender do outro objeto, por outro lado, na composição os objetos dependem da existência do outro objeto.

  
  
  

# Resolução do problema inicial

  

Você precisa, de forma eficiente, criar entidades que representem pessoas físicas e pessoas jurídicas, compartilhando alguns elementos em comum, tais como nome e endereço, mas com elementos específicos de cada uma delas, como CPF e CNPJ.

  

Além disso, você precisa criar uma interface para contratos, que devem possuir cláusulas e devem poder ser assinados por pessoas diversas.

  

![](https://lh5.googleusercontent.com/djtPhChOwTudiKTF3J4mzVhwAQsZqgm4PoJmlDnaaxDNqV6MoRqf4xzKtktywfWc6S-Fgk5WCT5k0yllJ9aiWdufpYe6NMhK0ue1flzCc4vL6NlZlKdkduK1rs8-Ady3BZ0vIyRVzbD5g9nyZ1ILl4o)

Motivo por usar Herança e Interface

  

#### Interface Contract:

  

-   Será o nosso contrato, algo que nos guiará em relação às regras de negócio;
    
-   É importante ser utilizada quando sabemos quais atributos e/ou métodos devem ser utilizados e são imprescindíveis para a implementação da nossa classe;
    
-   As interfaces não necessariamente contêm todos os elementos que precisam ser implementados em uma classe. Contudo, elas funcionam como um guia para o cumprimento das regras de negócio. Ainda é possível definir métodos e atributos adicionais, ou ainda criar várias interfaces, cada uma relacionada a regras específicas, e implementá-las em uma mesma classe;
    
-   No exemplo abordado, os atributos subject, clause, signatories e o método describe são importantes para a regra em questão e estão sendo implementados na classe SalesContract. Entretanto, além desses elementos, outros métodos também são implementados. O que nos mostra, que por mais que venhamos a definir um contrato com elementos específicos, ainda temos a flexibilidade de fazer ajustes e implementações.
    

  
  

#### Herança - classe Person:

  

-   Permite a reutilização do código, visto que todas as declarações da classe mãe (superclasse), com exceção de elementos privados, são herdadas;
    
-   Aumenta o acoplamento do código, pois alterações na implementação em uma superclasse podem afetar as suas subclasses. Por exemplo, a adição, remoção ou alteração de métodos e propriedades pode provocar bugs caso não sejam planejadas com cautela;
    
-   No exemplo abordado, as classes NaturalPerson e LegalPerson herdam de Person. Observe que ambas as classes filhas mantêm o padrão de receberem parâmetro name e de reutilizar o método getter name. Este é um exemplo reduzido, mas que nos mostra o quanto a herança pode ser útil.
    

  
  
  
  
  
  
  
  

Classe person

![](https://lh3.googleusercontent.com/8cFBA_ei8JLF6RBT0t1DQdfkfRSGY3oMikcI7rETvSxWIRHuNEXoZZ-o9gAnGRmjfYKFO0w21Izek3PmJ9pscuqguvdyvFW2DKqjGZFpxgyH_GAYzNUgafzgvuwPmW1LnMJmhq7TvBGfGPz-TMFl9gk)

  
  
  
  
  

Classe SalesContract

![](https://lh5.googleusercontent.com/2ancCmURy-V0mLAkarP6Tn5dOGKkSbRQFOrlRcVVU98lvJDnrsLbWNYv-elcejDZN5msIgwvAQcs7yUUOvlCvoDAmlqXCy0Pw7W038m4ta4-9u8BybbuCOZL8tuplZK2r3oQKzdTcORAKWfDooZI7YM)

  
  
  
  
  
  
  
  
  
  
  
  

![](https://lh5.googleusercontent.com/3mouQpuNsdFgCqHGioOeHn9D2dfPbuk_PxwEkO8noYCOuz5Jt5OckLcSqpWgwtdijNlzgI_e_k552-GvybRbjpfX_2pOWS9iDw2Ef1YFBwnY0My96hY1m5D_NqFztxjAkRaqVSB4hSHLIRtzK5JUAjg)

![](https://lh4.googleusercontent.com/q-uADkKBPAEv2I-rb7i1miWtESO7tadjTsBohQLq2uki5ASccoz3-aAmTt6mEi9Sz8UwDcsxaY9c5dZxwzMl5igc99AC_XbUdYGJBm8ahKhCgRgSmsfafLQlWVJymRrirWG42-MYCPKuKPivOs0yYrQ)
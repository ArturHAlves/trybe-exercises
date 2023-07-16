
# Recapitulando

  

-   S: Single Responsibility Principle (Princípio da Responsabilidade Única ou SRP), que diz que cada entidade deve possuir somente uma única razão de existir;
    
-   O: Open/Closed Principle (Princípio do Aberto/Fechado ou OCP), que diz que uma entidade deve estar aberta para extensão, mas fechada para modificação;
    
-   D: Dependency Inversion Principle (Princípio da Inversão de Dependência ou DIP), que diz que entidades de alto nível não devem depender de entidades de baixo nível.
    

  
  
  
  
  

# Liskov Substitution Principle

  

O Princípio de Substituição de Liskov diz que:

  

Objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa.

  

Isso quer dizer que se você possui uma superclasse  A e uma subclasse  B, onde quer que A seja esperada, se B for passada seu programa deve se comportar da mesma forma.

  

Podemos estender isso para uma interface (já que uma interface pode ser vista como uma classe abstrata com todos os métodos e elementos públicos, e nenhum método implementado): se A é uma interface e B é uma classe que implementa A, onde quer que seja esperada algo do tipo A, se B for passada seu programa deve se comportar da mesma forma.

  

Se uma terceira classe, C, herda de A também, onde A é esperada podemos colocar tanto B quanto C.

  
  

![](https://lh5.googleusercontent.com/Qs80UqneRLUQDHQ4cEIOMv3wgBM-wO3FKPjJMmSgev0cMrUg6mWMlGQmwaY-ddGfm9HWaRlTIK1uhvuBX4VNrfdiqLe_z_vVOVWMAYA8VXGYKGDzg_0OBUGDejKS96qSOlDtFEJ5Lgg6Dm67GAvlZxU)

  

Exemplo

  
![](https://lh3.googleusercontent.com/vozRJfKmZXoE-reqWkZ2-FDQtBu84oZcKU1dVhAcw6cYAEkz5ytNrJMKjOnY5sl_fn32wvwIlsKjvfUwM1m2qodxmGSsxbMKW-FyPkG9FvZrZ_dl7UaySaywLnVYGYtuOHR4KGolQuzOp91r5fnSixw)  

Anota ai: O princípio da substituição de Liskov diz que Uma classe derivada deve ser substituível por sua classe base.

  
  
  

# Interface Segregation Principle

Segregar = Dividir em interface menores

  
  

O Princípio da Segregação de Interface afirma que:

  

Nenhum cliente deve ser forçado a depender de métodos que não utiliza

  
  

Isso quer dizer que devemos separar as interfaces e as compor conforme for necessário, fazendo com que uma entidade (classe) não precise implementar coisas que ela não vai usar.

  
  
  
  
  
  
  

![](https://lh4.googleusercontent.com/_hsywHB9rgFhJY175tYcenx5nBzeVHFPto-iiJg08q0vSlg1dwuTgo6WesLA4-ulyPiG3YGwjfbsK9LlnJEExsC7HAJJokUTPw7SfDAO1QpEbUwhQh-q9VJOyhspJJdJBb7oSqPlw1m-4KpBOS4mRBo)

  
  

Outro exemplo:

  
  

Por exemplo, podemos pensar que ao fazer uma pizza, independentemente do sabor, teremos uma massa que servirá de base. Entretanto, não faz sentido a base possuir, além da massa, queijo, visto que algumas pizzas (por exemplo as doces ou veganas) não levam queijo. Da mesma forma, não faz sentido a base possuir chocolate (tal como em uma pizza doce), visto que nem toda pizza leva chocolate.

  

O ideal é que exista uma base pronta, e interfaces para cada um dos adicionais, como o queijo e o chocolate. Assim, cada pizza implementa as interfaces pertinentes, ou seja, usa queijo e chocolate só quando precisa.

  
  
  
  
  
  
  
  
  
  

![](https://lh5.googleusercontent.com/hG0AIVbI4xrMCztSsOlIh-DdPK6fzxzZEJMVWmxKbzN4FfeYxdEQ3Z7J-_99T8RhaMb5ngFbuvmm8Fyxz0GQus0zE5VBX1smFoZb1MiA5Z7q2S7CnK1sL1cB_1536E3BKQYi635YAV1fb0YhDPneb-M)

  
  
  

#### Problema

Temos uma interface que contém 3 métodos, dentre Hambúrguer, fritas, e combo.

  

-   Nossa classe Burguer ela utiliza apenas um método dessa interface
    

OU SEJA, não está respeitando dois princípios. O Laskov e o Interface Segregation Principle

  

Onde não estamos usando todos os métodos da interface

![](https://lh5.googleusercontent.com/TZtrWxBkR-YRXEcqTBJ1I3LXFuQwMp09dCaANZ8WJ23aoX2KtmiEOp2uLBmsCkl6Nga9cxcUWPLoE0L9wHG4gEJAvWRucVx0hy1vwDQgU2CJIqwHC5KLvL6Hii_qfxyQHApUMx61rX8jV2NCzLywtD4)

  

#### Resolver problema

  

![](https://lh6.googleusercontent.com/Zp6X22OSUFS3fuJWp6N9B5u0Cx0hjwJfDJ5ncVe59HotZUOoV6WTT9iOpuO17rXBHqSfp6_brL6894iZbSisynWMmIVaAPt0akY6FR1XS1BwUhHFsvkgLfil0n9fdAZh6XOwACrFI8HhlR0ieaRfgL0)
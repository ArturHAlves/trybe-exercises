# Polimorfismo

  

o polimorfismo. Com ele você conseguirá garantir que classes distintas possuam determinados métodos implementados, mas que não necessariamente se comportem da mesma forma.

  
  

# Problematização

  

No trabalho do mês, foi solicitado que você criasse uma implementação de um tabuleiro de xadrez, com algumas peças que podem se mover no tabuleiro.

  

A título de exemplo, neste problema desconsidere que as peças podem ser adversárias, e pense em como você implementaria um peão e uma torre.

  

Ambos, Peão e Torre, devem possuir um método mover, respeitando as regras de movimentação de um peão e de uma torre no xadrez.

  

As regras são bem simples:

-   Um peão só pode se mover uma casa para frente, desde que não tenha outra peça em sua frente.
    
-   Uma torre pode se mover quantas casas quiser para frente, para trás ou para um dos lados, entretanto parando antes de qualquer outra peça que esteja em uma destas 4 direções.
    

  
  
  
  
  
  
  
  

## Analogia

  

O pilar polimorfismo permite que coisas diferentes aconteçam ao chamarmos objetos de classes filhas distintas de uma mesma superclasse.

  

Por exemplo, pense que existe a classe Pessoa, que possui um método dormir, só que esse método não é implementado (não possui nenhum código).

  

Então são criadas duas outras classes: PessoaQueDormeDeBrucos e PessoaQueDormeDeLado, e ambas implementam o método dormir conforme seus nomes.

Se em algum lugar do código eu espero um objeto da classe Pessoa, eu posso perfeitamente passar um objeto de uma classe filha (já que ele herda tudo que tem na classe Pessoa), ou seja, eu posso passar tanto um objeto da classe PessoaQueDormeDeBrucos quanto da classe PessoaQueDormeDeLado. Como o código esperava um objeto da classe Pessoa, qualquer um dos dois servem, mas se o método dormir for chamado, ele irá se comportar de forma diferente.

  
  
  
  
  
  
  

# Polimorfismo

  

Polimorfismo vem do grego muitas formas, e nos remete às várias formas que um mesmo método pode possuir.

  

Nesta situação, o polimorfismo ocorre quando um método implementado em uma superclasse é reimplementado numa subclasse, comportando-se de forma diferente.

  

Como exemplo prático em classes TypeScript podemos criar uma classe ‘pai’ de nome Animals e teríamos em seguidas os tipos de Animals  que possuem características particulares, mas mantém comportamentos diferenciados.

  

Exemplo:

  

Para ilustrar, no exemplo de código a seguir temos a representação TypeScript da classe Animal, a qual contém o método makeSound que representa o comportamento de emitir um som e atributo turns , o qual contabiliza a quantidade de vezes que o som foi emitido (quantas vezes o método makeSound foi executado):

  

![](https://lh5.googleusercontent.com/uHKtQnOtxGRrwhh03eYg2fyWJh08wyRO_uX0yzWMovtVptTlVMIeUe1l-M5vghNTBnEgxQjrBeYhAgtR8sZoRxjqCvOmtbcfTrp-8rD2Jw8DVMN8deeYkdZ68QlyD7mLEg8jy7wjoakk3-ZPfPE__zU)

  
  
  

Uma representação das classes criadas e suas relações pode ser representada por esse diagrama UML de classes:

  

![](https://lh4.googleusercontent.com/gkGPR2EHA0MNPwUMj3vnC81oxcsoc6aaMF62wGKazm5bRPMxb_ZoSaUaqchU-8ggeb_UjU6yP_t1MxBqiWZWn6dhogS33s5vlvueyBWo5_6k6AlZKtDVooqXknaUJhrrkFp6rcqsfI-1arhHzusWppw)

  

A resposta ao executar o comando tsc index.ts && node index.js no terminal seria:

  

![](https://lh6.googleusercontent.com/Qt7cHwiceX4u2hD5ZgQ2YBEtvrxtML2zu8gPDh4gDrJgKRHmwme5sPv23UnNOI69XLZWQIqFCN0Q6lU644X1JV9-4rMJyq1UdR6eKR4YeReSaRKiqzpOQb-_b8Jf1ZZ_tRsTtDeRJZzT5RXET3IUz2Q)

  
  
  

# Sintaxe com classes

  

![](https://lh5.googleusercontent.com/XCNivxF26V0LEcBByYKW6KbWte88BrEgu9xQK3Dna09N73sqxT2AFnZYcQ-gYyGpS8PRyTKCoBmcolKTLOM-WdC668HjxspNjEcnwIEuYmaQCEfpqkedtXtj9nrMMtlFegWcsIwouAH_UbIeTTlTDiU)

  

Observe que myMove recebe como parâmetro um animal da classe Animal e chama o método move.

  

As classes Ave e Mamífero sobrescrevem o método move da classe Animal, e quando passamos um objeto de uma dessas classes, uma implementação diferente do método move é utilizado.

## Uso do super

  

Uma outra coisa que você pode fazer é, ao sobrescrever um método qualquer, chamar a implementação dele na superclasse por meio do super.

  

![](https://lh4.googleusercontent.com/r0uonET3LdDe5XluKBcyJ9UGXYf7CLwnj--SE5MT0MrFq5-7NVX9WD6rd35G9ahJwxLDJ-zLkH9CEJi3OHEHz4o7QPVDqLSqZ-5YpX55Po_6rTopIFlqvi4EBYIPoNCpc411esEGRJUPHcvD4iHksA0)

  

Observe a chamada super.move() dentro de move, na classe Ave.

  

É importante salientar que você pode chamar outros métodos da superclasse (caso existam), e não só o mesmo no qual você está na subclasse. Por exemplo, se a classe Animal tivesse, além do método move, um método sleep, dentro do método move na classe Ave você pode chamar o método sleep da classe Animal digitando super.sleep().

  
  

# Classes, métodos e atributos abstratos

  

Por vezes, criamos classes que devem possuir métodos pensados para serem implementados em subclasses.

  

A ideia é que a superclasse, mais genérica, não deve fazer ideia de como esse método deve funcionar, apenas saber que ele existe.

  
  

As classes abstratas não podem ser instanciadas, ou seja, você não pode criar um objeto a partir de uma classe abstrata.

  

Métodos abstratos só podem existir em classes abstratas, e eles devem ser implementados na subclasse.

  
  

No exemplo abaixo temos uma classe abstrata Employee que possui um atributo abstrato(MIN_SALARY) e um método abstrato (work()) que se aplica a seus subtipos.

  

No caso da Trybe, temos pessoa instrutora, pessoa especialista e pessoa facilitadora. Portanto, ao criar as classes de cada subtipo, estendemos a partir da classe abstrata Employee e implementamos o atributo e o método de acordo com suas particularidades.

  

![](https://lh6.googleusercontent.com/Pxu-OgpwbZ0AKuS-6hJQ6yuXj1WSo4oU4MQzTkFmfXD3IMHA1wFDg1cXRrZldKMEik5du4TwiuCh2YYEjgNZXxnsiSfCDaExrPeWwyfmFDthy0FJR1cI3Lp6B-QmQzo4mn3njMlAjGgvsi9god6DRZU)

  
  

Classe abstrata é a mesma coisa que uma interface

![](https://lh3.googleusercontent.com/-O5dEkv3hLFOcEXYJrcLISpv5wjgXpccpd-5FvgUwx63AjiWjtzTkZEt3RnoGZzUy9PHIAALQDluUttINGIg__1EriJZVMECj8UA0h4Gh3ORPgN2ZIhrhBPH2NuigIRuqmKe4-_UGhzuTJEhr7B8Q78)

# Métodos e atributos estáticos

  

Uma outra funcionalidade interessante é o que chamamos de método estático.

  

Um método estático nada mais é do que uma função que não precisa acessar nenhum atributo do objeto.

  

A diferença semântica de um método estático para uma função é que o método estático tem a ver com a classe. Isso significa que fica um pouco “sem sentido” você disponibilizar um método sozinho, pois, por mais que ele não precise manipular uma instância, ele está muito ligado à classe.

  

Além de métodos, podemos ter atributos estáticos, que são acessados manipulando a classe, não a instância.

  

Agora vamos ver outro exemplo com uma classe Employee que possui um atributo estático chamado employeeCount, responsável por armazenar a quantidade total de pessoas funcionárias, e um método estático chamado de addEmployee(), responsável por incrementar a contagem de pessoas funcionárias. Com esse exemplo é possível notar que a cada instanciação de Employee o atributo employeeCount é incrementado:

  
  
  
  

![](https://lh6.googleusercontent.com/71ULJEXl4pv9_nAxtIPqhA1zW5ETI6sptvOwzy7E4Z58KQV6whzJjhDC5lu5VE9WhmHdghcNM0O3PlYm7YjXvIcFEyRMj4SaC5zDT8ZAQahjDwOHXBngDgsfkgDvwL8w-UK-sZl7oLyHhsLlrJ1AC4U)

  
  

![](https://lh3.googleusercontent.com/lTRjKeVj3nTbPfpLSY-nwBYlFhR5i1ZEvvl5ITWv1htGoD0BAGzZSvR7nY5PknPLD1Ul1LpJWW6lOKAaPkk1BakGAqimpxX2U4U-jpfWO6PYvJ8E07BUx80Kkfl3jZPvAmDhozjESlR0jxnxhR3Bq9w)

Observe que usamos o nome da classe para acessar o atributo employeeCount dentro do método addEmployee() da classe Employee. Poderíamos utilizar o this para acessá-lo, mas como boa prática, mantemos o nome da classe para acessar atributos e métodos estáticos em qualquer ponto do código. Isso acontece para deixar nítido, para outras pessoas desenvolvedoras, que aquele atributo ou método é estático.

  

Resumindo:

-   Os métodos e atributos estáticos pertencem a classe e não aos objetos da classe.
    
-   Se um atributo estático tiver seu valor alterado em algum objeto da classe, a alteração se aplicará a todos os objetos já instanciados e os que serão instanciados.
    

  

Entretanto, é importante salientar que na maioria das vezes é preferível criar uma função normal, no mesmo módulo que a classe está sendo criada, exportando-as de forma separada. Isso facilita a vida de quem vai usar.

  
  
  

# Sintaxe com interfaces e generics

  

## Polimorfismo com interfaces

  

O polimorfismo com interfaces se dá da mesma forma que o com herança.

  

Duas classes diferentes implementam a mesma interface, implementando também os métodos obrigatórios que a interface estipula.

  

Por exemplo, podemos enviar a uma função um parâmetro com o tipo da interface e passar em seu lugar um objeto de uma classe que implementa tal interface.

  
  

Classes diferentes irão implementar determinados métodos de formas diferentes. No exemplo abaixo, o método showIdentification é implementado de forma diferente nas classes PessoaFísica e PessoaJurídica.

  

![](https://lh3.googleusercontent.com/8OwtFNStwBpEe6EYQ8EdpJ70rS9oH7rAYDp1FG-WACgm-EMBv2ctgLotLjH_qh-oM7JLEvF-sayghVSHsytlILKKxwiUgBsMFDgvNWhjAQnu468KeTTsUHBT1iCya-xQ_y9ENrBsUH7Sbg_Y0xFlets)

  
  
![](https://lh3.googleusercontent.com/f2dnEsoAElQimZUFY_gwcn6AW_anZiOQ-xBq0ni8zu3IBdYB8IpRY5-aGZjYCka0abv0wtdhA6RfgtWvSShBwBQWA8VgFc6tSvD3D3x0aTLTQGKwGcbQRaucrPd3fnaL2lKWYcykhijh4eGGyOkyoas)  

## Garantia de tipo com generics

  

Agora imagine que você queira agora criar uma classe Contrato, que vai possuir uma pessoa corretora, que pode ser tanto uma pessoa física quanto uma pessoa jurídica.

  

Para garantir o tipo utilizado, podemos utilizar generics.

  

Para garantir o tipo utilizado, podemos utilizar generics.

É bem simples:

-   Escolhemos uma letra para representar o elemento e a colocamos entre sinais de menor e maior que (<>) após o nome da classe
    
-   Utilizamos esta letra no lugar do tipo Pessoa
    

  

![](https://lh4.googleusercontent.com/M1CBqJta8SqGUl4b2jE1x5eB8HSyW_pJh7qjUJvstyKpKXcmfx1iSpIIiBbEYkT_eNto1_Uq4raYLRXM1l2n-BsxsiwYHmNvt-ItWd8vpwNHwRofQ-k3V6CAJHgcj9u3Zq0gxFh1q_vzCke_FAAuMiU)
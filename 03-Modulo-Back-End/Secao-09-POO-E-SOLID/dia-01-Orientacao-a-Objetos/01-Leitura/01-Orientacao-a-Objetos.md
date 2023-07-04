Programação Orientada a Objetos é um dos paradigmas de programação mais populares, se não o mais popular.

  
  

# Problematização

  

[VAI SER RESOLVIDO AO LONGO DA DOCUMENTAÇÃO]

  

A liderança da empresa que você trabalha te pediu para implementar um projeto de desenvolvimento que consiste em um simples gerenciador e-mails.

  

Para isso, você precisa de:

  

-   Uma modelagem de representação genérica de um email
    

-   Todo e-mail criado deve possuir os campos:
    

-   Endereço de e-mail da pessoa remetente
    
-   Endereço de e-mail da pessoa destinatária
    
-   Assunto da mensagem, que não pode ter mais de 20 caracteres
    
-   Mensagem
    

-   Todo e-mail criado deve ter sua representação textual, que combina todos os dados em uma string única
    

-   Uma representação genérica de uma lista de e-mails (mailList)
    

-   A lista de e-mails deve ser capaz de retornar e-mails filtrados por pessoa remetente, destinatária ou por assunto.
    

  

  

  

  

  

  

  

  

# Conceitos

  

A POO tem alguns conceitos fundamentais. Vamos iniciar entendendo o que são Classes.

##   

##   

## Classe

Classe é o primeiro dos conceitos. Ela é utilizada para determinar algo genérico. Na programação orientada a objetos, toda classe tem como finalidade modelar com precisão a representação de uma entidade do mundo real.

  

  

Um exemplo de uma classe é o conceito Pessoa.

  

Existem várias pessoas no mundo, sendo você e eu duas delas, e por mais que sejamos pessoas diferentes, pertencemos a mesma classe Pessoa.

  

Agora repare que eu mencionei que somos pessoas diferentes. Isto quer dizer que somos objetos diferentes de uma mesma classe. Objeto (ou instância da classe) é algo específico.

  

![](https://lh4.googleusercontent.com/_VTVr6aTnRWpu6wK0DEvUwnWJnPLGp5bOMY73hQSE4H34ORZQ6_-z3rzgfN8hGu0dgNfMK8aT7vjH5EmhBs0lJjGZEdZX19hovLqXRbthPnys_sDSs4W4EB7SdEaId_Fe5Uh8X1uW361kvFnwGF5wlY)

Exemplo da diferença entre classes e objetos, com uma classe Cachorros e 3 cachorros diferentes representando os objetos

  

  

  

Dentro das classes e dos objetos existem atributos e métodos.

  

[OBSERVAÇÃO MINHA]

  

Atributos - São características de uma pessoa por exemplo

  

Métodos - São determinadas ações de uma pessoa por exemplo.

  

  

### Atributos

  

Exemplos de atributos de uma Pessoa são: a altura e a massa da Pessoa.

  

Observe que a definição dos atributos é feita na classe, mas os valores são do objeto. Todas as pessoas possuem uma altura e uma massa, portanto a definição fica na classe, mas minha altura é diferente da sua, e minha massa é diferente da sua, portanto os valores são de cada objeto.

  

  

### Método

  

Um método (ou mensagem) retrata uma ação. Por exemplo, uma pessoa pode dormir ou acordar.

  

Observe que, da mesma forma que o atributo, o método é algo que existe para a classe, mas cada objeto pode realizá-lo de forma diferente, única. Todas as pessoas dormem, mas eu posso dormir de lado e você de bruços, por exemplo.

  

  

### Na programação

  

Trazendo para programação: um atributo é uma variável criada numa classe, e um método é uma função criada numa classe.

  

  

Complementando as definições da mesma página citada anteriormente:

  

Uma classe é uma estrutura que abstrai um conjunto de objetos com características similares, e um objeto é uma instância (ou seja, um exemplar) de uma classe. Uma classe define o comportamento de seus objetos - através de métodos - e os estados possíveis destes objetos - através de atributos.

  

  

  

  

  

  

# Pilares da POO

A Programação Orientada a Objetos possui quatro pilares fundamentais:

  

  

## Abstração

  

O pilar abstração indica que você não necessariamente precisa saber os detalhes de como algo funciona.

  

Pense por exemplo em uma câmera (como a do seu celular). Você provavelmente não sabe todos os detalhes de como ela funciona, mas para operar, você apenas precisa apontar, conferir no visor e apertar o botão. Uma atualização pode mudar detalhes do funcionamento da câmera, mas sua operação vai continuar essencialmente a mesma.

  

  

Um outro exemplo de abstração pode ser visto na imagem abaixo:

  

![](https://lh3.googleusercontent.com/GlNL9az8W9VjuwGvAteIE9Edj_dkwVUx5E2m6Iu0O8CNvYPmi9X0vIpISGf0FLPXYcsxEaBO4f_mJbY36OQKJaRLzV0lh-c8TFkof3d_TQrXJd4bAu7BnzWBZohEWACXwqsVVzQec1BiXO_csVWvNCg)

  

A senhora está dando todos os detalhes para que o Neto vá a padaria e compre os pães e traga o troco.

  

  

![](https://lh4.googleusercontent.com/yZqAcBC410JntsXmHr3qwhnektUGStFOqj9BhVWniQTnN9g8LU3XJTMZsHLvc_jj-4MTnzbALeCb0wg2-z2n_3oy7jEj8WL80KINnRzXI1e0_TfINsBhJ-kgeoSakCRu5aOBnde5zbjbMuCI-TKWUYk)

  

Com Abstração o processo se torna mais objetivo.

  

  

  

## Encapsulamento

  

O pilar encapsulamento faz com que alguns atributos só possam ser acessados e/ou modificados dentro da classe.

  

Pense, por exemplo, na sua massa. Você não pode, diretamente, mudar sua massa. Não é possível você pensar “vou ter x quilos” e instantaneamente passar a ter essa massa. Entretanto, algumas interfaces para alterar essa massa são expostas. Você pode comer para aumentar a massa, e dentro de você, sem que possa ditar como seu corpo irá se comportar, ele vai absorver as calorias do alimento. Ou seja, não é possível mudar diretamente a sua massa, pois ela é um atributo privado da classe Pessoa, mas existem métodos na classe Pessoa que permitem que a massa seja alterada de forma interna, como o método comer.

  

  

  

  

## Herança

  

O pilar herança permite que classes filhas, que herdam métodos e atributos de outra classe (super classe), sejam criadas.

  

Pense em uma classe Pessoa, com os atributos nome e altura e com o método sonhar. A partir dessa classe Pessoa, eu posso criar uma outra classe, chamada PessoaCantora , que herda de Pessoa. Ou seja, já virá automaticamente com os atributos nome e altura e com o método sonhar, mas poderá ter outro método exclusivo dela, como cantar.

  

  

  

## Polimorfismo

  

O pilar polimorfismo permite que coisas diferentes aconteçam ao chamarmos objetos de classes filhas distintas de uma mesma super classe.

  

Por exemplo, pense que existe a classe Pessoa, que possui um método dormir, só que esse método não é implementado (não possui nenhum código). Então são criadas duas outras classes: PessoaQueDormeDeBrucos e PessoaQueDormeDeLado, e ambas implementam o método dormir conforme seus nomes. Se em algum lugar do código eu espero um objeto da classe Pessoa, eu posso perfeitamente passar um objeto de uma classe filha (já que ele herda tudo que tem na classe Pessoa), ou seja, eu posso passar tanto um objeto da classe PessoaQueDormeDeBrucos quanto da classe PessoaQueDormeDeLado. Como o código esperava um objeto da classe Pessoa, qualquer um dos dois servem, mas se o método dormir for chamado, ele irá se comportar de forma diferente.

  

  

  

  

  

  

# Sintaxe geral

  

Agora, vamos ver como fica a sintaxe de criação de classes, objetos, atributos e métodos em TypeScript. Para isso vamos utilizar o exemplo visto anteriormente:

  

  

  

![](https://lh5.googleusercontent.com/x7Kh4fM9dwo0p5HmC0_XvNhj9rTELKSOhLt7jdSPjuhqQlVA6N5VT9Ks2mzqymcUfD_u2C-VmBbbzb2Sn3R7EVect08WBNOmoRAwaiITmJc32CnRkC2Gq1XlpCsJJYOyXMRrtQ9i-fEJSf6OJ7bckig)

  

Para criar uma classe, basta utilizar a palavra reservada class, seguida do nome da classe e um par de chaves.

  

Dentro das chaves podemos criar atributos: digitando o nome do atributo e seu tipo.

  

[Observação]

Ainda entre as chaves da classe podemos criar métodos: digitando seu nome, os parênteses com os parâmetros e as chaves com o corpo, assim como uma função normal, só que sem precisar do function.

  

  

Observe que com a classe Person, podemos criar dois (ou mais) objetos (duas pessoas) diferentes, p1 e p2.

  

  

#### Construtor

  

O método construtor (constructor) é chamado assim que utilizamos a sintaxe de criação de um objeto com a palavra reservada new. O construtor recebe os parâmetros n, h e w, que estão abreviados apenas para deixar explícito que o nome dos parâmetros não é diretamente relacionado ao nome dos atributos que eles populam. Normalmente, eles teriam o mesmo nome (ou seja, n seria name, etc).

  

This

  

O this serve justamente para representar o objeto em si. Quando, no construtor, escrevemos this.name = n, estamos dizendo que o atributo name do objeto que chamou o método irá possuir o valor n.

  

-   Quando p1 é criada, this se refere a p1, logo, n e name passam a ser “Maria”.
    

  

-   E quando p2 é criada, this se refere a p2, logo, n e name passam a ser “João”.
    

  

  

Do lado de fora usamos a sintaxe objeto.atributo, mas como do lado de dentro não temos como saber qual é o objeto, precisamos utilizar a sintaxe this.atributo.

  

  

# Abstração

  

Um dos pilares da Orientação a Objetos é a abstração. Quando criamos códigos Orientados a Objetos, deve ser intencional o uso de abstração, ou seja, de “esconder” detalhes da implementação da pessoa que vai usar a classe ou os objetos.

  

Entre a chamada do console.log e a visualização do resultado na tela, existem várias camadas de abstração, as quais, por um lado, não te dão nitidez do que acontece no processo, mas por outro resolvem seu problema sem que você tenha que se preocupar.

  

[IMPORTANTE]

A mentalidade ao desenvolver código Orientado a Objetos deve ser essa: a pessoa que vai usá-lo não deve ter que se preocupar em como determinado método funciona. Ela só precisa saber que, ao receber certa entrada, esse método irá retornar ou exibir um certo resultado.

#### Exemplos de abstração

  

Além do console.log, podemos citar como métodos que empregam abstração: fetch do JS, connection.execute da biblioteca mysql2, app.use do express.

  

  

  

# Encapsulamento

  

Encapsulamento é um princípio de design de código, geralmente ligado a POO, que nos orienta a ESCONDER as funcionalidades e funcionamentos do nosso código dentro de pequenas unidades (normalmente métodos e funções).

  

Isso possibilita que modificações no sistema possam ser feitas de maneiras mais cirúrgicas, sem que uma funcionalidade esteja espalhada por diversas partes do sistemas.

  

  

Para isso existem os modificadores de visibilidade do atributo, sendo os principais o public, o private, o protected e o readonly. O protected vai ser apresentado juntamente com herança.

  

  

  

#   

#   

#   

# Sintaxe de encapsulamento

  

  

  

  

  

  

  

  

![](https://lh4.googleusercontent.com/fGABk65UlMh3Ty3NMsjgxiuKov2WIBQq8yBUWE0BqmGNjW7Dq38vvVpF9atfLvj4FbLP7MBDbVRza4EZIYlizU1AxuB1xVx4PKSduXB4M4fEm_BEVbemOGK_YyJEKGzgqnFV7nP6m-ihAESy1VKirE4)

  

![](https://lh5.googleusercontent.com/6CjCY0RYW-b25RPC80LD_v_s_lV4z6bauYhWAdFPBxfJv-lAOMl2Cb35h1AN30VYhUXrWjpCliI23DS6bMxUGyUVByxS75uDvuy-n7_1s4uYgu4ALTvE1TCptpZ4kd3ovOOPZ74ksYMkC_c8O88JbiQ)

![](https://lh5.googleusercontent.com/96iGQ84jCLKm4kXXphHT8EwdpoAuVPY-anLeXAxjjkXHZPdt3-CwCm216kyloHcTSM66hCYPbKkaGBCnsJohHlmkObS2ROmtmVrvPrzqeprcoIdDv2X2ZWlHcXnOl71c6XX4kCkpfppZ_oekAoE3h_M)

  

  

  

# Resolução do problema inicial

  

  

![](https://lh4.googleusercontent.com/DgxiQ73Vs1gGFufcDyPFbk4JlTCgRUvB9ABLScOLfNevdDk_C6aEqK8erCu6ZUAB1NzEbL9nDjq8__6CvRvUXMoqP_boFDRL0LLjtfcUWfNda4yiBhzTPn_4-PEGdslG8pAy6mFyl-Fapp6djm2W1GA)

  

![](https://lh3.googleusercontent.com/ARJOLAwOxpi9Q2WdigYxHQYHPhLzrpdeGFAB4lsoGiSRUKMG5MRebRWZ4pdKtiUhDNsmzvUR_qgVfz8afdonvA-qdCbK1NXgeAQOxd3xHiKV85wiVJfsf8s1DytwZFA46ZnUL80R-CBe7-qvAVDw6O8)

  

  

Primeiramente vamos criar a classe Email. Ela será responsável por guardar os dados do e-mail na forma de atributos. Além disso, Email possui alguns métodos, sendo o mais importante deles o get content, que retorna uma string formatada com todo o corpo do e-mail.

  

  

  

  

[BOA PŔATICA] - Colocar os atributos sempre em público

![](https://lh3.googleusercontent.com/_ncsPPpTjjA53SZ2AYtm_pzx0XP-jdR93OfXPGiMKjpUJUz6bzM_-_ZLPvTam1wvL6QQ8tXrSgVrwyZKRxznJGhfER1tGnbM_uFGMzMV5rPkzaCWEoC3MTi4UMlPf7a5cavvugLfOX0IliiSPw34Dko)

  

  

É interessante observar o uso do encapsulamento na manipulação dos atributos, com destaque para a validação do comprimento do campo assunto.

  

  

  

  

  

  

  

  

  

![](https://lh5.googleusercontent.com/EVMkEXi6RDFmlwPFAVTNLb3z3j9FSfXXKz6TUdSesKwPHzhPNeinbsEB5PkVGjEszdcTP4_1UCvxY82WlIBxjKrtola6WFE9t1iH2JnLE36-ylmBqPRsBaAyvEG7NHAsE71GiTYrHXqnWChQVkve7h0)

  

![](https://lh3.googleusercontent.com/fXF4NTVrdwOXDsQL2J1Z4FUDeCh4aIf-fmoHxQU9Ic5oarYlmrLNGW5dEVhL6ijCoRFviC_vr685Z0yx3va4R0EyKkWValXZWnAct3E80Fqpjc_1naU9BCaBdCUntyO8Mm_2dYzBCDD7bIJsvz-l1pY)

![](https://lh3.googleusercontent.com/Jf-IF13tHKglNm1WoroIgtPWv78QwCT0i44AjyD7XLz8mmPslF60nu0Xh9QGGE9vuroBFmI-GL2HMsMRWVcqty4oe5PNMEx__fhvOJ9rNdTDal8d6a7wSgvcN2R6T9oHQlyO8tLziag6bGR7gr647NA)

  

![](https://lh3.googleusercontent.com/ekjgkwORi76o9XSC503eK0vDw9aI9n8g1oYr9LI4LBCqBkwCWCPKde1pk93E4DreNqFla_D78GP-qHQUxzjxDrk6N3icrXF0iOBus3U0nJ8gigpDv_EQ57t6grBVnIE6CKv4LqmCrBu9TheBhbebIls)

  

  

  

  

  

  

  

Console.log()

![](https://lh4.googleusercontent.com/E5uIVWuITzD9r4asVhDwupZ5-XsDSFLy21KMqM8Q6b3IOdK18Nw1q74qYNZJtmUluRT7LWsEe9dRBXDv8oAi8TOkWvdAjxuL3Jw7jDHAycoyG2Zo1PNdJH_TiM98Ci3j9fZTiFzj1tqdfK_SvS6TCgg)
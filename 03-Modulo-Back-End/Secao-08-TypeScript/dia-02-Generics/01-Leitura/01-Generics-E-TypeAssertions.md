
# Generics

  
  

## Como aplicar Generics

  

Exemplo:

  

![](https://lh6.googleusercontent.com/DRR1DF29pNOTcJi_lmtLSybPnvifI0FnZLxPhRX8WGvp6npaQOijMD58Eokl8rg3XMLgbu49WGmX5YhYxliHugSEQdMh-o5EfeMGVxayb23ygEwg5A_Tj318wto_R7HyVXgC_gxQutQo1Y_BEH6Iy0E)

  

![](https://lh5.googleusercontent.com/l5VbnhQ714IAmMeNay-bTugLak6rRnaChl7SHMknbKACdHDepgSJbwLEvAa-1bsAPhrlASk6o5wW8ZLGaaHOnmrsj2Vo_aKeA88tyBXuVfJxyK-_D5SZ53F51bPrZ6ZIKDh9OJfHC_w8ldL7oBcHkt0)

  

Essa é uma função corretamente tipada para contar quantos pães o array tem. Mas esse código é antigo, de uma época em que o programa era mais simples. Agora, há um tipo para pães, ou seja, são mais que strings!

  

![](https://lh4.googleusercontent.com/6cRzEOrXJJwqFuh_XCkSv0zewQuAznyeC4Xdr_O5_Ha6FZUD2Rdwk4XbsbEElOcpydkFvMwFjBQ0l4ey_ScXAEQ0zospuqe4b2M4WnG1GwnF_YSBKxlQFB5Wx22T0W5jmXoQvZ0oHK0GjckmQ_v5xnI)

Log ERROR

  

![](https://lh4.googleusercontent.com/pj44ACmo_BIPIcKR9dZDlyqPL9yQ7aNZ5A37X9OmXOrem9s5Qh9AOUOzYNQpQJVPSfBoQg_4agfMOG_NvBZQ-knVqCGREw-WLdhJm3-3Y1Nd4BEFR9B7wz2hueM51gTHicuHZ1oDb-Y22mBHrEQjS28)

  
  

E agora? Como resolver? 🤔

  

Em TypeScript temos a ferramenta Generics, que pode ser útil para lidar com esse tipo de situação. Para aprender mais sobre como implementar essa ferramenta, veja a imagem abaixo e acompanhe a explicação na sequência.

  

![](https://lh5.googleusercontent.com/JXg8utX1bLxtQf8T9b45QLczBFgajiL2RSIlS46ufrQ3h_xyIfCbLEd_71FB1rEVQtB1Gs-fJNe6vPzhVk8UK2fJJ2uH7nHrpJyo8KsYqhZHlieMqA5VaQFHV4KRTrhGpSHmorud5zaadM737DNhHpg)

  

1.  Você adiciona a palavra Type entre os símbolos <> após o nome da função. A sintaxe fica <Type>. Uma convenção bastante difundida é usar uma letra só em vez da palavra completa. Exemplo: T, U, B, e por aí vai.
    
2.  A partir de agora, dentro da função e em seus parâmetros e retorno, existe um tipo chamado Type, que você pode usar para fazer todas as tipagens, como vemos acima.
    

  

  

![](https://lh6.googleusercontent.com/N5wU1y_LJkwyY9_rftCfmTLUgzXRzu6EkztqrT2Y7zo1arNUK7mnp_W4ood5EwJs57LQgfgAGfkRU82jeBg6JaT4wz3S3yF8MVqsgevQ-OWpZbyLHkjveC8X6h_P1D_nF3AOrX7ppLuBDIuPEbearVE)

  

Nossa função, com essa sintaxe, fica assim:

  

  

  

  

Após você escrever a função genérica countBreads, você pode escolher chamá-la de duas maneiras.

![](https://lh3.googleusercontent.com/TpnpnlMKFS3n-Ji4_-cvgJCkixt3OThFkNZ_mEnhABe-kA0yaktf1Jy0UYisAr0xBBn4yIZP0mwBEQ-7P_Y7C8BF8F2-_IkxpwlH7XQbdDnVFpdIBNEsm79252REfZUd1pK2xMVZBIBfQ6MUjblSSVQ)

  

PRIMEIRA FORMA:

![](https://lh4.googleusercontent.com/YeeuzsLlffGHL01-fNCxwYffHqaEpE0oFMPSlm6NWDDFQ4A6uS2t2l7qrlubsuaAbbatsOQ8co8xY3oV7Vp8BPT4uNba6M1YGwTBILBAL0o13KjyDJZWTUzpTFMO38A8gH1yohbiVhc44mmJha2RvCI)

  

SEGUNDA FORMA:

![](https://lh6.googleusercontent.com/qJpO2HJEecLpWh2bwliFjF_riJl9krJ645P8V1-DL8HfpEB-zx5m-P4xQa7dZTc5x-N065mBFqScdsOQsyvxmWDtJYMhsjbgUgnj3U8M8eDNbYzoHrfsDEbTzYMsnF1J06iv3xGftfBdpJkUSajUpI4)

  

  

E se você tem uma função com mais parâmetros e deseja que ela seja genérica? Você pode garantir a tipagem genérica de ambos os parâmetros também. Veja o exemplo

  

  

![](https://lh5.googleusercontent.com/lScyaQgn9_bTFfkoPuGP-eJcQMSg8m7rLRiJV1J5Gm5BwH_XqySak6NWfWC6LOR1IIb5K7l4-y7NmZwgatTIQjy0FQ5_ytwMg_BG9fkh9oArVeBo620jcTfJ-ubhllLx04GA7cMx46DaiZirXS6qXZ8)

  

## Como tipar, de forma genérica, funções que retornam Promises

  

  

Por fim, uma dica valiosa! Observe a requisição para uma API feita com uma biblioteca externa, a axios:

  

![](https://lh5.googleusercontent.com/Qc69jzjSO3P2fRxQqHyTE5lVE5QfPQKlLGQzqrjuDyAq2vTradlO46-SwHXVVCohgFKQ4wAt61l8ZcmuvQMH2TtS0IZLOyZnJ1diBIYqpB2uFmGxxT_tWHOoiaW4Chjgts0X7-yVdWassnrWDtWY7cU)

  

Ao colocar o mouse sobre a chamada da função (última linha), no TypeScript Playground, você vai notar que o retorno da função será do tipo Promise<any>, como na imagem abaixo:

  

![](https://lh4.googleusercontent.com/doP9nkRuI-6d4DjTVz9ebeQF8slgvdW3rWwjWcyUC7gl8GS7Y5TP11gAn-ByhOw_kSB9TPAM3YOIbFlTu5taQ2JJhhahKlhUWZ4emKu0hW4VM7rXwggNYSL9ReAQuhfbG6iZ829vt4MmsulN6ynUU5Y)

  

![](https://lh5.googleusercontent.com/FfVjC9FA9vaF6POBKeFo2040XFkmF_5v5qXu9IoLNf-vSTz5SMJVYLTCg6iv_sDj3VLlHw48H7u1hfD6w_wMmuilE-0GRhywAdAQZ5ITJDH_b-JPA-M1bS3DJ_EfEGFxz_7yRrGnvNRO-Ea6_qxD9cQ)

  

  

Esse tipo de implementação não informa a estrutura de dados que você vai receber. Será que é a lista de pães? A de farinhas de trigo? Ou literalmente qualquer outra coisa? Nós perdemos nossa tipagem aí!

  

O Generics pode auxiliar nessas situações. Veja a implementação a seguir:

  

![](https://lh4.googleusercontent.com/fl18FqgvY512YZmVPdYbe6o4HM3ze_iCylt7E1zALqRqVzy448-mefwTZhL6kKL354g9xP0kLYtN2zO-j0rNH7y8Ql7bxupFgxb0tBWVyNRUmhXfWu9wVHnmmZ6c6RAx4_nNJ0cs3rLsXqGEQFBLwqw)

  

  

  

# O que são Type Assertions?

  

Type Assertion é uma ferramenta que permite à pessoa desenvolvedora forçar o TypeScript a considerar um valor como determinado tipo e desconsiderar eventuais erros gerados em tempo de compilação.

  

  

É muito comum usar o Type Assertion quando se está em processo de transição em uma empresa passando uma aplicação JavaScript para TypeScript. Por exemplo, considere a seguinte situação:

  

  

![](https://lh4.googleusercontent.com/qZClrs5Zuw7IHOqKWhXVYqyUlRXWSRNRf0VNxQVFQAI4QAKyZD082t6zwHSpzHrMQ0e0Dgi-3Mtju9CqHhgXTYc4lIMrKjCxZWznmvo5bd-vV9l2WVF78miVi6JRX-s6mwGZf-H2lifajA9mMx4dH6o)

  

No código acima, utilizamos a tipagem com as chaves que planejamos para User. Em seguida, criamos um objeto com a chave findById para simular a busca em um banco de dados. Por fim, implementamos a função getUser e adicionamos a chave address à pessoa usuária.

  

Essa é uma implementação comum em JavaScript, no entanto, se uma empresa está mudando uma aplicação JavaScript para TypeScript e você transferir o mesmo código da forma que encontrou, receberá os seguintes erros no VSCode:

  

![](https://lh4.googleusercontent.com/Lo_Zd1srcIpZnKLS9udgM6T6aBxHEb4oRnPmd2IfollDVFlOSl3K66G5H1Z54W7SoMPbiC-9QD07Yl3lrXXhnuFswgzTu44Ue0lfGeK3qYdUc3bm7XyIVX7UHpqgMk_059WIJTmrYSMGVwG_U2umh24)

  

  

Esse erro ocorre porque, se você não intervém, o TypeScript infere que o objeto retornado é um tipo próprio com apenas as duas chaves originais – e não um valor do tipo declarado acima.

  

  

Quando recebemos um resultado cujo tipo desconhecemos, tipar com unknown é uma boa prática. Assim nos forçamos, mais adiante no código, a converter explicitamente o valor recebido para um tipo que conhecemos. Esse processo evita conversões implícitas e erros difíceis de capturar, ou seja, obtém uma tipagem segura.

  

O Type Assertion é uma ótima ferramenta para resolver situações como essa. Observe o exemplo abaixo, em que o compilador nos obriga a afirmar com todas as letras que o tipo desconhecido é um User:

  

![](https://lh3.googleusercontent.com/QlOv5TlnVkae-wwIj2UcB7ixcwAhmoRB4yvxUZPj-wcrwKvgE8W_qt2zKAbk_mKwOZ7XEDfq3LsZjMUa769nyC1176GvXnG4X8HvunKg3CDCB9kdsfqp3HiFXX7n0gN2mZg1R_btqGeNAy6Z3pAOTAA)

  

No exemplo acima, a tipagem foi sobrescrita ao chamar a função findById do banco de dados por meio do as User, permitindo à chave address ser adicionada posteriormente.

  

  

Agora, vamos refatorar o código para remover o Type Assertion e utilizar Type Annotation. Veja como fica:

  

![](https://lh6.googleusercontent.com/E6jEaCsozXSycmuu7BMXdx-iCAo_fYxSz3q0g5mpJbAbLK3aHqPrX_Ut5LKGl-BbhrULsOOvKswsFUFQUwnIEj1KbDrhuWQvH8lP80TTja5NyEeR6bcBzmqR8VDQx0Idy5sgC0aWEuspZ0vPLsihp6k)

  

Dessa forma, o Type Annotation identifica o pequeno deslize que estava sendo cometido. Agora, para corrigi-lo, basta adicionar o valor de addressNumber. Veja:

  

![](https://lh4.googleusercontent.com/FkbED0ocyI8KYWpphyNKIv7qFzs1O6LMVbpuFw4j4sFEUDXlMZegOjH_BgnYDcWWckLpwbXOb332M3ubWdGThZGeiqohC0qjakPXbbJSNNAgMaZh_e57h7hUkcMy0PtAP4D9CZZm6ifcaaG8GzS5BVs)

  

  

No entanto, esse recurso deve ser usado com cuidado!

  

Ele, afinal, pede ao compilador para não garantir a tipagem como normalmente faz. Isso, por definição, enfraquece a tipagem estática do programa. O poder do compilador alerta os erros que são muito difíceis de encontrar somente em tempo de execução.

  

  

Você só deve utilizar o Type Assertion se realmente souber a estrutura de tipo esperada para uma variável ou um objeto. Prefira sempre o uso das principais tipagens, como Annotation e Generics. Elas vão economizar seu tempo e te darão pontos em processos seletivos. Só use o Type Assertion se não tiver alternativa.

  

  

  

# Conclusão

  

  

O Generics é utilizado para construir e garantir códigos legíveis, seguros e com menos bugs. Além disso, o Generics torna esses códigos úteis para mais locais em sua aplicação. Com ele, você pode criar funções genéricas que podem manipular qualquer tipo de dado, mantendo a mesma lógica e garantindo sua tipagem.

  

  

  

Type Assertions e entendeu que eles são utilizados para forçar a tipagem, principalmente em códigos de transição do JavaScript para o TypeScript e para APIs externas. No entanto, estudou também que essa deve ser uma ferramenta utilizada somente se você souber bem o que está fazendo, porque ela deixa passar erros que a tipagem de outras formas não deixa.

  

  

Você precisará dos Generics para usar bibliotecas importantes para o desenvolvimento de APIs com TypeScript. Veremos mais informações sobre isso no próximo conteúdo!

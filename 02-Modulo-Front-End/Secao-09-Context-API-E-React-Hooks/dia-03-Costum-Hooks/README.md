# Custom Hooks

  

Criar Hooks customizados

  

### [OBJETIVO]

Caso você precise realizar muitas vezes a chamada da função fetch, você pode criar um Hook para fazer isso. Assim, você não precisa ficar repetindo o mesmo código, o que torna sua aplicação muito mais legível e organizada.

  
  
  

## Separando lógica e interface visual

  

O React é baseado em componentes, ou seja, uma pequena parte do código que pode ser reutilizada em vários lugares diferentes.

  
  

Um componente possui duas partes:

  

-   INTERFACE DE USUÁRIO: Elementos HTML, como, por exemplo, botões, inputs ou textos. São JSX
    

  

-   COMPORTAMENTO: a lógica que controla e faz a interação entre os elementos do componente.
    

  
  
  

Pense em uma aplicação onde um mesmo tipo de botão seja renderizado em vários lugares, podemos criar um componente <Button />, isolando sua lógica e interface de usuário, e reutilizá-los sem repetir códigos.

  
  

![](https://lh3.googleusercontent.com/EQub1HVOhmMwOg-4hJPUT6W8E-C1nIW9b4FEhvXzzNLVkAq8iCDEvycrP4RcPS65ycYAZe0gPVsgb3eocy9AC-GpVdEfS8pCdHqzXS3HuZbhGKR_TFPmSuzdtllWYwfuH5OubOCglMl_CeolKBju8GQ)

![](https://lh6.googleusercontent.com/jVxUMsvcsTlQRpVOhr7VLbxzFXdXAxolfM3t2OiMMUSoYVhZ02_a4acPaOY3TYQZl5qdew_g4NPmvDMxor5byUD145YGFAUnfP-5M8m4vHoUomFvX6FsKMFVuav6u3fRtTkGViMCWHuppwUcL7OKwco)

  

Entretanto, em muitos casos, queremos compartilhar apenas a lógica entre diferentes componentes, sem necessariamente compartilhar a interface de usuário.

  
  
  

AGORA COM OS CUSTOM HOOKS, PODEMOS REUTILIZAR LÓGICA ENTRE DIFERENTES COMPONENTES, SEM REPETIÇÃO DE CÓDIGO.

  
  

### Convenções

#### Nomenclatura

Devemos criar nossos Custom Hooks sempre iniciando com a palavra “use” (useMyCustomHook). “

  
  

### Custom Hooks só podem ser usadas dentro de funções React

[OBSERVAÇÃO] - Assim como os hooks padrão, um Custom Hook só pode ser usado dentro de funções React

  

-   Um Custom Hook deve utilizar outros hooks em sua lógica. Por exemplo, é bastante comum usarmos o useEffect ou o useState para gerenciar algum estado ou efeito dentro de um Custom Hook.
    

  
  
  

# Aplicação

  

Formulário simples contendo três campos, que, ao ser submetido, lança um alert na página.

![](https://lh3.googleusercontent.com/911FCq4dnjNW-OWGP-7-nXp46NnZUcaYzhTwA8BqIht5qsNALpw_BIFXIEUwXj4AGFN73b_V5QH_Quy8-5cAiRxtjZF65xj5zvzAfVZ566Xl2ILxMiuAxa1jaVbNbhtm5WAuIWKfOKni4HaxlBvttb0)

  

![](https://lh5.googleusercontent.com/GE7Q92S9WIi5aiZm9rrs-TsYD-HZTapyGRfuCoEk8TW1eVxAIks-AiplXA2l93hbpWCvPRrtjzynSlWi_0InDV8XgslWaDVu04G-0tl3U-mFlCxizWzbULRXmBBS0w558VxViyREoQ6MUAFmNYGaJJ8)

![](https://lh6.googleusercontent.com/WjFxvckY__4w4ax4k2ch3eKor_6e8QhNx1FG_4LV0cMgUTWzcYNzM4dsxXhsKgRT954-Mk5WGkGNYHeLSEOP78IMFuVYyb0QLKs6jNjTloWGbHShDGrvhAs7YCw-_jyKwoqhFZRYHIzUrDplk5oKUnQ)

![](https://lh4.googleusercontent.com/a7zVq-2maocXosfbNZekFAcU4cKuwq2E__Cqlm1SOqpOqJOc1zy974bcxlsA1iW9rn9iE5NlQGKSzLjizQVqL_QEI9E7S7Q0VCcEz-L4nDUIpLca02DNDMh66mTdj7iMzaCDt5Cwpkw7BED81mV1v4k)

  

Percebe que o código está repetindo a mesma lógica várias vezes no evento de onChange

Criamos trẽs funções diferentes para realizar a mesma ação: Armazenar o valor digitado no formulário no estado do componente.

  

Além de criar 3 estados.

![](https://lh5.googleusercontent.com/kfe9UuhGV-6QxkLxSf2QF21tvcNkEM8Xp2rIsYIwP-veXQBujIJ-Rzjufb_y2DU0hp9XF2y4Xw2Xr9RDGmq65zsulaUpVpw4ckTGru3oKP89pBXtLnpqmSz53GdEIJeBnFiG4REndWHP-67yMVgLesA)

  
  

# Custom Hook

### Adicionando um custom hook na aplicação do dia

  

Anteriormente, precisávamos criar um estado (useState) no componente App para controlar e armazenar os valores digitados nos inputs da aplicação.

  
  

-   Agora, com o nosso Custom Hook, queremos que ele cumpra a função de fazer todo esse gerenciamento, tanto do estado quanto das funções onChange do formulário.
    

  

Precisamos:

  

-   O argumento do nosso Hook Customizado seja o valor inicial do input;
    

  

-   O retorno do nosso Hook Customizado será o (value) e a função (onChange), que usaremos para controlar o input com React.
    

  
  

### Aplicação

  

![](https://lh6.googleusercontent.com/_8h9BZlbm2mez5IIv8aDSrlTXu5bM7oAEyVlQG-jXp7hnllIBLhwO6_dcDwRyZ3Fi24SuJrRFhlN1G-UULmK8L5-XY_xzYFWkxAfi2fIzmZawSfmxHQ0zM7Mm7YUVsPMwJVepBYQxUGGFKaHfApYKCs)

  

Repare que o Custom Hook useFormInput nos retorna um

objeto {

value: value,

onChange: handleChange }

  

que poderá ser utilizado no formulário do componente App como também em outros componentes:

  

-   A chave (value) será responsável por armazenar o valor digitado nos inputs
    
-   A chave onChange: será responsável por capturar e escrever na chave value os valores digitados no input
    

  
  

App

![](https://lh4.googleusercontent.com/T0SRix82B1NKRk4QaHVKjL_MvPKRkJYi9LHdVErLo2bMb3kSt3vNuGpF93HI7BJI24JNLO6HyLBCv-D06YG8G_ml7rU0PCzwuWn2dvDwr5gzs0fnNDdsT5ctUCNQuq_RpnWqt2d5qQD25JccGS_kI5M)

![](https://lh5.googleusercontent.com/jpnflaZ_gtFtUyyvL-NAT9HDLrSGAqBLvwTSJtsGGLntKSRCLuCIsLO7aNbAnlI8ZNuXLUuDD7YyYfQ5xwWWGJVouG2w6o4-hOiiMmBu1sOMl15mbDPDu7N3LNYtXFQQOvB1WAxXlLm4n3vlx2_pXBo)

  

Percebe que, com as alterações acima, não precisamos mais criar estados no componente App para gerenciar os valores do formulário.

  

Também não precisamos mais escrever uma função para cada input

  
  

[VANTAGEM]

-   Ter um Hook Customizado é que podemos reaproveitar a mesma lógica para diversos componentes, dessa forma, se precisarmos adicionarmos mais inputs no nosso formulário, podemos continuar usando o useFormInput..
// 1 - Crie o tipo Product com as seguintes propriedades:

type Product = {
  barcode: string;
  price: number;
}

// 2 - Utilize Type Assertion na função getProducts para resolver os erros de compilação. Esteja consciente de que está fazendo em um momento inadequado, pois não tem a chave price.

// function getProduct(){
//   const product = {} as Product;
//   product.barcode = '123c456b789a'; // Error: Property 'barcode' does not exist on type '{}'.
//   return product;
// }

// console.log(getProduct());



// 3 - Refatore o código anterior e remova o uso de Type Assertion. Utilize Type Annotation e veja o erro que será retornado.

// 4 - Corrija a função para utilizar a propriedade price.


function getProduct(): Product {
  const product: Product = {
    barcode: '123c456b789a',
    price: 12
  };
  return product;
}

console.log(getProduct());
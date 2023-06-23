// Aqui temos a nossa função com um tipo genérico. 
// Repare que esse tipo, como qualquer outro, pode vir como um array nos parâmetros
function countBreads<Type>(breads: Type[]): number {
  return breads.length;
}

type CommonBread = {
  name: string,
  alergenics: string[]
};

// ------------------

// PRIMEIRA OPÇÃO

const myBreadsAsStrings = ['Pão de sal', 'Pão doce'];
console.log(countBreads<string>(myBreadsAsStrings));

// ------------------

// SEGUNDA OPÇÃO 

const paoDeSal: CommonBread = {
  name: 'Pão de sal',
  alergenics: ['Gluten']
}

const paoDoce: CommonBread = {
  name: 'Pão doce',
  alergenics: ['Gluten']
}

const myBreads = [paoDeSal, paoDoce];

console.log(countBreads<CommonBread>(myBreads));


// FUNÇÕES COM PARÊMETROS GENERICOS 

function sendAlertAboutAllergens<BreadType, AllergensType>(
  breads: BreadType[],
  allergens: AllergensType[],
): string {
  return `Atenção! ${breads.join(' e ')} têm como alergênicos: ${allergens.join(', ')}`;
}

console.log(sendAlertAboutAllergens<string, string>(['Pão de sal', 'Pão doce'], ['Gluten']));

const allergensIds = [123, 445, 221];
console.log(sendAlertAboutAllergens<string, number>(['Pão de sal', 'Pão doce'], allergensIds));
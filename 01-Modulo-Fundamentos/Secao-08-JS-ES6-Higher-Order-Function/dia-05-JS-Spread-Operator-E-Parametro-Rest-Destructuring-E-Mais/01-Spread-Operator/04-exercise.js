// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'péssego', 'limão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'kiwi', 'banana'];


const fruitSalada = (fruit, addicionalFruit) => [...fruit, ...addicionalFruit];


console.log(fruitSalada(specialFruit, additionalItens));
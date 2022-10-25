const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]


//Ordem decrescente 

const array = [40, 100, 1, 5, 25, 10];
array.sort((a, b) => a + b);
console.log(array); // [1, 5, 10, 25, 40, 100]
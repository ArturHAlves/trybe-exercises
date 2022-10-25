const wakeUp = () => 'Acordando!!';

const timeCoffe = () => 'Bora tomar café!!';

const sleeping = () => 'Partiu dormir';


const doingThings = (callback) =>{
const result = callback();
console.log(result);
}

// Ao chamar a função doingThings:

doingThings(sleeping);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
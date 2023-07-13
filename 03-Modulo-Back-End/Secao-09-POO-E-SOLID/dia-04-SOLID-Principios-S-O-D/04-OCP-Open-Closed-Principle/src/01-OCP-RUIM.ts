// // ./src/index.ts

// ///...

// /* Fazemos a modificação da nossa função approvedStudents */
// const approvedStudents = ({ disciplines, school }: Student): boolean =>
//   disciplines.every(({ grade }) => (
//     school === 'Standard' ? grade >= 0.7 : grade >= 0.8
//   ));

// /* Abaixo temos o exemplo de execução com algumas adições */
// const studentsExample = [
//   {
//     name: 'Lee',
//     school: 'Standard',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.9 },
//     ],
//   },
//   {
//     name: 'Albus',
//     school: 'Hogwarts',
//     disciplines: [
//       { name: 'divination', grade: 0.8 },
//       { name: 'potions', grade: 0.9 },
//     ],
//   },
// ];

// setApproved(studentsExample);

// Essa solução funciona, mas não está boa! Nós tivemos que mudar nossa função para acrescentar o novo comportamento a ela! O que acontecerá quando surgir uma terceira escola? Talvez uma quarta, quinta, etc? 🤔

// Pois bem, conforme estabelecemos no início, o que o princípio aberto/fechado nos diz é que devemos ser capazes de estender um comportamento de uma função sem modificar seus comportamentos já existentes.

// Beleza, mas o que isso significa? Significa que você não deve precisar alterar trechos de código existentes para acrescentar um novo comportamento. Veja bem: quando um código funciona e está em produção numa aplicação enorme, queremos evitar mudar aquilo que já existe e funciona.

// Porém, todo código precisa ser atualizado com o tempo. Como podemos, então, atualizar o nosso código sem alterar o que já existe? 🤔 Buscando realizar a escrita de código de modo que, no futuro, possamos acrescentar comportamentos sem mudar os já existentes.
import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const trybeClube = new Clube();

// const quadraFutebol = new QuadraFutebol();

// trybeClube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date('2023-12-22');

// const reservarQuadraFutebol = trybeClube
//   .buscarQuadra<QuadraFutebol>(0)
//   .reservar(dataReserva);

// console.log(reservarQuadraFutebol);

// TENIS

const quadraTenis = new QuadraTenis();

trybeClube.adicionarQuadra(quadraTenis);

const reservarQuadraTenis = trybeClube
  .buscarQuadra<QuadraTenis>(0)
  .reservar(dataReserva);

console.log(reservarQuadraTenis);

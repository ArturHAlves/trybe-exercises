import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import ITenis from './interfaces/ITenis';
import normas from './normas/normasDeUso';

export default class QuadraTenis extends Quadra {
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReserva,
      regras: this.tenisData as unknown as ITenis,
    };
  }
}

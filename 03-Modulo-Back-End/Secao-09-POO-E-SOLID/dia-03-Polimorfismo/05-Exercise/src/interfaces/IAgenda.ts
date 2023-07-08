export default interface IAgenda<T> {
  protocolo: string;
  data: Date;
  regras: T;
}

export default class Person {
  protected MINIMUM_NAME_LENGTH = 3;

  protected MAXIMUM_AGE = 120;

  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string) {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve ter no mínimo ${this.MINIMUM_NAME_LENGTH} letras`);
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
    }
  }

}

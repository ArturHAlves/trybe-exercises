class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3)
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}

export default Subject;

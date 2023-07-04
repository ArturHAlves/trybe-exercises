class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notasProvas: number[] = Array();
  private _notasTrabalho: number[] = Array();

  constructor(
    matricula: string,
    nome: string,
    notasProvas: number[],
    notasTrabalho: number[]
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this.notasProvas = notasProvas;
    this.notasTrabalho = notasTrabalho;
  }

  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get notasProvas(): number[] {
    return this._notasProvas;
  }
  public set notasProvas(value: number[]) {
    if (value.length > 4 || value.length < 4) {
      throw new Error('A pessoa estudante deve possuir 4 notas de provas.');
    }

    this._notasProvas = value;
  }

  public get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }
  public set notasTrabalho(value: number[]) {
    if (value.length > 2 || value.length < 2) {
      throw new Error('A pessoa estudante deve possuir 2 notas de trabalhos.');
    }

    this._notasTrabalho = value;
  }

  somaNotas() {
    return [...this.notasProvas, ...this.notasTrabalho].reduce(
      (prev, curr) => prev + curr
    );
  }

  mediaNotas() {
    const somaNotas = this.somaNotas();
    const divider = this.notasProvas.length + this.notasTrabalho.length

    return Math.round(somaNotas / divider);
}
}

// Para testar!

const estudante1 = new Estudante('202001011', 'Artur', [4, 5, 4, 5], [1, 3]);

console.log(estudante1.mediaNotas());

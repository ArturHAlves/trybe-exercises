abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation = (character: Character) => {
    character.talk();
    character.specialMove();
  };
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Hi, I'm ${this._name}. I can attack from a long range.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

Character.characterPresentation(yoshi);

// yoshi.specialMove();
// samus.talk();
// samus.specialMove();

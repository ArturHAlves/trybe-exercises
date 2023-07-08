class Animals {
  declare turns: number;
  public makeSound(sound: string) {
      console.log('Som emitido:' + sound);
  }
}

class Dogs extends Animals {
  numberTurn(turns: number) {
      return turns;
  }

  makeSound( sound: string): void {
    const times = this.numberTurn(5);
    console.log(`Som emitido: ${sound}, ${times} vezes`);
  }
}

class Birds extends Animals {
  declare specie: string;

  makeSound (sound: string) {
    this.specie = 'pássaro';
      console.log(`O som emitido pelo ${this.specie} é ${sound}`);
  }
}

const dogs = new Dogs();
dogs.makeSound("au au au");

const birds = new Birds();
birds.makeSound("fiu fiu fiu fiu fiu");

//     Som emitido: au au au, 5 vezes
// O som emitido pelo pássaro é fiu fiu fiu fiu fiu
class Person {
  // Atributos
  name: string;
  height: number;
  weight?: number; // o caractere "?" indica um atributo opcional

  // Métodos 
  // Método Constructor
  constructor(n: string, h: number, w?: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
// aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
const p2 = new Person('João', 175);

// Acesso aos atributos
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);

// Acesso aos métodos
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 undefined
Maria: zzzzzzz
João: zzzzzzz
*/
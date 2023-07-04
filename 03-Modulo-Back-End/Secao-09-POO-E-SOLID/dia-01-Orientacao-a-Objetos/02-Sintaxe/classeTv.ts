class Tv {
  // Atributos
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  // Métodos
  // Método COnstructor
  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[]
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \n\
    available connections: ${this.connections}`);
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);

tv1.turnOn();

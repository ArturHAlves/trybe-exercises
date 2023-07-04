class Tv {
  // Atributos
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;

  // Métodos
  // Método COnstructor
  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[]
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn() {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\
    available connections: ${this._connections}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo
  }

  set connectedTo(value: string | undefined ) {
    if (!value || this._connectedTo?.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo = value);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);
tv1.turnOn();

tv1.connectedTo = 'Wi-fi'

console.log('Connected to: ', tv1.connectedTo);

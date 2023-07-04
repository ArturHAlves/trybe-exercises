class SuperClass {
  constructor(public isSuper = true) {}

  protected sayHello() {
    console.log('Olá, mundo');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }

  public sayHello2() {
    this.sayHello();
  }
}

function myFunction(object: SubClass) {
  object.sayHello2();

  console.log(object.isSuper ? 'Super!' : 'Sub!');
}

// const sup = new SuperClass();
const sub = new SubClass();

// myFunction(sup);
myFunction(sub);

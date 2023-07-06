interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

const myObject = new MyClass(2)
console.log(myObject);
console.log(myObject.myNumber);
console.log(myObject.myFunc(2));



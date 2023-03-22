console.log('Calculator');

class Calculator {
  constructor(num_1, operation, num_2) {
    this.num_1 = num_1;
    this.operation = operation;
    this.num_2 = num_2;
    this.result = '';
    this.error = 'No error';
    this.PI = 3.141592653589793;
    this.E = 2.718281828459045;
  }
  //getter
  get pi() {
    return this.PI;
  }
  get e() {
    return this.E;
  }

  calculate() {
    if (typeof this.num_1 !== 'number' || typeof this.num_2 !== 'number') {
      this.error = 'Invalid value. Must be a number';
      this.result = 'operation error';
      console.log(`${this.result}, ${this.error}`);
      return;
    }

    if (this.operation == '/' && this.num_2 == 0) {
      this.error = 'The second number cannot be 0 in division!!!';
      this.result = 'operation error';
      console.log(`${this.result}, ${this.error}`);
      return;
    }

    switch (this.operation) {
      case '+':
        this.result = this.num_1 + this.num_2;
        break;

      case '-':
        this.result = this.num_1 - this.num_2;
        break;

      case '*':
        this.result = this.num_1 * this.num_2;
        break;

      case '/':
        this.result = this.num_1 / this.num_2;
        break;

      case '%':
        this.result = this.num_1 % this.num_2;
        break;

      case '^':
        this.result = this.num_1 ** this.num_2;
        break;

      case 'rt':
        this.result = Math.round(this.num_1 ** (1/this.num_2));
        break;

      case 'per':
        this.result = `${(this.num_1 / this.num_2) * 100}%`;
        break;

      default:
        this.error = `'${this.operation}' Not a defined operation`;
        this.result = 'operation error';
        break;
    }

    console.log(`${this.num_1} ${this.operation} ${this.num_2} = ${this.result}, ${this.error}`);
  }
}

let operation_1 = new Calculator(80, '+', 5);
console.log(operation_1.pi);
console.log(operation_1.e);
operation_1.calculate();
console.log('*******');

let operation_2 = new Calculator(80, '-', 5);
operation_2.calculate();
console.log('*******');

let operation_3 = new Calculator(80, '/', 5);
operation_3.calculate();
console.log('*******');

let operation_4 = new Calculator(80, '*', 5);
operation_4.calculate();
console.log('*******');

let operation_5 = new Calculator('80', '+', 5);
operation_5.calculate();
console.log('*******');

let operation_6 = new Calculator(80, '+', 'aa');
operation_6.calculate();
console.log('*******');

let operation_7 = new Calculator(80, '/', 0);
operation_7.calculate();
console.log('*******');

let operation_8 = new Calculator(80, '++', 5);
operation_8.calculate();
console.log('*******');

let operation_9 = new Calculator(3, '^', 5);
operation_9.calculate();
console.log('*******');

let operation_10 = new Calculator(13, '%', 5);
operation_10.calculate();
console.log('*******');

let operation_11 = new Calculator(3, 'per', 12);
operation_11.calculate();
console.log('*******');

let operation_12 = new Calculator(125, 'rt', 3);
operation_12.calculate();
console.log('*******');

let operation_13 = new Calculator(36, 'rt', 2);
operation_13.calculate();
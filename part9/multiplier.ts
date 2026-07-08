const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText,  a * b);
}

// Now want to expand calculator to accept input add, multiply, divide. We can define type for that
type Operation = 'multiply' | 'divide' | 'add';

const calculator = (a: number, b: number, op: Operation): number => {
  if (op === 'multiply') {
    return a * b;
  } else if (op === 'add') {
    return a + b;
  } else if (op === 'divide') {
    if (b === 0) return 'can\'t divide by 0!';
    return a / b;
  }
}

calculator(1,3,"yolo")
const name: string = "Smit";

function greet(userName: string): string {
  return `Hello, ${userName}!`;
}

console.log(greet(name));


const num1: number = 10;
const num2: number = 20;

function add(a: number, b: number): number {
  return a + b;
}

console.log("Addition:", add(num1, num2));
// Type Annotations: tell typescript which is the type of a variable
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let thuths: boolean[] = [true, false, true];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function 
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// Type Inference: let typescript figure outs which is the type of a variable
let geralt = 'Hm';

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initializate ir later
let words = ['red', 'green', ' blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

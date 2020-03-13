let oneDimensionArray: string[] = [];
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

let twoDimensionsArray: string[][] = [];
const carsByMake = [
  ['f150', 'fusion'],
  ['corolla'],
  ['camaro', 'corvette']
];

// Help with inference when extracting values
const aCar = carMakers[0];
const otherCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2020-01-16');
importantDates.push(new Date());
importantDates.push(100);


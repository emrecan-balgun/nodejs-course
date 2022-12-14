// Description: This program calculates the area of a circle with a given radius
const arguments = process.argv[2];

const radius = parseInt(arguments);

const area = Math.PI * (radius * radius);

console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);
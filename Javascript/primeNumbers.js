// Description: This program shows all the prime numbers between two numbers
const arguments = process.argv.slice(2);
const lowNumber = parseInt(arguments[0]);
const highNumber = parseInt(arguments[1]);

function showPrimeNumbers(lowNumber, highNumber) {
    for(let i = lowNumber; i <= highNumber; i++) {
        let isPrime = true;
        if(i === 1) {
            isPrime = false;
        }
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            console.log(`${i} is a prime number`);
        }
    }
}

showPrimeNumbers(lowNumber, highNumber);
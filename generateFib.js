const fs = require('fs');

function generateFibonacci(limit) {
    const fibonacci = [0,1];
    let next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    while (next <= limit) {
        fibonacci.push(next);
        next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }
    return fibonacci;
}

function saveFibonacciToFile(limit, filename) {
    const fibonacci = generateFibonacci(limit);
    fs.writeFileSync(filename, fibonacci.join(', '), 'utf8');
}

module.exports = { generateFibonacci, saveFibonacciToFile };

const { generateFibonacci, saveFibonacciToFile } = require('./fibonacci');
const fs = require('fs');

// test('Fibonacci functions', () => {
//    // generateFibonacci(10) -> [0, 1, 1, 2, 3, 5, 8]
//    expect(generateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
   
//    // generateFibonacci(0) -> [0]
//    expect(generateFibonacci(0)).toEqual([0, 1]);
   
//    // generateFibonacci(3) -> [0, 1, 1, 2, 3]
//    expect(generateFibonacci(3)).toEqual([0, 1, 1, 2, 3]);
   
//    // saveFibonacciToFile test
//    saveFibonacciToFile(10, 'test.txt');
//    const fileContent = fs.readFileSync('test.txt', 'utf8');
//    expect(fileContent).toBe('0, 1, 1, 2, 3, 5, 8');
// });
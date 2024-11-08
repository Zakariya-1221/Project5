document.addEventListener('DOMContentLoaded', () => {
    //get input
    const input = document.getElementById('input');

    //function to clear the input
    function clearInput() {
        input.value = '';
        console.log('Input cleared');
    }

    //function to append numbers to display
    function appendNumber(n) { //value is the number
        input.value += n;
        console.log('Number appended');
    }

    //function to append operators to display
    function appendOperator(operator) { //value is the operator
        input.value += `${operator}`;
        console.log('Operator appended');
    }

    //function to calculate the expression on the display
    function calculate() {
        input.value = eval(input.value);
        console.log('Expression calculated');
    }

    //function to display current value
    function getCurrentValue() {
        return input.value;
        console.log('Current value displayed');
    }

    //function for log
    function log() {
        const a = prompt('Enter the number');
        const base = prompt('Enter the base');
        input.value = Math.log(a, base);
        console.log('Log calculated');
    }

    function exponent() {
        let num = parseFloat(prompt('Enter the number'));
        let power = parseFloat(prompt('Enter the power'));

        if (power === 0){
            input.value = 1;
        }
        if (num === 0 && power < 0){
            throw new Error("Zero raised to a negative exponent!")
        }
    
        let result = 1
        if (power < 0){
            let newNum = 1.0 / num
            power = -power
            for (let i = 0; i < power; i++){
                result = result * newNum
            }
        }
        else {
            for (let i = 0; i < power; i++){
                result = result * num
            }
        }
    
        input.value = result;
        console.log('Exponent calculated');
    }

    //function for factorial
    function factorial() {
        const n = prompt('Enter the number');
        fact = 1;
        if (n === 0 || n === 1) {
            return 1;
        } else {
            for (i = 1; i <= n; i++) {
                fact = fact * i;
            }
            input.value = fact;
        }
        console.log('Factorial calculated');
    }

    //function for percentage
    function percentage() {
        const a = prompt('Enter the number');
        const b = prompt('Enter the total number');
        input.value = (a / b) * 100;
        console.log('Percentage calculated');
    }

    //function for median
    function median() {
        const arr = prompt('Enter the numbers separated by commas').split(',').map(Number);
        arr.sort(function(a, b) {
            return a - b;
        });
        const n = arr.length;
        if (n % 2 === 0) {
            input.value = (arr[n / 2 - 1] + arr[n / 2]) / 2;
        } else {
            input.value = arr[Math.floor(n / 2)];
        }
        console.log('Median calculated');
    }

    function absolute() {
        let num = parseFloat(prompt('Enter the number '));
        if (num < 0) {
            num = num * -1;
        }

        input.value = num;
    }


    function squareRoot() {
        let a = prompt('Enter the number');
        input.value = Math.sqrt(a);
        console.log('Square root calculated');
    }

    function cubeRoot() {
        let a = prompt('Enter the number');
        input.value = Math.cbrt(a);
        console.log('Cube root calculated');
    }

    //function for list of prime numbers upto a certain number
    function primeList() {
        const n = prompt('Enter the number');
        const arr = [];

        for (var i = 2; i <= n; i++) {
            var isPrime = true;
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                arr.push(i);
            }
        }
        input.value = arr;
        console.log('Prime numbers calculated');
    }


    function generateEvenList() {
        const start = prompt('Enter the start number');
        const end = prompt('Enter the end number');
        const arr = [];

        for (var i = start; i <= end; i++) {
            if (i % 2 === 0) {
                arr.push(i);
            }
        }
        input.value = arr;
        console.log('Even numbers generated');
    }

    function generate_square_file() {
        const start = prompt('Enter the start number');
        const end = prompt('Enter the end number');
        const arr = [];

        for (var i = start; i <= end; i++) {
                arr.push(i**2);
            }
        input.value = arr;
        console.log('Even numbers generated');
    }
        
        
    
    //function to convert infix expression to postfix expression
    function infixPostfix(infix) {

        const postfix = [];
        const stack = [];
        const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };
        for (var i = 0; i < infix.length; i++) {
            if (!isNaN(infix[i])) {
                postfix.push(infix[i]);
            } else if (infix[i] === '(') {
                stack.push(infix[i]);
            } else if (infix[i] === ')') {
                while (stack[stack.length - 1] !== '(') {
                    postfix.push(stack.pop());
                }
                stack.pop();
            } else {
                while (precedence[infix[i]] <= precedence[stack[stack.length - 1]]) {
                    postfix.push(stack.pop());
                }
                stack.push(infix[i]);
            }
        }
        while (stack.length) {
            postfix.push(stack.pop());
        }


        return postfix;
    }

    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.calculate = calculate;
    window.clearInput = clearInput;
    window.getCurrentValue = getCurrentValue;
    window.log = log;
    window.factorial = factorial;
    window.percentage = percentage;
    window.median = median;
    window.primeList = primeList;
    window.absolute = absolute;
    window.squareRoot = squareRoot;
    window.cubeRoot = cubeRoot;
    window.generateEvenList = generateEvenList;
    window.generate_square_file = generate_square_file;
    window.exponent = exponent;
});
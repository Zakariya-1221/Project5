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

});
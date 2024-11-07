function tokenize(expression) {
    // Remove all whitespace characters from the expression
    const expressionWithoutSpaces = expression.replace(/\s+/g, '');

    // Use a regular expression to scan for numbers, operators, and parentheses
    const tokens = expressionWithoutSpaces.match(/\d+|\+|\-|\*|\/|\(|\)/g);

    // Return the array of tokens
    return tokens;
}

const expression = "3 + 5 * (2 - 8)";
const tokens = tokenize(expression);
console.log(tokens); 
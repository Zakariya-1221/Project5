function decimalToHexadecimal(decimal) {
    return decimal.toString(16);
}

module.exports = decimalToHexadecimal;

// test('decimalToHexadecimal', () => {
//     // 4 -> '4'
//     expect(decimalToHexadecimal(4)).toBe('4');
    
//     // 0 -> '0' 
//     expect(decimalToHexadecimal(0)).toBe('0');
    
//     // 7 -> '7'
//     expect(decimalToHexadecimal(7)).toBe('7');
    
//     // -3 -> '-3'
//     expect(decimalToHexadecimal(-3)).toBe('-3');
//  });
function decimalToOctal(decimal) {
    return decimal.toString(8);
}

module.exports = decimalToOctal;

// test('decimalToOctal', () => {
//     // 4 -> '4'  
//     expect(decimalToOctal(4)).toBe('4');
    
//     // 0 -> '0'
//     expect(decimalToOctal(0)).toBe('0');
    
//     // 7 -> '7'
//     expect(decimalToOctal(7)).toBe('7');
    
//     // -3 -> '-3' 
//     expect(decimalToOctal(-3)).toBe('-3');
//  });
function decimalToBinary(decimal) {
    return decimal.toString(2);
}

module.exports = decimalToBinary;

// test('decimalToBinary', () => {
//     // 4 -> '100'
//     expect(decimalToBinary(4)).toBe('100');
    
//     // 0 -> '0'
//     expect(decimalToBinary(0)).toBe('0');
    
//     // 7 -> '111'
//     expect(decimalToBinary(7)).toBe('111');
    
//     // -3 -> '-11'
//     expect(decimalToBinary(-3)).toBe('-11');
// });
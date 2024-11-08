function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

module.exports = fahrenheitToCelsius;

// test('fahrenheitToCelsius', () => {
//     // 32 -> 0
//     expect(fahrenheitToCelsius(32)).toBe(0);
    
//     // 0 -> -17.77777777777778
//     expect(fahrenheitToCelsius(0)).toBe(-17.77777777777778);
    
//     // 212 -> 100
//     expect(fahrenheitToCelsius(212)).toBe(100);
    
//     // -40 -> -40  (interesting case: -40 is same in both scales!)
//     expect(fahrenheitToCelsius(-40)).toBe(-40);
//  });
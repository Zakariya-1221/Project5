function maximum(data) {
    if (data.length === 0) return null;
    return data.reduce((max, val) => (val > max ? val : max), data[0]);
}

module.exports = maximum;

// test('maximum', () => {
//     // [4, 2, 7, 1] -> 7
//     expect(maximum([4, 2, 7, 1])).toBe(7);
    
//     // [0] -> 0
//     expect(maximum([0])).toBe(0);
    
//     // [-7, -2, -3] -> -2
//     expect(maximum([-7, -2, -3])).toBe(-2);
    
//     // [] -> null
//     expect(maximum([])).toBe(null);
//  });
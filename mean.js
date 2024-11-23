function mean(data) {
    if (data.length === 0) return 0;
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
}

module.exports = mean;

// test('mean', () => {
//     // [4, 2, 7, 1] -> 3.5  (sum = 14, count = 4)
//     expect(mean([4, 2, 7, 1])).toBe(3.5);
    
//     // [0] -> 0  (single element case)
//     expect(mean([0])).toBe(0);
    
//     // [-2, 2] -> 0  (positive and negative numbers)
//     expect(mean([-2, 2])).toBe(0);
    
//     // [] -> 0  (empty array)
//     expect(mean([])).toBe(0);
//  });
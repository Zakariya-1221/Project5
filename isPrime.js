function isPrime(x) {
    if (x < 2) {
        return false;
    }
    let root = Math.sqrt(x);
    for (let i = 2; i <= root; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(72)); // false
console.log(isPrime(73)); // true
console.log(isPrime(63)); // false

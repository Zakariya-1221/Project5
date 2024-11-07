function exponent(num, power){
    if (power == 0){
        return 1
    }
    if (num == 0 && power < 0){
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


    return result
}

console.log(exponent(2, 3)) // 8
console.log(exponent(3, -3)) // 0.03703703703
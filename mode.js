function mode(arr){
    const map = {};
    for (const i of arr) {
        if (map.hasOwnProperty(i)) {
            map[i] += 1;
        } else {
            map[i] = 1;
        }
    }

    let mode = 0;
    let index = 0;

    for (const key in map) {
        const value = map[key];
        if (value > mode) {
            mode = value;
            index = key;
        }
    }
    
    return index;
}

let arr = [1,3,4,3,2,2,2];
console.log(mode(arr)); // 2

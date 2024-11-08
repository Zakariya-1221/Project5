function minimum(arr){
    let min = arr[0];
    let len = arr.length;
    for(let i = 1; i < len; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

let arr = [5, 4, 3, 2, 1]
console.log(minimum(arr));

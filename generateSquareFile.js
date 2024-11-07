// #This function Generate square numbers within a specified range and save them to a file.
const fs = require('fs')
function generate_square_file(start, end){
    const file = fs.createWriteStream('generateSquareFile.txt', {flag: 'w'})
    for (let i = start; i < end + 1; i++){
        file.write(i**2 + '\n')
    }
    file.end()
}

generate_square_file(1, 5) //1, 4, 9, 16, 25
generate_square_file(1, 1) //1
generate_square_file(1, 10) //1, 4, 9, 16, 25, 36, //49, 64, 81, 100
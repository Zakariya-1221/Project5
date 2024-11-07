// This function Generates even numbers within a specified range and save them to a file.
const fs = require('fs')
function generate_even_file(start, end){
    const file = fs.createWriteStream('generateFile.txt', {flag: 'w'})
    for (let i = start; i < end; i++){
        if (i % 2 == 0){
          file.write(i + '\n')
        }
    }
    file.end()
}

generate_even_file(1, 10) //2, 4, 6, 8, 10
generate_even_file(1, 1) //empty file
generate_even_file(1, 5) //2, 4
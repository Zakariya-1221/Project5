const fs = require('fs')
function oddNums(x1,x2){
    let num,num2;
    if (x1 <= x2){
        num = x1;
        num2 = x2;
    }else{
        num = x2;
        num2 = x1;
    }
    const file = fs.createWriteStream('oddNumbers.txt', {flag: 'w'})
    for (let i = num; i <= num2; i++){
        if (i % 2 === 1){
            file.write(i + '\n');
        }
    }
    file.end();
}

oddNums(15,1);
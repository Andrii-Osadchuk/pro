const arr = [];
let keyWhile = true;
let numberArray;

do {

    numberArray = prompt(`Enter length of the array: min 2 - max 10`);

    if (numberArray) {

        if(isNaN(Math.abs(numberArray)) || Math.abs(numberArray) === 0) keyWhile = true;
        else {
            numberArray = Math.round(numberArray);            
            keyWhile = (numberArray < 2 || numberArray > 10) ? keyWhile = true : keyWhile = false;
        }
    }
} while (keyWhile)

// let randomValue;

for(let i = 1; i <= numberArray; i++) {

    arr.push(Math.round(Math.random() * 10));

    // randomValue = Math.round(Math.random() * 10)
    // arr[arr.length] = randomValue;
}

console.log(arr);

let total = 1;

for( let x = 0; x < arr.length; x++) {

    console.log(`${arr[x]}`);

    total *= arr[x];

    if(arr[0] === 0) arr[0] = arr[0 + 1];   // Написав цю строку, так як один раз arr[0] = 0
                                            //і все що множилось на 0 було в результаті 0.
                                            // Якщо добуток 0 це нормально, то ця строка не потрібна
}

console.log(total);

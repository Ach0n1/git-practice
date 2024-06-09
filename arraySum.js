var array = [1,5,2,51,32,12];

function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum;
}

console.log(sumArray(array))
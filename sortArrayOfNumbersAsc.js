var arrayOfNumbers = [1, 2, 52, 12, 32, 22, 43]

function sortArrayAsc(arrayOfNumbers){
    return arrayOfNumbers.sort((a,b) => a-b)
}


console.log(sortArrayAsc(arrayOfNumbers))
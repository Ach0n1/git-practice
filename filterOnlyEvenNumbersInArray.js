array = [1,21,53,4,32,92,75,84]

function filterEvenNumbers(array){
    return array.filter(num => num % 2 ===0)
}

console.log(filterEvenNumbers(array))

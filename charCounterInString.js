var string = 'AlEkSaNdAr';

function charCounter(string){
    let counter = {};
    for(let i=0; i<string.length; i++){
        if (string[i].toLowerCase() in counter) counter[string[i].toLowerCase()]++;
        else counter[string[i].toLowerCase()]=1
    }
    return counter
}

console.log(charCounter(string))
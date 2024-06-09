var array = [1,5,2,1922,53,284]


function maxNumberInArray(a){
    // let max = 0;
    // for (let i=0; i<a.length; i++){
    //     if (a[i] > max) max = a[i];
    // }
    return Math.max(...a) //spread operator
}

console.log(maxNumberInArray(array))
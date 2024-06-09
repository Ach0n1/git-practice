var a = 'ceca'
var b = 'deca'

function substring(a,b){
    let substring = "";
    for (let i=0; i<a.length; i++){
        for(let j=0; j<b.length; j++){
            if (a[i] == b[j]){
                substring += a[i];
                b = b.replace(b[j],"")
                break;
            }
        }
    }
    console.log(substring)
}

substring(a,b)
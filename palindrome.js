var word = "pavle"

function isPalindrome(word) {

    // wordArrayOfChar = word.split('');
    // wordArrayOfChar = wordArrayOfChar.reverse();
    // reversedWord = wordArrayOfChar.join('');

    // if (word === reversedWord) return true;
    // else return false;


    return word === word.split('').reverse().join('')
    
} 

console.log(isPalindrome(word))





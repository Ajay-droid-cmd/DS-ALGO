// Function to count all vowel in a string
function Vowelcount(word){
    function isVowel(ch){
        ch= ch.toUpperCase();
        return ch == "A" || ch =="E" || ch =="I" || ch == "O" || ch =="U" ;
    }
    
    let count = 0;
    for(let i= 0;i< word.length; i++){
        if(isVowel(word[i])){
            count++
        }
    }
    return count;
}

// Driver Function
let word ="This is A teSTing"
console.log(Vowelcount(word))

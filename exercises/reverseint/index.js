// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    string = n.toString()
    if(Math.sign(n)!= -1){
        return parseInt(string.split('').reverse().join(''))
    }else{
        return -(parseInt(string.substring(1).split('').reverse().join('')))
    }
}

module.exports = reverseInt;

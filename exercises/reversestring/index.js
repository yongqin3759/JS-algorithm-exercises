// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strArr = str.split('');
    let reverseStr = ''
    reverseStr = strArr.reduce((reversedString, strElement) =>{
        return strElement + reversedString;
    }, reverseStr)
    return reverseStr
}

module.exports = reverse;

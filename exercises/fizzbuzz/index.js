// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    const sound = {
        fizz: 3,
        buzz: 5
    }

    let printedSound=''

    for(let i=1; i<=n; i++){
        let printedSound=''
        if(i%sound.fizz===0&& i%sound.buzz === 0){
            printedSound += 'fizzbuzz'
        }else if(i%sound.fizz===0){
            printedSound += 'fizz'
        }
        else if(i%sound.buzz===0){
            printedSound += 'buzz'
        }else{
            printedSound = i
        }
        console.log(printedSound)
    }
}


module.exports = fizzBuzz;

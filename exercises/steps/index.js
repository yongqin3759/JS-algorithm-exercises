// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for(let i = 1; i <= n; i++){
        let str = ''
        let j = n;
        while(j>0){
            if(j>i){
                str+=' '
            }
            else if(j<=i){
                str+='#'
            }
            j--
        }
        console.log(str.split('').reverse().join(''));
    }
}

module.exports = steps;

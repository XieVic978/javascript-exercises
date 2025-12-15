const repeatString = function(string, number) {
    let letter = ''
    for(let i =number; i>0;i--){
        
        letter +=string
    }
    return letter
};

console.log(repeatString('hey',3))


// Do not edit below this line
module.exports = repeatString;




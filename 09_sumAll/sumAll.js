const sumAll = function(num1, num2) {
    let total
    let idx = num1
    let jdx = num2
    if(num1 < num2){
        total = 0
        while(idx < num2+1 ){
            total+=idx
            idx++
        }
        return total
    }else if(num2<num1){
        total = 0
        while(jdx> num1-1){
            total+=jdx
            jdx--
        }
        return total

    }else{
        return 'breh'
    }
        

}




// Do not edit below this line
module.exports = sumAll;

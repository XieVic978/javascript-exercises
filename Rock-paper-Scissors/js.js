function sumOfTripledEvens(array) {

    const filterArray = array.filter((num)=>num%2===0);
    const mapArray = filterArray.map((num)=>num*3)
    const reduceArray = mapArray.reduce((accumulator,currentVal)=>accumulator+currentVal)
    return reduceArray
}


array = [1,2,3,4,5,6]
console.log(sumOfTripledEvens(array))


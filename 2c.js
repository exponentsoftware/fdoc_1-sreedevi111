//write a function, reverseArray. The  reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

function reverseArray(array){
    let newArr = [];
    while(array.length>0){
        newArr.push(array.pop())
    }
    return newArr
}

console.log(reverseArray(["A", "B", "C"]));
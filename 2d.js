//Write a function which check if items of an array are unique?

function checkUniqueness(array){
    return [...new Set(array)].length === array.length
}

console.log(checkUniqueness([1, 4, 6, 2, 9, 9]))
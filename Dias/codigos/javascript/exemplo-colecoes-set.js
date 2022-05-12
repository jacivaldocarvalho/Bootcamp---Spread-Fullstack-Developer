const myArray = [50, 50, 60, 2, 500, 1024, 999];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    // usa-se o argumento spred (...). Tornando-se um elemento em array.
    return [...mySet];
}

console.log(valoresUnicos(myArray));
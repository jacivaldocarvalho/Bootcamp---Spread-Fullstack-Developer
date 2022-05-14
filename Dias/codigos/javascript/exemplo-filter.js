//Retorna valores pares de um array usando o método filter.
function filtraPares(arr){
    return arr.filter(function retPares(item){
        return item % 2 === 0;
    })
}

const arr = [5, 10, 200, 2, 350];

console.log('O número pares do array são ->',filtraPares(arr))
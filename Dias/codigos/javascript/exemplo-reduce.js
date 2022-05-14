// Cria um somador dos items de um array usando reduce.

function somaItemArray(arr){
    return arr.reduce( function(anterior, valorCorrente){
            return anterior + valorCorrente;
        }, 0); // anterior inicia em 0
}

const arr = [0, 4, 6, 10];

console.log(somaItemArray(arr));

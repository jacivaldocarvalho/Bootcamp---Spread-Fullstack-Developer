//Cria função que rebece um array e multiplica os item por 2 e cria um novo array
function mapSemThis(arr){ 
    return arr.map(function (item){
        return item*2;
    })
}

const nums = [4, 8, 12, 50];

console.log('Array criado com o map ->',mapSemThis(nums));
console.log('Array original ->',nums);
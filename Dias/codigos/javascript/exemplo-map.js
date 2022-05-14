// Com o uso de this
// cria dois objetos (alunos e professores)
const alunos = {
    value: 10
}

const professores = {
    value: 3
}

// cria a função que recebe um array e multiplica os item com o value dos objetos criados.
function mapComThis(arr, thisArg){
    return arr.map(function (item){
        return item * this.value;
    }, thisArg);
}


const numbers = [1,2];

console.log('this -> alunos', mapComThis(numbers, alunos));
console.log('this -> professores', mapComThis(numbers, professores));
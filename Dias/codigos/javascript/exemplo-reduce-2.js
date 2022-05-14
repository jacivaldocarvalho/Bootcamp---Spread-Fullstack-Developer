// Cria uma função que recebe o saldo e uma lista de objetos, e retorna o saldo conforme os valores dos preços.
const listaProdutos = [
    {
        name: 'notebook',
        preco: 2000,
    },

    {
        name: 'mouse',
        preco: 50,
    },

    {
        name: 'teclado',
        preco: 55,
    },
];

let saldoDisponivel = 1500;

function calculaSaldo(saldoDisponivel, listaProdutos){
    return listaProdutos.reduce(function(anterior, valorCorrente){
        return anterior - valorCorrente.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, listaProdutos));



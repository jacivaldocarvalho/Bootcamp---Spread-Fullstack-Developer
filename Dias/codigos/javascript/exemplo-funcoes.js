const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 3,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(arr, media){
    let arrAprovados = [];

    for(let i=0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            arrAprovados.push(arr[i].nome);
        }
    }

    return arrAprovados;

}

console.log(alunosAprovados(alunos,5));
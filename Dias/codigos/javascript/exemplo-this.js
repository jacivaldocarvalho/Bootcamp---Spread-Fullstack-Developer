function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Junior",
    idade: 31
}

const pessoa2 = {
    nome: "Samuel",
    idade: 3
}

const pessoa3 = {
    nome: "Maria",
    idade: 60
}

// usando call
console.log(calculaIdade.call(pessoa2,20));
// usando apply
console.log(calculaIdade.apply(pessoa2,[20]));
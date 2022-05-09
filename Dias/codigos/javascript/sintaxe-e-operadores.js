function comparaNumeros(num1, num2){
    if(!num1 || !num2) return 'Defina dois números!!';

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    return `${primeiraFrase} ${segundaFrase}`    
}

function criaPrimeiraFrase(num1,num2){
    let saoIguauis=''

    if(num1!==num2){
        saoIguauis='não';
    }

    return `Os números ${num1} e ${num2} ${saoIguauis} são iguais.`
}

function criaSegundaFrase(num1,num2){
    const soma = num1+num2;
    
    let result10 = 'menor';
    let result20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        result10 = 'maior';
    }
    if(compara20){
        result20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`;

}

console.log(comparaNumeros(30,30))
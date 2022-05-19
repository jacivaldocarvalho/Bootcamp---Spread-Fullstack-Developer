// Função que recebe um array e um número e realiza validações usando throw, try/catch.
function validaArray(arr, num){
    try {
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if(typeof arr !== 'object')
            throw new TypeError('Array precisa ser do tipo object');

        if (typeof num!== 'number')
            throw new TypeError('Num precisa ser do tipo number');
    
        if(arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    } catch (error) {

        if(error instanceof ReferenceError){
            console.log('Este erro é um ReferenceError!');
        }else if(error instanceof TypeError){
            console.log('Este erro é um typeof');
        } else if(error instanceof RangeError){
            console.log('Este erro é um RangeError');
        } else {
            console.log("Tipo de erro não esperado:" + error)
        }
    }
}


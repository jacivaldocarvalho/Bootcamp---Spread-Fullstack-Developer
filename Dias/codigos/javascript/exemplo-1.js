
// Cria array para receber os números pares.
let evenNums = [];

// Cria função que identififca se um elemento de um array é par.
function returnEvenValues(array){
    for(let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        } else{
            console.log(`${array[i]} é impar!!`);
        }
    }

    console.log('Os números pares são:',evenNums);    
}

// Cria o array.
let array = [1,2,3,4,5,6,7,8,9,10];

// Chama a função.
returnEvenValues(array);
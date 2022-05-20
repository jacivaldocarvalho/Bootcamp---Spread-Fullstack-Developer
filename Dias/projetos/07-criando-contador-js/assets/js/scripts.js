/*
Autor: Jacivaldo Carvalho

Script incrementa e decrementa o contador conforme o botão é apertado. 
Se for negativo a cor do número muda para vermelho. 

*/

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById('increment').addEventListener("click",increment);
document.getElementById('decrement').addEventListener("click",decrement);


function increment(){
    currentNumber =  currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    status_negative(currentNumber);
}

function decrement(){
    currentNumber =  currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    status_negative(currentNumber);
}

function status_negative(currentNumber){
    var currentNumberCor;
    if(currentNumber < 0){
        currentNumberCor = document.getElementById('currentNumber');
        currentNumberCor.style.color='red';
    }else{
        currentNumberCor = document.getElementById('currentNumber');
        currentNumberCor.style.color='white';
    }
}
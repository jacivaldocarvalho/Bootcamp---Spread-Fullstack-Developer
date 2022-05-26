import {useState} from 'react';

function SmartCounter(){
    /*
        Retorna um vetor
        1. variavel stateful;
        2. Função amarrada a essa variável que atualiza esse valor.
    */

    const [quantity, upQuantity] = useState(0);

    return(
        <>
            <h1>{quantity}</h1>
            <button 
                onClick={() => upQuantity(quantity + 1)}> Adicionar </button>
        </>
    )
}

export default SmartCounter;
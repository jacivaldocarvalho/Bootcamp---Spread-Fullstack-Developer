import React, {useState, useEffect} from 'react';
import '../Ifoodcounter/Ifoodcounter.css';


export default function Ifoodcounter() {
    const [value, setValue] = useState(0);
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active');

    useEffect(() => {
        
        console.log(`Botão alterado para ${buttonStyle}`);
    }, [buttonStyle]);

    function up(){
        setValue (value+ 1);
        setButtonStyle('counter-button-minus-active');
    }
    function down(){
        if(value > 0){
            setValue (value- 1);
        }else{
            setButtonStyle('counter-button-plus-desactive');
        }
    }


  return (
    <div className='countex-wrapper'>
        <button
            className={buttonStyle}
            onClick={down}
        >
            -
        </button>
        <p> {value} </p>
        <button
            className='counter-button-plus-active'
            onClick={up}
        >
            +
        </button>

        <button>

        </button>
    </div>
  )
}

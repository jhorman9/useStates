import React, { useState } from 'react';

const ChangeColor = () => {

    const [change, setChange] = useState(true)
    let changeColor = () =>{
        setChange(!change) //Siempre se va a negar por tanto sera como un toggle
    }
    return (
        <>
        <h2>Este es mi componente ChangeColor</h2>
        <div className='containChange'>
            <div className='circle'
                style={{background: change ? "gray" : "white"}}
            ></div>
            <button onClick={changeColor}>Change ROJO / BLUE</button>
        </div>
        </>
    );
};

export default ChangeColor;
import React, { useState } from 'react';

const Input = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleVisibility = () =>{
        setIsVisible(!isVisible)
    }
    return (
        <div>
            <h2>Soy el componente Password Input</h2>
            <input type={isVisible ? "text": "password"} />
            <button onClick={handleVisibility}>Mostrar / ocultar contraseña</button>
        </div>
    );
};

export default Input;
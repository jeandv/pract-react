import React, { useEffect } from 'react';

export const AvisoComponent = () => {

    useEffect(() => {
        // cuando el componente se monta
        alert('El componente AvisoComponent esta montado');

        // cuando el componente se desmonta
        return () => {
            alert('componente desmontado!!');
        };

    }, []); //SE EJECUTA UNA VEZ PORQUE EL ARRAY ESTA VACIO

    return (
        <div>
            <hr />
            <h3>Saludos jean!</h3>
            <button onClick={e => { alert('bienvenido!'); }}>Mostrar alerta</button>
        </div>
    )
}

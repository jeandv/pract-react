import React, { useState } from 'react';

export const MiPrimerEstado = () => {

    // let nombre = "Jean Rondon";

    // const cambiarNombre = e => {
    //     nombre = "Paquito Fernandez";
    //     TD
    // };

    const [nombre, setNombre] = useState('Jean Rondon');

    const cambiarNombre = (e, nombreFijo) => { setNombre(nombreFijo); }

    return (
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <strong className='label'>
                {nombre}
            </strong>
            &nbsp;
            <button onClick={e => cambiarNombre(e, 'pablo')}>Cambiar a pablo</button>
            <p>con onKeyUp</p>
            <input type='text' onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='pon el nombre que quieras' />
            &nbsp;
            <p>con onChange</p>
            <input type='text' onChange={e => cambiarNombre(e, e.target.value)} placeholder='pon el nombre que quieras' />
        </div >
    )
}
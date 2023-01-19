import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState('Jean');

    const [fecha, setFecha] = useState('02/3/2001');

    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    const cambiarFecha = e => {
        setFecha(Date.now());
    }

    //solo se ejcuta 1 una vez con el corchete vacio! 
    useEffect(() => {
        console.log('has cargado el componente PruebasComponent.js');
    }, []);

    //solo se ejecuta cuando se modifica el usuario
    useEffect(() => {
        setContador(contador + 1);
        console.log(`has modificado el usuario ${contador} veces`);
    }, [usuario]);

    //solo se ejecuta cuando se modifica la fecha
    useEffect(() => {
        setContador(contador + 1);
        console.log(`has modificado la fecha ${contador} veces`);
    }, [fecha]);

    //solo se ejecuta cuando se modifica la fecha o el usuario
    // useEffect(() => {
    //     setContador(contador + 1);
    //     console.log(`has modificado el usuario y la fecha ${contador} veces`);
    // }, [fecha, usuario]);

    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>

            <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>

            <strong className='label'>{fecha}</strong>

            <input type='text' onChange={modUsuario} placeholder='Cambia el nombre' />

            <button onClick={cambiarFecha}>cambia la fecha</button>

            {usuario == 'JEAN' && <AvisoComponent />}

        </div >
    )
}

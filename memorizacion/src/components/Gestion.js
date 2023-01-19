import React, { useCallback, useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState('');
    const [pagina, setPagina] = useState(1);

    const asignarGestor = e => {
        setNombre(e.target.value);
    }

    const mostrarMensaje = useCallback(() => {
        console.log('este es un mensaje desde el compoenente empleados');
    }, [pagina]);

    useEffect(() => {
        console.log('vista gestion actualizada');
    }, [nombre, pagina])

    return (
        <div>
            <h1>Nombre del gestor: {nombre}</h1>

            <input type='text' onChange={asignarGestor} placeholder='Coloque el nombre del gestor' />

            <h2>Listado de empleados:</h2>
            <p>Los usuarios son gestionados por: {nombre} vienen del jsonplaceholder...</p>
            <button onClick={() => setPagina(1)}>Prev</button>
            <button onClick={() => setPagina(2)}>Next</button>

            <Empleados pagina={pagina} mensaje={mostrarMensaje} />
        </div>
    )
}

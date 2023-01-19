import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

    return (
        <div>
            <h1>Inicio</h1>
            <p>Hola soy {usuario.nombre} este es mi portafolio: {usuario.web} y estas en el inicio de la página</p>
        </div>
    )
}

import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Perfil = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

    return (
        <div>
            <h1>Perfil</h1>
            <ul className='perfil'>
                <li>Tu nombre: <strong>{usuario.nombre}</strong></li>
                <li>Tu nick: <strong>{usuario.nick}</strong></li>
                <li>Tu web: <strong>{usuario.web}</strong></li>
            </ul>
        </div>
    )
}

import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

    const guardarDatos = e => {
        e.preventDefault();

        let usuarioForm = {
            nick: e.target.nick.value,
            nombre: e.target.nombre.value,
            web: e.target.web.value
        }

        setUsuario(usuarioForm);
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Estas en el inicio de sesión.</p>

            <form className='login' onSubmit={guardarDatos}>
                <input type='text' id='nick' name='nick' placeholder='Coloca tu nick' required />
                <input type='text' id='nombre' name='nombre' placeholder='Coloca tu nombre' required />
                <input type='text' id='web' name='web' placeholder='Coloca tu web' required />
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

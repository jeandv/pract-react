import React, { useState } from 'react'

export const FormularioComponents = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosForm = e => {
        e.preventDefault();

        let datos = e.target;

        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value,
        }
        console.log(usuario);

        setUsuario(usuario);
    }

    const cambiarDatos = e => {
        let nameInput = e.target.name;
        // let usuarioModificar = usuario;

        // usuarioModificar[nameInput] = e.target.value;

        setUsuario(estadoPrevio => ({
            ...estadoPrevio,
            [nameInput]: e.target.value
        })
        );
    }

    return (
        <div>
            <h1>Formularios con React</h1>


            {usuario.enviar &&
                (
                    <div className='info_user label'>
                        Su nombre es {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es <p>{usuario.bio}</p>
                    </div>
                )
            }

            <form onSubmit={conseguirDatosForm}>
                <input type='text' name='nombre' placeholder='Nombre' onChange={cambiarDatos} required />
                <input type='text' name='apellido' placeholder='Apellido' onChange={cambiarDatos} required />
                <select name='genero' onChange={cambiarDatos} required>
                    <option value='hombre'>Hombre</option>
                    <option value='mujer'>Mujer</option>
                </select>
                <textarea name='bio' placeholder='Biografia' onChange={cambiarDatos} required></textarea>

                <input type='submit' value='Enviar' name='enviar' />
            </form>
        </div>
    )
}
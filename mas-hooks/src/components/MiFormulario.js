import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

    const { formulario, enviado, cambiado } = useForm({});

    return (
        <div className='form'>
            <h1>Formulario para guardar un curso</h1>
            <p>Curso guardado: {formulario.titulo}</p>
            <pre className='code'>{JSON.stringify(formulario)}</pre>

            <form onSubmit={enviado}>
                <input type='text' name='titulo' placeholder='Titulo:' onChange={cambiado} />
                <input type='number' name='ano' placeholder='Año publicación:' onChange={cambiado} />
                <textarea name='descripcion' placeholder='Descripción:' onChange={cambiado}></textarea>
                <input type='text' name='autor' placeholder='Autor:' onChange={cambiado} />
                <input type='email' name='email' placeholder='Correo de contacto:' onChange={cambiado} />
                <input type='submit' placeholder='Guardar:' className='btn' />
            </form>
        </div>
    )
}

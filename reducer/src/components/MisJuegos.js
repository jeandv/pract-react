import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('juegos')) || [];
}

export const MisJuegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('juegos', JSON.stringify(juegos));
    }, [juegos])

    const conseguirDatosForm = e => {
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value,
        }

        const accion = {
            type: 'crear',
            payload: juego
        }

        dispatch(accion);

        console.log(juegos);
    }

    const borramelo = id => {
        const action = {
            type: 'borrar',
            payload: id
        }

        dispatch(action);
    }

    const editar = (e, id) => {
        console.log(e.target.value, 'editar', id);

        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value,
        }

        const action = {
            type: 'editar',
            payload: juego
        }

        dispatch(action);
    }

    return (
        <div>
            <h1>Estos son mis videojuegos</h1>

            <p>Número de videojuegos: {juegos.length}</p>
            <ul>
                {
                    juegos.map(juego => {
                        return (
                            <li key={juego.id}>
                                {juego.titulo}

                                &nbsp; <button onClick={e => borramelo(juego.id)}>x</button>

                                <input type='text' placeholder='Editar titulo...' required
                                    title='Presiona (Enter) para editar...'
                                    onKeyPress={e => {
                                        if (e.key === 'Enter') {
                                            editar(e, juego.id);
                                            console.log('Haz presionado Enter, asi que has editado el titulo');
                                        }
                                    }}
                                />

                            </li>
                        )
                    })
                }
            </ul>

            <h3>Agregá un Juego:</h3>

            <form onSubmit={conseguirDatosForm}>
                <input type='text' name='titulo' placeholder='Titulo' required />
                <textarea name='descripcion' placeholder='Descripcion' required></textarea>
                <input type='submit' name='guardar' value='Guardar' />
            </form>
        </div>
    )
}

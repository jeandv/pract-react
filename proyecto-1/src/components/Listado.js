import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

    // const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'));

        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {
        let pelisAlmacenadas = conseguirPeliculas();

        let nuevoArrayPelis = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id));

        setListadoState(nuevoArrayPelis);

        localStorage.setItem('pelis', JSON.stringify(nuevoArrayPelis));
    }

    return (
        <>
            {listadoState != null ?
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                            {editar === peli.id && (

                                <Editar
                                    peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                />

                            )}

                        </article>
                    );
                })
                : <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}

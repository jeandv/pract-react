import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListadoState }) => {

    const tituloComp = 'Añadir pelicula';

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        setPeliState(peli);

        setListadoState(elementos => { return [...elementos, peli]; });

        GuardarEnStorage('pelis', peli);
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComp}</h3>
            <form onSubmit={conseguirDatosForm}>
                <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
                <textarea id="descripcion" name="descripcion" placeholder="Descripción" />
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}

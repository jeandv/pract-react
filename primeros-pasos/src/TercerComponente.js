import React from 'react';
import PropTypes from 'prop-types';

export const TercerComponente = ({ nombre, apellidos, datos }) => {

    return (
        <div>
            <h1>Comunicación entre componentes</h1>
            <ul>
                <li>{nombre}</li>
                <li>{apellidos}</li>
                <li>{datos.pais}</li>
                <li>{datos.nacionalidad}</li>
                <li>{datos.estado}</li>
            </ul>
        </div>
    )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    datos: PropTypes.object
}
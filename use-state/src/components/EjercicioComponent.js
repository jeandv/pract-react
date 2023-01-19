import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const EjercicioComponent = ({ year }) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = e => { setYearNow(yearNow + 1); }

    const anterior = e => { setYearNow(yearNow - 1); }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);

        if (Number.isInteger(dato))
            setYearNow(dato);
        else
            setYearNow(year);

    }

    return (
        <div>
            <h2>Ejercicio con events y useState</h2>

            <strong className='label label-green'>
                {yearNow}
            </strong>

            <button onClick={siguiente}>Año siguiente</button>
            <button onClick={anterior}>Año anterior</button>

            Cambiar el año: <input onChange={cambiarYear} type='number' placeholder='Cambia el año' />
        </div>
    )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}
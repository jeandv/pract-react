import React from 'react'

export const EventosComponentes = () => {

    const hasDadoClick = (e, nombre) => {
        console.log(e);
        alert(`Has dado click al button ${nombre}`);
    }

    const hasDadoDobleClick = (e, apellido) => {
        console.log(e);
        alert(`Has dado doble click al button ${apellido}`);
    }

    const hasEntrado = (e, accion) => {
        console.log(e);
        console.log(`Has ${accion} al div`);
    }

    const estasDentro = e => {
        console.log('Estas dentro del input, mete tu nombre!!');
    }

    const estasFuera = e => {
        console.log('Estas fuera del input');
    }

    return (
        <div>
            <h1>Eventos en React</h1>

            {/* Evento click */}
            <button onClick={e => hasDadoClick(e, 'jean')}>Dame click</button>

            {/* Evento doble click */}
            <button onDoubleClick={e => hasDadoDobleClick(e, 'rondon')}>Dame doble click</button>

            {/* Evento onMouseEnter y onMouseLeave*/}
            <div id='caja' onMouseEnter={e => hasEntrado(e, 'entrado')} onMouseLeave={e => hasEntrado(e, 'salido')}>
                pasa por encima
            </div>

            {/* Evento onFocus y onBlur*/}
            <input type="text"
                onFocus={estasDentro}
                onBlur={estasFuera}
                placeholder="Introduce tu nombre" />

        </div >
    )
}

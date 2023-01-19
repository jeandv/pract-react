import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(100);


    const guardarTareas = e => {
        e.preventDefault();

        if (e.target.descripcion.value !== '')
            setTareas(tarea => [...tarea, e.target.descripcion.value]);

        console.log(tareas)
    }

    const borrarTarea = id => {
        // filtrar para borrar las q no quiero

        let nuevasTareas = tareas.filter((tarea, indice) => indice !== id);

        console.log(nuevasTareas)

        // set state actualizar tareas 

        setTareas(nuevasTareas);
    }

    const sumarAlContador = e => {
        setContador(contador + 1)
    }

    const contadoresPasados = (acumulacion) => {
        for (let i = 0; i <= acumulacion; i++)
            console.log(`ejecutando cont nro ${i}`);

        return `Contador manual de tareas: ${acumulacion}`
    }

    const memoContadores = useMemo(() => contadoresPasados(contador), [contador])

    return (
        <div className='tareasContainer'>
            <h1>Mis tareas</h1>

            <form onSubmit={guardarTareas}>
                <input type='text' name='descripcion' placeholder='Describe la tarea' required />
                <input type='submit' value='Guardar' />
            </form>

            <h4>Contador manual de tareas: {memoContadores}</h4>
            <button onClick={sumarAlContador}>Sumar</button>

            <h3>Lista de tareas:</h3>
            <ul>
                {
                    tareas.map((tarea, indice) => {
                        return (
                            <li key={indice}>
                                {tarea}
                                &nbsp;
                                <button onClick={() => borrarTarea(indice)}>x</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

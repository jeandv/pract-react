import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {

    const [mostrar, setMostrar] = useState(false);

    const caja = useRef();
    const boton = useRef();

    useLayoutEffect(() => {
        console.log('useLayoutEffect Componente cargado');

        if (caja.current == null) return;

        const { bottom } = boton.current.getBoundingClientRect();

        // setTimeout(() => {
        caja.current.style.top = `${bottom + 45}px`;
        caja.current.style.left = `${bottom + 45}px`;
        // }, [100])

    }, [mostrar]);

    // useEffect(() => {
    //     console.log('useEffect Componente cargado');
    // }, []);

    return (
        <div>
            <h1>Ejemplo useEffect y useLayoutEffect</h1>

            <button ref={boton} onClick={() => setMostrar(prev => {
                console.log(!prev)
                return !prev
            })}>Mostrar mensaje</button>

            {mostrar && (
                <div id='caja' ref={caja}>
                    Hola, este es un mensaje {mostrar}
                </div>
            )
            }
        </div>
    )
}

import React, { useRef } from 'react';

export const Formulario = () => {

    const nombreInput = useRef();
    const emailInput = useRef();
    const passInput = useRef();
    const miCaja = useRef();

    const mostrar = e => {
        e.preventDefault();

        console.log(nombreInput.current.value);
        console.log(emailInput.current.value);
        console.log(passInput.current.value);

        console.log(miCaja);
        let { current: caja } = miCaja;

        if (nombreInput.current.value !== '' & emailInput.current.value !== '' & passInput.current.value !== '') {
            caja.classList.add('cambiarVerde');
            caja.innerHTML = 'Formulario enviado.';
        } else {
            caja.innerHTML = 'Error, rellena el form para enviar';
        }

    }

    return (
        <div>
            <h1>Formulario</h1>

            <div ref={miCaja} className='miCaja'>
                <h2>Pruebas con useRef</h2>
            </div>

            <form onSubmit={mostrar}>
                <input type='text' placeholder='tu nombre' ref={nombreInput}></input> <br />
                <input type='email' placeholder='tu correo' ref={emailInput}></input> <br />
                <input type='password' placeholder='tu contraseña' ref={passInput}></input> <br />
                <input type='submit' value='Enviar'></input>
            </form>

            <button onClick={() => nombreInput.current.select()}>Click para escribir en el form</button>
        </div>
    )
}

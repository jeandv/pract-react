import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const { estado, mayusculas, minusculas, concatenar } = useMayus('Jean R');

    return (
        <div>
            <h1>Probando components personalizados</h1>

            <h3>{estado}</h3>

            <button onClick={mayusculas}>Poner en mayusculas</button>

            <button onClick={minusculas}>Poner en minusculas</button>

            <button onClick={e => { concatenar('Antony') }}>concatenar text</button>
        </div>
    )
}

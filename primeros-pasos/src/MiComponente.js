import React from "react";

const MiComponente = () => {

    let usuario = {
        nombre: "Jean",
        apellido: "Rondon",
        edad: "19"
    }

    return (
        <>
            <h2>Componente creado</h2>
            <h3>Datos usuario</h3>
            <ul>
                <li>
                    Nombre: <strong>{usuario.nombre}</strong>
                </li>
                <li>
                    Apellido: <strong>{usuario.apellido}</strong>
                </li>
                <li>
                    Edad: <strong>{usuario.edad}</strong>
                </li>
            </ul>
        </>
    );
};

export default MiComponente;
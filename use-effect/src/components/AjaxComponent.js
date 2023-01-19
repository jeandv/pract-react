import React, { useEffect, useState } from 'react';

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState('');

    // Generico / basico
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
            },
        ]);
    }

    const getUsuariosAjaxPms = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(resp => resp.json())
            .then(result_final => {
                setUsuarios(result_final.data);
                console.log(usuarios);
            },
                error => {
                    console.log(error);
                })
    }

    const getUsuariosAjaxAw = () => {
        setTimeout(async () => {
            try {
                const peticion = await fetch('https://reqres.in/api/users?page=1');
                const { data } = await peticion.json();

                setUsuarios(data);
                setCargando(false);

            } catch (error) {
                console.log(error.message);
                setErrores(error.message);
            }
        }, 2000);
    }

    useEffect(() => {
        // getUsuariosEstaticos();
        // getUsuariosAjaxPms();
        getUsuariosAjaxAw();
    }, []); //colocar array vacio para que NO cargue los usuarios cada vez que cambiameos algo del componente.

    if (errores !== '') {
        //Cuando pasa algun error
        return (
            <div className='errores'>
                {errores}
            </div>
        );
    } else if (cargando == true) {
        //Cuando esta todo cargando...
        return (
            <div className='cargando'>
                Cargando datos...
            </div>
        );
    } else if (cargando == false && errores === '') {
        //Cuando todo ha ido bien     
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuarios => {
                            console.log(usuarios);
                            return (
                                <li key={usuarios.id}>
                                    <img src={usuarios.avatar} width='50' />
                                    &nbsp;
                                    {usuarios.first_name}{usuarios.last_name}
                                </li>)
                        })
                    }
                </ol>
            </div >
        )
    }
}
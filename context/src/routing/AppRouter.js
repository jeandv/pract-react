import React, { useContext } from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Login } from '../components/Login'
import { Acerca } from '../components/Acerca'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Perfil } from '../components/Perfil'

import { PruebaContext } from '../context/PruebaContext'


export const AppRouter = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

    return (
        <BrowserRouter>
            <header>
                <div>
                    <div>
                        <h3>Learning React<br />useContext() 👽</h3>
                    </div>
                    {/* MENU NAVEGACION */}
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/'>Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to='/acerca-de'>Acerca de</NavLink>
                            </li>
                            <li>
                                <NavLink to='/articulos'>Articulos</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contacto'>Contacto</NavLink>
                            </li>
                            {usuario.hasOwnProperty('nick') && usuario.nick !== null ? (
                                <>
                                    <li>
                                        <NavLink to='/perfil'>{usuario.nick}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/login' onClick={e => {
                                            // e.preventDefault();

                                            setUsuario({});

                                            localStorage.clear();
                                        }}>
                                            Cerrar sesion
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <NavLink to='/login'>Loguéate!</NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* CONFIGURAR RUTAS */}
            <main>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/acerca-de' element={<Acerca />} />
                    <Route path='/articulos' element={<Articulos />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='**' element={
                        <div>
                            <h1>Error, esta página no existe.</h1>
                        </div>
                    } />
                </Routes>
            </main>

        </BrowserRouter >
    )
}

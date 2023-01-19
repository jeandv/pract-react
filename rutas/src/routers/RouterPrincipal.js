import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Persona } from '../components/Persona';
import { Error } from '../components/Error';
// panel de control "es decir es una subruta"
import { PanelControl } from '../components/PanelControl';
import { InicioPanel } from '../components/panel/InicioPanel';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <header>
                <h1>Cabecera</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/inicio'
                                className={({ isActive }) => isActive ? 'activado' : ''}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/articulos'
                                className={({ isActive }) => isActive ? 'activado' : ''}>
                                Articulos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacto'
                                className={({ isActive }) => isActive ? 'activado' : ''}>
                                Contacto
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/persona'
                                className={({ isActive }) => isActive ? 'activado' : ''}>
                                Persona
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/panel'
                                className={({ isActive }) => isActive ? 'activado' : ''}>
                                Panel
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr />
            <section className='contenido-principal'>
                {/* Cargan el componenente que coincida con el path */}
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/articulos' element={<Articulos />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/persona/:nombre/:apellido' element={<Persona />} />
                    <Route path='/persona/:nombre' element={<Persona />} />
                    <Route path='/persona' element={<Persona />} />
                    <Route path='/redirigir' element={<Navigate to='/persona/jean/rondon' />} />

                    <Route path='/panel/*' element={<PanelControl />}>

                        <Route index element={<InicioPanel />} />
                        <Route path='inicio' element={<InicioPanel />} />
                        <Route path='crear-articulos' element={<Crear />} />
                        <Route path='gestion-usuarios' element={<Gestion />} />
                        <Route path='acerca-de' element={<Acerca />} />

                    </Route>

                    <Route path='*' element={<Error />} />
                </Routes>
            </section>
            <footer>
                <hr />
                Pie de página
            </footer>
        </BrowserRouter>
    )
}
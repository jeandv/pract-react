import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
    return (
        <div>
            <h1>PANEL DE CONTROL</h1>
            <p>Elige una de estas opciones</p>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/panel/inicio'
                            className={({ isActive }) => isActive ? 'activado' : ''}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel/crear-articulos'
                            className={({ isActive }) => isActive ? 'activado' : ''}>
                            Crear articulos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel/gestion-usuarios'
                            className={({ isActive }) => isActive ? 'activado' : ''}>
                            Gestion usuarios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/panel/acerca-de'
                            className={({ isActive }) => isActive ? 'activado' : ''}>
                            Acerca de
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                {/* quiero cargar aqui los componentes de las subrutas */}
                <Outlet />
            </div>
        </div>
    )
}
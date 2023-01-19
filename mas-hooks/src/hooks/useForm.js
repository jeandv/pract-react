import React, { useState } from 'react'

export const useForm = (objetoInicial = {}) => {

    const [formulario, setFormulario] = useState(objetoInicial);

    const serializarForm = (formulario) => {
        const formData = new FormData(formulario);

        const objetoCompletoForm = {};

        for (let [name, value] of formData) {
            objetoCompletoForm[name] = value;
        }

        return objetoCompletoForm;
    }

    const enviado = (e) => {
        e.preventDefault();

        let curso = serializarForm(e.target);

        setFormulario(curso);

        document.querySelector('.code').classList.add('enviado');
    }

    const cambiado = ({ target }) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        formulario,
        enviado,
        cambiado
    }
}
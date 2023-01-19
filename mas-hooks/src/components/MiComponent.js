import React, { useId } from 'react'

export const MiComponent = () => {

    const id = useId();

    const segId = useId();

    console.log(id);

    console.log(segId);

    return (
        <div>
            <h1>Hook UseID</h1>
            <input id={id} placeholder='Nombre' />
        </div>
    )
}
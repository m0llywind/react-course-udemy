import React from 'react'

// memo solo renderiza el componente cuando sus propiedades cambien!!!
export const Small = React.memo(({value}) => {

    console.log('me han vuelto a llamar :(')
    return (
        <small>
            { value }
        </small>
    )
})

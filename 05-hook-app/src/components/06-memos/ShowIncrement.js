import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('me he vuelto a generar :(')
    return (
        <button onClick={() => {
            increment(5)
        }}>
            Increment
        </button>
    )
})

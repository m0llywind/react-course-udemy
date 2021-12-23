import React,{ useState, useMemo } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {
    const {counter, increment} = useCounter(5000)
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <hr />
            <p>{memoProcesoPesado}</p>

            <button onClick={increment}>+1</button>

            <button onClick={() => { setShow(!show)}} >Show/hide {JSON.stringify(show)}</button>
        </div>
    )
}

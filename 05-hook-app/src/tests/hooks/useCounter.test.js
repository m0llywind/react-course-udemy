import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from "../../hooks/useCounter"

describe('Tests in useCounter', () => {
    test('should returns default values', () => {
        const { result } = renderHook( () => useCounter())
        expect(result.current.counter).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })

    test('should 100 in counter', () => {
        const { result } = renderHook( () => useCounter(100))
        expect(result.current.counter).toBe(100)
    })

    test('should increment the count in 1', () => {
        const { result } = renderHook( () => useCounter(100))
        const { increment } = result.current

        act(() => {
            increment()
        })

        const { counter } = result.current

        expect(counter).toBe(101)        
    })

    test('should decrement the count in 1', () => {
        const { result } = renderHook( () => useCounter(100))
        const { decrement } = result.current

        act(() => {
            decrement()
        })

        const { counter } = result.current

        expect(counter).toBe(99)        
    })

    test('should reset to 100', () => {
        const { result } = renderHook( () => useCounter(100))
        const { reset, increment } = result.current

        act(() => {
            increment()
            reset()
        })

        const { counter } = result.current

        expect(counter).toBe(100)
    })    
})

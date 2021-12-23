import { getSaludo } from '../../base/02-template-string'

describe('test in 02-template-string', () => {

  test('getSaludo must return name Laura', () => {
    const name = 'Laura'
    const salute = getSaludo(name)

    expect(salute).toBe('Hola ' + name)
  })

  test('getSalud must return Miguel when has default value', () => {
    const name = 'Miguel'
    const salute = getSaludo()

    expect(salute).toBe('Hola ' + name)
  })
})

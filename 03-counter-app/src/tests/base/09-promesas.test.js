import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe('test in 09-promesas', () => {

  // tenemos que poner el done,para poder ejecutar los test asincronos
  test('should return an heroe async', (done) => {
    const id = 1

    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0])
        done()
      })
  })

  test('should return an error if heroe not exists', (done) => {
    const id = 10

    getHeroeByIdAsync(id)
      .catch(error => {
        expect(error).toBe('No se pudo encontrar el héroe')
        done()
      })
  })

})
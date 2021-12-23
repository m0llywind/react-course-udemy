import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('test in 08-imp-exp of heroes', () => {

  test('should return an heroe by id', () => {
    const id = 1
    const heroe = getHeroeById(id)

    const heroeData = heroes.find(h => h.id === id)

    expect(heroe).toEqual(heroeData)
  })

  test('should return an undefined when heroe not exists', () => {
    const id = 10
    const heroe = getHeroeById(id)

    expect(heroe).toBe(undefined)
  })

  test('should return an array with DC heroes', () => {
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)

    const heroesData = heroes.filter(h => h.owner === owner)

    expect(heroes).toEqual(heroesData)
  })

  test('should return an array with Marvel heroes with length 2', () => {
    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)

    expect(heroes.length).toBe(2)
  })
})
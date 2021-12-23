import { getImagen } from '../../base/11-async-await'

describe('test in 11-async-await', () => {

  // tenemos que poner el done,para poder ejecutar los test asincronos
  test('should return the images url', async() => {
    const url = await getImagen()
    expect(url.includes('https://')).toBe(true)
  })
})
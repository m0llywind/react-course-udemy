describe('test in demo', () => {
  test( 'must be equals the strings', () => {
    // 1. Inicializacion
    const message = 'Hola Mundo'
  
    // 2. Acción
    const message2 = `Hola Mundo`
  
    // 3. Comportamiento
    expect(message).toBe(message2)
  })
})

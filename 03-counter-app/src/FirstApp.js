import React from 'react'
import PropTypes from 'prop-types'

// Functional components
const FirstApp = ({ salute, subtitle }) => {

  return (
    <>
      <h1>{ salute }</h1>
      {/* <pre>{ JSON.stringify(salute, null, 3) }</pre> */}
      <p>{ subtitle }</p>
    </>
  )
}

// Se definen los tipos de props.
// Sirve para validaciones en los componentes.
FirstApp.propTypes = {
  salute: PropTypes.string.isRequired
}

// Valores por defecto de las propiedades
FirstApp.defaultProps = {
  subtitle: 'Soy un subtitulo'
}

export default FirstApp;
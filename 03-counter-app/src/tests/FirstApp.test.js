import React from 'react';
import { render } from '@testing-library/react'
import FirstApp from '../FirstApp'
import { shallow } from 'enzyme';

describe('Tests in <FirstApp />', () => {
  // test('should show title', () => {
  //   const salute = 'Hola, Soy Laura';
  //   const { getByText } = render(<FirstApp salute={ salute } />);
  //   expect(getByText(salute)).toBeInTheDocument();
  // })

  // Usando Enzyme
  test('should show <FirstApp /> correctly', () => {
    const salute = 'Hola, Soy Laura';
    const wrapper = shallow(<FirstApp salute={salute}/>);

    // Comprueba si coincide con la ultima snapshot del componente.
    expect(wrapper).toMatchSnapshot();
  })

  test('should show the subtitle', () => {
    const salute = 'Hola, Soy Laura';
    const subtitle = 'Soy un subtitulo';

    const wrapper = shallow(
      <FirstApp 
        salute={salute}
        subtitle={subtitle} 
      />
    );

    const text = wrapper.find('p').text();

    expect(text).toBe(subtitle);
  })
})

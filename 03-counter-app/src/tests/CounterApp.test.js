import { shallow } from 'enzyme';
import React from 'react';

import CounterApp from '../CounterApp';

describe('Tests in <CounterApp />', () => {
  let wrapper;
  
  // Se ejecuta al principio de cada test
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should show 100 by default in component', () => {
    const wrapper = shallow(<CounterApp value={ 100 } />)
    const number = wrapper.find('h2').text().trim();

    expect(number).toBe('100');
  })

  test('should add counter with button +', () => {
    wrapper.find('button').at(0).simulate('click');

    const text = wrapper.find('h2').text().trim();

    expect(text).toBe('11');
  })

  test('should subtract counter with button -', () => {
    wrapper.find('button').at(2).simulate('click');

    const text = wrapper.find('h2').text().trim();

    expect(text).toBe('9');
  })

  test('should put default value with reset button', () => {
    const wrapper = shallow(<CounterApp value={ 105 } />)

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const text = wrapper.find('h2').text().trim();

    expect(text).toBe('105');
  })
  
})

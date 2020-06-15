import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

it('renders', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('h1').text()).toEqual('Welcome to Home');
});
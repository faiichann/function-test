import React from 'react';
import NotFoundPage from './404notfound'
import { shallow } from 'enzyme';

it('renders', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper.find('h1').text()).toEqual('404 Page Not Found');
});
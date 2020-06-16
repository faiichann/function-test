import React from 'react';
import NotFoundPage from './404notfound'
import { shallow,mount } from 'enzyme';
import {Button} from './404notfound'
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper.find('h1').text()).toEqual('404 Page Not Found');
});

it('Button style',() =>{
const wrapper = mount(<Button primary onClick={jest.fn()}/>);
const tree = renderer.create(wrapper).toJSON();
// expect(tree).toMatchSnapshot()
expect(tree).toHaveStyleRule('background','palevioletred')
});

it('button click', () => {
  const setState = jest.fn()
  const wrapper = shallow(<NotFoundPage  />);
  const button = wrapper.find(Button)
  button.simulate('click')
  expect(wrapper.state('Redirect')).toBe(true);
  // expect(setState).toHaveBeenCalledTimes(0)
});

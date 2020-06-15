import React from 'react';
import {Input} from './Num';
import { shallow,mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';



describe('<Input> component', () => {
    it('should have myColor', () => {
      const wrapper = mount(<Input/>);
    //   expect(wrapper.find('Input')).toHaveStyleRule('background-color',myColor)
      const tree = renderer.create(wrapper).toJSON()
      expect(tree).toHaveStyleRule('background-color', 'whitesmoke')
      // expect(tree).toMatchSnapshot()
    });
  });
// it('renders', () => {
//   const wrapper = shallow(<Home />);
//   expect(wrapper.find('h1').text()).toEqual('Welcome to Home');
// });

    // Snapshot test
    // it('should render', () => {
    //   const component = <Input />
    //   const tree = renderer.create(component).toJSON()
    //   expect(tree).toMatchSnapshot()
    // })
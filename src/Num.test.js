import React from 'react';
import {Input,Num as Num2, P} from './Num';
import Num from './Num';

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

  it('content ' , ()=>{
    const wrapper = shallow(<Num2 age={35}/>);
    expect(wrapper.find(P).text()).toEqual('People who:35 type something...')
  })
  it('content ' , ()=>{
    const wrapper = shallow(<Num age={35}/>);
    // expect(wrapper.find(Wrapp).text()).toEqual('People who:35 type something...')
     expect(wrapper.find("#hoc-component")).toHaveLength(1)
  })

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
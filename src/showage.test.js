import React from 'react';
import { shallow } from 'enzyme';
import { Show,H1 } from './showage'


it('showage ' , ()=>{
    const wrapper = shallow(<Show age={35}/>);
    expect(wrapper.find(H1).text()).toEqual('HOC I am 35 year old.')
  })
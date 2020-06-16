import React from 'react';
import View from './view';
import { shallow } from 'enzyme';


it('renders', () => {
    const wrapper = shallow(<View/>);
    const username =jest.fn();
    expect(wrapper.find({prop:username})).toEqual({"username":username()});
  });
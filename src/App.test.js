import React from 'react';
import { App, mapStatetoProps, mapDispatchtoProps,Wrapper} from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()})


it('renders', () => {
  var wrapper = shallow(<App two={{ name: 'name' }} />)
  expect(wrapper.find('.Title').text()).toEqual('Hello world');
});

it('test mapstate', () => {
  var state = {}
  expect(mapStatetoProps(state)).toEqual({ one: state.one, two: state.two })
})

it('test dispatch', () => {
  var dispatch = jest.fn()
  var name = 'jyku'
  mapDispatchtoProps(dispatch).setname(name)
  expect(dispatch.mock.calls[0][0]).toEqual({ "payload": "jyku", "type": "SETNAME" })
})

it('button click', () => {
  var setname = jest.fn()
  var wrapper = shallow(<App two={{ name: 'name' }} setname={setname} />);
  var button = wrapper.find('.Button')
  button.simulate('click')
  button.simulate('click')
  expect(setname).toHaveBeenCalledTimes(2)

});

it('Wrapp styled', () =>{
const wrapp = shallow(<Wrapper/>);
const tree = renderer.create(wrapp).toJSON();
expect(tree).toHaveStyleRule('background','papayawhip')

})


// describe('Test Button component', () => {
//   it('Test click event', () => {
//     var mockCallBack = jest.fn();

//     const button = shallow((<Button onClick={mockCallBack}>button</Button>));
//     button.find('Button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe('Component: Button', () => {
//   const minProps = {
//     text: '',
//     size: '',
//   };  

//   it('renders a button in size of "small" with text in it', () => {
//     const wrapper = shallow(
//       <Button {...minProps} size="small" text="Join us" />
//     );

//     expect(wrapper.find(StyledButton).prop('size')).toBe('small');
//     expect(wrapper.find(StyledButton).prop('text')).toBe('Join us');
//   });
// });

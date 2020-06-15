import React, { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Show from './showage'
import Num from './Num'
import {Link,Redirect} from 'react-router-dom'

export  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
// alt+9+6 =``
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  /**ส่งprops เชคว่าเป็น primary หรือไม่ให้แสดงผล ถ้าไม่ :  */
  background: ${props => props.primary ? "palevioletred" : "white"}; 
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor:pointer;
 
`;

const Button2 =  styled(Button)`
  &:hover{
    background-color: #000;
    color:#fff;
  }

`

export class App extends Component {
  state={
    Redirect:false
  }

  render() {
    if (this.state.Redirect){
      return <Redirect to='/home'/>
    }
    return (
      <Wrapper>
      <div>
        <Title className="Title">Hello world</Title>
        <View username={this.props.two.name} />
        <Show/>
        <Num/>
        <Button className='Button' primary onClick={() => this.props.setname("I am Ironman")}>changeName</Button>
        {/* <Link to = '/home'><Button >Normal</Button></Link> */}
        <Button2 onClick={()=>this.props.history.push('/home')}>Button2</Button2>
        <Button  onClick={()=>this.setState({Redirect:true})}>New</Button>
        <a href ='/home'><Button>Newer</Button></a> 
        {/* a href reload page */}
      </div>
      </Wrapper>
    )
  }
}

export const mapStatetoProps = (state) => {
  return {
    one: state.one,
    two: state.two
  };
}

export const mapDispatchtoProps = (dispatch) => {
  return {
    setname: (name) => {
      dispatch({
        type: "SETNAME",
        payload: name
      })
    }
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);